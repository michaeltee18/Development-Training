const request = require('request');
var geocodeAddress = (address) => {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      var encodedAddress = encodeURIComponent(address);

      request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAEk-tCX49N4MdwKWTew9HawjOIyhcgk4U`,
        json: true
      }, (error, response, body) =>{
        if(error){
          reject('Unable to connect to Google servers.');
        }else if(body.status === 'ZERO_RESULTS') {
          reject('Unable to connect to find that address.');
        }
        else if (body.status === 'OK'){
          resolve({
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
          });
        }
      });
    }, 1500);
  })

};


geocodeAddress('22305').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);

});
