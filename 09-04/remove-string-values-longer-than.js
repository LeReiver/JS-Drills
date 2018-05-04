/**
 * Given an number and an object, "removeStringValuesLongerThan" 
 * removes any properties on the given object 
 * whose values are strings longer than the given number. 
 */
 function removeStringValuesLongerThan(num, obj) {
  Object.keys(obj).forEach( function (key) {
    console.log(obj[key]);
    if(obj[key].length > num) {
      delete obj[key];
    }
  }); console.log(Object.values(obj));
}

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};

removeStringValuesLongerThan(6, obj);
