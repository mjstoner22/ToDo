
    
    //load required modules
    var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    documents = mongoose.model('documents'); //here
     
    
  module.exports = function (app, config) {
      app.use('/api', router);
      
     //Get api
      router.get('/tests', function (req, res, next){
      console.log('Get all documents', 'verbose');
          
      var query = documents.find().then(result => { //here
          
      if(result && result.length) {
          
      res.status(200).json(result);
          
      } else {
          
      res.status(404).json({message: "No documents"});
          
      }
   
      })
          
      .catch(err => {
          
      return next(err);
          
      });
          
      });
  
  
    
      //post api
      router.post('/test', function(req, res, next){  
        console.log('Create document'  , 'verbose');
          var Test = new documents(req.body); //here
          Test.save()
          .then(result => {
              res.status(201).json(result);
          })
          .catch( err => {
             return next(err);
          });
        });
    
    

  };



