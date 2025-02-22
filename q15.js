function factorial(n) {

    if ( n < 0) {
      return "Invalid input"

    }
    
   else  if (n === 0) {
   return 1
    }

    else  if ( typeof n !== "number" ) {
      return "Invalid input"
         }
    
    else{

        return n * factorial(n - 1);
    }
 
  }
  

  console.log(factorial(5))
  console.log(factorial(0))
  console.log(factorial(-3))
  console.log(factorial("a"))
  