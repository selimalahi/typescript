{
//
   // type assertion 
   let anything : any ;
   anything = ' Next Level Web development';
   anything = 2222;

   (anything as number);
   (anything as string). ;


   const KgToGm = (value: string | number): number |string |undefined => {
    if(typeof value === 'string'){
        const convertedValue = parseFloat(value)*1000;
        return `the converted number is : ${convertedValue}`
    }

     if(typeof value === 'number'){
        return value *1000;
     }
 }

 const result1 = KgToGm(1000) as number
 const result2 = KgToGm('1000') as string

 type CustomError = {
    message : string ;
 }

 try{

 }catch(error){
    console.log((error as CustomError).message);
 }


//
}