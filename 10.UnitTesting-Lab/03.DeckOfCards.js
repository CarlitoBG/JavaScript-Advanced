function printDeckOfCards(cards) {
    function makeCard(card, suit) {
        const VALID_CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        const VALID_SUITS = {'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663'}

        if (VALID_CARDS.indexOf(card) < 0 || !VALID_SUITS.hasOwnProperty(suit)){
            throw new Error('Invalid input data!')
        }

        return {
            card,
            suit,
            toString: function () {
                return card + VALID_SUITS[suit]
            }
        }
    }

    let deck = []
    for (let card of cards) {
        let face = card.substring(0, card.length - 1)
        let suit = card.substring(card.length - 1)

        try {
            deck.push(makeCard(face, suit))
        }catch (err){
            console.log('Invalid card: ' + card)
            return
        }
    }
    console.log(deck.join(' '))
}

printDeckOfCards(['AS', '10D', 'KH', '2C'])
printDeckOfCards(['5S', '3D', 'QD', '1C'])