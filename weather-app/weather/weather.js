const request = require('request');
//use template strings for lat and lng, then call callback and provide undefined.  print temp and actu
var getWeather = (lat, lng, callback) =>{
  request({
    url: `https://api.darksky.net/forecast/dea92fcdff82ef9f7d66ce2ed2a88dbf/${lat}, ${lng}`,
    json: true
  }, (error, response, body) =>{
    if(!error && response.statusCode === 200){
      callback(undefined,{
        current_temp: body.currently.temperature,
        actual_temp: body.currently.apparentTemperature

      })
    }else {
      callback('Unable to fetch weather.');
    }

  }

  );
};

module.exports.getWeather = getWeather;
