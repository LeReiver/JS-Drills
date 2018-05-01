/**
 * Given an object, "removeStringValues" 
 * removes any properties on the given object whose values are strings.
 */
 
 function removeStringValues(obj) {
  for(let value in obj) {
    console.log(obj[value]);
    if(typeof obj[value] === 'string') {
      delete obj[value];
    }
  }
  console.log(obj);
}
var obj = {
  name: 'Sam',
  age: 20
};
removeStringValues(obj);
