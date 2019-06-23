function cardDeckBuilder(selector) {
    const suits = {
        'C': '\u2663',
        'D': '\u2666',
        'H': '\u2665',
        'S': '\u2660'
    }

    function addCard(face, suit) {
        let element = $(`<div class="card">${face} ${suits[suit]}</div>`)
        element.click(reverse)
        element.appendTo(selector)
    }
    
    function reverse() {
        const cards = $('.card')
        $(selector).append([...cards].reverse())
    }

    return {
        addCard
    }
}