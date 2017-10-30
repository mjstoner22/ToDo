//Loading mongoose module
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var documentSchema = new Schema({
    
    property1: { type: String, required: true },
    property2: { type: Number, required: true, unique: true }

});

 module.exports = 
 Mongoose.model('documents', documentSchema); 