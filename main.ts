let x1 = 0
let x2 = 0
let x3 = 0
let x4 = 0
let x5 = 0
let x6 = 0
let x7 = 0
let y0 = 0
let y1 = 0
let y2 = 0
let y3 = 0
let y4 = 0
let y5 = 0
let y6 = 0
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        for (let contador2 = 0; contador2 <= 5; contador2++) {
            let x0 = 0
            x1 = 1
            x2 = 2
            x3 = 3
            x4 = 4
            x5 = 1
            x6 = 3
            x7 = 1
            y0 = 3
            y1 = 4
            y2 = 4
            y3 = 4
            y4 = 3
            y5 = 1
            y6 = 1
            led.plot(x0, y0 - contador2)
            led.plot(x1, y1 - contador2)
            led.plot(x2, y2 - contador2)
            led.plot(x3, y3 - contador2)
            led.plot(x4, y4 - contador2)
            led.plot(x5, y5 - contador2)
            led.plot(x6, y6 - contador2)
            basic.pause(200)
            basic.clearScreen()
        }
    }
})
