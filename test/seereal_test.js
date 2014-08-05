var should = require('should'),
  serial = require('../');

function a(next) {
  setTimeout(function () {
    next(null, 'A');
  }, 1000);
}

function b(next) {
  setTimeout(function () {
    next(null, 'B');
  }, 100);
}

function e(next) {
  setTimeout(function () {
    next(new Error('fake error'));
  }, 500);
}


describe('Seereal', function () {
  it('should return [ "A", "B" ]', function (done) {
    serial([a, b], function (err, results) {
      (results).should.be.an.Array;
      (results[0]).should.equal('A');
      (results[1]).should.equal('B');
      done();
    });
  });
  it('should return [ "B", "A" ]', function (done) {
    serial([b, a], function (err, results) {
      (results).should.be.an.Array;
      (results[0]).should.equal('B');
      (results[1]).should.equal('A');
      done();
    });
  });
  it('should return an Error', function (done) {
    serial([e], function (err, results) {
      (err).should.be.an.Error;
      done();
    });
  });
});
