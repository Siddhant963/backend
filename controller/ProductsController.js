const productModel = require('../models/ProductSchema');
const uploads = require('../utils/GetProductUploads');

module.exports.addProduct = [
     uploads.single('imageUrl'),
     async (req, res) => {
          try{
               let {name, categoryId, description, price} = req.body;
               let imageUrl = req.file.path;
               let product = await productModel.create({
                    name,
                    categoryId,
                    description,
                    price,
                    imageUrl
               });
               res.send(product);
          }
          catch(err){
               console.log(err);
          }
     }
];

module.exports.getProductbycategory = async (req, res) => {
     try{
          let {categoryId} = req.query;          
          let products = await productModel.find({categoryId});   
          res.send(products);
          
     }
     catch(err){
          console.log(err);
     }
};

module.exports.getAllProduct = async (req, res) => {
     try{
          let products = await productModel.find();
          res.send(products);
     }
     catch(err){
          console.log(err);
     }
};