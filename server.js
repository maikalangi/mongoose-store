// DEPENDENCIES
const express = require('express');
const app = express();
const res = require('express/lib/response');
const mongoose = require('mongoose');
const Product = require('./models/product');
const morgan = require('morgan');
require('dotenv').config();
const mO = require('method-override');
const productController = (require('./controllers/products'));

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
app.use(mO('_method'));
app.use('/store', productController);

// ========================================
// CONFIGURATION
const PORT = process.env.PORT;
// LISTENER
app.listen(PORT, ()=>console.log(`server is listening on port: ${PORT}`));