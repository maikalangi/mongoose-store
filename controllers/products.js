// DEPENDENCIES
const express = require('express');
const Product = require('../models/product');
// INITIALIZE ROUTER
const router = express.Router();

// SEED DATA
// const productSeed = require('../models/productSeed');
// router.get('/seed', (req, res)=>{
//     Product.deleteMany({}, (error, allProducts) =>{});
//     Product.create(productSeed, (error, data)=>{
//         res.redirect('/store');
//     });
// });

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
    Product.findByIdAndDelete(req.params.id, (error, data)=>{
        res.redirect('/store');
    });
});

// UPDATE
router.put('/:id', (req, res)=>{
    Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true, //FBIAU defaults to new: false which returns old data. making it return true will make explicit that you want the updated data
        },
        (error, updatedProduct)=>{
            res.redirect(`/store/${req.params.id}`);
        }
    );
});

// CREATE
router.post('/', (req, res)=>{
    Product.create(req.body, (error, newProduct) => {
        res.redirect('/store');
    });
});

// EDIT
router.get('/:id/edit', (req, res)=>{
    Product.findById(req.params.id, (error, foundProduct)=>{
        res.render('edit.ejs', {
            product: foundProduct,
        });
    });
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