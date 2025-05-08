{
    // Constraints 
//* extends== constraint (mandatory)
const addToDeveloper =<T extends{name: string; email: string; id: number}>(student: T)=>{
    const course = 'TypeScript Developer';

    return{
        ...student,
        course
    }

    const student1 = addToDeveloper({
        name: 'Next Level developer',
        email:'hello@gmail.com',
        id:222,
        hasCPP: true,
        hasSmartW: true,
    });

    const student2 = addToDeveloper({
        name: 'Junior Level developer',
        email:'bello@gmail.com',
        id:333,
        hasCPP:false,
        hasSmartW: true,
    });

    const student3 = addToDeveloper(
        {
            name: 'TingTong',
           email:'çello@gmail.com',
           id: 333,
        });

    }


}