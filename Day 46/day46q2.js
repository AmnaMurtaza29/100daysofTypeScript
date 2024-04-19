"use strict";
/*Question 137: Implement a try-catch block to handle potential errors in a block of code.

Explain & TIP: The try-catch statement marks a block of statements to try, and specifies a response, should an exception be thrown. It's a critical feature for robust error handling in JavaScript.
*/
// Demonstrates using a try-catch block to handle errors
try {
    // Intentionally cause an error
    throw new Error("Something went wrong");
}
catch (error) {
    console.log(error.message); // Logs the error message
}
// This code tries to execute a block that throws an error, and the catch block handles the error gracefully.
