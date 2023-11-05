{
//

// union types 

type FrontendDeveloper = 'fakibazDeveloper' | ' juniorDeveloper'
type FullStackDeveloper = 'frontendDeveloper' | 'junioeDeveloper'

type Developer = FrontendDeveloper | FullStackDeveloper

const newDeveloper: FrontendDeveloper = 'fakibazDeveloper'


type User = {
    name: string;
    email?:string;
    gender: 'male' | 'female';
    bloodGroup: 'O+' | ' A+' | 'AB+';
}

const user1: User = {
    name: 'selim',
    gender: 'male',
    bloodGroup: ' A+',
}


// intersection type 
type FrontendDeveloper1 = {
    skills: string[];
    designation1: 'frontendDeveloper';
}

type BackendDeveloper ={
    skills: string[];
    designation2: 'backendDeveloper' 
}

type FullStackDeveloper2 = FrontendDeveloper1 & BackendDeveloper


const fullStackDeveloper: FullStackDeveloper2 ={
 skills:['html', 'js'],
 designation1:'frontendDeveloper',
 designation2: 'backendDeveloper' 
}
//
}