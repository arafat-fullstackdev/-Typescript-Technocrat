{
    // Polimorphism

    class Person{
        getSleep(){
            console.log('Person:I am sleeping 8 hours')
        }
    }

    class Student extends Person {
        getSleep(){
            console.log('Student:I am sleeping 7.5 hours')
        }
    }

    class Developer extends Person{
        getSleep(){
            console.log('Developer:I am sleeping 6 hours')
        }
    }

      const getSleepInHour=(param: Person)=>{
    param.getSleep();
   }

    const person = new Person();
    const person1 = new Student();
    const person2 = new Developer();

    getSleepInHour(person);
    getSleepInHour(person1);
    getSleepInHour(person2);

    //? Shape

    class Shape{
        getArea (): number{
            return 0;
            }
    }

    // p* r* r  for Circle()
    class Circle extends Shape{
        radius: number;
        constructor(radius: number){
            super();
            this.radius = radius;
            
        }
        getArea(): number {
            return Math.PI * this.radius *this.radius;
        }
    }

    // Second  Rectangle
    // height * width
    class Rectangle extends Shape{
        hight: number;
        width: number;
        constructor(hight: number,width: number){
            super();
            this.hight = hight;
            this.width =width
            
        }
        getArea(): number {
            return this.hight *this.width;
        }
    }

    // Make function instance
    const getShapeArea = (param: Shape)=>{
       console.log(param.getArea());
    }

    const shape = new Shape()
    const circle = new Circle(10);
    const rectangle = new Rectangle(10, 22);
    
 getShapeArea(shape);
 getShapeArea(circle);
 getShapeArea(rectangle);


}