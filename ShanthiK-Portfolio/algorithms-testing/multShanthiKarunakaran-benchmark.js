var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
var multShanthiKarunakaran = require('./multShanthiKarunakaran.js');
var multShanthiKarunakaran1 = require('./multShanthiKarunakaran1.js');

// add tests
suite
  .add('multShanthiKarunakaran Reduce 10000', () => {
    multShanthiKarunakaran(10000);
  })
  .add('multShanthiKarunakaran Reduce 10000', () => {
    multShanthiKarunakaran1(10000);
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('   Fastest is ' + this.filter('fastest').map('name'));
    console.log('   done!');
  })
    // run async
  .run({ 'async': true });