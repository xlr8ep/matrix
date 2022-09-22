basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        led.plot(0, 3)
        led.plot(1, 4)
        led.plot(2, 4)
        led.plot(3, 4)
        led.plot(4, 3)
        led.plot(1, 1)
        led.plot(3, 1)
    }
    basic.clearScreen()
})
