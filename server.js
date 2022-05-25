// DEPENDENCIES
const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
// schema dependency
const Product = require('./models/products');

// INITIALIZER
const app = express();

// CONFIGURATION
const PORT = process.env.PORT;
// database connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// DATABASE CONNECTION
const db = mongoose.connection
// connection error callback functions
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo is connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// INDEX
app.get('/store', (req, res)=>{
    res.render('index.ejs');
});

// NEW
app.get('/store/new', (req, res)=>{
    res.render('show.ejs');
});

// DELETE

// UPDATE

// CREATE
app.post('/store', (req, res)=>{
    res.send('yello');
});

// EDIT

// SHOW
app.get('/store/:id', (req, res)=>{
    res.render('show.ejs');
});

// LISTENER
app.listen(PORT, ()=>console.log(`server is listening on port: ${PORT}`));