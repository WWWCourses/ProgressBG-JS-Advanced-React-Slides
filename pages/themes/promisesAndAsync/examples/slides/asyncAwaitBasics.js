async function foo(x) {
	console.log(`async foo is executed`);

	return x**2
}

async function add(x) {
	console.log(`calc sum1`);
	sum1 = await foo(3)

	console.log(`calc sum2`);
	sum2 = await foo(3)

	console.log(`Total sum: ${sum1+sum2}`);

}

function print(msg) {
	console.log(msg);
}

console.log(`1`);
add(3)
console.log(`2`);

/* ------------------------------ more insights ----------------------------- */
// foo(3).then(print)

// foo(3).then(n=>console.log(`n:${n}`))

// console.log(foo(3));

