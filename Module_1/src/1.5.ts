//* Reference type => Object

const user:{
    readonly company: string;  // type --> Literal type
    firstName: string;
    middleName?: string;  // optional type
    lastName: string;
    isAdmin: boolean;

}={    
    company: 'Programming village', 
    firstName: 'Mr.Abdullah',
    middleName: 'Hossain',
    lastName: 'Mahabud',
    isAdmin: true
    }

console.log(user);

console.log('TS tech');