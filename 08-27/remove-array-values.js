/**
 * Given an object, "removeArrayValues" removes any properties whose values are arrays.
 */
function removeArrayValues(obj) {
  console.log(Object.values(obj));
  Object.keys(obj).forEach( function (key) {
    if (Array.isArray(obj[key])) {
      console.log('Deleting [' + obj[key] + '] because it is an Array');
      delete obj[key];
    }
  });
  console.log(Object.values(obj));
}
removeArrayValues({
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there'],
  d: 'candy',
  e: {name: 'mike', age: 29}
});
