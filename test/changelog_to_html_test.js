'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.changelog_to_html = {
  setUp: function(done) {
    // setup here if necessary    
    done();
  },
  header_file: function(test) {
    test.expect(1);

    var actualHeader = grunt.file.read('tmp/changelog-1.html');
    var expectedHeader = grunt.file.read('test/expected/changelog-1.html');
    test.equal(actualHeader, expectedHeader, 'bad header html file.');

    test.done();
  },
  bullets_file: function(test) {
    test.expect(1);
    var actualBullets = grunt.file.read('tmp/changelog-2.html');
    var expectedBullets = grunt.file.read('test/expected/changelog-2.html');
    test.equal(actualBullets, expectedBullets, 'bad bullets html file.');

    test.done();
  },
  link_file: function(test) {
    test.expect(1);
    var actualLink = grunt.file.read('tmp/changelog-3.html');
    var expectedLink = grunt.file.read('test/expected/changelog-3.html');
    test.equal(actualLink, expectedLink, 'bad link html file.');

    test.done();
  },
};
