function move(command) {
    let availableTowns = $('#available-towns')
    let selectedTowns = $('#selected-towns')
    let output = $('#output')

    if (command === 'left'){
        availableTowns.append(selectedTowns.find(':selected'))
    }else if (command === 'right'){
        selectedTowns.append(availableTowns.find(':selected'))
    }else {
        output.empty()

        let allTowns = selectedTowns.find('option').toArray().map(el => $(el).text()).join('; ')

        output.append(allTowns)
    }
}