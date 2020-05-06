const request = require('request')

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZ2Vib2xpc2FzaSIsImEiOiJjazlmbzh4Ym8wN2NhM2VvMmNjbzJyaXM4In0.cr7IvlqA6rpy3GwbRoMfjA&limit=1'

  request({ url : url, json : true}, (error, response) => {
    if (error) {
      callback('There is no active internet connection on your device!', undefined)
    } else if (response.body.features.length === 0) {
      callback('Unable to searching ' + address + ', try to search another address!', undefined)
    } else {
      callback(undefined, {
        latitude : response.body.features[0].center[1],
        longitude : response.body.features[0].center[0],
        place : response.body.features[0].place_name
      })
    }
  })
}


module.exports = geocode
