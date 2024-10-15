class BankAccount1 {
    public id: number;
    public name: string;
   private _balance: number;
 get balance(): number {
    return this._balance;
 }
 get name1(): string {
    return this.name
 }
     constructor(id: number, name: string, _balance: number){
         this.id = id;
         this.name = name;
         this._balance = _balance;
     }
 }
 
 
 
 
 const myAccount1 = new BankAccount1(1, 'Sajib', 5000)
 
 console.log(myAccount1.balance)
 console.log(myAccount1.name1)