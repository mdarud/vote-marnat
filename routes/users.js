var express = require('express');
var router = express.Router();
const passport = require('passport');
const { forwardAuthenticated, ensureAuthenticated, ensureNotVoted, voterAuthenticated } = require('../config/auth');

router.post('/', 
  passport.authenticate('local', {
    failureRedirect: '/',
    failureFlash : true
  }), (req, res) => {
    res.redirect('/');
  }
);

// Logout
router.get('/logout', ensureAuthenticated, (req, res) => {
  req.logout();
  res.redirect('/');
});


module.exports = router;
