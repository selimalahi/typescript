{
    // function with generic


const createArray = (param: string) : string[] =>{
    return [param]
};

const createArrayWithGeneric = <T>(param: T) :T[] =>{
    return [param];
};

const res1 = createArray('bangladesh');
const restGeneric = createArrayWithGeneric<string>('bangladesh');

type User ={id: number; name: string}
const restGenericObj = createArrayWithGeneric<User>({
     id: 123,
     name: 'selim'
    });

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q) :[T,Q] =>{
        return [param1, param2];
    };
    
    const res10 = createArrayWithTuple<string, number>('bangladesh', 222);
    const rest11 = createArrayWithTuple<string, number>('bangladesh', 555);
    
    // type User ={id: number; name: string};
    // const restGenericObj = createArrayWithGeneric<User>({
    //      id: 123,
    //      name: 'selim'
    //     }); 


const addCourseToStudent =<T>(student: T) =>{
    const course ='next level'

    return {
        ...student,
        course
    };
};


const student1 = addCourseToStudent({
    name: "mr.x",
    email: 'x@gmail', 
    devType:'Nudd',
});

const student2 = addCourseToStudent({
    name: "mr.y",
    email: 'y@gmail', 
    haswatch:'Apple',
});












    //
}