//Question 125: Modify a method in an object to use the this keyword to access another property in the same object.

const thisObject = {
    name: "Amna",
    age: 19,
    greet: function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

thisObject.greet(); // Output: Hello, my name is myObject and I am 25 years old.
