const express = require('express');
const router = express.Router();
const {addProduct, getProductbycategory, getAllProduct} = require('../controller/ProductsController')

router.post('/addproduct', addProduct);
router.get('/getproduct', getProductbycategory);
router.get('/getallproduct', getAllProduct);

module.exports = router;