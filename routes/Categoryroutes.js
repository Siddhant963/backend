const express = require('express');
const router = express.Router();
const {addCategory, findAllCategory} = require('../controller/CategoryController');

router.post('/addcategory', addCategory);

router.get('/findallcategory', findAllCategory);

module.exports = router;