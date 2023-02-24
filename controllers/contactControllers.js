const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
//@desc Get all Contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async(req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc Post all Contacts
//@route POST /api/contacts
//@access public
const createContacts = asyncHandler(async(req, res) => {
    const {name, email, phone} = req.body;

    if(!name || !email || !phone){
        res.status(400);
        throw new Error('All fields are mandotory !');
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact._id);
    
});

//@desc Get all Contacts
//@route GET /api/contacts/:id
//@access public
const getSingleContacts = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }

    res.status(200).json(contact);
});

//@desc Get all Contacts
//@route PUT /api/contacts
//@access public
const updateContacts = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updateContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(201).json(updateContact);
});

//@desc Get all Contacts
//@route DELETE /api/contacts
//@access public
const deleteContacts = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({message:`Contact deleted`});
});

module.exports = {
    getAllContacts,
    createContacts,
    getSingleContacts,
    updateContacts,
    deleteContacts
}