const express = require('express');
const router = express.Router();
const {addProduct} = require('../controller/ProductsController')

router.post('/addproduct', addProduct);

module.exports = router;