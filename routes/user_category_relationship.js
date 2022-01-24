const express = require('express');
const router = express.Router();
const user_category_relationship = require('../services/user_category_relationship');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await trip.getAll());
  } catch (err) {
    console.error(`Error while getting trips`, err.message);
    next(err);
  }
});

/* POST programming language */
router.post('/', async function(req, res, next) {
  try {
    res.json(await trip.create(req.body.name,req.body.administrator));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
});

// /* UPDATE programming language */
// router.update('/:id', async function(req, res, next) {
//   try {
//     res.json(await trip.update(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating trip`, err.message);
//     next(err);
//   }
// });

// /* DELETE programming language */
// router.delete('/:id', async function(req, res, next) {
//   try {
//     res.json(await trip.remove(req.params.id));
//   } catch (err) {
//     console.error(`Error while deleting trip`, err.message);
//     next(err);
//   }
// });

module.exports = router;
