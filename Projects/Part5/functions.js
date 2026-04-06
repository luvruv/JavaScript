/* 
1. Write a function named makeTea that takes one parameter, typeOfTea and returns a string like "Making green tea" when called with "green tea". Store the result in a varibale named teaOrder.
*/
function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`;
    console.log(test);
}
let teaOrder = makeTea("lemon tea");
console.log(teaOrder);
/*
2. Create a function named orderTea that takes one parameter teaType inside this function create anothwr function named confirmOrder that returns a message like "Order confirmed for dhruva" call confirmOrder from within orderTea and return the result
*/
function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for dhruva`;
    }
    return confirmOrder();
}
let orderConfirmation = orderTea("coffee")
console.log(orderConfirmation);
/*
3. Write an arrow function named calculateTotal that takes two parameters: price and qauntity. The function should return the total cost by multipyling the price and quantity store the result in a variable named totalCost
*/
const calculateTotal = (price, qauntity) => price * qauntity;
let totalCost = calculateTotal(499, 109);
console.log(totalCost);
/*
4. Write a function named processTeaOrder that takes another function makeTea as a parameter and calls it with the arguement "earl grey" return the result of calling makeTea.
*/
function makeTea(typeOfTea) {
    return `maketea: ${typeOfTea}`
};
function processTeaOrder(teaFunction) {
    return teaFunction('earl grey')
};
let order = processTeaOrder(makeTea);
console.log(order);
/*
5. Write a function named createTeaMaker that returns another functions. the returned function should take one parameter, teaType and return a message like making green tea store the returned function in a variable named teaMaker and call it with green tea
*/
function createTeaMaker(name) {
    return function(teaType){
        return `Making ${teaType} ${name}`;
    };
}
let teaMaker = createTeaMaker("dhruv");
let result = teaMaker("green tea");
console.log(result);
