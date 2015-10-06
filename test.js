var permut = require("permutation");
var chai = require('chai')

// ***************************************************************
// *                TEST PERMUTATION STRING                      *
// * *************************************************************
var expect = chai.expect
  , permutation = permut
  , permutString = 'This is a string'

expect(permutString).to.be.a('string');
expect(permutString).to.equal('This is a string');
expect(permutation).to.have.property('permuteArray');
expect(permutation).to.have.property('permuteString');


var assert = chai.assert;


// Test 1 : Permut String with 1 name
var string1ToPermut = 'Name'
assert.equal(string1ToPermut, 'Name');
var resultPermutation = permut.permuteString(string1ToPermut);
assert.lengthOf(resultPermutation, 1)
assert.equal(resultPermutation[0], 'Name');



// Test 2 : Permut String with 2 names
var string2ToPermut = 'Two Names'
assert.equal(string2ToPermut, 'Two Names');
var resultPermutation = permut.permuteString(string2ToPermut);
assert.lengthOf(resultPermutation, 1)
assert.equal(resultPermutation[0], 'Two Names');



// Test 3 : Permut String with 3 names
var string3ToPermut = 'Two Names Three'
assert.equal(string3ToPermut, 'Two Names Three');
var resultPermutation = permut.permuteString(string3ToPermut);
assert.lengthOf(resultPermutation, 4)
assert.equal(resultPermutation[0], 'Two Names Three');
assert.equal(resultPermutation[1], 'Two Names');
assert.equal(resultPermutation[2], 'Two Three');
assert.equal(resultPermutation[3], 'Names Three');


// Test 4 : Permut String with 4 names
var string4ToPermut = 'One Two Three Four'
assert.equal(string4ToPermut, 'One Two Three Four');
var resultPermutation = permut.permuteString(string4ToPermut);
assert.lengthOf(resultPermutation, 11)
assert.equal(resultPermutation[0], 'One Two Three Four');
assert.equal(resultPermutation[1], 'One Two');


// Test 5 : Permut String with characters between words
var string5ToPermut = 'One, Two-Three, four'
assert.equal(string5ToPermut, 'One, Two-Three, four');
var resultPermutation = permut.permuteString(string5ToPermut);
assert.lengthOf(resultPermutation, 4)
assert.equal(resultPermutation[0], 'One, Two-Three, four');
assert.equal(resultPermutation[1], 'One, Two-Three,');
assert.equal(resultPermutation[2], 'One, four');
assert.equal(resultPermutation[3], 'Two-Three, four');


// Test 6 : Permut null
var string6ToPermut = null
expect(function () { permut.permuteString(string6ToPermut) }).to.throw(Error);


// Test 7 : Permut undifined
var string7ToPermut = undefined
expect(string7ToPermut).to.be.undefined;
expect(function () { permut.permuteString(string7ToPermut) }).to.throw(Error);


// Test 8 : Permut empty string
var string8ToPermut = ''
var resultPermutation = permut.permuteString(string8ToPermut);
assert.lengthOf(resultPermutation, 0)


// Test 9 : Permut numbers
var string9ToPermut = 1
expect(function () { permut.permuteString(string9ToPermut) }).to.throw(Error);


// ***************************************************************
// *                TEST PERMUTATION ARRAY                       *
// * *************************************************************

var expect = chai.expect
  , permutation = permut
  , permutArray = []

expect(permutArray).to.be.a('array');
expect(permutation).to.have.property('permuteArray');
expect(permutation).to.have.property('permuteString');


var assert = chai.assert;


// Test 1 : Permut Array with 1 name
var array1ToPermut = ['Name'];
assert.equal(array1ToPermut[0], 'Name');
var resultPermutation = permut.permuteArray(array1ToPermut);
assert.lengthOf(resultPermutation, 1)
assert.equal(resultPermutation[0], 'Name');


// Test 2 : Permut Array with 2 names
var array2ToPermut = ['Two', 'Names']
assert.equal(array2ToPermut[0], 'Two');
assert.equal(array2ToPermut[1], 'Names');
var resultPermutation = permut.permuteArray(array2ToPermut);
assert.lengthOf(resultPermutation, 1)
assert.equal(resultPermutation[0], 'Two Names');


// Test 3 : Permut Array with 3 names
var array3ToPermut = ['Two', 'Names', 'Three']
assert.equal(array3ToPermut[0], 'Two');
assert.equal(array3ToPermut[1], 'Names');
assert.equal(array3ToPermut[2], 'Three');
var resultPermutation = permut.permuteArray(array3ToPermut);
assert.lengthOf(resultPermutation, 4)
assert.equal(resultPermutation[0], 'Two Names Three');
assert.equal(resultPermutation[1], 'Two Names');
assert.equal(resultPermutation[2], 'Two Three');
assert.equal(resultPermutation[3], 'Names Three');


// Test 4 : Permut Array with 4 names
var array4ToPermut = ['One', 'Two', 'Three', 'Four']
assert.equal(array4ToPermut[0], 'One');
assert.equal(array4ToPermut[1], 'Two');
assert.equal(array4ToPermut[2], 'Three');
assert.equal(array4ToPermut[3], 'Four');
var resultPermutation = permut.permuteArray(array4ToPermut);
assert.lengthOf(resultPermutation, 11)
assert.equal(resultPermutation[0], 'One Two Three Four');
assert.equal(resultPermutation[1], 'One Two');


// Test 5 : Permut Array with characters between words
var array5ToPermut = ['One,', 'Two-Three,', 'four']
assert.equal(array5ToPermut[0], 'One,');
assert.equal(array5ToPermut[1], 'Two-Three,');
assert.equal(array5ToPermut[2], 'four');
var resultPermutation = permut.permuteArray(array5ToPermut);
assert.lengthOf(resultPermutation, 4)
assert.equal(resultPermutation[0], 'One, Two-Three, four');
assert.equal(resultPermutation[1], 'One, Two-Three,');
assert.equal(resultPermutation[2], 'One, four');
assert.equal(resultPermutation[3], 'Two-Three, four');


// Test 6 : Permut null
var array6ToPermut = ['One', null]
expect(function () { permut.permuteArray(array6ToPermut) }).to.throw(Error);


// Test 7 : Permut undifined
var array7ToPermut = [undefined, null, 'One'] 
expect(function () { permut.permuteArray(array7ToPermut) }).to.throw(Error);


// Test 8 : Permut empty string
var array8ToPermut = ['']
var resultPermutation = permut.permuteArray(array8ToPermut);
assert.lengthOf(resultPermutation, 1)


// Test 9 : Permut numbers
var array9ToPermut = [1, 2]
expect(function () { permut.permuteArray(array9ToPermut) }).to.throw(Error);