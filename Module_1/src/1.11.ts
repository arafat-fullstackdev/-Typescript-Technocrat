// Ternary Operator || Optional Chaining || Nullish coalescing Operator

const age: number = 29;

if(age>= 18){
    console.log('Adult');
}else{
    console.log('Minor');
};

const isAdult = age>= 18? 'Adult ' : 'Not Adult';
console.log({isAdult});

// Nullish Operator
// Null or Undefined decision --> Nullish Coalescing Operator

const isAuthenticated = "";
const result1 = isAuthenticated ?? 'Guest'; // Nullish oprator
const result2 = isAuthenticated ? isAuthenticated: 'Guest'; // Ternary always work on false value

console.log({result1}, {result2});

type User ={
    name: string;
    address:{
        city: string;
        road: string;
        permanantAddress?: string;
        presentAddress: string;
    }
}

const user: User={
    name: 'Mezba',
    address:{
        city: 'Comilla',
        road: 'nazrul avenue',
        presentAddress: 'TomsomBridge',


    }
};

const permanantAddress = user?.address?.permanantAddress?? 'No Prmanant Adress';
console.log({permanantAddress});