let promiseForEven = new Promise( (resolve, reject)=>{
	setTimeout(function(){
		let num = Math.round(Math.random()*100);
		console.log(`num = ${num}`);

		if(num%2 === 0){
			console.dir(`resolve:${resolve.name}`);

			resolve(num)
		}else{
			reject(num)
		}
	},2000)

})

function promiseFulfilled(num){
	console.log('Do something with '+num);
}

function promiseRejected(num){
	console.log('Error: '+num);
}


promiseForEven
	.then( promiseFulfilled )
	.catch( promiseRejected )


console.log(`I'm doing something important and I don't want to wait`);
