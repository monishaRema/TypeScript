"use strict";
// Function
Object.defineProperty(exports, "__esModule", { value: true });
// arrow function , normal function
function addNormal(num1, num2) {
    return num1 + num2;
}
addNormal(2, 2);
const addArr = (num1, num2) => num1 + num2;
addArr(5, 5);
// object => function => method
const user3 = {
    name: "Moni",
    balance: 0,
    addBalance(value) {
        const totalBalance = this.balance + value;
        return totalBalance;
    }
};
user3.addBalance(10);
// call back function
const arr = [2, 4, 6];
const sqrArr = arr.map((elem) => elem * elem);
//# sourceMappingURL=function.js.map