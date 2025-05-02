{
//? Function

//Learning function
// Normal Function
// Arrow Function

function add(num1: number, num2:number): number{
    return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method
const userA ={
    name: 'Abdullah',
    balance: 0,

    addBalance(balance: number):  number | string{
        return `My Balance IS: ${this.balance + balance}`;
    },
};

const arrMap: number[] = [10, 45,36,12];

const newArr: number[] = arrMap.map((elem: number): number=>  elem * elem);
}