/**
 * Given a string, "convertDoubleSpaceToSingle" 
 * returns the passed in string, 
 * with all the double spaces converted to single spaces.
 */
 function convertDoubleSpaceToSingle(str) {
   return str.split('  ').join(' ');
}
convertDoubleSpaceToSingle("string  with  double  spaces");
