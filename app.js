const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const yargs = require('yargs')

// App Versioning
yargs.version('1.0.0')

yargs.command({
  command: 'weather',
  describe: 'Searching forecasting weather data by place name',
  builder: {
    place: {
      describe: 'Place name',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    geocode (argv.place, (error, data) => {
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
  }
})

yargs.parse()
