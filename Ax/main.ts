weatherbit.startWeatherMonitoring()
weatherbit.startWindMonitoring()
let x = 0

input.onButtonPressed(Button.A, function () {
    x += 1
})

basic.forever(function () {
    if (x == 0) {
        basic.showString("T:")
        basic.showNumber(Math.floor(weatherbit.temperature() / 100))
        basic.clearScreen()
    } else if (x == 1) {
        basic.showString("H:")
        basic.showNumber(Math.floor(weatherbit.humidity() / 1024))
        basic.clearScreen()
    } else if (x == 2) {
        basic.showString("D:")
        basic.showString(weatherbit.windDirection())
        basic.clearScreen()
    } else if (x == 3) {
        basic.showString("S:")
        basic.showNumber(Math.trunc(weatherbit.windSpeed()))
        basic.clearScreen()
    } else {
        x = 0
    }
    basic.clearScreen()
})
