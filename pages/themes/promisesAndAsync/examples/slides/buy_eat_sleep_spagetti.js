const handleError = err=>{
	console.error(`Error: ${err}`)
}

const prepareDinner = ()=>{
	setTimeout(() => {
		// do work on prepare dinner
		const dinner = 'pizza'
		const success = true;

		if(success){
			console.log(`${dinner} is prepared!`);
			eatDinner(dinner);
		}else{
			handleError(`Can not buy dinner!`);
		}
	}, 1000);
};

const eatDinner = (dinner)=>{
	setTimeout(() => {
		// do work on eat dinner
		const success = true;

		if(success){
			console.log(`${dinner} is eaten!`);
			goToBed(`Sweet Dreams after ${dinner} `)
		}else{
			handleError(`Can not eat dinner!`);
		}
	}, 1000);
}

const goToBed = (msg)=>{
	console.log(`${msg}`);
}

prepareDinner();
