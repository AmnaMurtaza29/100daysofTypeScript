//Question 83: Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to lowercase, and logs both.

function convertToUpperCaseAndLowerCase(str: string): void {
    const upperCaseString = str.toUpperCase();
    const lowerCaseString = str.toLowerCase();

    console.log(`Uppercase: ${upperCaseString}`);
    console.log(`Lowercase: ${lowerCaseString}`);
}

const OneString = "Hello, World!";
convertToUpperCaseAndLowerCase(OneString);
