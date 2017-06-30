var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({ dest: '../public/uploads'});



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/api/file', upload.single('userFile'), function(req, res, next) {
  res.json({
    "size-bytes":req.file.size,
    "size-kilobytes":req.file.size/1000,
    "size-megabytes":req.file.size/1000000,
    "size-gigabytes":req.file.size/1000000000
   });
});

module.exports = router;
