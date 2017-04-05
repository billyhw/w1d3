'use strict';

var countLetters = function(string) {

  var array = string.toLowerCase().split("").filter(function(x) { return x !== ' '; });

  var count = {};

  for (var i of array) {
    count[i] = array.filter(function(x) { return x === i ;}).length;
  }

  return count;
};

console.log(countLetters('Lighthouse in the House'));