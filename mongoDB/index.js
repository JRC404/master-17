const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const hbs = require('express-handlebars');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const express = require('express');

const SessionModel = require('./models/sessionModel');
const router = require('./routes/router');

mongoose.connect('mongodb+srv://dean:Password123abc@cluster0.j1kc2.mongodb.net/signup?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2, // 2 hours
        secure: false,
        sameSite: true
    }
}));

app.use(async (req, res, next) => {
    let loggedIn = await SessionModel.checkSession(req.session.userID);

    res.locals.loggedIn = loggedIn;

    return next();
});

app.use('/', router);

app.listen('3000');