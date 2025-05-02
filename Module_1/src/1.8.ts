{
    // Destructuring in typescript
    // Object destructuring
    const  userA={
        id: 2045,
        name:{
        firstName: 'Mazba',
        middleName: 'Yusuf',
        lastName: 'Haque',
        },
        
            city: 'Feni',
            road: 'Mohifal',
            contactNo: 234000,
        
    }
//destructuring

// Name Alias = keep variable or define name
// ex: phoneNo and midName
const {contactNo: phoneNo, name:{middleName: midName}} = userA;



    // Array destructuring

    const myFriends = ['Chan', 'Ros', 'Bos','Cos','Dos','Rachel','Monica','Bonica'];
    const [a,,,BestF,Bamboo,...rest] = myFriends;   

}