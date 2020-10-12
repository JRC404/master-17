const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

/**
 * Importing all required modules for express
 *
 * install modules
 * npm i express express-handlebars body-parser
 * note: path is built in
 */

const getWeather = require('./lib/getWeather');

/**
 * Importing our own modules
 */

const app = express();
// Creating an instance of express

app.engine('.hbs', hbs({
    extname: '.hbs',
    defaultLayout: 'layout'
}));
// creating a view engine - lets us display data only available on the server
app.set('view engine', '.hbs');
// tell express the view engine exists
app.use(express.static(path.join(__dirname, 'public')));
// tell express to set up a folder for static content, css, images, etc
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// tell express that bodyparser exists and to use it, allows us to access form data

app.get('/', (req, res) => { //location on server
    res.render('index'); // actual page to send to client
});

app.post('/', async (req, res) => {
    // We can write any JS in these functions
    let {city, countryCode} = req.body;

    let data = await getWeather(city, countryCode);
    console.log(data);

    if (data.cod == 404) {
        res.render('index', {err: 'location wasn\'t found'});
    } else {
        let desc = data.weather[0].description;
        let temp = data.main.temp;
        let icon = data.weather[0].icon;

        res.render('index', {
            desc,
            temp,
            icon
        });
    }

    //res.render('index'); //err: Cannot set headers after they are sent to the client
    // Servers can't respond more than once per client request
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

// rules that decide what the user *can* do

app.listen(3000, () => { // We need to tell express to listen for connections/ requests
    console.log('listening on port 3000');
});