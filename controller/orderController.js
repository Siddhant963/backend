const orderModel = require('../models/ordersSchema');
const userModel = require('../models/usermodel');
const productModel = require('../models/ProductSchema');
const { verifyToken } = require('../utils/VerifyToken');

module.exports.addOrder = async (req, res) => {
     try {
          let { products } = req.body;

          let token =  req.cookies.token;
          let userdata = verifyToken(token);
          if (!userdata) {
               return res.status(401).send("Unauthorized");
          }

          let user = await userModel.findById(userdata.id);
          let totalPrice = 0;
          for (let i = 0; i < products.length; i++) {
               let product = await productModel.findById(products[i].product);
               totalPrice += product.price * products[i].quantity;
          }
          let order = await orderModel.create({
               user,
               products,
               totalPrice
          });
          res.send(order);
     
     }
     catch (err) {
          console.log(err);
     }
     
};

module.exports.getorderByUserId = async(req, res) => {
     try {
          let token =  req.cookies.token;
          let userdata = verifyToken(token);
          if (!userdata) {
               return res.status(401).send("Unauthorized");
          }
          let user = userdata.id;
          let orders = await orderModel.find({ user });
          res.send(orders);}
          catch(err) {
               console.log(err);
          }
};

module.exports.getAllOrders = async (req, res) => {
     try {
          let orders = await orderModel.find();
          res.send(orders);
     } catch (err) {
          console.log(err);
     }
};
module.exports.updateOrderStatus = async (req, res) => {
     try {
          let { orderId, status } = req.query;
          let order = await orderModel.findByIdAndUpdate(orderId, { status }, { new: true });
          res.send(order);
     } catch (err) {
          console.log(err);
     }     
}