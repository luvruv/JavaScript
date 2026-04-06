/*
Write a for loop that loops through the array ["green tea1", "black tea1", "coffee", "oolong tea"] and stops the loop when it finds "coffee". store all the tea before "coffee" in a new array named selectedTeas.
*/
let teas = ["green tea", "black tea", "coffee", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
    if (teas[i] === 'coffee') {
        break;
    }
    selectedTeas.push(teas[i]);
}
console.log(selectedTeas);
/*
2. Write a for loop that loops through the array ["london", "new york", "paris", "berlin"] and skip paris. stores the other cities in a new array named visitedCities.
*/
let cities = ["london", "new york", "paris", "berlin"];
let visitedCities = [];
for (let c = 0; c < cities.length; c++) {
    if(cities[c] === 'paris') {
        continue
    }
    visitedCities.push(cities[c]);
}
console.log(visitedCities);
/* 
3. Use a for of loop to iterate through array [1, 2, 3, 4, 5] and stop when the number 4 is found. store the numbers before 4 in an array named smallNumbers.
*/
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (const num of numbers) {
    if (num === 4) {
        break;
    }
    smallNumbers.push(num);
}
console.log(smallNumbers);
/*
4. Use a for-of loop to iterate through the array ["coffee", "green tea", "herbal tea", "black tea"] and skip herbal tea store the other teas in an aaray named preferrefTeas.
*/
let teatypes = ["coffee", "green tea", "herbal tea", "black tea"];
let preferrefTeas = [];
for (const tea of teatypes) {
    if (tea === "herbal tea") {
        continue
    }
    preferrefTeas.push(tea);
}
console.log(preferrefTeas);
/*
5. Use a for-in loop to loop through an object containing city populations. stop the loop when the population of Berlin is found and store all the previous cities populations in a new object name cityPopulations.
*/
let cityPopulation = {
    London: 8900000,
    "New York": 8400000,
    Paris: 2200000,
    Berlin: 3500000
};
let cityPopulations = {};
// console.log(Object.keys(cityPopulation));
// console.log(Object.values(cityPopulation));
for (const city in cityPopulation) {
    if (city == "Berlin") {
        break;
    }
//    console.log(cityPopulation[city]);
//    key = value;
    cityPopulations[city] = cityPopulation[city];
}
console.log(cityPopulations);
/*
6. Use for-in loop to loop through an object containing city populations. skip any city with a population below 3 million and store the rest in a new object named largeCites
*/
let worldCities = {
    Sydney: 5000000,
    Tokyo: 9000000,
    Berlin: 3500000,
    Paris: 2200000,
};
let largeCites = {};
for (const city in worldCities) {
    if (worldCities[city] < 3000000) {
        continue;
    }
    largeCites[city] = worldCities[city];
}
console.log(largeCites);
/* 
7. Write a forEach loop that iterates through the array ["earl grey", "green tea", "coffee", "oolong tea"] stop the loop when dhruva is found and store all the previous tea types in an array named availableTea
*/
let teaCollection = ["earl grey", "green tea", "coffee", "oolong tea"];
let availableTea = [];
teaCollection.forEach(function(tea){
    if (tea === 'coffee') {
        return;
    }
    availableTea.push(tea);
});
console.log(availableTea);
/* 
8. Write a forEach loop that iterates through the array ["Berlin", "Tokyo", "Sydney", "Paris"] skip "Sydney" and store the other cities in a new array named traveledCiries.
*/
let myworldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCiries = [];
myworldCities.forEach(city => {
    if (city === 'Sydney') {
        return;
    }
    traveledCiries.push(city);
});
console.log(traveledCiries);
/*
9. Write a for loop that iterates throughn the array [2, 5, 7, 9] skip the value 7 and multiply the rest by 2 store the results in a new array named doubledNumbers
*/
let myNumber = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < myNumber.length; i++) {
    if (myNumber[i] === 7) {
        continue;
    }
    doubledNumbers.push(myNumber[i] * 2);
}
console.log(doubledNumbers);
/*
10. Use a for-of loop to iterate through the array ["coffee", "green tea", "black tea", "jasmine tea", "herbal tea"] and stop when the length of the current tea name is greater than 10 store the teas iterated over in an array named shortTeas.
*/
let myTeas = ["coffee", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of myTeas) {
    if (tea.length > 10) {
        break;
    }
    shortTeas.push(tea);
}
console.log(shortTeas);
