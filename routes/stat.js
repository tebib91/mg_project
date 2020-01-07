var express = require('express');
var router = express.Router();
const Response = require('../models/response');

/* 
  commented stuff is fucked up
*/
// const notes = [1, 2, 3, 4, 5];
// const questions = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// function counStats(nb, question) {
//   const stats = {};
//   const promises = notes.map(note => {
//     const query = {};
//     query[question] = note;
//     return new Promise((resolve, reject) => {
//       Response.countDocuments(query, (err, counting) => {
//         stats[`response_${note}`] = counting;
//         console.log('stats 1 : ', stats);
//       });
//     });
//   });
//   Promise.all(promises).then(() => {
//     console.log('stats: ', stats);
//     return stats;
//   });
// }
// router.get('/', (req, res, next) => {
//   const stats = {};
//   let number;
//   Response.countDocuments()
//     .then(docsNb => {
//       number = docsNb;
//       const promises = questions.map(question => {
//         return new Promise((resolve, reject) => {
//           stats[`question_${question}`] = counStats(number, `question_${question}`);
//         });
//       });
//       Promise.all(promises).then(() => {
//           console.log('in promise');
//         res.status(201).json(stats);
//       });
//     })
//     .catch(err => {
//       res.status(401).json({ error: err });
//     });
// });

router.get('/:question_number', (req, res) => {
  const query = {};
  query[`question_${req.params.question_number}`] = { $ne: null };
  Response.find(query).then(response => {
    const number = response.length;
    return res.status(201).json({
      number
    });
  }).catch(err => {
    res.status(401).json({
      error: err
    });
  });
});

module.exports = router;
