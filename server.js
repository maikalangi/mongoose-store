// DEPENDENCIES
const express = require('express');
const app = express();
const res = require('express/lib/response');
const mongoose = require('mongoose');
const Product = require('./models/products');
const morgan = require('morgan');
require('dotenv').config();

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

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// =========ROUTES/CONTROLLERS============
// INDEX
app.get('/store', (req, res)=>{
    Product.find({}, (error, allProduct)=>{
        res.render('index.ejs', { product: allProduct });
    });
});

// NEW
app.get('/store/new', (req, res)=>{
    res.render('new.ejs');
});

// DELETE
app.delete('/store/:id', (req, res)=>{
    res.redirect('/store');
});

// UPDATE
app.put('/store/:id', (req, res)=>{
    res.redirect('/store/:id');
});

// CREATE
app.post('/store', (req, res)=>{
    Product.create(req.body, (error, newProduct) => {
        res.send(newProduct);
        // res.send(req.body);
    });
    res.redirect('/store');
});

// EDIT
app.get('/store/:id/edit', (req, res)=>{
    res.render('edit.ejs');
});

// SHOW
app.get('/store/:id', (req, res)=>{
    res.render('show.ejs');
});

// ========================================
// CONFIGURATION
const PORT = process.env.PORT;
// LISTENER
app.listen(PORT, ()=>console.log(`server is listening on port: ${PORT}`));