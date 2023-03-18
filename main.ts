input.onButtonPressed(Button.A, function () {
    radio.sendString("februargutt har hacket deg")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
