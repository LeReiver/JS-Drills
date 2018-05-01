/**
 * Given an array and an index, "getAllElementsButNth" 
 * returns an array with all the elements but the nth.
 */
 function getAllElementsButNth(array, n) {
  return array.filter(el => el !== array[n]);
}
getAllElementsButNth(['a', 'b', 'c'], 1);
