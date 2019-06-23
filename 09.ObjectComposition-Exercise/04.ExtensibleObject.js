function extensibleObject() {
    let obj = Object.create({})
    obj.extend = function (template) {
        for (let property in template) {
            if(typeof template[property] === 'function'){
                Object.getPrototypeOf(obj)[property] = template[property]
            }else{
                obj[property] = template[property]
            }
        }
    }

    return obj
}

console.log(extensibleObject({
    extensionMethod: function () {},
    extensionProperty: 'someString'
}))