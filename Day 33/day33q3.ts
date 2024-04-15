function getNextBirthdayDate(birthMonth: number, birthDay: number): Date {
    const today = new Date();
    const currentYear = today.getFullYear();
    let nextBirthday = new Date(currentYear, birthMonth - 1, birthDay); 
    if (nextBirthday < today) {
        nextBirthday = new Date(currentYear + 1, birthMonth - 1, birthDay);
    }
    return nextBirthday;
}

//My birthday is on June 29th
const myNextBirthday = getNextBirthdayDate(6, 29);
console.log("My next birthday is on:", myNextBirthday);
