/*

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

function destroyer(arr) {
    const arr2 = Object.values(arguments).slice(1);
    
    function diffArray(arr1, arr2) {
      return arr1
      .concat(arr2)
      .filter((currentValue) => {
        if(arr1.indexOf(currentValue) != -1 && arr2.indexOf(currentValue) != -1) {
        } else {
          return currentValue;
        }
      })
    };
  
    return diffArray(arr, arr2);
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);