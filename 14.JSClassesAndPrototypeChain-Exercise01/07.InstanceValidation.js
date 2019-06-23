class CheckingAccount{
    constructor(clientId, email, firstName, lastName){
        this.setClientId = clientId
        this.setEmail = email
        this.setFirstName = firstName
        this.setLastName = lastName
        this.products = []
    }

    set setClientId(clientId){
        let pattern =  /^\d{6}$/
        if (!pattern.test(clientId)){
            throw new TypeError('Client ID must be a 6-digit number')
        }
        this.clintId = clientId
    }

    set setEmail(email){
        let pattern = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/
        if (!pattern.test(email)){
            throw new TypeError('Invalid e-mail')
        }
        this.email = email
    }

    set setFirstName(firstName){
        if (firstName.length < 3 || firstName.length > 20){
            throw new TypeError('First name must be between 3 and 20 characters long')
        }

        let pattern = /^[a-zA-Z]+$/
        if (!pattern.test(firstName)){
            throw new TypeError('First name must contain only Latin characters')
        }
        this.firstName  = firstName
    }

    set setLastName(lastName){
        if (lastName.length < 3 || lastName.length > 20){
            throw new TypeError('Last name must be between 3 and 20 characters long')
        }

        let pattern = /^[a-zA-Z]+$/
        if (!pattern.test(lastName)){
            throw new TypeError('Last name must contain only Latin characters')
        }
        this.lastName  = lastName
    }
}

let acc1 = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')
console.log(acc1)
//let acc2 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov')
//console.log(acc2)
//let acc3 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
//console.log(acc3)
//let acc4 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')
//console.log(acc4)