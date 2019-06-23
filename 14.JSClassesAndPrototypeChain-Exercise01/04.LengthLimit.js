class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString
        this.innerLength = innerLength
    }

    increase(lenght){
        this.innerLength += lenght
    }

    decrease(lenght){
        this.innerLength -= lenght
        if (this.innerLength < 0){
            this.innerLength = 0
        }
    }

    toString(){
        if (this.innerLength === 0 ){
            return '...'
        }else {
            return this.innerString.substr(0, this.innerLength) + '...'
        }
    }
}

let test = new Stringer("Test", 5)

console.log(test.toString()) //Test...
test.decrease(3)
console.log(test.toString()) //Te...
test.decrease(5)
console.log(test.toString()) //...
test.increase(4)
console.log(test.toString()) //Test...