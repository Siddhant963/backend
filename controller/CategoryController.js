const categoryModel = require('../models/categorymodel');
const dbgr = require('debug')('development: CategoryController');
const upload = require('../utils/GetCategoryUpload');


module.exports.addCategory = [
     upload.single('imageUrl'),
     async (req, res) => {
     try{
          let {name, description,} = req.body;
          let imageUrl = req.file.path
          let category = await categoryModel.create({
               name,
               description,
               imageUrl
          });
          res.send(category);
     }
     catch(err){
          dbgr(err);
     }
}];

module.exports.findAllCategory = async (req, res) => {
     try{
          let category = await categoryModel.find();
          res.send(category);
     }
     catch(err){
          dbgr(err);
     }
}

module.exports.deleteCategory = async (req,res)=>{ 
     const {id} = req.query;
     try {
          let category = await categoryModel.findByIdAndDelete(id);
          res.send(category);
     } catch (err) {
          console.log(err);
     }

}