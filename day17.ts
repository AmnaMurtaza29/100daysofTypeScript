//Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.

function multipleHobbies(...hobbies: string[]) {
    hobbies.forEach(hobby => {
        console.log(`I love to ${hobby}.`);
    });
}

// Calls the function with three hobbies
multipleHobbies("bake", "read", "code", "write");





//Question 50: Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.

let myidealRoutine = `The ideal routine that I somewhat 50-70% follow is:
1. Waking up early and not sleeping after fajar prayer.
2. Working for 4-5 hours without any distractions.
3. Writing and Journalling on daily basis.
4.Reading on daily basis.
5. Doing Istigfaar more time daily basis.`

console.log(myidealRoutine);






//Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.

function calculateArea(width: number, height: number): number {
    return width * height;
}

let calculateAreaArrow = (width: number, height: number): number => width * height;

console.log(calculateAreaArrow(7, 9)); 