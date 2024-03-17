// ---------------------------------- Task 1 ---------------------------------- //
/**
 * DESCRIPTION:
 * Write a function `calculateArea` that takes the radius of a circle as input and calculates its area. If the input is
 * negative, throw a custom Error with the message "Radius cannot be negative". Catch this error in the caller function
 * and return null.
 */

// YOUR CODE HERE


// TEST:
console.log(calculateArea(5)); // EXPECTED OUTPUT: 78.53981633974483
console.log(calculateArea(-1)); // EXPECTED OUTPUT: null

// ---------------------------------- Task 2 ---------------------------------- //
/**
 * DESCRIPTION:
 * Implement a function named `retryOperation` that attempts to execute a given operation (a function passed as an argument).
 * The operation should be retried up to 3 times if it throws an error. If after 3 attempts the operation still fails,
 * catch the error and log "Operation failed after 3 attempts".
 */

// YOUR CODE HERE

// TEST:
retryOperation(() => {
    throw new Error("Test Error");
}); // EXPECTED OUTPUT: "Operation failed after 3 attempts"

// ---------------------------------- Task 3 ---------------------------------- //
/**
 * DESCRIPTION:
 * Create a function `checkUserPermission` that takes an object with a `role` property and a string representing
 * the required role. If the object's role matches the required role, return "Access granted". If not, throw an
 * Error with the message "Access denied". Use try-catch to handle the error and return the error's message.
 */

// YOUR CODE HERE

// TEST:
console.log(checkUserPermission({ role: "admin" }, "admin")); // EXPECTED OUTPUT: "Access granted"
console.log(checkUserPermission({ role: "guest" }, "admin")); // EXPECTED OUTPUT: "Access denied"
