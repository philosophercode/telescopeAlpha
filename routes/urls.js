const express = require('express');
const urlsController = require('../controllers/urlsController');
const urlHelpers = require('../services/urls/urlHelpers');

const urlRoutes = express.Router();

urlRoutes.get('/', urlsController.index);
urlRoutes.get('/edit/:id', urlsController.edit);
urlRoutes.get('/:id', urlsController.show);
urlRoutes.post('/', urlHelpers.screenshotter, urlsController.create);
urlRoutes.put('/:id', urlsController.update);
urlRoutes.delete('/:id', urlsController.destroy);

module.exports = urlRoutes;