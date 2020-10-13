const {Router} = require('express');
const {customAlphabet} = require('nanoid');
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz', 10);

// initialise express router, similar to `const app = express()`
const router = Router();

// Mock database
let users = {
    vtrxohtmzf: {
        name: 'Scooper',
        age: 55,
        email: 'jacob.reilly-cooper@wearecodenation.com'
    },
    ihtvnwnyyi: {
        name: 'Dean',
        age: 54,
        email: 'dean@wearecodenation.com'
    },
    wxunpnrica: {
        name: 'Pedro',
        age: 60,
        email: 'pedro@wearecodenation.com'
    }
}

router.get('/user/:id', (req, res) => {
    if (users[req.params.id]) {
        res.send(users[req.params.id]);
    } else {
        res.send({error: 'No user with that ID'});
    }
});

router.post('/user/create', (req, res) => {
    let {name, age, email} = req.body;

    if (name == '' || age == '' || email == '') {
        res.status(422).send({error: 'Please provde all details'})
    } else {
        users[nanoid()] = {
            name,
            age,
            email
        }

        res.status(201).send({message: 'User was added to the database'});
    }
});

router.delete('/user/:id', (req, res) => {
    if (users[req.params.id]) {
        delete users[req.params.id];
        res.status(200).send({message: 'User was deleted'});
    } else {
        res.status(404).send({error: 'No user with that ID'});
    }

    console.log(users);
});

router.put('/user/:id', (req, res) => {
    let {name, age, email} = req.body;
    let user = users[req.params.id]

    if (user) {
        user.name = name || user.name;
        user.age =  age || user.age;
        user.email = email || user.email

        res.status(200).send({message: 'User updated'});
    } else {
        res.status(404).send({error: 'User not found'});
    }

    console.log(users)
});


// CRUD operations
// Create - post
// Read - get
// Update - put
// Delete - delete

module.exports = router;