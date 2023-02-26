const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type:String,
        require:[true, "Please add the user name"],
        unique: [true, "Username already taken"]
    },
    email: {
        type: String,
        require: [true, "Please add the user email address"],
        unique: [true, "Email address already taken"],
    },
    password: {
        type: String,
        require: [true, "Please add the user password"],
    }
},{
    timestamps:true,
});

module.exports = mongoose.model('User', userSchema);