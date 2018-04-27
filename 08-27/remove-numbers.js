/**
 * Given a number and an object, 
 * removes any properties whose values are numbers greater than the given number.
 * @param {*} num 
 * @param {*} obj 
 */

function removeNumbersLargerThan(num, obj) {
  console.log(Object.values(obj)) ;
  Object.keys(obj).forEach(function (key) { 
    if (obj[key] > num) {
      console.log(obj[key] + ' is greater than ' + num + ', and will be removed');
      delete obj[key];
    }
  });
  console.log(Object.values(obj)) ;
}
removeNumbersLargerThan(5, {
  a: 8,
  b: 2,
  c: 'montana',
  d: 5,
  e: 20
});