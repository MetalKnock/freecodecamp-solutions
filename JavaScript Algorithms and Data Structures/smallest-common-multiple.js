/*

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
  function sortArr(arr) {
    return [...arr].sort((a, b) => a - b);
  }

  function range(min, max) {
    let rangeArr = [];
    for (let i = min; i <= max; i++) {
      rangeArr.push(i);
    }
    return rangeArr;
  }

  function gcd(x, y) {
    return !y ? x : gcd(y, x % y);
  }

  function lcm(x, y) {
    return (x * y) / gcd(x, y);
  }

  const sortedArray = sortArr(arr);
  const min = sortedArray[0];
  const max = sortedArray[1];
  let result = min;
  range(min, max).forEach((n) => (result = lcm(result, n)));
  return result;
}

smallestCommons([2, 10]);
