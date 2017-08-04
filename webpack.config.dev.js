import path from 'path'; 
import webpack from 'webpack';

export default {
    devtool: 'eval-source-maps',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js'), 
    ],
    output: {
        path: '/', 
        filename: 'bundle.js', 
        publicPath: '/'
    }, 
    plugins:[
        new webpack.NoErrorsPlugin(), 
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: [
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server/shared'),
                ],
                loaders: [ 'react-hot-loader', 'babel-loader']
            }, 
            {
                test: /\.css$/, 
                loaders: ['style-loader', 'css-loader']
            }
        ]
    }, 
    resolve: {
        extensions: ['.js']
    }
}