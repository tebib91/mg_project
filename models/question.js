var mongoose = require('mongoose'), Schema = mongoose.Schema;

var questionShema = new mongoose.Schema({
  // category : { type: Schema.Types.ObjectId, ref: 'Category' },
  id: String,
  name: String,
  modelCar: String,
  description: String,
  type: String,
  questionOne: String,
  questionTwo: String,
  created: { type: Date },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Question', questionShema);
