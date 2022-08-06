/* -------------------------------- THE TASK -------------------------------- */
// Implement the logFunctionNameDecorator, which will decorate a function so that
// function name will be printed on each call to it.

// Tip: you can get a function name by calling the function name property of the function object.
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name


/* -------------------------- YOUR CODE STARTS HERE ------------------------- */
// define the logFunctionNameDecorator function
/* --------------------------- YOUR CODE ENDS HERE -------------------------- */


/* -------------------------------- TEST CASE ------------------------------- */
// define some functions to be decorated:
function square(a) {
	return a**2
};
function sum(a,b) {
	console.log(`a+b=${a}+${b}`);
}

// decorate the functions:
square = logFunctionNameDecorator(square);
sum = logFunctionNameDecorator(sum);

// call the functions:
const res = square(2);
console.log(`res = ${res}`);
sum(1,2);


/* ----------------------------- EXPECTED OUTPUT ---------------------------- */
// Function 'square' have been called
// res = 4
// Function 'sum' have been called
// a+b=1+2

