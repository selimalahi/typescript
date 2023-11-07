{
// interface --- generic
 interface Developer<T> {
    name: string,
    computer: {
        brand: string;
        model:string;
        releaseYear: number;
    };
    smartWatch: T;

 }

 type PoorWatch ={
    
    brand: string;
    model: string
    display: string;
      
 }

  const poorDeveloper: Developer<PoorWatch> ={
    name: 'selim',
    computer: {
        brand:'intel',
        model: 'x-rr',
        releaseYear: 2012,
    },
    smartWatch: {
        brand: 'normal',
        model: 'kddd',
        display: 'oled',
    },   
    
  };
   
 

  const richDeveloper: Developer<> ={
    name: 'tanvi',
    computer: {
        brand:'hp',
        model: 'r-rr',
        releaseYear: 2022,
    },
    smartWatch: {
        brand: 'apple',
        model: 'k-4',
        heardTrack: true,
        booledTrack: true, 
    },   
    
  };


 


    //
}