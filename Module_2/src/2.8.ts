{
    // Asyncronous
    
    const createPromise=()=>{
        return new Promise<string>((resolve, reject)=>{
            // setTimeout(()=>{
            //     resolve('Promise return');
            // })
        const data: string = 'Something is here';
        if(data ){
            resolve(data);
        }else{
            reject('Data not found');
        }    
    });

    }
    // calling data from promise

    // createPromise();
    const getData = async():Promise<string> =>{
        const data = await createPromise();
        
        return data;
        //console.log(data);
    }
    getData();

    // New Promise 
    type SomeData = {something: string};

    const createCod = async():Promise<SomeData> =>{
       return new Promise<SomeData>((resolve, reject)=>{
        const data1: SomeData = {something: "Some do"};
        if(data1){
            resolve(data1);
        }else{
            reject('Data Boolean not found');
        }

       });

  }
 // calling fun
 const getCode = async(): Promise<SomeData>=>{
   
    const code: SomeData = await createCod();
    return code;
 }

 getCode();

}