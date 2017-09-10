const axios = require('axios');
const key = 'ac48d4955429c9b6a76e26821e281911';

var getWeather = async(lat,lng) => {

    weatherUrl = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;

  var weather = await axios.get(weatherUrl);
  var weatherObj = {
    latitude: weather.data.latitude,
    longitude: weather.data.longitude,
    timezone: weather.data.timezone,
    hourly: weather.data.hourly
  }
  return weatherObj;
}

module.exports = getWeather;
