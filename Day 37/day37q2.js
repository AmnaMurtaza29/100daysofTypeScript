"use strict";
//Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function assignGrade(score) {
    let grade;
    if (score >= 90) {
        grade = 'A';
    }
    else if (score >= 80) {
        grade = 'B';
    }
    else if (score >= 70) {
        grade = 'C';
    }
    else if (score >= 60) {
        grade = 'D';
    }
    else {
        grade = 'F';
    }
    return grade;
}
// Test the function with a sample score
const studentScore = 85;
const studentGrade = assignGrade(studentScore);
console.log(`The student's score of ${studentScore} corresponds to grade ${studentGrade}`);
