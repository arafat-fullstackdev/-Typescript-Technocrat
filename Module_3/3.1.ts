{
    // Class 

    class Animal{
        //public name: string;
        //public species: string;
        //public sound: string;

        // parameter operator

        constructor(public name: string,public species: string,public sound: string){
        //  this.name  = name;
         //this.species = species;
         //this.sound = sound;
        } 

        makeSound(){
            console.log(`The ${this.name} says ${this.sound}`);
        }


    }

   

    const dog = new Animal('German shepeard', 'Dog', 'wolf wolf');
    const cat = new Animal('Persian Shep', 'Çat','Meaw Meaw');
    dog.makeSound();
    cat.makeSound();
    
    

}