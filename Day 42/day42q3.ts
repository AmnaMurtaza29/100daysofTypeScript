//Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.
const obj = {
    name: "Object",
    method: function() {
        const nestedFunc = () => {
            console.log(this.name); // `this` refers to `obj`
        };
        nestedFunc();
    }
};
obj.method(); // Output: Object
