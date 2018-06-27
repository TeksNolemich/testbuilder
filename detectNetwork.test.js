 /*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 


  // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
  //   // This test doesn't really test anything at all! It will pass no matter what.
  //   var even = function(num){
  //     return num/2 === 0;
  //   }
  //   return even(10) === true;
  // });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  // it('Throws an error when expected behavior does not match actual behavior', function() {
  //   var even = function(num){
  //     return num/2 === 0;
  //   }

  //   if(even(10) !== true) {
  //     throw new Error('10 should be even!');
  //   }
  // });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901230') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var expect = chai.expect;
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
  it('has a prefix of 6011 and a length of 16', function(){
    expect(detectNetwork('6011000000000000')).to.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function(){
    expect(detectNetwork('6011000000000000000')).to.equal('Discover')
  });
  it('has a prefix of 65 and a length of 16', function(){
    expect(detectNetwork('6511000000000000')).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function(){
    expect(detectNetwork('6511000000000000000')).to.equal('Discover')
  });

  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      var preString = prefix.toString();
      it('has a prefix of ' + preString + ' and a length of ' + (preString + '0000000000000').length, function(){
        expect(detectNetwork(preString + '0000000000000')).to.equal('Discover')
      });
      it('has a prefix of ' + prefix + ' and a length of ' + (preString + '0000000000000000').length , function(){
        expect(detectNetwork(preString + '0000000000000000')).to.equal('Discover')
      });
    })(prefix) 
  }
});

describe('Maestro', function() {
  var expect = chai.expect;
  var mArr = ['5018', '5020', '5038', '6304'];
  for (var mPre = 0; mPre < mArr.length; mPre+=1){
    var cardNum = (mArr[mPre] + '0000000');
    for (var j = 0; j < 8; j+=1){
      cardNum += j.toString();
      (function(cardNum) {
        it('has a prefix of ' + cardNum.slice(0,4) + ' and a length of ' + cardNum.length , function(){
          expect(detectNetwork(cardNum)).to.equal('Maestro')
        });
      })(cardNum)
    }
  }
});

describe('China UnionPay', function(){
  var expect = chai.expect;
  //624-626
  for (var trePre = 624; trePre <= 626; trePre+=1){
    var card = (trePre + '111110000000');
    for (var suff = 0; suff < 4; suff+=1){
      card += suff.toString();
      (function(card) {
        it('has a prefix of ' + card.slice(0,3) + ' and a length --->' + card.length , function(){
          expect(detectNetwork(card)).to.equal('China UnionPay')
        });
      })(card)
    }
  }
  //6282-6288
  for (var quadPre = 6282; quadPre <= 6288; quadPre+=1){
    var card = (quadPre + '11111000000');
    for (var suff = 0; suff < 4; suff+=1){
      card += suff.toString();
      (function(card) {
        it('has a prefix of ' + card.slice(0,4) + ' and a length --->' + card.length , function(){
          expect(detectNetwork(card)).to.equal('China UnionPay')
        });
      })(card)
    }
  }
  // 622126-622925
  for (var sixPre = 622126; sixPre <= 622925; sixPre +=1){
    var carded = (sixPre + '000000000');
    for (var suf = 0; suf < 4; suf+=1){
      carded += suf.toString();
      (function(carded) {
        it('has a prefix of ' + carded.slice(0,6) + ' and a length --->' + carded.length , function(){
          expect(detectNetwork(carded)).to.equal('China UnionPay')
        });
      })(carded)
    }
  }
});


describe('Switch', function(){
  var expect = chai.expect;
  var prefQuadArr = ['4903', '4905', '4911', '4936', '6333', '6759'];
  var lenTest = ['11', '1111', '11111'];
  var prefHex = ['633110', '564182'];


  it('has a prefix of 564182 and a length of 16', function(){
    expect(detectNetwork('5641820000000000')).to.equal('Switch');
  });
  for (var counter = 0; counter < prefHex.length; counter+=1){
    for (var agg = 0; agg < lenTest.length; agg+=1){
      var preCard = (prefHex[counter] + '00000000');
      preCard += lenTest[agg];
      (function(preCard) {
        it('has a prefix of ' + preCard.slice(0,6) + ' and a length --->' + preCard.length , function(){
          expect(detectNetwork(preCard)).to.equal('Switch');
        });
      })(preCard)
    }
  } 

  for (var count = 0; count < prefQuadArr.length; count+=1){
    for (var agg = 0; agg < lenTest.length; agg+=1){
      var preCard = (prefQuadArr[count] + '0000000000');
      preCard += lenTest[agg];
      (function(preCard) {
        it('has a prefix of ' + preCard.slice(0,4) + ' and a length --->' + preCard.length , function(){
          expect(detectNetwork(preCard)).to.equal('Switch');
        });
      })(preCard)
    }
  }
});
