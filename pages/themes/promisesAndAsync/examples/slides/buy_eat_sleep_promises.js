const handleError = err=>{
	console.error(`Error: ${err}`)
}

const prepareDinner = function() {
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			// do work on prepare dinner
			const dinner = 'pizza'
			const success = true;

			if(success){
				console.log(`${dinner} is prepared!`);
				resolve(dinner);
			}else{
				reject(`Error: Can not buy dinner!`);
			}
		}, 1000);
	})
};

const eatDinner = function(dinner){
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			// do work on eat dinner
			const success = true;

			if(success){
				console.log(`${dinner} is eaten!`);
				resolve(`Sweet Dreams after ${dinner}`)
			}else{
				reject(`Error: Can not eat dinner!`);
			}
		}, 1000);
	})
}

const goToBed = function(msg){
	console.log(`${msg}`);
}


prepareDinner()
	.then(prepareRes=>eatDinner(prepareRes))
	.then(eatRes=>goToBed(eatRes))
	.catch(handleError)

