const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//@desc Register a user
//@route POST /api/users/regiseter
//@access public
const registerUser = asyncHandler(async(req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory!");
    }

    const userAvailale = await User.findOne({$or:[{email:email},{username:username}]});
    if(userAvailale){
        res.status(400);
        throw new Error("Username or email is already register");
    };

    const hashpassword = await bcrypt.hash(password, 10);
    const createUser = await User.create({
        username,
        email,
        password:hashpassword,
    });

    if(createUser){
        res.status(201).json({id:createUser._id, email:createUser.email, username:createUser.username});
    }else {
        res.status(400);
        throw new Error("User data is not valid.");
    }
});

//@desc Register a user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const user = await User.findOne({email});
    // compare password with hashedpassword
    if(user && await(bcrypt.compare(password, user.password))){
        console.log(user);
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email:user.email,
                id: user._id,
            }
        }, process.env.ACCESS_TOKEN_SECERT,
        {expiresIn:"1m"}
        );
        res.status(200).json({accessToken});
    } else{
        res.status(401);
        throw new Error("Email or password is not valid");
    }
});

//@desc Current user info
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async(req, res) => {
    res.status(200).json({message:"Current user"});
});


const getAllUser = asyncHandler(async(req, res) => {
    const users = await User.find({},{_id:0,username:1, email:1});
    res.status(201).json(users);
});

module.exports = {
    registerUser,
    loginUser,
    currentUser,
    getAllUser
};