let breakfastRobot = (function() {
   let ingredients = {
       protein: 0,
       carbohydrate: 0,
       fat: 0,
       flavour: 0
   }

   let recipes = {
       apple: {carbohydrate: 1, flavours: 2, fats: 0, proteins: 0},
       coke: {carbohydrate: 10, flavours: 20, fats: 0, proteins: 0},
       burger: {carbohydrate: 5, fats: 7, flavours: 3, proteins: 0},
       omelet: {proteins: 5, fats: 1, flavours: 1, carbohydrate: 0},
       cheverme: {proteins: 10, carbohydrate: 10, fats: 10, flavours: 10}
   }

    return function robotManagement(input) {
        let tokens = input.split(/ /)
        let command = tokens.shift()

        if (command === 'restock'){
            return restock(tokens[0], tokens[1])
        }else if(command === 'prepare'){
            return prepare(tokens[0], tokens[1])
        }else if(command === 'report'){
            return report()
        }
    }
    
    function restock(ingredient, quantity) {
        ingredients[ingredient] += Number(quantity)
        return 'Success'
    }
    
    function prepare(meal, quantity) {
        if (ingredients.protein - recipes[meal].protein * quantity < 0){
            return 'Error: not enough protein in stock'
        }else if (ingredients.carbohydrate - recipes[meal].carbohydrate * quantity < 0){
            return 'Error: not enough carbohydrate in stock'
        }else if (ingredients.fat - recipes[meal].fats * quantity < 0){
            return 'Error: not enough fat in stock'
        }else if (ingredients.flavour - recipes[meal].flavours * quantity < 0){
            return 'Error: not flavour fat in stock'
        }

        ingredients.protein = ingredients.protein - recipes[meal].proteins * quantity
        ingredients.carbohydrate = ingredients.carbohydrate - recipes[meal].carbohydrate * quantity
        ingredients.fat = ingredients.fat - recipes[meal].fats * quantity
        ingredients.flavour = ingredients.flavour - recipes[meal].flavours * quantity

        return 'Success'
    }
    
    function report() {
        return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`
    }
})()

console.log(breakfastRobot('prepare cheverme 1'))
console.log(breakfastRobot('restock protein 10'))
console.log(breakfastRobot('prepare cheverme 1'))
console.log(breakfastRobot('restock carbohydrate 10'))
console.log(breakfastRobot('prepare cheverme 1'))
console.log(breakfastRobot('restock fat 10'))
console.log(breakfastRobot('prepare cheverme 1'))
console.log(breakfastRobot('restock flavour 10'))
console.log(breakfastRobot('prepare cheverme 1'))
console.log(breakfastRobot('report'))