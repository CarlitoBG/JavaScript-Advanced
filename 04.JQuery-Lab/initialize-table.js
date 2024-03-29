function initializeTable() {
    $('#createLink').click(createCountry)

    addCountryToTable('Bulgaria', 'Sofia')
    addCountryToTable('Germany', 'Berlin')
    addCountryToTable('Russia', 'Moscow')
    fixRowLinks()

    function addCountryToTable(country, capital) {
        let row = $('<tr>')
            .append($("<td>").text(country))
            .append($("<td>").text(capital))
            .append($("<td>")
                .append($("<a href='#'>[Up]</a>").click(moveRowUp)).append(" ")
                .append($("<a href='#'>[Down]</a>").click(moveRowDown)).append(" ")
                .append($("<a href='#'>[Delete]</a>").click(deleteRow)))

        row.css('display','none')
        $("#countriesTable").append(row)
        row.fadeIn()
    }

    function createCountry() {
        let country = $('#newCountryText')
        let capital = $('#newCapitalText')
        addCountryToTable(country.val(), capital.val(), true)
        country.val('')
        capital.val('')
        fixRowLinks()
    }
    
    function moveRowUp() {
        let row = $(this).parent().parent()
        row.fadeOut(function () {
            row.insertBefore(row.prev())
            row.fadeIn()
            fixRowLinks()
        })
    }

    function moveRowDown() {
        let row = $(this).parent().parent()
        row.fadeOut(function () {
            row.insertAfter(row.next())
            row.fadeIn()
            fixRowLinks()
        })
    }

    function deleteRow() {
        let row = $(this).parent().parent()
        row.fadeOut(function () {
            row.remove()
            fixRowLinks()
        })
    }

    function fixRowLinks() {
        let table = $('#countriesTable')
        $(table).find('a').css('display', 'inline')

        let tableRows = $(table).find('tr')
        $(tableRows[2]).find("a:contains('Up')").css('display', 'none')
        $(tableRows[tableRows.length - 1]).find("a:contains('Down')").css('display', 'none')
    }
}