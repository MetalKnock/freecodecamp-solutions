/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    return str
      .replace(/_/g, '-')
      .replace(/\B([A-Z])/g, ' $1')
      .toLowerCase()
      .replace(/\W/g, '-');
  }
  
  spinalCase('ThisIsSpinalTap');