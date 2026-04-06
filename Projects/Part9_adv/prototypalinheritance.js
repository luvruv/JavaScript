function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};
let dhruv = new Person("dhruv");
dhruv.greet();
