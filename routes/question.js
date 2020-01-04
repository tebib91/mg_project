
var express = require('express');
var router = express.Router();
var Question = require('../models/question')

router.post('/', (req, res, next) => {
  const question = new Question(
    req.body
  );
  question.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});
router.get('/', (req, res, next) => {
  Question.find().then(
    (questions) => {
      res.status(200).json(questions);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

module.exports = router;