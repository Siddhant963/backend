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
