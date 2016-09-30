var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  //load a user view
  var userList = ['Harsh', 'Prashant', 'Mahesh', 'Jahnavee','Vaishali'];

  res.render('users', {title: 'Users List',
  users: userList
  });
});

module.exports = router;
