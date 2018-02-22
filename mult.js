function mult = (3, 5) => {
	let resultToSum = [];

	for (let i = 1; i <= 1000; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			resultToSum.push(i);
		}
	}
    
    let result = resultToSum.reduce(a, b) {
    	return a + b;
    }

    return result;
}

console.log(mult());
