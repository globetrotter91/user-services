import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
import mongoose from 'mongoose' ;
import config from './config' ;
import routesForApp from './routes';

mongoose.connect(config.dbString, (err, res)=>{
  if (err){ // connection failed
    console.log('DB Connection Failed')
  }
  else {
    console.log('DB Connection Successful: '+config.dbString)
  }
})


let app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
routesForApp(app); 

const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler,{
    hot: true, 
    publicPath: webpackConfig.output.publicPath, 
    noInfo:  true
}));
app.use(webpackHotMiddleware(compiler));
app.get('/*', (req, res)=> {
    res.sendFile(path.join(__dirname, './dev.html'));
})

app.listen(config.port, () => console.log('Listening on 8080'));
