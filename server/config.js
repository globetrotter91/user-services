export default {
    dbString: 'mongodb://localhost:27017/dclocal', 
    jwtSecret: 'THISISTHE12324312124HEXH',
    port: process.env.PORT || 8080, 
    prod:{
        //dbString: 'mongodb://satyam:asdfghjkl@ds115573.mlab.com:15573/scrumboard', 
        jwtSecret: 'THISISTHE12324312124HEXH'
    }
}