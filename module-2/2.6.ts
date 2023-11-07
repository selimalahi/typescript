{ 
    // constraints in typrscript

    const addCourseToStudent =<T extends {id: number; name: string; email: string;}>(student: T) =>{
        const course ='next level'
    
        return {
            ...student,
            course
        };
    };
    
    const student3 = addCourseToStudent({
        id: 111, 
        name: 'shapla',
        email: 's@gmail.com',
        emi: 'emni'});
    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        devType: string;
    }>({
        id:222,
        name: "mr.x",
        email: 'x@gmail', 
        devType:'Nudd',
    });
    
    const student2 = addCourseToStudent({
        id:333,
        name: "mr.y",
        email: 'y@gmail', 
        haswatch:'Apple',
    });
    





    //
}