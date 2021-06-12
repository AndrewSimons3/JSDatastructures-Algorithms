function power(base, exponent){
  if(exponent === 0) return 1;
  return base * power(base,exponent-1);
}

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

//power(2,4)
//return 2 * power(2, 3) --> 8 * 2 = 16
//return 2 * power(2, 2) --> 4 * 2 = 8
//return 2 * power(2, 1) --> 2 * 2 = 4 
//return 2 * power(2, 0) --> 2


