"use strict";
//Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
// const createUserProfile = (name: string, age: number) => ({
//     getName: () => name,
//     getAge: () => age
// });
// // Create a user profile
// const user = createUserProfile("John Doe", 30);
// // Retrieve user's name and age
// console.log("User's Name:", user.getName());
// console.log("User's Age:", user.getAge());
const createUserProfile = (name, age) => ({
    getName: () => name,
    getAge: () => age
});
const user = createUserProfile("Huda Saleem", 18);
console.log("Username", user.getName());
console.log("User's Age", user.getAge());
