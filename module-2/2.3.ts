{
    //
// generic type

// type GenericArray = Array<boolean>;
type GenericArray<T> = Array<T>;

// const rollNumber : number[] =[1,2,3];
// const rollNumber : Array<number> =[1,2,3];
const rollNumber : GenericArray<number> = [1,2,3];

// const mentors: string[] = [ 'mr.x', 'mr. y'];
const mentors:GenericArray<string> = [ 'mr.x', 'mr. y'];

// const boolArray: boolean[] = [true, false, true];
const boolArray: GenericArray<boolean> = [true, false, true];


// create a array of object using generics 

const user: GenericArray<{name: string; age: number}> = [{
 {
    name: 'selim',
    age: 1000,
 },
 {
    name: 'tanvi',
    age: 18,
 },
 


}]

const add= (x: number, y: number) => x+y


add(30, 20);


//  generic tuple 

type GenericTuple<X,Y> = [X, Y];

const maunush: GenericTuple<string, string> = ['mr.x', 'mr.y'];

const UserWithId: GenericTuple<number, {name: string, email: string}> = [123, {name: 'selim', email:'a@gmail.com'}]
























    //
}