function argumentInfo() {
    let summary = {}

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i]
        let type = typeof obj
        console.log(type + ': ' + obj)

        if(!summary[type]){
            summary[type] = 1
        }else{
            summary[type]++
        }
    }

    let sorted = []
    for (let currentType in summary) {
        sorted.push([currentType, summary[currentType]])
    }

    sorted.sort(function(a, b) {
        a = a[1]
        b = b[1]

        return b - a
    })

    for (let element of sorted) {
        console.log(element[0] + ' = ' + element[1])
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); })
//argumentInfo({ name: 'bob'}, 3.333, 9.999)