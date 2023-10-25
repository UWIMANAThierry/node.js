const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//configure routes to access the api

// app.use are known as middleware

app.use(express.json());
app.use("/api/contact", require("./routes/contactRoutes"));
app.use(errorHandler);

connectDb();
app.listen(port, () => {
console.log(`server running on ${port}`);
});

/*there are more http client 
you can use lets try thunder client

http://localhost:5001/api/contact

*/
// npm install dotenv

// FWviRBs9vjTNVmj8




