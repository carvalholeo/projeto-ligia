var express = require('express');
var router = express.Router();
console.log("arquivo importado")
/* GET home page. */
router.get('/', function(req, res) {
  console.log('passou por aqui ou algo do genero')
  res.render('home', { title: 'Express' });
});

module.exports = router;
