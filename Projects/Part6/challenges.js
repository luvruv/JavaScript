/* 
Playing with Types
Task 1:
Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
Task 2:
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
Task 3:
Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
Task 4:
Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
*/
function stringToNumber(input) {
    const num = Number(input);
    return isNaN(num) ? "Not a number" : num;
}
console.log(stringToNumber("42"));      
console.log(stringToNumber("abc")); 

function flipBoolean(input) {
    return !Boolean(input);
}
console.log(flipBoolean(true));     
console.log(flipBoolean(0));        
console.log(flipBoolean("hello"));  

function whatAmI(input) {
    const type = typeof input;
    if (type === "number") return "I'm a number!";
    if (type === "string") return "I'm a string!";
    return "I'm something else!";
}
console.log(whatAmI(123));        
console.log(whatAmI("hello"));    
console.log(whatAmI(true));       

function isItTruthy(input) {
    return input ? "It's truthy!" : "It's falsey!";
}
console.log(isItTruthy(1));       
console.log(isItTruthy(""));      
console.log(isItTruthy(null));    

/*
Playing with Variables
Task:
Perform the following mathematical operations
on the provided variables a and b
Add
Subtract
Multiply
Divide
Increment
Decrement
Reminder
*/
let a = 18;
let b = 24;
function add() {
    const result = a + b;
    return result;
}
function subtract() {
    const result = b - a;
    return result;
}
function multiply() {
    const result = a * b;
    return result;    
}
function divide() {
    const result = b / a;
    return result;
}
function increment() {
    let result = a;
    result += 1;
    return result;
}
function decrement() {
    let result = b;
    result -= 1;
    return result;
}
function reminder() {
    const result = b % a;
    return result;
}
/*
Arrays and Methods
Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:
Task 1: Array Filtering
Write a function filterNumbers(arr) that returns only numbers from a mixed array
Task 2: Array Reversal
Write a function reverseArray(arr) that reverses the array
Task 3: Find Maximum in an Array
Write a function findMax(arr) that returns the largest number in the array
Task 4: Remove Duplicates from an Array
Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
Task 5: Flatten a Nested Array
Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
*/
function filterNumbers(arr) {
    return arr.filter(item => typeof item === "number");
}
console.log(filterNumbers([1, "apple", true, 42, null])); 

function reverseArray(arr) {
    return [...arr].reverse(); 
}
console.log(reverseArray([1, 2, 3])); 

function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([5, 12, 3, 99, 56])); 

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 

function flattenArray(arr) {
    return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, 4], 5], 6])); 
/*
Loops
Task 1: Sum of First N Natural Numbers
Write a function sumOfN(n) that returns the sum of the first n natural numbers
Task 2: Multiplication Table
Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4
Task 3: Count Vowels in a String
Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
*/ 
function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
    sum += i;
}
    return sum;
}
console.log(sumOfN(5)); 

function printMultiplicationTable(n) {
    let table = [];
    for (let i = 1; i <= 10; i++) {
    table.push(`${n} * ${i} = ${n * i}`);
}
    return table;
}
console.log(printMultiplicationTable(2));

function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
    if (vowels.includes(char)) {
        count++;
    }
}
    return count;
}
console.log(countVowels("Hello World")); 
/*
Higher-Order Functions and Arrow Functions
All the following tasks must be strictly be writtern in arrow functions only.
Task 1: Using Array Methods
Write a function squareNumbers(arr) using map() and arrow functions
Task 2: Custom Filter Function
Create a function filterEvenNumbers(arr) using filter() and arrow functions
Task 3: Sum of Positive Numbers
Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
Task 4: Transform Array of Objects
Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
Task 5: Find the Longest Word
Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
*/
const squareNumbers = arr => arr.map(num => num * num);
console.log(squareNumbers([1, 2, 3, 4])); 

const filterEvenNumbers = arr => arr.filter(num => num % 2 === 0);
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); 

const sumPositiveNumbers = arr => 
    arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
console.log(sumPositiveNumbers([-3, 5, 7, -1, 4])); 

const getNames = arr => arr.map(obj => obj.name);
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];
console.log(getNames(people)); 

const findLongestWord = arr => 
    arr.reduce((longest, word) => word.length > longest.length ? word : longest, "");
console.log(findLongestWord(["apple", "banana", "strawberry", "kiwi"])); 
/*
Nested Functions and Context
Task 1: Using this in Objects
Create an object person with a method introduce() that uses this
additionally add properties of name & age that will result in Hi, my name is Dhruva and I am 19.5 years old on calling introduce()
Task 2: Function within a function
Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()
*/
const person = {
    name: 'Dhruva',
    age: 19.5,
    introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old`;
}
};

function outer() {
    function inner() {
    return 'Inner function called';
    }
    return inner();
}
