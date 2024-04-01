//Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function calculateSum(numbers: number[]): number {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

const Numbers: number[] = [2, 4, 6, 8, 10];
console.log(calculateSum(Numbers)); //outputs 30
