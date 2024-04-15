// Day 36 Challenge: Start Coding! 
//Question 106: Determine if a given year is a leap year using comparison operators.
function isLeapYear(year: number): boolean {
    // Check if the year is divisible by 4
    let divisibleBy4: boolean = year % 4 === 0;
    
    // Check if the year is divisible by 100
    let divisibleBy100: boolean = year % 100 === 0;
    
    // Check if the year is divisible by 400
    let divisibleBy400: boolean = year % 400 === 0;
    
    // Check if it's a leap year according to the rules
    return (divisibleBy4 && !divisibleBy100) || divisibleBy400;
}
// Test the function
const yearToCheck: number = 2024;
console.log(`${yearToCheck} is a leap year: ${isLeapYear(yearToCheck)}`);
