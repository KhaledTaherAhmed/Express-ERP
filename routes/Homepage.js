var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/Home', function(req, res, next) {
    res.status(200).send({Hello:"pop"});
});

module.exports = router;