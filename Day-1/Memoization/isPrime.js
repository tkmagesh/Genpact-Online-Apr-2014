/*Function memoization*/

function isPrime(n){
	if (typeof isPrime.result === "undefined")
		isPrime.result = {0 : false, 1 : true, 2 : true, 3 : true};
	if (typeof isPrime.result[n] !== "undefined"){
		console.log("From cache... ");
		return isPrime.result[n];
	}
	isPrime.result[n] = true;
	for(var i=2;i<= (n/2);i++)
		if (n % i === 0) {
			isPrime.result[n] = false;
			break;
		}
	console.log("Freshly brewed...");
	return isPrime.result[n];
}

/* Convert the above function in such a way that the result is cached but NOT publicly exposed*/
/* clue : Use closures */
