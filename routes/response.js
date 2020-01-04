const Response = require('./models/response');
var express = require('express');
var router = express.Router();


app.post('/api/response', (req, res, next) => {
    const response = new Response({
    //   title: req.body.title,
    //   description: req.body.description,
    //   imageUrl: req.body.imageUrl,
    //   price: req.body.price,
    //   userId: req.body.userId
    id: String,
    title: { type: String, required: true },
    description: String,
    note: Number,
    question : { type: Schema.Types.ObjectId, ref: 'Question' },
    });
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
  });

module.exports = router;