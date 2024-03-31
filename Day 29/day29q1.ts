//Question 85: Finding the Position of a Substring: Write a function that locates the first occurrence of the word "code" within any given string and returns its position.

function findCodePosition(inputString: string): number {
    let searchString = "code";
    let position = inputString.indexOf(searchString);
    return position;
}

// Example usage:
let testString = "This is a code example with code embedded in it.";
let codePosition = findCodePosition(testString);
console.log("Position of 'code' in the string:", codePosition);
