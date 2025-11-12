"use strict";
// Constraint: Follow strict rules
Object.defineProperty(exports, "__esModule", { value: true });
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
const stu3 = {
    hasWatch: true
};
const addStudenToCourse = (studentInfo) => {
    return {
        course: "Level 2",
        ...studentInfo
    };
};
const res = "bike";
const res1 = "car";
// console.log(res, res1)
// Key Of Constraint
const getPropertyFromObj = (obj, key) => {
    return obj[key];
};
const studentName = getPropertyFromObj({ name: 'sharif', age: 20 }, 'name');
console.log(studentName);
//# sourceMappingURL=constraint.js.map