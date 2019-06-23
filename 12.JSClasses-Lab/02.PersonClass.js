class Person {
    constructor(firstName, lastName, age, email){
        [this.firstName, this.lastName, this.age, this.email] = [firstName, lastName, age, email]
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`
    }
}

let person = new Person("Peter", "Marinov", 18, "pesho18@abv.bg")
console.log(person.toString())