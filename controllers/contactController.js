const asynchHandler = require("express-async-handler");

//@desc Get all contacts
 //@route GET /api/contact
 //@access public

 const getContacts = asynchHandler(async(req, res) => {
    console.log("The request body is:",req.body);
    // we may even use json format
    res.status(200).json({message: "Get all contacts"});
    // res.send("Get all contacts");
});

//@desc create new contacts
 //@route POST /api/contact
 //@access public

 const createContact = asynchHandler(async(req, res) => {
    // we may even use json format
    res.status(201).json({message: "Create contacts"});
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    // res.send("Get all contacts");
});

//@desc Get contact
 //@route GET /api/contact/:id
 //@access public

 const getContact = asynchHandler(async(req, res) => {
    // we may even use json format
    res.status(200).json({message: `Get contacts for ${req.params.id}`});
    // res.send("Get all contacts");
});


//@desc Update contact
 //@route PUT /api/contact/:id
 //@access public

 const updateContact = asynchHandler(async(req, res) => {
    // we may even use json format
    res.status(200).json({message: `Update contacts for ${req.params.id}`});
    // res.send("Get all contacts");
});

//@desc Delete contact
 //@route Delete /api/contact/:id
 //@access public

 const DeleteContact = asynchHandler(async(req, res) => {
    // we may even use json format
    res.status(200).json({message: `Delete contacts for ${req.params.id}`});
    // res.send("Get all contacts");
});

module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    DeleteContact,
};