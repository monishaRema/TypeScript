type User = {
    name:string;
    age:number
}

type Role = {
    role:"admin" | "manager"
}


// type Intersection => mergeing 2 types 

type UserWithRole = User & Role 


// Interface is face of a object
interface Monisha {
    name:string;
    age:number
}

// Interface can be extended to new interface
interface Moni extends Monisha{
    isActive:boolean;


}

const user1:User = {
    name:"monisha",
    age: 12
}

const user2:UserWithRole={
    name:"monisha",
    age:12,
   role:"manager"
}



// Interface in array

type Friends = string[];

const freinds : Friends = ["lolo","tolo","molo"]

interface IFriends {
    [index:number] :string 
}

const ifriends:IFriends = ["A", "B", "C"]


// Interface in Function
interface Ifunc {
    (num1: number, num2: number) : number
}





