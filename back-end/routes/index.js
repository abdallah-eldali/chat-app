const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //Redirecting to the fron-end
  console.log("Redirecting");
  res.redirect("http://localhost:3000");
});

module.exports = router;
