const User = require('../model/User');
const bcrypt = require('bcrypt');

exports.signUp = async (req, res) => {

    const {firstName, lastName, email, username, password} = req.body;

    if(!firstName || !email || !username || !password) {
        return res.status(400).json({message: "Please enter all details."});
    }

    const foundUser = await User.findOne({username});

    if (foundUser) {
        return res.status(400).json({message: "The user already exists!"});
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const result = await User.create({
        firstName: firstName,
        lastName: (!lastName) ? '' : lastName,
        email: email,
        username: username,
        password: hashedPwd
    });

    if(!result) {
        return res.status(400).json({message: "Sorry there is some error."});
    }

    return res.status(201).json({message: "User created successfully!"})

}

exports.signIn = async (req, res) => {

    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(401).json({message: "Please enter all details."});
    }

    const foundUser = await User.findOne({username});

    if(!foundUser) {
        return res.status(401).json({message: "User does not exist"});
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if(!passwordMatch) {
        return res.status(401).json({message: "Username/Password incorrect"});
    }

    return res.status(200).json({message: "User authenticated"});

}