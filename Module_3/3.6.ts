{
    // Greater And Setter

    
        //
      class BankAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;
      
        constructor(id: number, name: string, balance: number){
        
            this.id =id;
            this.name = name;
            this._balance =balance;
        }
      // Safty  check
    //   public addDeposit(amount: number){
    //     this._balance = this._balance + amount;
    //   }
    
    //   public getBalance(){
    //      return this._balance;
    //   }
  //? Greater
  get Balance (){
    return this._balance;
  }     
set Deposit(amount: number){
    this._balance = this._balance + amount;


    }
    
    class StudentAccount extends BankAccount{
    //    test(){
    //     this.addDeposit(50);
    //     this.getBalance();
    //     this._balance;
    //    }
    }
     
    
    const poorManAccount = new BankAccount(321, 'Mr Bammsi Barek', 3435);
    poorManAccount.Deposit= 50;

    //poorManAccount.name = 'Brake';
    //poorManAccount.balance = 75;
    // poorManAccount.addDeposit(300);
    // poorManAccount.getBalance();
    // const myBalance = poorManAccount.getBalance();
    const myBalance = poorManAccount.Balance; // us like Property
    console.log(myBalance);
    
    
    
    
        //
    


}