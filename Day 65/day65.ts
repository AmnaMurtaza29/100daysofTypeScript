// Function that calculates the area of a rectangle
const calculateRectangleArea = (width: number, height: number): number => {
    // Type annotations specify that width and height parameters are numbers
    // and the return value is also a number
    
    // Calculate the area by multiplying width and height
    const area: number = width * height;
    // Type annotation specifies that the variable 'area' is a number
    
    // Return the calculated area
    return area;
  }
  
  // Test the function with sample values
  const width: number = 5;
  const height: number = 3;
  const area: number = calculateRectangleArea(width, height);
  console.log(`The area of the rectangle with width ${width} and height ${height} is: ${area}`);
  