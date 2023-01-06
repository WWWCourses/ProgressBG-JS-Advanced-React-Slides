

let doSimplePromise = x=>{
	return new Promise( (resolve, reject)=>{
		console.log(`I'm the promise executor. I'll accept and call your 'resolve' and 'reject' functions.`);

		let error = x%2==0;

		if(!error){
			console.log(`Promise resolved`);
			resolve('Here is your data');
		}else{
			console.log(`Promise rejected`);
			reject('Ups, something went wrong!');
		}
	} )
};

let actionOnFulfilledPromise = function(data) {
	console.log(data);
}

let actionOnRejectedPromise = function(err) {
	console.error(err);
}

doSimplePromise(3)
	.then(actionOnFulfilledPromise)
	.catch(actionOnRejectedPromise)
