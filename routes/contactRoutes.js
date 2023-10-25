const express = require("express");
const router = express.Router();
const {
    getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    DeleteContact,
} = require("../controllers/contactController");

//endpoint
router.route("/").get(getContacts).post(createContact);

router.route("/:id").get( getContact).put(updateContact).delete(DeleteContact);


module.exports = router;
    //https://www.youtube.com/watch?v=H9M02of22z4