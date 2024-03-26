//Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
function swapValues() {
    let a = 15, b = 38; 
    console.log("Before swap: a =", a, "b =", b);

    let temp = a; 
    a = b; 
    b = temp; 
    console.log("After swap: a =", a, "b =", b); 
}

swapValues();
