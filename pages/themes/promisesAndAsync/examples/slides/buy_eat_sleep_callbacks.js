let prepareDinner = function(callback1, callback2) {
	setTimeout(() => {
		const error = false;

		if(!error){
			console.log(`prepareDinner is fulfilled`);
			const dinner = 'pizza';
			callback1(dinner, callback2);
		}else{
			console.error(`Error: Can not buy dinner!`);
		}
	}, 1000);
};


let eatDinner = function(dinner, callback){
	setTimeout(() => {
		const error = false;

		if(!error){
			console.log(`eatDinner is fulfilled`);
			callback(`${dinner} eaten`)
		}else{
			console.error(`Error: Can not eat dinner!`);
		}
	}, 2000);
}

let goToBed = function(msg){
	// console.log(`goToBed called`);
	console.log();
	console.log(`${msg}, let's go to bed!`);
}


prepareDinner(eatDinner,goToBed)

console.log(`This code did not wait the icecream processes!\n`);
