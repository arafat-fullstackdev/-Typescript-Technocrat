
{

    // Nullable type | Unknown type
    const searchName=(value: string | null| undefined) =>{
        if(value){
            console.log('Searching');
        }else{
            console.log('There is not searching');
        }
    }



    searchName('Hello');
    searchName('');
    searchName(null);
    searchName(undefined);

    // Unknown type
    const getSpeedMeterPerSecond =(value: unknown)=>{
    if(typeof value === 'number'){
        const changableValue = (value * 1000)/ 3600;
        console.log(`The value is:${changableValue} ms^-1`);
    }else if( typeof value === 'string'){
         //const  valueInNumber = (value.split(' '));
         const  [res,unit] = (value.split(' '));
         const changableValue = (parseFloat(res) * 1000)/ 3600;
         console.log(`The value is:${changableValue} ms^-1`);
         //  console.log(res);
        //  console.log(unit);
    }else{
        console.log('Give me correct value')
    }

    };
    //getSpeedMeterPerSecond(124);
    getSpeedMeterPerSecond(`1000 kmh^-1`);
    getSpeedMeterPerSecond(2000);
    getSpeedMeterPerSecond(null);


    // Never type
    const throwError=(msg: string): never=>{
        throw new Error(msg);
    }
    throwError("Something went wrong");

    // use function
    // function throwError(msg: string){
    //     throw new Error(msg);
    // }
    // throwError("Something went wrong");


}