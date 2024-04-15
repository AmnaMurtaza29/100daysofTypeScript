function daysUntilNextNewYear(): number {
    let today = new Date();
    let newYear = new Date(today.getFullYear(), 11, 31); // December 31st of the current year
    let diff = newYear.getTime() - today.getTime(); // Difference in milliseconds
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24)); // Converts to days
    return days;
}

console.log(daysUntilNextNewYear() + " days until the next New Year's Day.");
