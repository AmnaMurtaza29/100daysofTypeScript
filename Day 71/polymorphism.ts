class Animal {
    makeSound(): void {
      console.log("Some generic animal sound");
    }
  }
  
  class Cat extends Animal {
    makeSound(): void {
      console.log("Meow");
    }
  }
  
  let genericAnimal: Animal = new Animal();
  let specificCat: Animal = new Cat();
  
  genericAnimal.makeSound(); // Output: Some generic animal sound
  specificCat.makeSound(); // Output: Meow
  