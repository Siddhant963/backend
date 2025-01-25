const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

const storage = multer.diskStorage({
     destination: function(req, file, cb) {
          cb(null, './public/images/uploads/CategoryImage');
     },
     filename: function(req, file, cb) {
          crypto.randomBytes(10, (err, bytes) => {
               const fn = bytes.toString('hex') + path.extname(file.originalname);
               cb(null, fn);
          });
     }
});

const generateuploads = multer({ storage: storage});

module.exports = generateuploads;