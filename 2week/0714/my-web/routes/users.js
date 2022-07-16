var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/name', (req, res)=>{
  res.send('my name is jisu')
})
module.exports = router;
