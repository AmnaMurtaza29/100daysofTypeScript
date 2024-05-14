function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
    return `Value 1: ${valueOne}, Value 2: ${valueTwo}`;
  }
  
  console.log(multipleTypes<string, number>("Osama", 100)); // Value 1: Osama, Value 2: 100
 
  //Generic Classes
  class User<T> {
    constructor(public value: T) {}
  
    show(msg: T): void {
      console.log(`${msg} - ${this.value}`);
    }
  }
  
  let userOne = new User<string>("Elzero");
  userOne.show("Hello"); // Hello - Elzero
  