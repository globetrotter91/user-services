'use strict';

var express = require('express');
var controller = require('./module1.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/callback-url', controller.getCallbackUrl);

module.exports = router;
