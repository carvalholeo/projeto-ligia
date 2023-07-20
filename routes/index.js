var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
  res.render('home');
});

router.get('/trabalhos', function(req, res) {
  res.render('trabalhos');
});

module.exports = router;
