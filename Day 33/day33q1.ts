//Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".
function getCurrentDateFormatted(): string {
    let now = new Date();
    let day = String(now.getDate());
    let month = String(now.getMonth() + 1);
    let year = now.getFullYear();

    if (day.length === 1) {
        day = '0' + day;
    }

    if (month.length === 1) {
        month = '0' + month;
    }

    return `${day}-${month}-${year}`;
}

console.log(getCurrentDateFormatted());
