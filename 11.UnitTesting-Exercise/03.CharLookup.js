function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return "Incorrect Type!"
    }
    if (string.length <= index || index < 0) {
        return "Incorrect Parameters!"
    }

    return string.charAt(index)
}

console.log(lookupChar('pesho', 3))

module.exports = { lookupChar }