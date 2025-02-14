const orderModel = require('../models/ordersSchema');
const userModel = require('../models/usermodel');
const productModel = require('../models/ProductSchema');
const { verifyToken } = require('../utils/VerifyToken');
const {sendMessage} = require('../utils/sendWhatsappmsg');

module.exports.addOrder = async (req, res) => {
     try {
          let {user,totalPrice, products ,contact , email  } = req.body;
          // console.log(req.body);
          
          
          let order = await orderModel.create({
               user,
               products,
               totalPrice,
               status: "Pending",
               contact,
               email
          });
      const msg = sendMessage(order);
          res.send(order);
     
     }
     catch (err) {
          console.log(err);
     }
     
};

module.exports.getorderByUserId = async(req, res) => {
     try {
          // let token =  req.cookies.token;
          // let userdata = verifyToken(token);
          // if (!userdata) {
          //      return res.status(401).send("Unauthorized");
          // }
          // let user = userdata.id;
          const {userId} = req.query;
          let orders = await orderModel.find({ user : userId });
          res.json(orders);}
          catch(err) {
               console.log(err);
          }
};

module.exports.getAllOrders = async (req, res) => {
     try {
          let orders = await orderModel.find({ status: "Pending" });
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

