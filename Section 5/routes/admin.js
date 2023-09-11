const path = require('path');
const express = require('express');

const rootDir = require('../util/path')
const router = express.Router();

// /admin/add-product
router.get('/add-product',(req, res, next) => {
    console.log('In /add-product middleware!');
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></input></form>');  
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});


// /admin/product
router.post('/product',(req, res, next) => {
    console.log('In post /product middleware!');
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;