var express = require('express');
var weatherRouter = express.Router();
var bodyParser = require('body-parser');
var weatherFunction = require('../service/geolocation');
var weatherFunctionByCoordinate = require('../service/weatherByCoordinate');


weatherRouter.use(bodyParser.json());

weatherRouter.route('/')
  .post(async(req, res, next) => {
    try {
      if(req.body.address){
      var weather = await weatherFunction(req.body.address);
    }else{
        var weather = await weatherFunctionByCoordinate(req.body.latitude,req.body.longitude);
    }
      res.send(weather);
    } catch (e) {
      next(e)
    }
  });


module.exports = weatherRouter;
