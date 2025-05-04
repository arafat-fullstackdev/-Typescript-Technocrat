{
    // Generic

    // type GenericArray= Array<number>;
    // type GenericArray1= Array<string>;
    // type GenericArray2= Array<boolean>;

    //? Make Dynamic Generic
    type GenericArray<T>=Array<T>

    // const rollNum: number[]= [2,4,8,10];
    // const rollNum: Array<number>= [2,4,8,10];
    const rollNum: GenericArray<number>= [2,4,8,10];

    // const mentros: string[]= ["Mexz", "Bez", "Cez"];
    // const mentros: Array<string>= ["Mexz", "Bez", "Cez"];
    const mentros: GenericArray<string>= ["Mexz", "Bez", "Cez"];

    // const bollianArr: boolean[]= [true,false,true];
    // const bollianArr: Array<boolean>= [true,false,true];
    const bollianArr: GenericArray<boolean>= [true,false,true];

    const exampleFun=(x: number, y: number)=> x + y;
    exampleFun(5,9);

    //Array of Object
    const user:GenericArray<{name:string, age: number | string}> =[
        
        {
            name: 'Meheraj',
            age: 100,
        },
        {
            name: 'Shanayaz',
            age: 110,
        },
        {
            name: 'Jahankar Mahabub',
            age: '210',
            
        }
    ]

    // Generic Tuple
    type GenericTuple<X,Y>=[X,Y];
    const usrTupleMan: GenericTuple<string,string>=['Mr.X','Mr.Y'];
    const userWithId:GenericTuple<number,{name:string,email:string}>=[123,{name:'Mr.Mak', email:'mack@heyhey.com'}]
}