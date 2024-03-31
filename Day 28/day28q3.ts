//Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

function replaceJavaScriptWithTypeScript(sentence: string): string {
    return sentence.replace(/JavaScript/g, 'TypeScript');
}

// Example usage:
const inputSentence = "JavaScript is a programming language. JavaScript is widely used for web development.";
const replacedSentence = replaceJavaScriptWithTypeScript(inputSentence);
console.log(replacedSentence);
