const express = require('express');

const app = express();

// mywebsite.com/
// mywebsite.com/contact

app.get('/', (req, res) => {
    res.send('<h1>Hello world!</h1>');
});

app.get('/contact', (req, res) => {
    res.send('Contact page');
});

app.listen(3000, ()=>{
    console.log('Server listening on port 3000');
});