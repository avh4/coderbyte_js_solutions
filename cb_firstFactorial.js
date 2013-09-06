//Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 
function FirstFactorial(num) { 

  // growing a factorial
  var result = 1;
  for (var i = num; i >= 2; i--){
  	result *= i;
  }
  num = result;
  return num; 
         
}
  

//My Test
var num = 4;
console.log(FirstFactorial(num)); //solution: 24