/**
 * Given an object, "removeNumberValues" 
 * removes any properties whose valuse are numbers.
 */
 
function removeNumberValues(obj) {
  for(let key in obj) {
    console.log(obj[key]);
    if(!isNaN(obj[key])) {
      delete obj[key];
    }
  }
    console.log(obj);
}
var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
