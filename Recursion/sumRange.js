function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num-1);
}

//sumRange(4) // 4 + 3 + 2 + 1 = 10



// !4 factorial is 4 * 3 * 2 * 1
//iterative solution
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i
  }
  return total;
}

//recursive solution
function factorial(num) {
  if (num === 1) return 1
  return num * factorial(num - 1)
}
//factorial(5) is 5 * 4 * 3 * 2 * 1 = 120