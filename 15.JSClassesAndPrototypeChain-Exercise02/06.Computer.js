function createComputerHierarchy() {
    class Keyboard{
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer
            this.responseTime = Number(responseTime)
        }
    }

    class Monitor{
        constructor(manufacturer, width, height){
            this.manufacturer = manufacturer
            this.width = Number(width)
            this.height = Number(height)
        }
    }

    class Battery{
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer
            this.expectedLife = Number(expectedLife)
        }
    }

    class Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if (new.target === Computer){
                throw new TypeError('Abstract class cannot be instantiated directly')
            }

            this.manufacturer = manufacturer
            this.processorSpeed = Number(processorSpeed)
            this.ram = Number(ram)
            this.hardDiskSpace = Number(hardDiskSpace)
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery){
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.weight = Number(weight)
            this.color = color
            this.battery = battery
        }

        get battery(){
            return this._battery
        }

        set battery(battery){
            if (!(battery instanceof Battery)){
                throw new TypeError
            }
            this._battery = battery
        }
    }

    class Desktop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor){
            super(manufacturer, processorSpeed, ram, hardDiskSpace)
            this.keyboard = keyboard
            this.monitor = monitor
        }

        get keyboard(){
            return this._keyboard
        }

        set keyboard(keyboard){
            if (!(keyboard instanceof Keyboard)){
                throw new TypeError
            }
            this._keyboard = keyboard
        }

        get monitor(){
            return this._monitor
        }

        set monitor(monitor){
            if (!(monitor instanceof Monitor)){
                throw new TypeError
            }
            this._monitor = monitor
        }
    }

    return{
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

module.exports = createComputerHierarchy