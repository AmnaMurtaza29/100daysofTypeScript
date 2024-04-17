//Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
let str = "Hello World";
let vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (vowels.includes(char)) {
        console.log(`First vowel found at index ${i}, which is '${char}'.`);
        break;
    }
}
