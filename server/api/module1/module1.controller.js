'use strict';

var qs = require('querystring');
var Promise = require('bluebird');
var async = require('async');
var _ = require('lodash');
var underscore = require('underscore.string');
var config = require('../../config/environment');
var helpers = require('../../components/helpers');
var Module1 = require('./module1.model');
var User = require('../user/user.model');

const apiHelper = require('../../components/helpers/api.helper');

// Gets the oauth callback url
exports.getCallbackUrl = function(req, res) {

	apiHelper.httpWrapper(() => {
		var cloudDetails = [{"key":"value1"}, {"key":"value2"}, {"key":"value3"}, {"key":"value4"} ];
    
		return cloudDetails
	}, res);


    
};

function handleError(res, err) {
    var errId = helpers.guid();
    console.log('Error occured! ID: ', errId);
    console.log(err);
    return res.send(500, 'error occured and error id: ', errId);
}
