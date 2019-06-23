function timer() {
    let hours = $('#hours')
    let minutes = $('#minutes')
    let seconds = $('#seconds')

    let [interval, isTimerRunning] = [0, false]

    $('#start-timer').on('click', function () {
        if (isTimerRunning){
            return
        }
        interval = setInterval(updateTime, 1000)
        isTimerRunning = true
    })

    $('#stop-timer').on('click', function () {
        if (interval){
            clearInterval(interval)
            isTimerRunning = false
        }
    })
    
    function updateTime() {
        let secondsValue = seconds.text()
        let minutesValue = minutes.text()
        let hoursValue = hours.text()

        seconds.text(`0${(+secondsValue + 1)}`.slice(-2))
        if (secondsValue >= 59){
            seconds.text('00')
            minutes.text(`0${(+minutesValue + 1)}`.slice(-2))
            if (minutesValue >= 59){
                minutes.text('00')
                hours.text(`0${(+hoursValue + 1)}`.slice(-2))
            }
        }
    }
}