let number = 0
let years = 0
let results_year = 0
let boomers = 0
let millennials = 0
let genz = 0
let mean = 0
let y = 0
function rollDice () {
    if (number == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (number == 2) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . # .
            . . . . .
            `)
    } else if (number == 3) {
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . .
            `)
    } else if (number == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (number == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else if (number == 6) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        years = randint(1949, 2010)
        basic.showNumber(years)
        results_year = results_year + years
        results_year += years
        if (years >= 1949 && years <= 1968) {
            basic.showString("BABY BOOMER")
            boomers += 1
        } else if (years >= 1969 && years <= 1980) {
            basic.showString("MILLENNIAL")
            millennials += 1
        } else if (years >= 1981 && years <= 2010) {
            basic.showString("GEN Z")
            genz += 1
        }
    }
    basic.showString("BABY BOOMER")
    basic.showNumber(boomers)
    basic.showString("MILLENNIAL")
    basic.showNumber(millennials)
    mean = results_year / 20
    basic.showNumber(mean)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let number1 = 0; number1 <= 5; number1++) {
        basic.showNumber(number1)
    }
    basic.clearScreen()
    number = randint(1, 6)
    if (number == 3 || number == 6) {
        rollDice()
        basic.showString("WIN!")
        music.playMelody("G B A G C5 B A B ", 120)
    } else {
        rollDice()
        basic.showString("LOSE")
        music.playTone(147, music.beat(BeatFraction.Whole))
    }
})
basic.forever(function () {
    while (input.buttonIsPressed(Button.B)) {
        y = 2
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(200)
            led.unplot(x, y)
            basic.pause(200)
        }
    }
    basic.clearScreen()
})
