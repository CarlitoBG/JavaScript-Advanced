function domSearch(selector, isCaseSensitive) {
    let addControls = $('<div>').addClass('add-controls')
        .append($('<label>').text('Enter text:').append($('<input>')))
        .append($('<a>').addClass('button').css('display', 'inline-block').text('Add').on('click', function () {
            let textElement = $('label input')
            let li = $('<li>').addClass('list-item')
                .append($('<a>').addClass('button').text('X').click(function () {
                    $(this).parent().remove()
                }))
                .append($('<strong>').text(textElement.val().trim()))

            $('ul.items-list').append(li)
            textElement.val('')
        }))

    let searchControls = $('<div>').addClass('search-controls')
        .append($('<label>').text('Search:').append($('<input>').on('input', function () {
            let itemToFind = $(this).val()
            let items = $('.list-item strong').toArray()

            for (let item of items) {
                let currentItem = $(item)

                if (isCaseSensitive) {
                    if (currentItem.text().indexOf(itemToFind) < 0) {
                        currentItem.parent().css('display', 'none')
                    } else {
                        currentItem.parent().css('display', '')
                    }
                } else {
                    if (currentItem.text().toLowerCase().indexOf(itemToFind.toLowerCase()) < 0) {
                        currentItem.parent().css('display', 'none')
                    } else {
                        currentItem.parent().css('display', '')
                    }
                }
            }
        })))

    let resultControls = $('<div>').addClass('result-controls').append($('<ul>').addClass('items-list'))

    $(selector).append(addControls).append(searchControls).append(resultControls)
}