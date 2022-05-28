const express = require('express');
const profileController = require('../controllers/profile');

const profile = express.Router();

profile.get('/getProfile', profileController.getAll)

profile.get('/profile/:id', profileController.getById)

profile.post('/createProfile', profileController.create)

profile.put('/updateProfile/:id', profileController.getByIdandUpdate)

profile.delete('/deleteProfile/:id', profileController.getByIdandDelete)

module.exports = profile;