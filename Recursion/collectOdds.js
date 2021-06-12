// function collectOddValue(arr) {
//   let result = [];

//   function helper(helperInput) {
//     if(helperInput.length === 0) {
//       return;
//     }

//     if(helperInput.length[0] % 2 !== 0) {
//       result.push(helperInput[0])
//     }

//     helper(helperInput.slice(1))
//   }
//   helper(arr)

//   return result;
// }


//PURE RECURSION
function collectOddValues(arr) {
  let newArr = [];

  if(arr.length === 0) {
    return newArr;
  }

  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddvalues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5])
