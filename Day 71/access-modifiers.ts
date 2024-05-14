class BankAccount {
    public accountNumber: string;
    private balance: number;
  
    constructor(accountNumber: string, balance: number) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    public deposit(amount: number): void {
      this.balance += amount;
    }
  
    public getBalance(): number {
      return this.balance;
    }
  }
  
  let account = new BankAccount("123456", 1000);
  account.deposit(500);
  console.log(account.getBalance()); // Output: 1500
  