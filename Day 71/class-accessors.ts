class User {
    private _age: number;
  
    constructor(age: number) {
      this._age = age;
    }
  
    get age(): number {
      return this._age;
    }
  
    set age(newAge: number) {
      if (newAge >= 0) {
        this._age = newAge;
      } else {
        console.log("Age cannot be negative.");
      }
    }
  }
  
  let user = new User(30);
  console.log(user.age); // Output: 30
  user.age = 35;
  console.log(user.age); // Output: 35
  user.age = -5; // Output: Age cannot be negative.
  