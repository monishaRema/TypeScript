// spread operator

const friends = ["priya","tiya"];

const schoolFriends = ["taniya","farhana","nila"];

const collegeFriends = ["juli","sadia","suchi","munni"]

friends.push(...collegeFriends)
console.log(friends)

const user = {
    name: "Sharif",
    phone:8478,

}

const ontherInfo = {
    hobby:"traveling",
    color:"white"
}
const userInfo = {...user,...ontherInfo}

console.log(userInfo)

// rest operator

const sendInvite = (...friends: string[]) => {

    friends.forEach((friend: string) => 
    
   console.log(`Send invitation to ${friend}`)
);
};

sendInvite("munni","suchi")