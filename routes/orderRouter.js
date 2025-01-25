const express = require('express');
const router = express.Router();
const { addOrder, getorderByUserId, getAllOrders, updateOrderStatus} = require('../controller/orderController');

router.post('/addorder', addOrder);
router.get('/getOrder', getorderByUserId);
router.get('/getallorders', getAllOrders);
router.get('/updateorder', updateOrderStatus);

module.exports = router;