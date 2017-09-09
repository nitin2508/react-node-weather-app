const axios = require('axios');
const key = 'ac48d4955429c9b6a76e26821e281911';

var getWeather = async(address) => {
  const encodeAddress = encodeURIComponent(address);
  var geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;
  const geoCode = await axios.get(geoCodeUrl);
  var lat = geoCode.data.results[0].geometry.location.lat,
    lng = geoCode.data.results[0].geometry.location.lng,
    weatherUrl = `https://api.darksky.net/forecast/${key}/${lat},${lng}`;

  var weather = await axios.get(weatherUrl);
  var weatherObj = {
    address: geoCode.data.results[0].formatted_address,
    latitude: weather.data.latitude,
    longitude: weather.data.longitude,
    timezone: weather.data.timezone,
    hourly: weather.data.hourly
  }
  return weatherObj;
}

module.exports = getWeather;
