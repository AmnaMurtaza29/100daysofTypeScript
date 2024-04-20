//Day 49 Challenge:
//Question 145: Create a function that accepts a callback and invokes it with some arguments.
// Define a function that accepts a callback
function invokeCallback(callback: (arg1: string, arg2: number) => void) {
    // Call the callback with some arguments
    callback("Hello", 123);
}

// Define a callback function
function myCallback(arg1: string, arg2: number) {
    console.log(`Callback invoked with arguments: ${arg1}, ${arg2}`);
}

// Call the function with the callback
invokeCallback(myCallback);
