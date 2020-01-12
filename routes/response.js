const Response = require('../models/response');
var express = require('express');
var router = express.Router();
// var Question = require('../models/question');

router.post('/', (req, res, next) => {
  const response = new Response(req.body);
  response.save().then(() => {
    res.status(200).json({
      message: 'Response added successfully'
    })
  }).catch(err => {
    res.status(400).json({
      error: err
    });
  })
  // Question.findOne({
  //   _id: req.body.question
  // }).then(question => {
  //   if (req.body[question.category]) {
  //     const response = new Response(req.body);
  //     response
  //       .save()
  //       .then(() => {
  //         res.status(201).json({
  //           message: 'Post saved successfully!'
  //         });
  //       })
  //       .catch(error => {
  //         res.status(400).json({
  //           error: error
  //         });
  //       });
  //   } else {
  //     res.status(403).json({
  //       error: 'bad request'
  //     });
  //   }
  // });
});
// return for the excel table
router.get('/excel', (req, res) => {
  console.log('in getting excel data')
  Response.find().select({'_id': 0, '__v': 0,}).then((responses) => {
    res.status(201).json(responses);
  }).catch(err => {
    res.status(401).json({
      error: err
    });
  });
});
// return for the table
router.get('/', (req, res) => {
  Response.find({question_1: req.query.type}).select({'question_1': 1, 'full_name': 1, 'car_model': 1}).then((responses) => {
    res.status(201).json(responses);
  }).catch(err => {
    res.status(401).json({
      error: err
    });
  });
});

router.get('/:id', (req, res) => {
  Response.findOne({_id: req.params.id}).select({'_id': 0, '__v': 0, 'created_at': 0}).then(response => {
    // deleting undefined values
    Object.keys(response).map((key) => {
      if (!response[key]) {
        delete response[key];
      }
    });
    res.status(200).json(response);
  }).catch(err => {
    res.status(401).json({
      error: err
    });
  });
});

module.exports = router;
