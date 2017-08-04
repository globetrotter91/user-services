'use strict';

var Promise = require('bluebird'),
    mongoose = Promise.promisifyAll(require('mongoose')),
    config = require('../../config/environment'),
    helpers = require('../../components/helpers'),
    crypto = require('crypto'),
    Schema = mongoose.Schema,
    _ = require('lodash'),
    async = Promise.promisifyAll(require('async')),
    request = require('request'),
    rp = require('request-promise'),
    EventEmitter = require('events').EventEmitter,
    qs = require('querystring'),
    mime = require('mime'),
    
    User = require('../user/user.model');

var Module1Schema = new Schema({
    name: String,
    dateCreated: Date,
    lastAccessed: Date,
    owner: String,
    metadata: {}
}, {
    safe: true
});

/**
 * Model Methods
 */
Module1Schema.methods = {
        
        modelMethod: function(test) {
            return true;
        }, 

        modelMethodAgain: function(test){
            return test;
        }

};


/**
 * Statics
 */

Module1Schema.statics = {
    /**
     * Searches all the clouds of the given owner for the query
     * @param owner
     * @param query
     * @returns {Promise}
     */
    searchAllClouds: function(owner, query) {
        return true;
    }
};

/**
 * Virtuals
 */

/**
 * Gets the stats of the cloud account
 */
Module1Schema
    .virtual('info')
    .get(function() {
        return this.modelMethodAgain()
            .then(function(info) {
                //console.log('Cloud: ', info);
                return info;
            });
    });


module.exports = mongoose.model('Module1', Module1Schema);
