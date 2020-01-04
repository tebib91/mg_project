const mongoose = require('mongoose');

const responseSchema = mongoose.Schema({
    id: String,
    title: { type: String, required: true },
    description: String,
    note: Number,
    question : { type: Schema.Types.ObjectId, ref: 'Question' },

});

module.exports = mongoose.model('responses', responseSchema);