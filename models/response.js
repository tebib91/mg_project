const mongoose = require('mongoose');
Schema = mongoose.Schema;

const responseSchema = mongoose.Schema({
    id: String,
    note: Number,
    type: Boolean,
    reponseObject: new Schema({
        fullName: [String],
        modelCar: [String],
        suggestion: [String]
      }),
    question : { type: Schema.Types.ObjectId, ref: 'Question' },

});

module.exports = mongoose.model('responses', responseSchema);