function carFactory() {
    let car = {
        model: arguments[0].model,
        engine: {
            power: arguments[0].power,
            volume: 0
        },
        carriage: {
            type: arguments[0].carriage,
            color: arguments[0].color
        },
        wheels: [],
        toString: function() {
            return `{ model: ${this.model},\n power: ${this.engine.power},\n color: ${this.carriage.color},\n`
                + ` carriage: ${this.carriage.type},\n wheelsize: ${this.wheels} }`
        }
    }

    if(car.engine.power <= 90){
        car.engine.power = 90
        car.engine.volume = 1800
    }else if(car.engine.power <= 120){
        car.engine.power = 120
        car.engine.volume = 2400
    }else{
        car.engine.power = 200
        car.engine.volume = 3500
    }

    let wheelSize = arguments[0].wheelsize % 2 === 0 ? arguments[0].wheelsize - 1 : arguments[0].wheelsize
    for (let i = 0; i < 4; i++) {
        car.wheels.push(wheelSize)
    }

    return car
}

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}).toString())