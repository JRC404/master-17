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

router.post('/users/create', async(req, res) => {
    const {name, email, age, phoneNumber, password} = req.body;

    if (!name || !email || !age || !password) {
        res.send('Missing reuqired information');
        return;
    }

    if (await UserModel.checkExists(email, phoneNumber)) {
        res.send('A user with this email or phone number already exists');
        return;
    }

    let hashedpassword = await userModel.hashPassword(password);

    const user = new UserModel({
        name,
        age,
        email,
        phoneNumber,
        password: hashedpassword
    });

    user.save();

    req.session.userID = nanoid();
    req.session.save();

    res.send('User was created');
});

router.post('/login', async(req, res) => {
    let {email, password, username} = req.body;

    if (!await UserModel.checkExists(email)) {
        res.send('A user with this email doesn\'t exist');
        return;
    }

    if (await UserModel.comparePassword(email, password)) {

        req.session.userID = nanoid();
        req.session.save();

        res.send('You are now logged in');
        return;
    }

    res.send('You have eneterd the wrong password');
});

router.get('/protected-route', checkSignedIn, (req, res) => {
    res.send('profile page');
});

router.get('/logout', (req, res) => {
    req.session.destroy();

    res.send('your sessoin has ended');
});

module.exports = router;