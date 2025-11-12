// Constraint: Follow strict rules


const stu1 = {
    name : "Monisha",
    id: 123, 
    hasPen: true
}

const stu2 = {
    name: "shair",
    id: 345, 
    hasCar: false,
    isMarried: true
}
const stu3 = {
    hasWatch: true
}
interface Student {name: string, id:number}

const addStudenToCourse = <T extends Student>(studentInfo:T) => {
    return {
        course: "Level 2",
        ...studentInfo
    }
} 

// console.log(addStudenToCourse(stu1))
// console.log(addStudenToCourse(stu2))
// console.log(addStudenToCourse(stu3)) 

// Key of
type PeopleVehicl = {
    car : string;
    bike: string;
    cng : string
}
type Vehicle = "car" | "bike" | "cng"
type Vehicle1 = keyof PeopleVehicl;


const res: Vehicle = "bike"
const res1 : Vehicle1 = "car"
// console.log(res, res1)

// Key Of Constraint


const getPropertyFromObj = <T>(obj:T, key: keyof T) => {

    return obj[key]

}


const studentName = getPropertyFromObj({name: 'sharif', age: 20},'name' )
console.log(studentName)