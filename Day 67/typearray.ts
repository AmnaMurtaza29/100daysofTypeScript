// Defining an array of book titles
let books: string[] = ["Little Women", "The Secret Garden", "Imran Series", "Maala"];

// Function to process each book
function processBook(book: string): void {
  console.log(`Book: ${book.toUpperCase()}`);
}

// Using forEach to iterate over each element in the array and process it
books.forEach(processBook);
