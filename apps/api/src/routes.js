'use strict';

Object.defineProperty(exports, "__esModule", { value: true });

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const express = require('express');
const multer = require('multer');
const auth = require('./app/middlewares/auth');
const PKValidator = require('./app/validators/PKValidator');
const SessionStoreValidator = require('./app/validators/SessionStoreValidator');
const MovieCreateValidator = require('./app/validators/MovieCreateValidator');
const TvShowCreateValidator = require('./app/validators/TvShowCreateValidator');
const LeadCreateValidator = require('./app/validators/LeadCreateValidator');
const FeaturedController = require('./app/controllers/FeaturedController');
const SessionController = require('./app/controllers/SessionController');
const CompanyController = require('./app/controllers/CompanyController');
const MovieController = require('./app/controllers/MovieController');
const TvShowController = require('./app/controllers/TvShowController');
const LeadController = require('./app/controllers/LeadController');
const uploadConfig = require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.get('/', async (req, res) => {
  res.json({
    name: 'Zombie+ - API',
    version: '2.0',
    mode: process.env.NODE_ENV
  });
});

routes.get('/catalog', FeaturedController.default.index);
routes.post('/sessions', SessionStoreValidator.default, SessionController.default.store);
routes.post('/leads', LeadCreateValidator.default, LeadController.default.store);

routes.use(auth.default);

routes.get('/companies', CompanyController.default.index);
routes.post('/movies', upload.array('cover'), MovieCreateValidator.default, MovieController.default.store);
routes.get('/movies', MovieController.default.index);
routes.get('/movies/:id', PKValidator.default, MovieController.default.show);
routes.delete('/movies/:id', PKValidator.default, MovieController.default.delete);
routes.post('/tvshows', upload.array('cover'), TvShowCreateValidator.default, TvShowController.default.store);
routes.get('/tvshows', TvShowController.default.index);
routes.get('/tvshows/:id', PKValidator.default, TvShowController.default.show);
routes.delete('/tvshows/:id', PKValidator.default, TvShowController.default.delete);
routes.get('/leads', LeadController.default.index);
routes.get('/leads/:id', PKValidator.default, LeadController.default.show);
routes.delete('/leads/:id', PKValidator.default, LeadController.default.delete);

exports.default = routes;