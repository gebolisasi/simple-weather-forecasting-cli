const request = require('request')
const fs = require('fs')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')


geocode ('Sukabumi', (error, data) => {
  if (error) {
    return console.log(error)
  }

  forecast (data.latitude + ',' + data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error)
    }

    console.log(data.place)
    console.log(forecastData)
  })
})
