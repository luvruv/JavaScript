let score = "33ac" //null undefined boolean // "dhruv"
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
// console.log(valueInNumber)☻
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
let isLoggedIn = 1  // "" => false "abc" => true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
let someNumber = 33
let stringNumer = String(someNumber)
// console.log(stringNumer);
// console.log(typeof stringNumer);☻

// operations
let value = 3
let negValue = -value
console.log(negValue);
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);
let str1 = "hello"
let str2 = " dhruv"
let str3 = str1 + str2
console.log(str3);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log( (3 + 4) * 5 % 3);
// console.log(+true);
// console.log(+"");
//  to primitive(input. preferredType)
let num1, num2, num3
num1 = num2 = num3 = 2 + 2
let gameCounter = 100
gameCounter++;
// ++gameCounter; js mdn prefix suffix increament
console.log(gameCounter);
// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion