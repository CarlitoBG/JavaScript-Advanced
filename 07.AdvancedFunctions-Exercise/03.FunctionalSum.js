function add(n) {
    let sum = n

    function addToSum(number) {
        sum += number
        return addToSum
    }

    addToSum.toString = function () {
        return sum
    }
    return addToSum
}

//console.log(+add(12))
console.log(add(1)(6)(-3).toString())