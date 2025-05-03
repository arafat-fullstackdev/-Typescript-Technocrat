{
 //Interface (When we have non primitive data we use Interface)
 // ? Interface is work Object type in js

//using type alias
// using type Primitive and non primitive
type User1={
    name: string;
    age: number;
};
interface User2{
    name: string;
    age: number;
};


type rollNum = number;

const user1: User2={
    name: 'Pegeskian',
    age: 60,
};

// Make new type with intersection

type userWithRoll = User2 &{role:string};

interface  userWithRoll2 extends User2{
    role: string;
}


const user3: userWithRoll2={
    name: 'Leonardo',
    age: 100,
    role: 'Manager',
};

// Js--> object  array--> object function--> object Interface--> object
type Roll1=number[];
interface Roll2{
    [index: number]: number;
};

const roll: Roll2 = [1,2,3,4,5];

type Add1=(num1: number, num2: number) => number;
interface Add2{
    (num1: number, num2: number): number;
}

const add:Add2=(num1,num2)=> num1+num2;




}