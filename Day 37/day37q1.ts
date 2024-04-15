// Day 37 Challenge: Start Coding! 
/*Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.

Explain & TIP: You can get the current hour using the Date object and its getHours() method. Remember, hours are in 24-hour format, so 12 PM is 12.
*/
function greetBasedOnTime(): void {
    const currentHour: number = new Date().getHours();

    if (currentHour > 12) {
        console.log("Good Morning");
    }
}

greetBasedOnTime();

