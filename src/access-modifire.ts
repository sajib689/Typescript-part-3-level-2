class BankAccount {
   public id: number;
   public name: string;
  private balance: number;

    constructor(id: number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
}




const myAccount = new BankAccount(1, 'Sajib', 5000)

console.log(myAccount)