const user = {
    username: "dhruva",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function dhruva(){
//     let username = "dhruva"
//     console.log(this.username);
// }

// dhruva()

// const dhruva = function () {
//     let username = "dhruva"
//     console.log(this.username);
// }

const dhruva =  () => {
    let username = "dhruva"
    console.log(this);
}


// dhruva()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "dhruva"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()