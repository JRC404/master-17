const express = require('express');

const app = express();
const weather = require('./lib/getWeather');

app.get('/', async (req, res) => {
    let data = await weather();
    console.log(data);
    res.send(data);
});

app.listen(3001, () =>{
    console.log('Server listening on port 3000');
});