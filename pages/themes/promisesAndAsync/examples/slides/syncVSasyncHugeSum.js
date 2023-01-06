// generate array of integers - needed for tests bellow:
let testArrays = [
	Array.from({length:15_000_000},(_,i)=>i+1),
	Array.from({length:16_000_000},(_,i)=>i+1),
	Array.from({length:17_000_000},(_,i)=>i+1),
];

function syncAdd(){
	console.log(`\n~~~~~ Sync execution ~~~~~`);
	console.time('syncAdd');

	testArrays.forEach(arr=>{
		console.log(`Work on ${arr.length}`);
		console.log(arr.reduce((ac, el)=>ac+el));
	})

	console.timeEnd('syncAdd');
}
function asyncAdd(){
	console.log(`\n~~~~~ Async execution ~~~~~`);
	console.time('asyncAdd');

	//setTimeout is executed asynchronous and is not blocking the rest of the code!
	testArrays.forEach(arr=>{
		console.log(`Work on ${arr.length}`);
		setTimeout(()=>{console.log( arr.reduce((ac, el)=>ac+el) )}, 0)
	});

	console.timeEnd('asyncAdd');
}


// syncAdd();
asyncAdd();
