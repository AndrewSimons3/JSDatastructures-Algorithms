// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

productOfArray(arr) {
  if (arr.length === 0) {
      return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

//1 * productOfArray([2,3,10]) => 60
//2 * productOfArray([3,10]) => 60
//3 * productOfArray([10]) => 30
//return 10 * productOfArray([]) => 10