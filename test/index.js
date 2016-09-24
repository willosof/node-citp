var assert = require('assert');
var citp = require('../index');

describe('version', function() {
  it('well played', function(done) {
    citp.version(function(result) {
      if (result && result !== undefined) {
      	done();
      }
    });
  });
});

