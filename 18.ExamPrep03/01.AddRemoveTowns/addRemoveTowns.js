function attachEvents() {
    $('#btnAdd').click(addTown)
    $('#btnDelete').click(deleteTown)

    function addTown() {
        let input = $('#newItem')
        if (input.val() !== ''){
            $('#towns').append($(`<option>${input.val()}</option>`))
            input.val('')
        }
    }

    function deleteTown() {
        $('#towns').find(':selected').remove()
    }
}