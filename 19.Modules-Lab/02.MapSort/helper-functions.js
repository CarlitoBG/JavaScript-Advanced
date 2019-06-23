function mapSort(map) {
    let arr
    if (arguments[1] === undefined){
        function sorting(a, b) {
            if (a[0] < b[0]){
                return -1
            }
            if (a[0] > b[0]){
                return 1
            }
            return a[0].localeCompare(b[0])
        }

        arr = [...map].sort(sorting)
    }else {
        let sortFn = arguments[1]
        arr = [...map].sort(sortFn)
    }

    let newMap = new Map()
    for (let mapPair of arr) {
        newMap.set(mapPair[0], mapPair[1])
    }

    return newMap
}

module.exports = mapSort