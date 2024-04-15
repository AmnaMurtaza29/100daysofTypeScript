//Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorizeAge(age: number): string {
    let ageGroup: string;

    if (age < 13) {
        ageGroup = 'Child';
    } else if (age >= 13 && age <= 19) {
        ageGroup = 'Teenager';
    } else {
        ageGroup = 'Adult';
    }

    return ageGroup;
}

// Test the function with different ages
const person1Age: number = 8;
const person2Age: number = 16;
const person3Age: number = 25;
console.log(`Person 1, age ${person1Age}, belongs to the ${categorizeAge(person1Age)} age group`);
console.log(`Person 2, age ${person2Age}, belongs to the ${categorizeAge(person2Age)} age group`);
console.log(`Person 3, age ${person3Age}, belongs to the ${categorizeAge(person3Age)} age group`);
