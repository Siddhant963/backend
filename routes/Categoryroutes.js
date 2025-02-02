const express = require('express');
const router = express.Router();
const {addCategory, findAllCategory,deleteCategory} = require('../controller/CategoryController');

router.post('/addcategory', addCategory);

router.get('/findallcategory', findAllCategory);

router.get('/deletecategory', deleteCategory);

module.exports = router;