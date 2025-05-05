{
    //Inheritance  --> extends keyword

    class CompanyC {
        name: string;
        id: number;
        role: string;
        address: string;

        constructor(name: string, id: number, role: string, address: string){
            this.name = name;
            this.id = id;
            this.role = role;
            this.address = address;
        }

       getSleep(numOfHour: number){
        console.log(`The employee of: ${this.name} will sleep for${numOfHour}`)
       }
    }
    class employee extends CompanyC {
        // name: string;
        // id: number;
        // role: string;
        // address: string;

        constructor(name: string, id: number, role: string, address: string){
            // this.name = name;
            // this.id = id;
            // this.role = role;
            // this.address = address;
            super(name, id,role, address);
        }

       getSleep(numOfHour: number){
        console.log(`The employee of: ${this.name} will sleep for${numOfHour}`)
       }
    }

     //make instance method

     const emp1 = new employee('Rahim', 231, 'Developer', 'ctg');

     // new class
     class manager extends CompanyC {
        // name: string;
        // id: number;
        // role: string;
        // address: string;
        designation : string;

        constructor(name: string, id: number, role: string, address: string, designation: string){
            // this.name = name;
            // this.id = id;
            // this.role = role;
            // this.address = address;
            super(name, id, role, address)
            this.designation = designation;

        }
    
   takeProject(numOfProject: number){
        console.log(`The manager of: ${this.name} will take offer ${numOfProject}`);
       }
    }

    const managre1 = new manager('Litcon', 243, 'Senior manager', 'Jseeor', 'Senior');
    
    
    
}