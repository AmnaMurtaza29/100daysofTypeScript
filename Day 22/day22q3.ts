//Day 22 Question No. 3.
//Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.

function booleanFunction(firstvalue: boolean, secondvalue: boolean){
    return firstvalue && secondvalue;
}

console.log(booleanFunction(true, false));
