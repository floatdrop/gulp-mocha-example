/* global describe, before, after, it */

var app = require('../app.js');
var get = require('got');

describe('API', function () {

    var server;

    before(function (done) {
        server = app.listen(8081, function () {
            console.log('Server started');
            done();
        });
    });

    after(function (done) {
        server.close();
        server.on('close', function () {
            console.log('Server closed');
            done();
        });
    });

    it('should return 1', function (done) {
        get('http://0.0.0.0:8081/one', function (err, data) {
            done(err, data === '1');
        });
    });

    it('should return 2', function (done) {
        get('http://0.0.0.0:8081/two', function (err, data) {
            done(err, data === '2');
        });
    });
});
