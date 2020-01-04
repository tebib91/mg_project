var mongoose = require('mongoose'), Schema = mongoose.Schema;

var questionShema = new mongoose.Schema({
  id: String,
  type: [{type: Number, enum:[1,2]}],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  category: {type : String, enum: ['Boolean', 'Number']}
});

module.exports = mongoose.model('Question', questionShema);
