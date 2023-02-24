//@desc Get all Contacts
//@route GET /api/contacts
//@access public
const getAllContacts = (req, res) => {
    res.status(200).json({message:"get all contacts"});
};

//@desc Post all Contacts
//@route POST /api/contacts
//@access public
const createContacts = (req, res) => {
    const {name, age, contact_num} = req.body;

    console.log(`user contact info:- ${name}, ${age}, ${contact_num}`);
    if(!name || !age || !contact_num){
        res.status(400);
        throw new Error('All fields are mandotory');
    }
    res.status(201).json({message:`Contact Created`});
};

//@desc Get all Contacts
//@route GET /api/contacts/:id
//@access public
const getSingleContacts = (req, res) => {
    res.status(200).json({message:`Contact ${req.params.id} info`});
};

//@desc Get all Contacts
//@route PUT /api/contacts
//@access public
const updateContacts = (req, res) => {
    res.status(201).json({message:`Contact ${req.params.id} updated`});
};

//@desc Get all Contacts
//@route DELETE /api/contacts
//@access public
const deleteContacts = (req, res) => {
    res.status(200).json({message:`Contact ${req.params.id} deleted`});
};

module.exports = {
    getAllContacts,
    createContacts,
    getSingleContacts,
    updateContacts,
    deleteContacts
}