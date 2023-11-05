{
//

// type alias in typescript 

type Student = {
    name: string;
    age: number;
    gender: string;
    contractNo: string;
    address: string;
}

const student1: Student ={
    name: 'selim',
    age: 155,
    gender:'male',
    contractNo: '01222222',
    address:'dhaka',
};

const student2: Student ={
    name: 'alahi',
    age: 22,
    gender:'male',
    contractNo: '22525255',
    address: 'dhaka'
};

const student3: Student ={
    name: 'tanvi',
    age: 18,
    gender: 'female',
    contractNo: '5555555',
    address: ' joy',
};

// alias using variable 

type UserName = string
type IsAdmin = boolean

const userName: UserName = ' selim alahi'
const isAdmin: IsAdmin = true;

// alias using function 

type Add =(num1: number, num2: number) => number;

const add:Add =(num1, num2) => num1 + num2;

//

}