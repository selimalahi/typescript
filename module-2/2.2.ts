{
// interface

// interface like as type assertion . interface use only object


type User1 = {
    name: string;
    age: number;
}

// inteface 

interface User2 {
    name: string;
    age : number;
}

type UserWithRoll = User1 & {role: string};

interface UserWithRoll2  extends User1 {
    role: string;
}

const user1 : UserWithRoll= {
    name: 'selim',
    age : 121,
    role: 'student',
}


// using arrray 

type Roll1 = number[];

interface Roll2 {
    [index : number] : number
}


const rollNumber: Roll2= [1,2,3]


// interface using function 

type Add1 =( num1: number, num2: number) => number;

interface Add2 {
    (num1: number, num2: number): number
}

const add: Add2 = (num1, num2) => num1+ num2



































//
}