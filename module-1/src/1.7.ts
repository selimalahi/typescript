{

// spread operators 

// use arr 

const bros1: string[] = ['selim', 'alahi', 'haider'];

const bros2: string[] = ['shapla', 'mim', 'tanvi'];

bros1.push(...bros2);

// user object 

const mentors1 = {
    typeScript : 'mizba',
    redux : 'mir',
    dbms : 'mizan' 
};

const mentors2 = {
    prisma : 'firoz',
    next : 'tanmoy',
    cloud : ' nahid',
}

const mentorList = {
    ...mentors1,
    ...mentors2
};


// rest operator

const greedFriend = (...friend : string[]) =>{
    friend.forEach((friend: string) => console.log(`Hi ${friend}`));
};
greedFriend('abul', 'bulo', 'selim', 'alahi');





}