function domTraversal(selector) {
    let element = $(selector)

    let maxDepth = -1
    let deepestNode = element

    findDeepestChild(0, element)

    function findDeepestChild(depth, currentNode) {
        if (depth > maxDepth){
            maxDepth = depth
            deepestNode = currentNode
        }

        let children = currentNode.children()
        for (let child of children) {
            findDeepestChild(depth + 1, $(child))
        }
    }

    while (true){
        deepestNode.addClass('highlight')
        if (deepestNode.attr('id') === element.attr('id')){
            return
        }

        deepestNode = deepestNode.parent()
    }
}