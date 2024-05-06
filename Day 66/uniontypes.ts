//Day-66 of 100-Days-Of-Code  Challenge
/*Day-66 Task:
Learn about different TypeScript type system concepts by using the following guide and coding along with the examples provided in it:
TypeScript Type System Concepts*/

// 1. Union Types
function displayType(input: string | number) {
    if (typeof input === 'string') {
        console.log('Input is a string');
    } else {
        console.log('Input is a number');
    }
}



