const EvenFibonacci = () => {
	//create fib number 
	//check if its modulo 2 === 0
	//sum it to result
	
	let result = 2;
  
  let f1 = 1;
  let f2 = 2;
  
  while (f2 < 4000000) {
		let fFinal = f1 + f2;
		f1 = f2;
		f2 = fFinal;
		
		if (f2 % 2 === 0) {
		  result += f2;
		}
		
		// if (f2 % 2 === 0) {
		//   result += f2;
		// }
  }

	return result;
}


console.log(EvenFibonacci());