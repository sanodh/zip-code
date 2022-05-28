const express = require('express');
const matchController = require('../controllers/match');

const match = express.Router();

match.get('/getMatch', matchController.getAll)

match.get('/match/:id', matchController.getById)

match.post('/createMatch', matchController.create)

match.put('/updateMatch/:id', matchController.getByIdandUpdate)

match.delete('/deleteMatch/:id', matchController.getByIdandDelete)


module.exports = match;