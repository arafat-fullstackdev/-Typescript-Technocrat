{
    //? Type Assertion
let anything: any;
anything = 'Next Level Developer';
anything =true;
anything= 222;
// Make sure  type
(anything as number)

const kgtoGm = (value: string| number ):string | number | undefined => {
    if(typeof value === 'string'){
        const convertNum = parseFloat(value) * 1000;
        return ` The converted value is: ${convertNum}`;
    } ;
    if(typeof value === 'number'){
        const convertValue = value *1000;

        //return `The convert value: ${convertValue}`;
     return value *1000;
        //console.log(convertValue);
    // }else{
    //     return value *2000;
    // }

    }
};
const res1 = kgtoGm(3000) as number;
const res2 = kgtoGm('3000') as number ;
console.log(res1);
console.log(res2);
console.log("ts");


type CustomMes ={
    message: string;
}

try {
    
} catch (error) {
    console.log((error as CustomMes).message);
}

}