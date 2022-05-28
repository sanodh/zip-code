const express = require('express');
const newsController = require('../controllers/news');

const news = express.Router();

news.get('/getNews', newsController.getAll)

news.get('/news/:id', newsController.getById)

news.post('/createNews', newsController.create)

news.put('/updateNews/:id', newsController.getByIdandUpdate)

news.delete('/deleteNews/:id', newsController.getByIdandDelete)


module.exports = news;