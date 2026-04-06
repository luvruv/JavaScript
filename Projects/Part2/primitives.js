// Number
let balance = 120;
let anotherBalance = new Number(120);
console.log(balance);
console.log(typeof (balance));
console.log(typeof(anotherBalance));
console.log(anotherBalance);
console.log(anotherBalance.valueOf());
console.log(typeof balance);
console.log(typeof anotherBalance);
// boolean
let isActive = true
let isReallyActive = new Boolean(true) // not recommended
// null and undefined
let firstname;
console.log(firstname);
let firstname1 = null;
console.log(firstname1);
// string
let myString = "hello";
let myStringOne = 'hola';
let username = 'dhruv';
let oldGreet = myString + "dhruv";
let greetMessage = 'morning';
console.log(oldGreet);
let greetMessage1 = `hello ${username} !`;
console.log(greetMessage1);
let demoOne = `value is ${2 * 2}`;
console.log(demoOne);
// symbol
let sm = Symbol();
let sm1 = Symbol();
console.log(sm == sm1);
console.log(sm);
let sm2 = Symbol("dhruv");
let sm3 = Symbol("dhruv");
console.log(sm2 == sm3);