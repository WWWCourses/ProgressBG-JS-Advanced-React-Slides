/* ------------------- if doStep functions are synchronous ------------------ */
// function doStep1(init) {
// 	return init + 1;
// }

// function doStep2(init) {
// 	return init + 2;
// }

// function doStep3(init) {
// 	return init + 3;
// }

// function doOperation() {
// 	let result = 0;
// 	result = doStep1(result);
// 	result = doStep2(result);
// 	result = doStep3(result);
// 	console.log(`result: ${result}`);
// }

// doOperation();

/* ------------------ if soStep functions works asynchronous ------------------ */
// function doStep1(init, callback) {
// 	setTimeout(() => {
// 		callback(init + 1)
// 	}, 1000);
// }

// function doStep2(init, callback) {
// 	setTimeout(() => {
// 		callback(init + 2)
// 	}, 500);
// }

// function doStep3(init, callback) {
// 	setTimeout(() => {
// 		callback(init + 3)
// 	}, 800);
// }

// function doOperation() {
// 	let result = 0;
// 	doStep1(0, (res1)=>{
// 		doStep2(res1, (res2)=>{
// 			doStep3(res2, (res3)=>{
// 				console.log(`result=${res3}`);
// 			})
// 		})
// 	})

// }

// doOperation();

/* ------------------- resolve callback hell with Promise ------------------- */
function doStep1(init) {
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			resolve(init + 1)
		}, 1000);
	})
}

function doStep2(init) {
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			resolve(init + 2)
		}, 500);
	})
}

function doStep3(init) {
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
			resolve(init + 3)
		}, 800);
	})
}

function doOperation() {
	doStep1(0)
		.then(res=>doStep2(res))
		.then(res=>doStep3(res))
		.then(res=>console.log(`result=${res}`));
}

doOperation();