const express = require('express');
const { test } = require('../controllers/test');
const { testVal } = require('../validator/test');
const router = express.Router();

router.route('/').get(testVal, test);

module.exports = router;
