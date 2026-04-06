const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const dhruva = {
    name: 'ginger coffee',
    price: 250,
    isAvailable: true,

    orderDhruva: function(){
        console.log("coffee nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(dhruva, "name"));

Object.defineProperty(dhruva, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(dhruva, "name"));

for (let [key, value] of Object.entries(dhruva)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}