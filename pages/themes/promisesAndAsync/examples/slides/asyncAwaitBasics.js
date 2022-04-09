async function foo(x) {
	console.log(`async foo is executed`);

	return x**2
}

async function add(x) {
	sum1 = await foo(3)
	sum2 = await foo(3)
	console.log(`Total sum: ${sum1+sum2}`);

}

function print(msg) {
	console.log(msg);
}

console.log(`1`);
add(3)
console.log(`2`);

// foo(3).then(print)
// console.log(foo(2));

