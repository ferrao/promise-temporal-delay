/**
 * @file Promise based delay
 */

var Q = require('q');
var temporal = require('temporal');

module.exports = function(ms) {

    var deferred = Q.defer();

    temporal.delay(ms, function() {
        deferred.resolve();
    });

    return deferred.promise;

};
