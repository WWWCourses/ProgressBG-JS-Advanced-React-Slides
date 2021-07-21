// given is a quote from Douglas Adams:
const quote = `A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.`

/* -------------------------------------------------------------------------- */
/*                                    TASK                                    */
/* -------------------------------------------------------------------------- */
// implement the filterWords() function, so that it will return an array,
// containing only the words starts with given startLetter, and are longer more
// than minLen symbols
function filterWords(str, startLetter,minLen) {
	// YOUR CODE HERE
}

// TEST
let filtered = filterWords(quote, 't', 2);
console.log(filtered);

// EXPECTED OUTPUT
// [ 'that', 'trying', 'the' ]