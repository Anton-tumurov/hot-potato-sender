input.onButtonPressed(Button.AB, function () {
    potato = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (potato > 0) {
        radio.sendNumber(potato)
        potato = -1
    }
})
let potato = 0
potato = -1
radio.setGroup(173)
basic.clearScreen()
basic.forever(function () {
    if (potato > 0) {
        basic.showIcon(IconNames.Chessboard)
    } else if (potato < 0) {
        basic.clearScreen()
    }
})
