// DEPENDENCIES
const express = require('express');
const Product = require('../models/product');
// INITIALIZE ROUTER
const router = express.Router();

// SEED DATA

// =========ROUTES/CONTROLLERS============
// INDEX
router.get('/', (req, res)=>{
    Product.find({}, (error, allProduct)=>{
        res.render('index.ejs', { product: allProduct });
    });
});

// NEW
router.get('/new', (req, res)=>{
    res.render('new.ejs');
});

// DELETE
router.delete('/:id', (req, res)=>{
    res.redirect('/store');
});

// UPDATE
router.put('/:id', (req, res)=>{
    res.redirect('/store/:id');
});

// CREATE
router.post('/', (req, res)=>{
    Product.create(req.body, (error, newProduct) => {
        res.redirect('/store');
        // res.send(newProduct);
    });
});

// EDIT
router.get('/:id/edit', (req, res)=>{
    res.render('edit.ejs');
});

// SHOW
router.get('/:id', (req, res)=>{
    Product.findById(req.params.id, (error, index)=>{
        res.render('show.ejs', {
            product: index,
        });
    });
});

// EXPORT
module.exports = router;