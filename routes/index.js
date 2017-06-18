var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const isStreaming = false;

  res.render('index', { 
    clientId: '6i9ekfgmxjr7yk014fpfarxhmtqplj',
    channelId: '75574155'
  });
});

module.exports = router;
