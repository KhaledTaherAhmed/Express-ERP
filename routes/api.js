var express = require('express');
const HomeRouter = require('./Homepage');
/* GET home page. */
router.use('/Home', HomeRouter);

module.exports = router;