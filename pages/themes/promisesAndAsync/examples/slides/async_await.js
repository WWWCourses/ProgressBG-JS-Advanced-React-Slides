let getDataPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve('Some data');
		reject('Can not get data!');
	}, 1000);
});
// using getDataPromise with Async/Await API:
async function renderData() {
	try {
		const data = await getDataPromise
		console.log(data);
	} catch (error) {
		console.error(error);
	}
}

// using getDataPromise with Promise API:
function renderData() {
	getDataPromise
	.then(data=>console.log(data))
	.catch(err=>console.log(err))
}

renderData();