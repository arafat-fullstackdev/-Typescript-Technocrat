{
//* Rest OPerator

// const userA ={
//     name: 'Universe',
// }

//Spreed Operator  
//Array 
const box1: string[] =['Bring', 'Cring', 'Dring', 'Ering'];
const box2: string[] =['Fring', 'Gring', 'Hring'];

const box3: string[] = [...box1, ...box2];
console.log(box3);

// box2.push(box1);
//Object 
const mentor1 ={
    typescript: 'Mezba',
    react: 'Mizan',
    redux: 'Miz',
}

const mentor2 ={
    prisma: 'Abdullah',
    nextjs: 'Tommoy',
    rdbms: 'Mahabud',
    grapql: 'Hossian',
}

const mentor3 ={
    ...mentor1,
    ...mentor2
}

// Rest Operator
// friend1:string, friend2:string,friend3:string
const greetFriends =(...friends: string[]) => {
    // console.log(`HI ${friend1}, ${friend2}, ${friend3}`);

     friends.forEach(friend=> console.log(`Hi ${friend}`))
}


greetFriends('Abul', 'Babul', 'kabul', 'Habul');


// Destructure Operator

}