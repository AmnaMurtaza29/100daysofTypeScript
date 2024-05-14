class Car {
    model: string;
    year: number;
  
    constructor(model: string, year: number) {
      this.model = model;
      this.year = year;
    }
  
    getCarInfo(): string {
      return `Model: ${this.model}, Year: ${this.year}`;
    }
  }
  
  let myCar = new Car("Toyota", 2020);
  console.log(myCar.getCarInfo()); // Output: Model: Toyota, Year: 2020
  