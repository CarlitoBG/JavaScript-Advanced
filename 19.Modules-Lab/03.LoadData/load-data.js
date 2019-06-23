let data = require('./data').data

function sort(property) {
    data.sort((a, b) => a[property].localeCompare(b[property]))
    return data
}

function filter(property, value) {
    return data.filter(a => a[property] === value)
}

module.exports = {sort, filter}