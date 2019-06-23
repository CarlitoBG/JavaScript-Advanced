function orderRectangles(rectsData) {
    let rects = []
    for (let [width, height] of rectsData) {
        let rectangle = createRectangle(width, height)
        rects.push(rectangle)
    }
    
    function createRectangle(width, height) {
        let rect = {
            width: width,
            height: height,
            area: () => rect.width * rect.height,
            compareTo: function (other) {
                let result = other.area() - rect.area()
                return result || (other.width - rect.width)
            }
        }
        return rect
    }

    rects.sort((a, b) => a.compareTo(b))
    return rects
}

console.log(orderRectangles([[10, 5], [5, 12]]))