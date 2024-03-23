//Day 23 Question No. 2
//Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.

function multiplyDecimals(num1: number, num2: number): number {
    return Math.round((num1 * num2) * 100) / 100;
}

console.log(multiplyDecimals(0.5, 0.8)); // 0.4
