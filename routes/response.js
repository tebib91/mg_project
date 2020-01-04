const Response = require('../models/response');
var express = require('express');
var router = express.Router();
var question = require('../models/question')

router.post('/', (req, res, next) => {
    question.findOne({
        _id: req.body.question
    }).then( question => {
         if (req.body[question.category]) {
             const response = new Response(
                 req.body
             );
             response.save().then(
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

         } else {
             res.status(403).json({
                 error: 'bad request'
             })
         }
    })
  });

module.exports = router;