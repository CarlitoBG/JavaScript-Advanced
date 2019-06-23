(function bookGenerator() {
    let id = 1
    return function (selector, bookTitle, bookAuthor, bookISBN){
        let container = $(selector)
        let fragment = document.createDocumentFragment()

        let book = $('<div></div>')
        book.attr('id', 'book' + id)

        let title = $('<p></p>')
        title.addClass('title')
        title.text(bookTitle)

        let author = $('<p></p>')
        author.addClass('author')
        author.text(bookAuthor)

        let isbn = $('<p></p>')
        isbn.addClass('isbn')
        isbn.text(bookISBN)

        let selectButton = $('<button>Select</button>')
        selectButton.on('click', function () {
            book.css('border', '2px solid blue')
        })

        let deselectButton = $('<button>Deselect</button>')
        deselectButton.on('click', function () {
            book.css('border', 'none')
        })

        title.appendTo(book)
        author.appendTo(book)
        isbn.appendTo(book)
        selectButton.appendTo(book)
        deselectButton.appendTo(book)

        book.appendTo(fragment)
        container.append(fragment)

        id++
    }
}())