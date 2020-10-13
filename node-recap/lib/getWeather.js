const fetch = require('node-fetch');

const getWeather = async(city, countryCode) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=YourAPIKey`

    let data = await fetch(url);
    return data.json();
}

module.exports = getWeather;
// Tell node we want to return getWeather
