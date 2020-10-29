const {nanoid} = require('nanoid');
const router = require('express').Router();

const UserModel = require('../models/userModel');
const {checkSignedIn} = require('../controllers/auth');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/users', async(req, res)=> {
    const users = await UserModel.find({});
    res.send(users);
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.post('/signup', userController.signup)

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async(req, res) => {
    let {email, password} = req.body;

    if (!await UserModel.checkExists(email)) {
        res.render('login', {err: 'A user with this email doesn\'t exist'});
        return;
    }

    if (await UserModel.comparePassword(email, password)) {

        req.session.userID = nanoid();
        req.session.save();

        res.redirect('/profile');
        return;
    }

    res.render('login', {err:'You have eneterd the wrong password'});
});

router.get('/profile', checkSignedIn, (req, res) => {
    res.render('profile');
});

router.get('/logout', (req, res) => {
    req.session.destroy();

    res.redirect('/');
});

/*
Create a route for the admin page
Think about method(s) GET, POST, etc
Think about protecting the route
*/

module.exports = router;