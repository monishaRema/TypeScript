// array, object

// ts tuple

let shopingList = ["eggs","milk","sugar"]



let mixList :(string | number)[] = ["eggs",12,"banana",6];
mixList.push(12)

// tuple


let monisha : [string , number] = ["monish",79]

let destination : [string , string , number] = ["Daha", "Bangladesh", 4];

// reference type : object

const user :{
    // organization:"Programming hero"; //value => type : literal types

    readonly organization:string  //access modifier
    firstName : string;
    middleName:string;
    lastName:string;
} =
{   organization:"Programming hero",
    firstName : "Monisha",
    middleName:"remon",
    lastName:"Rema",
}

// user.organization = "only hero"

console.log(user)

const user2 :{
    firstName : string;
    middleName?:string; //optional type
    lastName:string;
} =
{
    firstName : "Sharif", 
    lastName:"Remon",
}



