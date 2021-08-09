// generate array of integers - needed for tests bellow:
let testArrays = [
	Array.from({length:1_000_000},(_,i)=>i+1),
	Array.from({length:2_000_000},(_,i)=>i+1),
	Array.from({length:3_000_000},(_,i)=>i+1),
];

function syncAdd(){
	testArrays.forEach(arr=>{
		console.log(arr.reduce((ac, el)=>ac+el));
	})
}
function asyncAdd(){
	//setTimeout is executed asynchronous and is not blocking the rest of the code!
	testArrays.forEach(arr=>{
		setTimeout(()=>{console.log( arr.reduce((ac, el)=>ac+el) )}, 0)
	})
}

console.log(`\n~~~~~ Sync execution ~~~~~`);
console.time('syncAdd');
syncAdd();
console.timeEnd('syncAdd');

console.log(`\n~~~~~ Async execution ~~~~~`);
console.time('asyncAdd');
asyncAdd();
console.timeEnd('asyncAdd');