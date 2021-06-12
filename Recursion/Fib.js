// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
//1,1,2,3,5,8,13,21 etc.

function fib(num){
  if(num < 3) return 1;
  return fib(num-1) + fib(num-2)
}

