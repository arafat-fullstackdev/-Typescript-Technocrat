{
  //* The Primitive : string, number, boolean,undefined, null;
  
  // any data type
let obj: any ={x : 0};
obj.foo;
// obj();
obj.bar = 100;

//console.log(obj);
//console.log(obj.bar);
let name:string =  '';
function getData(name: string){
  //console.log(`THe value is ${name}`);
}
getData('planetOne');

// Define Interface

interface UserAdmin {
    name: string;
    id: number;
    email: string;
    isAdmin: boolean;
}

 class adminAccount{
    name: string;
    id: number;
    email: string;
    isAdmin: boolean;

    constructor(name:string, id: number, email: string, isAdmin: boolean){
        this.name = name;
        this.id= id;
        this.email = email;
        this.isAdmin = isAdmin;

    }

 }

 // make instance 
 const admin: UserAdmin = new adminAccount('Leonard', 204, 'hello@gmail.com', true);
  console.log(admin);
//? Non - Primitive : Array, Object, Tuple, Enum, Function , Class etc
}
