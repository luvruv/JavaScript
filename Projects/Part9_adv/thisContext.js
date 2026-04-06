const person = {
    name: "dhruv",
    greet() {
        console.log(`hi, i am ${this.name}`);  
    },
};
person.greet();
const greetFunction = person.greet;
greetFunction();
const boundGreet = person.greet.bind({name: "john"});
boundGreet();
