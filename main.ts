let skin = 0
let lies = 0
basic.forever(function () {
    skin = pins.analogReadPin(AnalogPin.P1)
    lies = pins.analogReadPin(AnalogPin.P0)
    if (skin < lies) {
        basic.clearScreen()
        basic.showLeds(`
            # . # . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        pins.analogWritePin(AnalogPin.P6, 1023)
        pins.analogWritePin(AnalogPin.P7, 0)
        pins.analogWritePin(AnalogPin.P8, 0)
    } else {
        basic.clearScreen()
        basic.showLeds(`
            # . . . #
            # . # . #
            . # . # .
            . # . # .
            . . # . .
            `)
        pins.analogWritePin(AnalogPin.P6, 0)
        pins.analogWritePin(AnalogPin.P7, 0)
        pins.analogWritePin(AnalogPin.P8, 1023)
        music.play(music.stringPlayable("C5 B A B C5 B A G ", 120), music.PlaybackMode.UntilDone)
    }
})
