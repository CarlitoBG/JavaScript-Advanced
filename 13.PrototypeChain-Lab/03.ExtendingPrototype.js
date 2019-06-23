let Person = require('./02.InheritingToString')

function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    }
}

extendClass(Person)
let p = new Person ('Goshko', 'crusher@abv.bg')
console.log(p.toSpeciesString())