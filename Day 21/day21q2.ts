//Day 21 Question No. 2.
//Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

interface studentBluePrint {
    name: string;
    age: number;
    courses: string[];
}

let student: studentBluePrint = {
    name: "Huda",
    age: 19,
    courses: ["Computer Science", "Additional Maths", "Astro Physics", "Psychology"]
};


console.log(student);
