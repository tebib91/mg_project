var express = require('express');
var router = express.Router();
var Question = require('../models/question');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/question', function(req, res, next) {
  Question.find(function (err, categories) {
    if (err) return next(err);
    res.json(categories);
  });
});
module.exports = router;
