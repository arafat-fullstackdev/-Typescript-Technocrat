{
    // Abstraction  1. Interface  2. Abstract


    //? idea
    interface Vehicle1{
        startEngine(): void;
        stopEngine(): void;
        move(): void;
     }

     class Car implements Vehicle1 {
        startEngine(): void {
            console.log(`I am start Engine`)
        }

        stopEngine(): void {
            console.log(` I am Stop engine`)
        }

        move(): void {
            console.log(`I am moving`)
        }

        test(){
            console.log(`I am test`)
        }

        
     }

     const toyataCar = new Car();
      toyataCar.startEngine();

    
    //? Abstract Class

    abstract class  Car1{
        abstract startEngine(): void {
            console.log(`I am start Engine`)
        }

        abstract stopEngine(): void {
            console.log(` I am Stop engine`)
        }

       abstract move(): void {
            console.log(`I am moving`)
        }

        test(){
            console.log(`I am test`)
        }
    }

    class DunlopCar extends Car1{
         startEngine(): void {
            console.log(`Implement engine`)
         }

         stopEngine(): void {
            console.log(`Implement engine`)
         }
         move(): void {
            console.log(`Implement engine`)
         }

    }
    // const dunlopCar = new Car1();
    // dunlopCar.startEngine();
    

}