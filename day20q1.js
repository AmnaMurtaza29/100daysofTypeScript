"use strict";
//Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function averageScoreFunc(...scores) {
    let total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
}
console.log(averageScoreFunc(50, 70, 80, 100, 67));
