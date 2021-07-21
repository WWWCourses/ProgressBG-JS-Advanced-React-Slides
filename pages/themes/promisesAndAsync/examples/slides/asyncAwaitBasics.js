async function foo(x) {
	return x**2
}

async function add(x) {
	sum1 = await foo(3)
	sum2 = await foo(3)
	console.log(sum1+sum2);

}

function print(msg) {
	console.log(msg);
}

add(3)
// foo(3).then(print)
// console.log(foo(2));

