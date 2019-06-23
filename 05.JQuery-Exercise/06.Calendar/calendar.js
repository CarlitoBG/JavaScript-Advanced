function calendar([day, month, year]) {
    let date = new Date(year, month , 0)
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let tableBody = $('<tbody>')
        .append($('<tr>')
            .append($('<th>').text('Mon'))
            .append($('<th>').text('Tue'))
            .append($('<th>').text('Wed'))
            .append($('<th>').text('Thu'))
            .append($('<th>').text('Fri'))
            .append($('<th>').text('Sat'))
            .append($('<th>').text('Sun')))

    let calendar = $('<table>')
        .append($('<caption>').text(months[date.getMonth()] + ' ' + date.getFullYear()))
        .append(tableBody)

    let lastDayOfPreviousMonth = (new Date(year, month - 1, 1).getDay() - 1)
    lastDayOfPreviousMonth = lastDayOfPreviousMonth < 0 ? 6 : lastDayOfPreviousMonth

    let firstWeekOfCurrentMonth = $('<tr>')
    let dayOfMonth = 1

    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
        if (dayOfWeek < lastDayOfPreviousMonth) {
            firstWeekOfCurrentMonth.append($('<td>'))
        } else {
            if (dayOfMonth === day) {
                firstWeekOfCurrentMonth.append($('<td>').addClass('today').text(dayOfMonth++))
            }else {
                firstWeekOfCurrentMonth.append($('<td>').text(dayOfMonth++))
            }
        }
    }

    tableBody.append(firstWeekOfCurrentMonth)

    let lastDateOfMonth = new Date(year, month, 0).getDate()
    let numberOfRemainingRows = (lastDateOfMonth + 1 - dayOfMonth) / 7

    for (let i = 0; i < numberOfRemainingRows; i++) {
        let currentWeek = $('<tr>')

        for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
            if (dayOfMonth > lastDateOfMonth) {
                currentWeek.append($('<td>'))
            } else {
                if (dayOfMonth === day) {
                    currentWeek.append($('<td>').addClass('today').text(dayOfMonth++))
                }else {
                    currentWeek.append($('<td>').text(dayOfMonth++))
                }
            }
        }
        tableBody.append(currentWeek)
    }

    $('#content').append(calendar)
}