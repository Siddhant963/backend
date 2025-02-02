const express = require('express');
const router = express.Router();
const {addProduct, getProductbycategory, getAllProduct ,deleteProduct} = require('../controller/ProductsController')

router.post('/addproduct', addProduct);
router.get('/getproduct', getProductbycategory);
router.get('/getallproduct', getAllProduct);
router.get('/deleteproduct', deleteProduct);


module.exports = router;