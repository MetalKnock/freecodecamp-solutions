/*
Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
  let result = "";
  const arrUnicode = [];

  for (let i = 0; i < str.length; i++) {
    arrUnicode.push(str.charCodeAt(i));
  }

  for (let i = 0; i < arrUnicode.length; i++) {
    //If we are in the range of letters (65-90)
    if (arrUnicode[i] >= 65 && arrUnicode[i] <= 90) {
      arrUnicode[i] -= 13;
      //If, when subtracting, we go beyond the range with letters, then we move to the end of the alphabet
      if (arrUnicode[i] < 65) arrUnicode[i] += 26;
    }
    result += String.fromCharCode(arrUnicode[i]);
  }
  return result;
}

console.log(rot13("SERR YBIR?"));
