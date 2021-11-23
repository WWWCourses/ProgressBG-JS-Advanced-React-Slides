// TASK: filter only valid passwords:
// a valid password is
// 	1. at least 6 symbols long
// 	2. must contain at least one letter and number


const tests = [
	"a@# cdfasas!", 		// not (missing digit)
	"a@#9cdfas", 		// ok
	"1a@#sda", 		// ok
	"abcd123", 	// ok
	"123", 		// not (length)
];

const rx = /^(?=.*\d).{4,}/
tests.filter( str => str.match(rx) ).forEach( str => console.log(str) );