"use strict";
// spread operator
Object.defineProperty(exports, "__esModule", { value: true });
const friends = ["priya", "tiya"];
const schoolFriends = ["taniya", "farhana", "nila"];
const collegeFriends = ["juli", "sadia", "suchi", "munni"];
friends.push(...collegeFriends);
console.log(friends);
const user = {
    name: "Sharif",
    phone: 8478,
};
const ontherInfo = {
    hobby: "traveling",
    color: "white"
};
const userInfo = { ...user, ...ontherInfo };
console.log(userInfo);
// rest operator
const sendInvite = (...friends) => {
    friends.forEach((friend) => console.log(`Send invitation to ${friend}`));
};
sendInvite("munni", "suchi");
//# sourceMappingURL=spread.js.map