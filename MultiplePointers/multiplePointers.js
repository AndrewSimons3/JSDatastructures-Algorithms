//write a function called sumZero which accepts a sorted array of integers.
//The function hsould find the first pair where the sum is 0.
//Return an array that includes both values that sum to zero or undefined if a pair does not exist

// //naive example time complexity O(n^2)
// function sumZero(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = i+1; j < arr.length; j++) {
//       if(arr[i] + arr[j] === 0) {
//         return arr[i], arr[j];
//       }
//     }
//   }
// }


//time complexity O(n) using MULTIPLE POINTERS
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0){
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

//implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.  There can be negative numbers in the array, but it will always be sorted.
  function countUniqueValues(arr) {
    if(arr.length === 0) {
      return 0;
    }
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
      if(arr[i] !== arr[j]) {
        i++;
        arr[i] = arr[j]
      }
      console.log(i,j);
    }
    return i + 1;
  }