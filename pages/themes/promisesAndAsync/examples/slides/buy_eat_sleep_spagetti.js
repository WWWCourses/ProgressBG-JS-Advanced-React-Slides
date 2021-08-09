let prepareDinner = function() {
	setTimeout(() => {
		const error = false;

		if(!error){
			console.log(`prepareDinner is fulfilled`);
			const dinner = 'pizza';
			eatDinner(dinner);
		}else{
			console.error(`Error: Can not buy dinner!`);
		}
	}, 1000);
};


let eatDinner = function(dinner){
	setTimeout(() => {
		const error = false;

		if(!error){
			console.log(`eatDinner is fulfilled`);
			goToBed(`${dinner} eaten`)
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

TASK:
// prepareDinner and if it is fulfilled
// then eatDinner and if it is fulfilled
// then goToBed



prepareDinner();

console.log(`This code did not wait the dinner processes to end!\n`);
