weatherbit.startWeatherMonitoring()
weatherbit.startWindMonitoring()
let x = 0

input.onButtonPressed(Button.A, function () {
    x += 1
    if (x == 0) {
        basic.showString("T")
    } else if (x == 1) {
        basic.showString("H")
    } else if (x == 2) {
        basic.showString("K")
    } else if (x == 3) {
        basic.showString("X")
    }
    basic.clearScreen()
})

basic.forever(function () {
    if (x == 0) {
        basic.showNumber(Math.floor(weatherbit.temperature() / 100))
        basic.clearScreen()
    } else if (x == 1) {
        basic.showNumber(Math.floor(weatherbit.humidity() / 1024))
        basic.clearScreen()
    } else if (x == 2) {
        basic.showString(weatherbit.windDirection())
        basic.clearScreen()
    } else if (x == 3) {
        basic.showNumber(Math.trunc(weatherbit.windSpeed()))
        basic.clearScreen()
    } else {
        x = 0
    }
    basic.clearScreen()
})
