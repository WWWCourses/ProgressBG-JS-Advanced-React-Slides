// TASK: match only string at least 4 symbols long with at least one digit
const tests = [
	"abcd", 		// not (missing digit)
	"ab1d", 		// ok
	"1bcd", 		// ok
	"abcd123", 		// ok
	"123", 			// not (length)
];

const rx = /^(?=.*\d).{4,}/
tests.filter( str => str.match(rx) ).forEach( str => console.log(str) );