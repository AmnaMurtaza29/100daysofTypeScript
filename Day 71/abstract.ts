abstract class Animal {
    abstract makeSound(): void;
  
    move(): void {
      console.log("Moving...");
    }
  }
  
  class Dog extends Animal {
    makeSound(): void {
      console.log("Woof!");
    }
  }
  
  let dog = new Dog();
  dog.makeSound(); // Output: Woof!
  dog.move(); // Output: Moving...
  