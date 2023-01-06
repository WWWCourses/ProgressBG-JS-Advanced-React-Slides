const handleError = err=>{
	console.error(`Error: ${err}`)
}

const prepareDinner = (successCallback, errorCallback)=>{
	setTimeout(() => {
		// do work on prepare dinner
		const dinner = 'pizza'
		const success = true;

		if(success){
			console.log(`${dinner} is prepared!`);
			successCallback(dinner);
		}else{
			errorCallback(`Can not buy dinner!`);
		}
	}, 1000);
};

const eatDinner = (dinner, successCallback, errorCallback)=>{
	setTimeout(() => {
		// do work on eat dinner
		const success = true;

		if(success){
			console.log(`${dinner} is eaten!`);
			successCallback(`Sweet Dreams after ${dinner}`)
		}else{
			errorCallback(`Can not eat dinner!`);
		}
	}, 1000);
}

const goToBed = function(msg){
	console.log(`${msg}`);
}

// Callback hell
prepareDinner((prepareRes)=>{
	eatDinner(prepareRes, (eatRes)=>{
		goToBed(eatRes)
	},handleError)
},handleError)

