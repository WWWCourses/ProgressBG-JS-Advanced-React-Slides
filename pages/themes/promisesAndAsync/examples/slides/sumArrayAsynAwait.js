// Sum number in range 1.. 10_000_000

const start = 1;
const end = 5_000_000_000;

// function add(start, end) {
// 	let sum = 0;
// 	for (let i = start; i<end ; i++) {
// 		sum+=i;
// 	}
// 	return sum;
// }

// function syncAddCaller(start, end) {
// 	const sum = add(start, end/2) + add(end/2, end+1);
// 	console.log(`sum:${sum}`);
// }
// console.time(`SyncSum`)
// syncAddCaller(start, end)
// console.timeEnd(`SyncSum`)

async function asynAdd(start, end) {
	console.time(`sum ${start} - ${end}`)
	let sum = 0;
	for (let i = start; i<end ; i++) {
		sum+=i;
	}
	console.timeEnd(`sum ${start} - ${end}`)
	return sum;
}
async function asynAddCaller(start, end) {
	const sum1= await asynAdd(start, end/2)
	const sum2= await asynAdd(end/2, end+1)

	return sum1+sum2;
}
console.time(`AsyncSum`);
// (async ()=>{
// 	console.log(await asynAddCaller(start,end));
// })()
console.log(asynAddCaller(start,end));
// asynAddCaller(start,end).then(console.log)

console.timeEnd(`AsyncSum`)