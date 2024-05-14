// Task 1: Shape Definition Task
interface Animal {
    name: string;
    legs: number;
  }
  const dog: Animal = {
    name: "Buddy",
    legs: 4
  };
  console.log("Dog:", dog);
  // Task 2: Interface Method and Parameters Task
  interface Calculator {
    add(num1: number, num2: number): number;
  }
  class BasicCalculator implements Calculator {
    add(num1: number, num2: number): number {
      return num1 + num2;
    }
  }
  const calc = new BasicCalculator();
  console.log("Sum:", calc.add(5, 3));
  // Task 3: Reopen The Interface Task
  interface Person {
    name: string;
    age: number;
  }
  interface Person {
    email: string;
  }
  const person: Person = {
    name: "Alice",
    age: 30,
    email: "alice@example.com"
  };
  
  console.log("Person:", person);
  