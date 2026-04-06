/*
Prototypes in JavaScript
Task: Prototype Chaining
Create a constructor function Animal that has a method speak() that return 'Animal speaking'.
Then create another constructor Dog that inherits from Animal using prototypes.
The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal
*/
// Constructor function: Animal
function Animal() {}
Animal.prototype.speak = function() {
    return "Animal speaking";
};
// Constructor function: Dog
function Dog() {}
// Inherit from Animal using prototype chaining
Dog.prototype = Object.create(Animal.prototype);
// Make sure the constructor points back to Dog
Dog.prototype.constructor = Dog;
// Add a bark() method to Dog
Dog.prototype.bark = function() {
    return "Woof!";
};
// Create an instance of Dog
let myDog = new Dog();
console.log(myDog.bark());   // Output: Woof!
console.log(myDog.speak());  // Output: Animal speaking
// Demonstrating the prototype chain
console.log(myDog instanceof Dog);     // true
console.log(myDog instanceof Animal);  // true
/*
Functional Constructor and Errors
Task 1: Create a Functional Constructor
Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".
Task 2: Handle Errors
Modify the Person constructor to throw an error if the age is not a positive number
*/
function Person(name, age) {
    if (typeof age !== "number" || age <= 0) {
    throw new Error("Age must be a positive number");
    }
    this.name = name;
    this.age = age;
    this.greet = function () {
    return `Hello, my name is ${this.name}`;
    };
}
// Example usage:
let p1 = new Person("Alice", 25);
console.log(p1.greet()); // Output: Hello, my name is Alice
/*
Classes, Objects, and Inheritance
Task 1: Class Inheritance
Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".
Task 2: Method Overriding in Inheritance
Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".
Task 3: Static Methods in Classes
Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.
*/
// Declare the Vehicle class once
class Vehicle {
    constructor(make, model) {
    this.make = make;
    this.model = model;
    }
    getDetails() {
    return `Make: ${this.make}, Model: ${this.model}`;
    }
    move() {
    return "The vehicle is moving";
    }
    static isVehicle(obj) {
    return obj instanceof Vehicle;
    }
}
// Subclass Car extends from Vehicle
class Car extends Vehicle {
    startEngine() {
    return "Engine started";
    }
  // Override move()
    move() {
    return "The car is driving";
    }
}
// Example usage:
const myCar = new Car("Toyota", "Camry");
console.log(myCar.getDetails());       // Make: Toyota, Model: Camry
console.log(myCar.startEngine());      // Engine started
console.log(myCar.move());             // The car is driving
console.log(Vehicle.isVehicle(myCar)); // true
/*
Encapsulation, Polymorphism, Abstraction, and Getters/Setters
Task 1: Encapsulation Using Getters and Setters
Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
Task 2: Polymorphism with Method Overriding
Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.
*/
class BankAccount {
    #balance;
    constructor(initialBalance) {
    if (initialBalance < 0) {
        throw new Error("Initial balance cannot be negative");
    }
    this.#balance = initialBalance;
    }
    get balance() {
    return this.#balance;
    }
    set balance(value) {
    if (value < 0) {
        throw new Error("Balance cannot be negative");
    }
    this.#balance = value;
    }
    deposit(amount) {
    if (amount <= 0) {
        throw new Error("Deposit amount must be positive");
    }
    this.#balance += amount;
    }
    withdraw(amount) {
    if (amount <= 0) {
        throw new Error("Withdraw amount must be positive");
    }
    if (amount > this.#balance) {
        throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
    }
}
// ✅ Example usage:
const account = new BankAccount(1000);
account.deposit(500);
account.withdraw(300);
console.log(account.balance); // 1200
// ❌ Uncommenting these will throw errors
// account.withdraw(2000); // Error: Insufficient funds
// account.balance = -500; // Error: Balance cannot be negative
class Shape {
    area() {
    return 0; // Default area for a generic shape
    }
}
// Subclass: Circle
class Circle extends Shape {
    constructor(radius) {
    super();
    this.radius = radius;
    }
    area() {
    return Math.PI * this.radius * this.radius;
    } 
}
// Subclass: Rectangle
class Rectangle extends Shape {
    constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    }
    area() {
    return this.width * this.height;
    }
}
// ✅ Example usage:
const circle = new Circle(5);
console.log("Circle area:", circle.area()); // ~78.54
const rect = new Rectangle(4, 6);
console.log("Rectangle area:", rect.area()); // 24
const shape = new Shape();
console.log("Generic shape area:", shape.area()); // 0