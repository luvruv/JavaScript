// objects
let username ={
    firstname: "dhruv", 
    isLoggedin: true,
    "mobile no.": "9001868985",
};
const myFirstName = "Mr. D";
console.log(myFirstName);
console.log(username);
console.log(typeof username);
const username1 ={
    firstname: "dhruv", 
    isLoggedin: true,
};
console.log(username1);
console.log(username.firstname);
console.log(username['mobile no.']);
username.firstname = "Mr. D";
console.log(username);
username.lastname = "jain";
console.log(username);
let today = new Date();
console.log(today);
console.log(today.getDate());
// array
let heros = ["spiderman", "ironman"];
console.log(heros);
let anotherUser = ["dhruv", true];
console.log(anotherUser[0]);
console.log(1 + "1");
console.log("1" + 1);
let isValue = true;
console.log(isValue + 1);
console.log(Number(isValue) + 1);
console.log(Number(isValue));
let isValue1 = "2ab";
console.log(Number(isValue1));
console.log(typeof Number(isValue1));
console.log(Number (null));
console.log(Number (undefined));