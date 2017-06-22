const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'ee85152191c9f4e8431dbc87b18ed613';
let city = argv.c || 'porto alegre';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request(url, function (err, response, body) {
  let weather = JSON.parse(body);
  let description = `The weather today in ${weather.name} is ${weather.weather[0].description} with ${weather.main.temp}ºC and humidity of ${weather.main.humidity}%.`;
  let minMax = `Minimum today will be ${weather.main.temp_min}ºC and maximum ${weather.main.temp_max}ºC.`;
  if(err) {
    console.log(`Error: ${err}`);
  } else {
    console.log(description);
    console.log(minMax);
  }
});