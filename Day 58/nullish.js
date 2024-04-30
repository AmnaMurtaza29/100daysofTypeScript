// Task 1: Set default value using nullish coalescing operator (??)
let height = null;
let defaultHeight = height ?? 100;
console.log(defaultHeight); // Output: 100 since height is null

// Task 2: Select first non-null/undefined value using ?? and ||
let firstName = null;
let lastName = null;
let nickName = "SuperCoder";
let userName = firstName ?? lastName ?? nickName ?? "Anonymous";
console.log(userName); // Output: "SuperCoder" since nickName is the first non-null/undefined value
