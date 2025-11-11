"use strict";
// object desructuring
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
    id: 20,
    name: {
        firstName: "moni",
        midName: "remon",
        lastName: "rema"
    },
    gender: "female",
    hobby: "nothing"
};
// const myHobby = user.hobby
// name alias
const { gender: myGender, name: { midName } } = user;
// console.log(myGender)
// console.log(midName)
const friends = ["jodu", "modu", "kodu"];
const [, myBestFrnd,] = friends;
console.log(myBestFrnd);
//# sourceMappingURL=destructuring.js.map