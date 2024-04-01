//Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

let words :string[] = ['Python', 'Java', "JavaScript", 'TYpeScript']

let lengths: number[] = words.map(word => word.length)

console.log(lengths);
