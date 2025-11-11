type Coordinates<x, y> = [x, y];

const numb: Coordinates<number, number> = [12, 30];
const numb2: Coordinates<string, string> = ["a", "b"];

type Obj = {
  name: string;
  age: number;
};

type GenericsArray<t> = [t, t, t];

const userList: GenericsArray<Obj> = [
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

const frinds: GenericsArray<string> = ["A", "B", "C"];

interface NonBrands {
  heartRate: string;
  stopwatch: boolean;
}

interface Developer<T> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releaseYear: string;
  };
  smartWatch: T;
}

const poorDeveloper: Developer<NonBrands> = {
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

interface Branded {
  heartRate: string;
  callSupport: boolean;
  AIFeater: boolean;
}
const richDeveloper: Developer<Branded> = {
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

const createArrayWithGenerics= <T>(value:T) => [value]

// const createArrayWithString = (value: string) => [value]
// const createArrayWithNumber = (value: number) => [value]
// const createArrayWithUserObj = (value:{id:number, name: string}) => [value] 


const string = createArrayWithGenerics('string')
const number = createArrayWithGenerics(2)
const object = createArrayWithGenerics({id: 123, name: 'sharif'})
// console.log("string = ", string, "Number => ", number, "Object => ", object)



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


const addStudenToCourse = <T>(studentInfo:T) => {
    return {
        course: "Level 2",
        ...studentInfo
    }
} 

console.log(addStudenToCourse(stu1))
console.log(addStudenToCourse(stu2))

