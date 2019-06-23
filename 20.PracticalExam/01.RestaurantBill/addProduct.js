function addProduct() {
    let input = $('input[type=text]')
    let price = $('input[type=number]')
    let totalPriceRow = $('tfoot > tr > td')

    if (input.val() !== '' && price.val() !== ''){
        $('#product-list').append($(`<tr><td>${input.val()}</td><td>${price.val()}</td></tr>`))
        totalPriceRow[1].innerHTML = (Number(totalPriceRow[1].innerHTML) + Number(price.val()))

        input.val('')
        price.val('')
    }
}