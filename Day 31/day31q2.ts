//Question 92: Write a function to remove the last element from an array and return the removed element.

function removeLastElement<T>(arr: T[]): T | undefined {
    return arr.pop(); 
}

const fruits: string[] = ["Apple", "Grapes", "Mango"];
console.log(removeLastElement(fruits)); 
console.log(fruits); 
