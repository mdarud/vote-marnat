var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.user) res.render('home', { title: 'Pemilihan Umum Raya • Universitas Kristen Maranatha' });
  else {
    res.render('vote', { title: 'Vote' , name: req.user.name});
  }
});

module.exports = router;
