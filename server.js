// DEPENDENCIES
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();

// INITIALIZER
const app = express();

// CONFIGURATION
const PORT = process.env.PORT;

// INDEX
app.get('/store', (req, res)=>{
    res.render('index.ejs');
});
// NEW

// DELETE

// UPDATE

// CREATE

// EDIT

// SHOW


// LISTENER
app.listen(PORT, ()=>console.log(`server is listening on port: ${PORT}`));