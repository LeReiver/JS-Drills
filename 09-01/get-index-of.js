/**
 * Given a character and a string, "getIndexOf" 
 * returns the first position of the given character 
 * in the given string.
 * Notes:
 * When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
 * If the character does not exist in the string, it should return -1.
 * Do not use the native indexOf function in your implementation.
 */
 
 function getIndexOf(char, str) {
    for (let i=0; i<str.length; i++) {
      if (str[i] == char) {
        console.log(i);
        return i;
      } else if (!str.includes(char)) {
         return -1;
       }
    }
   }
getIndexOf('a', 'I am a hacker');
