{
    //generic constraint with keyof operator

    type Vehicle ={
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | 'ship' | 'car'; // manullay

    type Owner2 = keyof Vehicle

    // const person: Owner = "" keyof union er moto kaj kore 

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key:Y) =>{
        return obj[key];
    }
  
    const user = {
        name: 'selim',
        age: 26,
        address: 'dhaka',
    };

    const car = {
        model: 'toyota',
        year: 2000,
    };

    const result = getPropertyValue(car, 'year');























    //
}