{

    // Type Guard

type Alphameric = string | number;
const add=(param1 : Alphameric, param2: Alphameric): Alphameric =>{
    
    // ts guard
    if(typeof param1 === 'number' && typeof param2 === 'number'){
        return param1 + param2;
    }else{
        return param1.toString() + param2.toString();
    }
};

const result = add(2,3);
const result2 = add(2,'fg');

console.log(result);
console.log(result2);

// Guard IN

type  ClientUser ={
    name: string;
}

type AdminUser ={
    name: string;
    role: "Admin"
}

const getUser = (user: ClientUser | AdminUser)=>{
    if('role' in user){
        console.log(`My name is ${user.name} and my role is ${user.role}`);
        
    }else{
        console.log(`My name is ${user.name}`);

    }
}

const normalUser : ClientUser={
    name: 'Client Bahi',
}

const vipUser : AdminUser={
    name: 'Admin Bahi',
    role: 'Admin',
}

getUser(normalUser);
getUser(vipUser);

}