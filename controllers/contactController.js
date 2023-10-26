const asyncHandler = require("express-async-handler");

const  Contact = require("../models/contactModel");

//@desc Get all contacts
 //@route GET /api/contact
 //@access public

 const getContacts = asyncHandler(async(req, res) => {
    const contact = await Contact.find();
    console.log("The request body is:",req.body);
    // we may even use json format
    res.status(200).json(contact);
    // res.send("Get all contacts");
});

//@desc create new contacts
 //@route POST /api/contact
 //@access public

 const createContact = asyncHandler(async(req, res) => {
    // we may even use json format
    res.status(201).json({message: "Create contacts"});
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    //res.send("Get all contacts");
    res.status(201).json(contact);
});

//@desc Get contact
 //@route GET /api/contact/:id
 //@access public

 const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    res.status(200).json(contact);

});


//@desc Update contact
 //@route PUT /api/contact/:id
 //@access public

 const updateContact = asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id);

    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }

    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );

    res.status(200).json(updateContact);
   
});

//@desc Delete contact
 //@route Delete /api/contact/:id
 //@access public

 const DeleteContact = asyncHandler(async(req, res) => {
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