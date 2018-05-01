/**
 * Given an array and an element, "addToFrontOfNew" 
 * returns a new array containing all the elements of the given array, 
 * with the given element added to the front. 
 */
 function addToFrontOfNew(arr, element) {
  console.log(`Original array: [${arr}]`);
  var newArr = [element].concat(arr);
  return newArr;
}
var input = [1, 2];
addToFrontOfNew(input, 3);
