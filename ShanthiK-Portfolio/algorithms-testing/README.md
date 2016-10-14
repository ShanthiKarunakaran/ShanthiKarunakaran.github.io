
# Benchmarking different JS solutions for an algorithm
## Algorithm 
```
Write a JavaScript function that will find the sum of all multiples of 3 or 5 that 
are below a number N, where N is an input parameter to the function.
```
## To determine efficiency
### Used  benchmarkjs23 npm module and Node.js 

## Pre-req : Installations
```
mkdir algorithms-testing
Navigate to said directory: cd algorithms-testing
npm init and accept all defaults
npm install -g mocha
npm install mocha chai --save
```

## Mocha
### Created a test file multShanthiKarunakaran-test.js
```
var should = require( 'chai' ).should();
var basic = require( './multShanthiKarunakaran' );

describe('basic', function() {
  it('should return 23 when passed 10', function() {
    basic(10).should.equal(23);
  })
  it('should return 78 when passed 20', function() {
    basic(20).should.equal(78);
  })
  it('should return 2318 when passed 100', function() {
    basic(100).should.equal(2318);
  })
  it('should return 23331668 when passed 10000', function() {
    basic(10000).should.equal(23331668);
  })
  it('should return 486804150 when passed 45678', function() {
    basic(45678).should.equal(486804150);
  })
})
```
## Created the JS file that needs to be tested
```
function multShanthiKarunakaran(times) {
	//add all number that are less than times into an array
	var lookUp = {};
	while(times > 1) {
		times--;
		if(times % 3 == 0 || times % 5 == 0) {
			lookUp[times] = "true";
		}
	}
	// 3,5,6,9 (prev :0 , 3 , 8 , 14 , 23)
	return Object.keys(lookUp).reduce(function (previous, key) {
		 //if string no conversion , else convert the number stored as string to the data type number
    	key = isNaN(key) ? key : Number(key);
		return previous + key;
	}, 0);
}


multShanthiKarunakaran(10);
module.exports = multShanthiKarunakaran;

```

## Test the script with mocha
```
mocha multShanthiKarunakaran-test.js
```

## Test results after running with mocha
```
$ mocha multShanthiKarunakaran-test.js 

  basic
    ✓ should return 23 when passed 10
    ✓ should return 78 when passed 20
    ✓ should return 2318 when passed 100
    ✓ should return 23331668 when passed 10000
    ✓ should return 486804150 when passed 45678

  5 passing (15ms)
```
