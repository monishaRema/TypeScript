"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numb = [12, 30];
const numb2 = ["a", "b"];
const userList = [
    {
        name: "Sarif",
        age: 20,
    },
    {
        name: "Sarif",
        age: 20,
    },
    {
        name: "Sarif",
        age: 20,
    },
];
const frinds = ["A", "B", "C"];
const poorDeveloper = {
    name: "mr Poor",
    salary: 38483578347,
    device: {
        brand: "Oppo",
        model: "euieu",
        releaseYear: "12 dex 34",
    },
    smartWatch: {
        heartRate: "200",
        stopwatch: true,
    },
};
const richDeveloper = {
    name: "mr Rich",
    salary: 500,
    device: {
        brand: "Apple",
        model: "euieu",
        releaseYear: "12 dex 39",
    },
    smartWatch: {
        heartRate: "200",
        callSupport: true,
        AIFeater: true,
    },
};
// Generics Function
const createArrayWithGenerics = (value) => [value];
// const createArrayWithString = (value: string) => [value]
// const createArrayWithNumber = (value: number) => [value]
// const createArrayWithUserObj = (value:{id:number, name: string}) => [value] 
const string = createArrayWithGenerics('string');
const number = createArrayWithGenerics(2);
const object = createArrayWithGenerics({ id: 123, name: 'sharif' });
// console.log("string = ", string, "Number => ", number, "Object => ", object)
const stu1 = {
    name: "Monisha",
    id: 123,
    hasPen: true
};
const stu2 = {
    name: "shair",
    id: 345,
    hasCar: false,
    isMarried: true
};
const addStudenToCourse = (studentInfo) => {
    return {
        course: "Level 2",
        ...studentInfo
    };
};
console.log(addStudenToCourse(stu1));
console.log(addStudenToCourse(stu2));
//# sourceMappingURL=generics.js.map