 /**
 * Given any object, "removeEvenValues" 
 * removes any properties whose values are even numbers.
 * Do this in place and return the original object, 
 * do not construct a cloned object that omits the properties.
 */ 
function removeEvenValues(obj) {
  console.log('The current values are ' + Object.values(obj));
  for (let key in obj) {
    if (obj[key] %2 === 0 ) {
      console.log(obj[key] + ' is an even value and will be deleted');
      delete obj[key];
    }
  }
  console.log('The remaining values are ' + Object.values(obj));
  return obj;
}

removeEvenValues({
  a: 2,
  b: 3,
  c: 4,
  d: 5
});
