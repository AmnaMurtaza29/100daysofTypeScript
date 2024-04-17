//Question 115: Use a switch statement to log the days of the week based on a number (1-7).

function logDayOfWeek(dayNumber: number): void {
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number. Please enter a number between 1 and 7.");
            break;
    }
}

logDayOfWeek(1); // Output: Sunday
logDayOfWeek(4); // Output: Wednesday
logDayOfWeek(8); // Output: Invalid day number. Please enter a number between 1 and 7.
