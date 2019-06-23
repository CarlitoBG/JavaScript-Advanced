let createComputerHierarchy = require('./06.Computer')

function createMixins() {
    function computerQualityMixin(classToExtend) {
        classToExtend.prototype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3
        }

        classToExtend.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4)
        }

        classToExtend.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)
        }
    }

    function styleMixin(classToExtend) {
        classToExtend.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer && this.manufacturer === this.monitor.manufacturer
        }

        classToExtend.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 && (this.color === 'Silver' || this.color === 'Black') && this.weight < 3
        }
    }

    return {
        computerQualityMixin,
        styleMixin
    }
}

let obj = createComputerHierarchy()

let Keyboard = obj.Keyboard
let Monitor = obj.Monitor
let Desktop = obj.Desktop

let monitor = new Monitor('HP', 1000, 500)
let keyboard = new Keyboard('HP', 0.1)
let comp = new Desktop('HP', 200, 4, 100, keyboard, monitor)
console.log(comp)
createMixins().computerQualityMixin(Desktop)
console.log(comp.getQuality())
console.log(comp.isFast())
console.log(comp.isRoomy())