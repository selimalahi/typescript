// normal function 

function add(num1: number, num2: number = 10):number{
    return num1 + num2;
}
add(2, 5);

// arrow function 

const addArrow =( num1:number, num2:number ): number => num1+num2;

// object ---> function ----> method 

const poorUser = {
    name: 'selim',
    balance: 0,
    addBalance(balance:number): string {
       // return this.balance + balance;// if the return of number
       return `My new Balance is : ${this.balance + balance}`; // if the return of string 

    },
};


// callback function 

const arr : number[] = [1, 2, 5];

const newArray : number[] = arr.map((elem : number): number  => elem*elem);
