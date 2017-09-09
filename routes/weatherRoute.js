var express = require('express');
var weatherRouter = express.Router();
var bodyParser = require('body-parser');
var weatherFunction = require('../service/geolocation');


weatherRouter.use(bodyParser.json());

weatherRouter.route('/')
  .post(async(req, res, next) => {
    try {
      const weather = await weatherFunction(req.body.address);
      res.send(weather);
    } catch (e) {
      next(e)
    }
  });

module.exports = weatherRouter;
