// Define a tuple type for a book: [string, string, number]
let book: [string, string, number] = ["The Great Gatsby", "F. Scott Fitzgerald", 1925,];

// Destructure the tuple into individual variables
const [title, author, year] = book;

// Log the individual values
console.log("Title:", title);
console.log("Author:", author);
console.log("Publication Year:", year);
