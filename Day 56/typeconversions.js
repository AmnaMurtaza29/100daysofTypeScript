//Type Conversions
//Day 56
//What are the final values of all variables a, b, c and d after the code below?

// let c = ++a; // ?
// let d = b++; // ?
// let a = 1, b = 1;

// alert( ++a ); 
// alert( b++ ); 

// alert( a );
// alert( b ); 

console.log("" + 1 + 0);       // Output: "10"
console.log("" - 1 + 0);       // Output: -1
console.log(true + false);     // Output: 1
console.log(6 / "3");          // Output: 2
console.log("2" * "3");        // Output: 6
console.log(4 + 5 + "px");     // Output: "9px"
console.log("$" + 4 + 5);      // Output: "$45"
console.log("4" - 2);          // Output: 2
console.log("4px" - 2);        // Output: NaN
console.log("  -9  " + 5);     // Output: "  -9  5"
console.log("  -9  " - 5);     // Output: -14
console.log(null + 1);         // Output: 1
console.log(undefined + 1);    // Output: NaN
console.log(" \t \n" - 2);     // Output: NaN

let a = "1"; // prompt("First number?", 1);
let b = "2"; // prompt("Second number?", 2);

alert(a + b); // 12