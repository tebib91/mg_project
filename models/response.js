const mongoose = require('mongoose');
Schema = mongoose.Schema;

const responseSchema = mongoose.Schema({
    question_1: {type: Boolean, required: true},
    question_2: Number,
    question_3: Number,
    question_4: Number,
    question_5: Number,
    question_6: Number,
    question_7: Number,
    question_8: Number,
    question_9: Number,
    question_10: Number,
    question_11: Number,
    question_12: Number,
    // question_13: Number,
    full_name: {type: String, required: true},
    car_model: {type: String, required: true},
    suggetion: String,
    created_at: {type: Date, default: new Date}
});

module.exports = mongoose.model('responses', responseSchema);