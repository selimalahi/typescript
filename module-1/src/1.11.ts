{
    //
   const age: number = 15;

   if(age >= 18){
    console.log('adult')
   }
   else{
    console.log('not adult');
   }

//    using ternary 

const isAdult = age >= 18 ? 'adult' : 'not adult'
console.log({isAdult});

// nullish coalesing operator 

// null ----> undefined ---> decision making

const  isAuthenticated = null;

const result1 =isAuthenticated ?? 'Guest';
const result2 = isAuthenticated ? isAuthenticated : 'Guest' // ternary operator 
console.log({result1})
console.log({result2})


// optional chaining 

type User ={
    name: string;
    address: {
        city: string;
        road: string;
        presentaddress: string;
        permanentaddress?: string;
    }
    
}
const user: User ={
    name: 'selim',
    address: {
        city: 'dhaka',
        road: 'khilji road',
        presentaddress: 'bow bazar',
    },
}

const permanentaddress = user?.address?.permanentaddress ?? 'no permanent address'
console.log({permanentaddress})




    //
}