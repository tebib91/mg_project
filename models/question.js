var mongoose = require('mongoose'), Schema = mongoose.Schema;

var questionShema = new mongoose.Schema({
  title: String,
  order: Number,
  type: {type: Number, enum:[0,1,2]},
  subQuestion: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  category: {type : String, enum: ['boolean', 'number', 'object']},
  isSubquestion: {type: Boolean, default: false},
  notePicker: {type: String, enum: ['faces', 'slider']}
});

module.exports = mongoose.model('Question', questionShema);
