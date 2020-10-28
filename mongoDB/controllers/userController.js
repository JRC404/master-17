exports.signup = async(req, res) => {
    const {name, email, age, phoneNumber, password} = req.body;

    if (!name || !email || !age || !password) {
        res.render('signup', {err: 'Missing required information'});
        return;
    }

    if (await UserModel.checkExists(email, phoneNumber)) {
        res.render('signup', {err: 'A user with this email or phone number already exists'});
        return;
    }

    let hashedPassword = await UserModel.hashPassword(password);

    const user = new UserModel({
        name,
        age,
        email,
        phoneNumber,
        password: hashedPassword
    });

    user.save();

    req.session.userID = nanoid();
    req.session.save();

    res.redirect('/profile');
}