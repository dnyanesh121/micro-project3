const foodData = require('./food.json')

let result;

//======= list of all food items ===========//
function listOfAllFoodItems() {
    let result = foodData.map((item) => {
        return item.foodname;
    })
    return result;

}
result = listOfAllFoodItems(foodData);
console.log('All food items:', result);


// =======list all the food items category vegetable=======
let fooditemVegetable = foodData.filter((veg) => {
    return veg.category === 'Vegetable'
})
console.log(fooditemVegetable);


// =======list all the food items category Fruit=======
let vegFruit = foodData.filter((fruit) => {
    return fruit.category === 'Fruit'
})
console.log(vegFruit)


// =======list all the food items category Protein=======
let vegProtein = foodData.filter((protein) => {
    return protein.category === 'Protein'
})
console.log(vegProtein)


// =======list all the food items category Nuts=======
let vegNuts = foodData.filter((nuts) => {
    return nuts.category === 'Nuts'
})
console.log(vegNuts)


// =======list all the food items category Grain=======
let vegGrain = foodData.filter((grain) => {
    return grain.category === 'Grain'
})
console.log(vegGrain)


// =======list all the food items category Dairy=======
let vegDairy = foodData.filter((dairy) => {
    return dairy.category === 'Dairy'
})
console.log(vegDairy)


// list all food items calorie above 100
let foodCalorie = foodData.filter((calorieAbove) => {
    return calorieAbove.calorie < 100
})
console.log(foodCalorie)


// list all food items calorie below 100
let foodCalorie2 = foodData.filter((calorieBelow) => {
    return calorieBelow.calorie > 100
})
console.log(foodCalorie2)


// list all food items with highest protein
let highProtein = foodData.sort(function (a, b) {
    return b.protiens - a.protiens
})
console.log(highProtein)


// list all food items with lowest cab
let lowestCab = foodData.sort(function(a,b){
    return a.cab-b.cab
})
console.log(lowestCab)