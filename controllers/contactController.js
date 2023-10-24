//@desc Get all contacts
 //@route GET /api/contact
 //@access public

 const getContacts = (req, res) => {
    console.log("The request body is:",req.body);
    // we may even use json format
    res.status(200).json({message: "Get all contacts"});
    // res.send("Get all contacts");
};

//@desc create new contacts
 //@route POST /api/contact
 //@access public

 const createContact = (req, res) => {
    // we may even use json format
    res.status(201).json({message: "Create contacts"});
    // res.send("Get all contacts");
};

//@desc Get contact
 //@route GET /api/contact/:id
 //@access public

 const getContact = (req, res) => {
    // we may even use json format
    res.status(200).json({message: `Get contacts for ${req.params.id}`});
    // res.send("Get all contacts");
};


//@desc Update contact
 //@route PUT /api/contact/:id
 //@access public

 const updateContact = (req, res) => {
    // we may even use json format
    res.status(200).json({message: `Update contacts for ${req.params.id}`});
    // res.send("Get all contacts");
};

//@desc Delete contact
 //@route Delete /api/contact/:id
 //@access public

 const DeleteContact = (req, res) => {
    // we may even use json format
    res.status(200).json({message: `Delete contacts for ${req.params.id}`});
    // res.send("Get all contacts");
};

module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    DeleteContact,
};