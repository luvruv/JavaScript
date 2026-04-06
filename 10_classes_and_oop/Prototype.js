// let myName = "dhruva     "
// let mychannel = "dhruva     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dhruva = function(){
    console.log(`dhruva is present in all objects`);
}

Array.prototype.heyDhruva = function(){
    console.log(`Dhruva says hello`);
}

// heroPower.dhruva()
// myHeros.dhruva()
// myHeros.heyDhruva()
// heroPower.heyDhruva()

// inheritance

const User = {
    name: "dhruva",
    email: "dhruva.jhanjhari.dev@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "DhruvLearnings     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"dhruva".trueLength()
"iceTea".trueLength()