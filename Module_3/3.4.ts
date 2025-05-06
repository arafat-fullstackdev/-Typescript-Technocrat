{
    //instance of Guard or Narrowing

    class Animal{
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound: string){
            this.name = name;
            this.species =species;
            this.sound = sound;
   }
   makeSound(){
    console.log('I am Amking');
   }

    }

    class Dog extends Animal{
        constructor(name:string, species:string,sound:string){
          super(name,species,sound);
    }

    makeBar(){
        console.log('I am Barking');
    }

    }

    class Cat extends Animal{
        constructor(name:string, species:string,sound:string){
          super(name,species,sound);
    }

    makeMeaw(){
        console.log('I am Meaw');
    }

 }

 ///? USe Smart way

 const  isDog=(animal: Animal): animal is Dog =>{
    return animal instanceof Dog;
 }

 const  isCat=(animal: Animal): animal is Cat =>{
    return animal instanceof Cat;
 }
 const getAnimal=(animal: Animal)=>{
        
    if(isDog(animal)){
        animal.makeBar();
    }else if(isCat(animal)){
        animal.makeMeaw();
    }else{
        animal.makeSound();
    }
    }


    const dog = new Dog('Dog Bahi', 'Dog', 'Bark');
    const cat = new Cat('Cat Bahi', 'Cat', 'Meaw');
    //const dog = new Dog('Dog Bahi', 'Dog', 'Bark');
    //dog.makeSound();
    //cat.makeSound();
    getAnimal(dog);
    getAnimal(cat);
  

    //
}