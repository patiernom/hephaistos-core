'use strict';

var chai = require('chai'),
    expect = chai.expect,
    path = require('path');

/*jshint -W030 */
describe('Hephaistos web platform', function() {
    describe('startup', function() {
        it('check if the environment is working correctly', function(done) {
            expect(1).to.equal(1);
            done();
        });
    });

    describe('composer', function() {
        it('can be require manifest', function(done) {
            var manifest = require(path.resolve(path.join(__dirname, '../config/manifests/develop.json')));
            expect(manifest).to.exist;
            expect(typeof manifest).to.equal('object');
            done();
        });
    });
});
