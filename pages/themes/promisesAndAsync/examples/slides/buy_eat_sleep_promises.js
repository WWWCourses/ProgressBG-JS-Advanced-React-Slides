let prepareDinner = function() {
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			const error = false;

			if(!error){
				console.log(`prepareDinner is fulfilled`);
				const dinner = 'pizza';
				resolve(dinner);
			}else{
				reject(`Error: Can not buy dinner!`);
			}
		}, 1000);
	})
};


let eatDinner = function(dinner, callback){
	return new Promise((resolve, reject)=>{
		setTimeout(() => {
			const error = false;

			if(!error){
				console.log(`eatDinner is fulfilled`);
				resolve(`${dinner} eaten`)
			}else{
				reject(`Error: Can not eat dinner!`);
			}
		}, 2000);
	})
}

let goToBed = function(msg){
	// console.log(`goToBed called`);
	console.log();
	console.log(`${msg}, let's go to bed!`);
}


prepareDinner()
	.then(eatDinner)
	.then(goToBed)
	.catch(errMsg=>console.error(errMsg))

console.log(`This code did not wait the dinner processes to end!\n`);
