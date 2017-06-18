var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const isStreaming = false;

  res.render('index', { streaming: isStreaming });
});

module.exports = router;
