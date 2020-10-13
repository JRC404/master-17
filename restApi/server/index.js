const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = require('./routes/router');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
// use CORS module to allow communication between client and
// server on localhost

app.use('/', router);
// any routes going to '/<anything>' are
// handled by router.js

app.listen(3000);