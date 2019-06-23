class Rat{
    constructor(name){
        this.name = name
        this.arr = []
    }

    unite(otherRat){
        if (this.constructor === otherRat.constructor){
            this.arr.push(otherRat)
        }
    }

    getRats(){
        return this.arr
    }

    toString(){
        let result = this.name
        for (let i = 0; i < this.arr.length; i++) {
            result += '\n##' + this.arr[i]
        }

        return result
    }
}

let test = new Rat("Pesho")

console.log(test.toString()) //Pesho
console.log(test.getRats()) //[]
test.unite(new Rat("Gosho"))
test.unite(new Rat("Sasho"))
console.log(test.getRats())
//[ Rat { name: 'Gosho', unitedRats: [] },
// Rat { name: 'Sasho', unitedRats: [] } ]
console.log(test.toString())