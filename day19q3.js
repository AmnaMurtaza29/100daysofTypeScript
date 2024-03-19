"use strict";
//Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
let gradeList = [55, 99, 88, 77, 66, 85, 90, 56, 78];
let averageGrade = gradeList.reduce((total, grade) => total + grade, 0) / gradeList.length;
console.log(averageGrade);
