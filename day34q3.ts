//Question 102: Calculate and log the absolute difference between the number -5 and 5.
function absoluteDifference(a: number, b: number): number {
    return Math.abs(a - b);
}

const num1 = -5;
const num2 = 5;
const difference = absoluteDifference(num1, num2);
console.log("The absolute difference between", num1, "and", num2, "is", difference);
