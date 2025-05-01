{
    //* Union Type

type FrontendDeveloper = 'React' | 'Angular' | 'Vue' | 'SveLts' | 'Nextjs' | 'Nuxtjs' | 'Nestjs';
type FullStackDeveloper = FrontendDeveloper | 'SQL' | 'MongoDM' | 'Backend' | 'Junior';
//type Developer = FrontendDeveloper | FullStackDeveloper | 'FullStackEngineer';

const developer: FrontendDeveloper = 'Nextjs';

type User={
    name: string;
    email?:string;
    gender: 'male' | 'female';
   isActive:  boolean; 
}
const userA: User={
    name: 'Sala',
    isActive: true,
    gender: 'male',
}

//? Intersection type

type FrontendEngineer={
    skills: string[];
    designation: 'FrontendEngineer';
}
type BackendEngineer={
    skills: string[];
    designation1: 'BackendEngineer';
}

type FullStackEngineer = FrontendEngineer & BackendEngineer;

const fullstackEngineer: FullStackEngineer={
    skills: ['HTML, CSS', 'Express', 'NodeJs'],
    designation: 'FrontendEngineer',
    designation1: 'BackendEngineer',
}

// one | = Union
// one & = Intersection(MAndatory all skills)

}