{
    // function--> generic function--> 
  const arrayCreate=(param: string): string[]=>{
    return [param];
  }

  const arrayWithGeneric= <T>(param: T): T[]=>{
    return [param];
  }

  // Define type

  type User={
    nameL: string;
    model: string;
    display: string;
    releaseYear: number;
    discount: boolean;
  }

  const res1=arrayCreate('Bangladesh');
  const arrayGeneric= arrayWithGeneric<boolean>(true);
  const arrayGeneric1= arrayWithGeneric<number>(10);
  const arrayGeneric2= arrayWithGeneric<undefined>(undefined);
  const arrayGeneric3= arrayWithGeneric<null>(null);

  const arrayGeneric4= arrayWithGeneric<User>({
    nameL:'Dell',
    model: 'XPS',
    display: '4k',
    releaseYear: 2017,
    discount: true,});


 //?Generic function with Tuple

         const arrayWithTuple= <T,Q>(param1: T, param2:Q): [T,Q]=>{
        return [param1,param2];
      }
    
      // Define type
    
      type User2={
        nameL: string;
        model: string;
        display: string;
        releaseYear: number;
        discount: boolean;
      }
    
      const res=arrayWithTuple<string, number>('Bangladesh', 2025);
      const arrayTuple= arrayWithGeneric<boolean>(true);
      const arrayTuple1= arrayWithGeneric<number>(10);
      const arrayTuple3= arrayWithTuple<undefined,boolean>(undefined,true);
      const arrayTuple4= arrayWithTuple<string, string>('Airbnb', 'Google');
      const arrayTuple5= arrayWithTuple<string, {name:string}>('Airbnb', {name:'Hikmah'});
      
      const arrayTuple6= arrayWithGeneric<User2>({
        nameL:'Dell',
        model: 'XPS',
        display: '4k',
        releaseYear: 2017,
        discount: true,});

        const addToDeveloper =<T>(student: T)=>{
            const course = 'TypeScript Developer';

            return{
                ...student,
                course
            }

            const student1 = addToDeveloper({
                name: 'Next Level developer',
                hasCPP: true,
                hasSmartW: true,
            });

            const student2 = addToDeveloper({
                name: 'Junior Level developer',
                hasCPP:false,
                hasSmartW: true,
            })
        }

      


}