//Question 147: Explain how to handle errors in a callback pattern.
// Define a function that takes a callback to simulate an asynchronous operation
function performAsyncOperation(callback: (error: Error | null, result?: any) => void) {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
        // Simulate an error condition
        let error: Error | null = null; // Set to null to simulate no error
        // let error: Error | null = new Error("Error occurred"); // Uncomment to simulate an error
        if (error) {
            // If an error occurred, invoke the callback with the error
            callback(error);
        } else {
            // If no error occurred, invoke the callback with the result
            callback(null, { message: "Data successfully fetched" });
        }
    }, 1000); // Simulate a delay of 1 second
}
// usage of the function with error handling
performAsyncOperation((error: Error | null, result?: any) => {
    if (error) {
        // Handle the error
        console.error("An error occurred:", error.message);
    } else {
        // Process the result
        console.log("Result:", result.message);
    }
});
