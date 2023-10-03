let skin = 0
let lies = 0
basic.forever(function () {
    skin = pins.analogReadPin(AnalogPin.P1)
    lies = pins.analogReadPin(AnalogPin.P0)
    if (skin < lies) {
        basic.clearScreen()
        pins.analogWritePin(AnalogPin.P15, 1023)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P13, 0)
        basic.showLeds(`
            # . # . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.clearScreen()
        pins.analogWritePin(AnalogPin.P15, 0)
        pins.analogWritePin(AnalogPin.P14, 0)
        pins.analogWritePin(AnalogPin.P13, 1023)
        basic.showLeds(`
            # . . . #
            # . # . #
            . # . # .
            . # . # .
            . . # . .
            `)
        music.play(music.stringPlayable("C5 B A B C5 B A G ", 120), music.PlaybackMode.UntilDone)
    }
})
