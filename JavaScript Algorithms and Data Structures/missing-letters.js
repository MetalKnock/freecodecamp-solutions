/*

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
    const indexFirst = ALPHABET.indexOf(str[0]); //index of the first letter of the string in the alphabet
    const indexLast = ALPHABET.indexOf(str[str.length-1]); //index of the last letter of the string in the alphabet
    for (let i = 0; i < str.length; i++) {
      if(str[i] != ALPHABET.slice(indexFirst,indexLast)[i]) {
        return ALPHABET.slice(indexFirst,indexLast)[i];
      }
    }
    return undefined;
  }
  
  fearNotLetter("stvwx");