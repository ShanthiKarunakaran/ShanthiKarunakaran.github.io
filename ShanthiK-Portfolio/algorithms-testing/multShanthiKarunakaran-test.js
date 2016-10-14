const should = require('chai').should();
const basic = require('./multShanthiKarunakaran');
const basic1 = require('./multShanthiKarunakaran1');

describe('basic', () => {
  it('should return 23 when passed 10', () => {
    basic(10).should.equal(23);
  });
  it('should return 78 when passed 20', () => {
    basic(20).should.equal(78);
  });
  it('should return 2318 when passed 100', () => {
    basic(100).should.equal(2318);
  });
  it('should return 23331668 when passed 10000', () => {
    basic(10000).should.equal(23331668);
  });
  it('should return 486804150 when passed 45678', () => {
    basic(45678).should.equal(486804150);
  });
});

describe('basic1', () => {
  it('should return 23 when passed 10', () => {
    basic1(10).should.equal(23);
  });
  it('should return 78 when passed 20', () => {
    basic1(20).should.equal(78);
  });
  it('should return 2318 when passed 100', () => {
    basic1(100).should.equal(2318);
  });
  it('should return 23331668 when passed 10000', () => {
    basic1(10000).should.equal(23331668);
  });
  it('should return 486804150 when passed 45678', () => {
    basic1(45678).should.equal(486804150);
  });
});