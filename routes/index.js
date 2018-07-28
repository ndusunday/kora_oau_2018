var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('./villey');
});

// router.get('/company', function(req, res, next){
//   res.redirect('./company');
// });


module.exports = router;
