// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num){
  if(num < 1) {
      return 0;
  }
return num + recursiveRange(num - 1)
}

//6 + recursiveRange(5)
//5 + recursiveRange(4)
//4 + recursiveRange(3)
//3 + recursiveRange(2)
//2 + recursiveRange(1)
//1 + recursiveRange(0)