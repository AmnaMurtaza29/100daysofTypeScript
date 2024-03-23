//Day 23 Question No. 1
//Question 67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., "5"). Return their sum as a number. 

function additionOfNumberString(number1: number, numberString: string): number {
    return number1 + Number(numberString);
}


console.log(additionOfNumberString(30, "2")); //32
