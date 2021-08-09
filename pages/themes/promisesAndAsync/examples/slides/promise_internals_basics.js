function executor(resolve, reject){
	console.log(`I'm the promise executor. I'll accept and call your 'resolve' and 'reject' functions.`);

	let error = false;

	if(!error){
		console.log(`Promise resolved`);
		resolve('Here is your data');
	}else{
		console.log(`Promise rejected`);
		reject('Ups, something went wrong!');
	}
};

let simplePromise = new Promise( executor );

let actionOnFulfilledPromise = function(data) {
	console.log(data);
}

let actionOnRejectedPromise = function(err) {
	console.error(err);
}

simplePromise
	.then(actionOnFulfilledPromise)
	.catch(err=>console.log(err))
