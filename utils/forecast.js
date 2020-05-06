const request = require('request')

const forecast = (address, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=9816e6bb23193805ff27d5cc3718cc9f&query='+encodeURI(address)

  request({ url: url, json:true}, (error, response) => {
    if (error) {
      callback('Unable to connect to internet', undefined)
    } else if (response.body.error) {
      callback('Unable to searching location, try another location', undefined)
    } else {
      callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " deggres out. It feels like " + response.body.current.feelslike + " deggres out.")
    }
  })
}

module.exports = forecast
