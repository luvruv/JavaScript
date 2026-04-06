function greet(name) {
    console.log("helllo,", name);
}
function Person(name, age) {
    this.name = name;
    this.age = age;
}
function Car(make, model) {
    this.make = make;
    this.model = model;
}
let myCar = new Car("Toyota", "Camry");
console.log(myCar);
let myNewCar = new Car("tata", "safari");
console.log(myNewCar);

function Tea(type) {
    this.type = type;
    this.descibe = function() {
        return `this is a cup of ${this.type}`;
    }
}
let lemonTea = new Tea("lemon tea");
console.log(lemonTea);
console.log(lemonTea.descibe());

function Animal(spicies) {
    this.spicies = spicies;
}
Animal.prototype.sound = function() {
    return `${this.spicies} makes a sound`;
}
let dog = new Animal("dog");
console.log(dog.sound());

function Drink(name) {
    if(!new.target) {
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name;
}
let tea = new Drink("tea");
let coffee = Drink("coffee"); // error
