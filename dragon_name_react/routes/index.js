const express = require('express'),
  router = express.Router()
  multer = require('multer');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/generate', (req, res, next) => {
  var firstName = req.body.firstName,
      lastName  = req.body.lastName,
      motherName = req.body.motherName,
      fatherName = req.body.fatherName,
      dragonName = '';

  var parseLast = function(lastName) {
    var length = lastName.length,
        start = Math.floor(length/2) - 1;
    return lastName.substring(start, start+2);
  }

  var capitalize = function(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  dragonName = firstName.slice(-2);
  dragonName += parseLast(lastName);
  dragonName += motherName.substring(0,2);
  dragonName += fatherName.slice(-1);

  dragonName = capitalize(dragonName.toLowerCase());

  res.json(dragonName);
});

module.exports = router;
