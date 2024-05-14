class Product {
    private static nextId: number = 1;
    private id: number;
    private name: string;
  
    constructor(name: string) {
      this.id = Product.generateNextId();
      this.name = name;
    }
  
    static generateNextId(): number {
      return Product.nextId++;
    }
  
    getProductInfo(): string {
      return `ID: ${this.id}, Name: ${this.name}`;
    }
  }
  
  let product1 = new Product("Widget");
  let product2 = new Product("Gadget");
  console.log(product1.getProductInfo()); // Output: ID: 1, Name: Widget
  console.log(product2.getProductInfo()); // Output: ID: 2, Name: Gadget
  