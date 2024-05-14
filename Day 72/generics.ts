function returnType<T>(val: T): T {
    return val;
  }
  
  let numValue = returnType<number>(100);
  let strValue = returnType<string>("Elzero");
  
  console.log(numValue); // 100
  console.log(strValue); // Elzero
  