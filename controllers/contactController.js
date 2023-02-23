//@decs Gell all contacts
//@route GET /api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({meddage:"Get all contact Prajwal"});
}

//@decs Gell single contacts
//@route GET /api/contacts/:id
//@access public
const getSingleContact = (req, res) => {
    res.status(200).json({meddage:`Get SIngle contact for ${req.params.id}`});
}


//@decs Creat new Contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log(`user input value is :- ${req.body.name}`);
    const {name, age} = req.body;
    if(!name || !age) {
        throw new Error("All Fields are mandatory");
    }
    res.status(201).json({meddage:"Contact created sucssefully"});
}

//@decs Update Contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(201).json({meddage:`Contact ${req.params.id} Updated sucssefully`});
}

//@decs Delete Contact
//@route PUT /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(201).json({meddage:`Contact ${req.params.id} deleted sucssefully`});
}

module.exports = {
    getContact,
    createContact,
    updateContact,
    deleteContact,
    getSingleContact
};

// module.exports = {
//     getContact,
//     createContact,
//     updateContact,
//     deleteContact,
//     getSingleContact
// };module.exports = {
//     getContact,
//     createContact,
//     updateContact,
//     deleteContact,
//     getSingleContact
// };