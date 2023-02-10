basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    # . # . .
    # # # . .
    `)
basic.showString("Measuring Distance")
basic.showIcon(IconNames.Angry)
basic.forever(function () {
    basic.showNumber(Tinybit.Ultrasonic_Car())
})
