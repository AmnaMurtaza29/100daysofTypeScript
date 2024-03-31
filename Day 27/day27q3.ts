//Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.

function logObjectProperties(obj: any): void {
    for (let prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
            console.log(`${prop}: ${obj[prop]}`);
        }
    }
}

const sampleObject = {
    name: 'Faran',
    age: 26,
    city: 'Karachi'
};

logObjectProperties(sampleObject);
