// this time the resulting object should provide the count
// for each letter and an array of positions of each letter in the string.
// each element of the object can be an object with a count and an array of position indices.

'use strict';

var stringInfo = function(string) {

  var array = string.toLowerCase().split("")//.filter(function(x) { return x !== ' '; });

  var stringInfo = {};

  for (var i in array) {
    if (array[i] !== " ") {
      stringInfo[array[i]] = {
        count: array.filter(function(x) { return x === array[i] ;}).length,
        position: []
      }
    }
  }

  for (var i in array) {
    if (array[i] !== " ") {
      stringInfo[array[i]].position.push(i);
    }
  }

  return stringInfo;

};

console.log(stringInfo('Lighthouse in the House'));