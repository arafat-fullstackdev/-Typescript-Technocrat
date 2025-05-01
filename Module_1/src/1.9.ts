{
    // Type Alias

    //? Type declare

    type Student={
        name: string;
        age: number;
        isActive: boolean;
        contactNo?: number;
        address: string;
    };

const student:{
    name: string;
    age: number;
    isActive: boolean;
    contactNo: number;
    address: string;

}={
    name: 'Mir',
    age: 50,
    isActive: true,
    contactNo: 18000000,
    address: 'Dhk'
}

const student1:{
    name: string;
    age: number;
    isActive: boolean;
    address: string;
}={
  name: 'Miaz',
  age: 46,
  isActive: true,
  address: 'Ctg'
}

const student3:{
    name: string;
    age: number;
    isActive: boolean;
    contactNo: number;
    address: string;
}={
    name: 'Daif',
    age: 55,
    isActive: true,
    contactNo: 13400000,
    address: 'Syt'
}

const student4: Student={
    name: 'Ismail',
    age: 44,
    isActive: true,
    address: 'Kln'
}


type IsAdmin= boolean;
type User= string;
type FunAdd=(x:number, y:number)=> number;

const user: User = "Shahensha";

const isAdmin: IsAdmin = true;

const add:FunAdd=(num1, num2) => num1 + num2;


}