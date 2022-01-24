const express = require('express');
const router = express.Router();
const location = require('../services/location');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await lcoation.getAll());
  } catch (err) {
    console.error(`Error while getting locations`, err.message);
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