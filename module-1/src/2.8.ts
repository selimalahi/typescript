// destructuring of object 

{

    const user = {
        id: 123,
        name: {
            firstName: 'selim',
            middleName: 'tanvi',
            lastName: 'alahi',
        },
        contact:' 017000000',
        address: 'bamgladesh',        
    };

    const {contact, 
    name: { middleName : midName },


} = user;


// array destructuring 

const friends = ['selim', ' alahi', ' tanvi', ' monika', 'shapla' ];

const [,, girlfrind, ...rest] = friends;




}