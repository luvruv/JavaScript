/* 
1. Declare an array `teaFlavors` that conrains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. Access the first element of the array and store it in a variable name `firsTea`. 
*/
let teaFlavors = ["green tea", "black tea", "oolong tea"];
// let teaFl = new Array("green tea", "black tea", "oolong tea");
const firsTea = teaFlavors[0];
/*
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. Acces the third element and store it in a variable named `favoriteCity`.
*/
let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];
/*
3. You have an array named `teaTypes` containing '"herbal tea', `"white tea"`, and `"masala tea"`,. Change the second element of the array to `jasmine tea`.
*/
let teaTypes = ["herbal tea", "white tea", "masala tea"];
teaTypes[1] = "jasmine tea";
/*
4. Declare an array named `citiesVisited`  containing `"Mumbai"` and `"Sydney"`. Add `"Berlin"` to the array using the `push` method.
*/
let citiesVisited = ["Mumbai", "Sydeny"];
// citiesVisited[2] = "Berlin";
// citiesVisited[1] = "Delhi";
// citiesVisited[citiesVisited.length] = "Berlin";
// console.log(citiesVisited);
citiesVisited.push("Berlin");
console.log(citiesVisited);
/*
5. You have an array named `teaOrders` with `"coffee"`, `"iced tea"`, `"matcha"`, adn `"grey"`. Remove the last element of the array using the ``pop` method and store it in a variable named `lastOrder`.
*/
let teaOrders = ["coffee", "iced tea", "matcha", "grey"];
const lastOrder = teaOrders.pop();
console.log(teaOrders);   
console.log(lastOrder);   
/* 
6. You have an array named `popularTeas` containing "green tea", "oolong tea", "coffee". Create a soft copy of this array named `softCopyTeas`.
*/
let popularTeas = ["green tea", "oolong tea", "coffee"];
// let var1 = 5;
// let var2 = var1;
// var1 =9
// console.log(var2);
let softCopyTeas = popularTeas;
popularTeas.pop();
console.log(softCopyTeas);
console.log(popularTeas);
/* 
7. You have an array named `topCities` containing "Berlin", "Singapore", "New York". Create a hard copy of this array named `hardCopyCities`.
*/
let topCities = ["Berlin", "Singapore", "New York"];
// let hardCopyCities = [...topCities];
// topCities.pop();
// console.log(hardCopyCities);
// let hardCopyCities = topCities.slice();
// topCities.pop();
// console.log(hardCopyCities);
let hardCopyCities = [...topCities];
topCities.pop();
console.log([...hardCopyCities]);
/*
8. You have two arrays: `europeanCities` containing "Paris", and "Rome", and `asianCities` containing "Tokyo", and "Bangkok". Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
// let worldCities = europeanCities + asianCities;
// console.log(worldCities);
// console.log(typeof worldCities);
// let worldCities = [europeanCities, asianCities];
// console.log(worldCities);
let worldCities = europeanCities.concat(asianCities);
console.log(worldCities);
/* You have an array named `teaMenu` containing "black coffee", "oolong tea", "green tea", "earl grey" Find the length of the array and store it in a variable named `menuLength`.
*/
let teaMenu = ["black coffee", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
/* You have an array named `cityBucketlist` containing "Kyoto", "London", "Cape Town", "Vancouver" Check if "london" is in the array and store the result in a variable named `isLondonInList`.
*/
let cityBucketlist = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketlist.includes("London");
console.log(isLondonInList);