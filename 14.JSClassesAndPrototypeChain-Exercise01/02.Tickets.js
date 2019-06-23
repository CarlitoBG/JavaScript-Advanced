function tickets(arr, sortingCriteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination
            this.price = price
            this.status = status
        }
    }

    let tickets = []
    for (let i = 0; i < arr.length; i++) {
        let tokens = arr[i].split('|')
        let destination = tokens[0]
        let price = Number(tokens[1])
        let status = tokens[2]

        let ticket = new Ticket(destination, price, status)
        tickets.push(ticket)
    }

    if (sortingCriteria === 'destination') {
        tickets.sort(function (a, b) {
            if (a.destination < b.destination)
                return -1
            if (a.destination > b.destination)
                return 1
            return 0
        })
    } else if(sortingCriteria === 'price'){
        tickets.sort(function(a, b) {
            if (a.price < b.price )
                return -1
            if (a.price > b.price)
                return 1
            return 0
        })
    } else if(sortingCriteria === 'status'){
        tickets.sort(function(a, b) {
            if (a.status < b.status )
                return -1
            if (a.status > b.status)
                return 1
            return 0
        })
    }

    return tickets
}

console.log(tickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'
))