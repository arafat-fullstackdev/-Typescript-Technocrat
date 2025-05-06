{
    // Encapsulation

    //Public
    //private
    //Protected

    {
        //
      class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;
        // private _balance: number;
      
        constructor(id: number, name: string, balance: number){
        
            this.id =id;
            this.name = name;
            this._balance =balance;
        }
      // Safty  check
      public addDeposit(amount: number){
        this._balance = this._balance + amount;
        // Encapsulation
        this._balance
      }
    // Methods 
      public getBalance(){
         return this._balance;
      }

      private getBalanceN(){
        return this._balance;
     }
     
    }
    
    class StudentAccount extends BankAccount{
       test(){
        this.addDeposit(50);
        this.getBalance();
        // this._balance;
       }
    }
     
    
    const poorManAccount = new BankAccount(321, 'Mr Bammsi Barek', 3435);
    poorManAccount.name = 'Brake';
    //poorManAccount.balance = 75;
    poorManAccount.addDeposit(300);
    poorManAccount.getBalance();
    const myBalance = poorManAccount.getBalance();
    console.log(myBalance);
    
    
    
    
        //
    }
}