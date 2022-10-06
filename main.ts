input.onButtonPressed(Button.A, function () {
    RingbitCar.back()
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.forward()
})
input.onGesture(Gesture.ScreenDown, function () {
    RingbitCar.brake()
})
basic.showLeds(`
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    . . . . .
    `)
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
