const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        require: [true, "Please add the contact email address"],
    },
    phone: {
        type: String,
        require: [true, "Please add the contact phone number"],
    }
},{
    timestamps: true,
});

const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;