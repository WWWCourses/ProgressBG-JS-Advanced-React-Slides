// TASK: filter only valid passwords:
// a valid password is
// 	1. at least 6 symbols long
// 	2. must contain at least one letter and number


const tests = [
	"a@# cdfasas!", 		// not (missing digit)
	"a@#9cdfas", 		// ok
	"1a@#sda", 		// ok
	"1@@@1344", 	// not (missong letter)
	"123ab", 		// not (length)
];

const rx = /^(?=.*\d)(?=.*[A-Za-z]).{6,}/
tests.filter( str => str.match(rx) ).forEach( str => console.log(str) );