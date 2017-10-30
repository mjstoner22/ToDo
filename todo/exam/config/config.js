//defining default path and enviornment
var path = require('path'),    
rootPath = path.normalize(__dirname + '/..'),    
env = process.env.NODE_ENV || 'development';

//defining webserver confiugration
var config = {  
development: {    
            root: rootPath,    
            app: {name: 'exam'},    
            port: 5000,  
            db: 'mongodb://127.0.0.1/exam-test' 
 },  

  };

module.exports = config[env];