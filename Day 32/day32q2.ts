//Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function filterNumbers(numbers :number[]): number[] {
    return numbers.filter(number => number > 10);
}

let numbers: number[] = [16, 18, 19, 21, 22, 25]
console.log(filterNumbers(numbers));
