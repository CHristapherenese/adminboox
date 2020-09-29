let R1 = 0
let R2 = 0
let C4 = 0
let R4 = 0
let C3 = 0
let C1 = 0
let C2 = 0
let R3 = 0
input.buttonD5.onEvent(ButtonEvent.Click, function () {
    R1 = 1
})
input.buttonD9.onEvent(ButtonEvent.Click, function () {
    R2 = 1
})
input.buttonA3.onEvent(ButtonEvent.Click, function () {
    C4 = 1
})
input.buttonA4.onEvent(ButtonEvent.Click, function () {
    C4 = 1
})
input.buttonD6.onEvent(ButtonEvent.Click, function () {
    R2 = 1
})
function enter () {
    if (R4 && C3) {
        keyboard.type("!enter")
        keyboard.type("\\r")
        keyboard.type("\\n")
        keyboard.type("$")
    }
}
input.buttonD10.onEvent(ButtonEvent.Click, function () {
    R4 = 1
})
input.buttonA1.onEvent(ButtonEvent.Click, function () {
    C1 = 1
})
function DriverNumber () {
    if (R1 && C1) {
        keyboard.type("1")
    }
    if (R1 && C2) {
        keyboard.type("2")
    }
    if (R1 && C3) {
        keyboard.type("3")
    }
    if (R2 && C1) {
        keyboard.type("4")
    }
    if (R2 && C2) {
        keyboard.type("5")
    }
    if (R2 && C3) {
        keyboard.type("6")
    }
    if (R3 && C1) {
        keyboard.type("7")
    }
    if (R3 && C2) {
        keyboard.type("8")
    }
    if (R3 && C3) {
        keyboard.type("9")
    }
    if (R4 && C2) {
        keyboard.type("0")
    }
}
function DriverActions () {
    if (R1 && C4) {
        keyboard.type("!eol")
        DriverNumber()
    }
    if (R2 && C4) {
        keyboard.type("!black")
        DriverNumber()
    }
    if (R3 && C4) {
        keyboard.type("!dq")
        DriverNumber()
    }
    if (R4 && C4) {
        keyboard.type("!clear")
        DriverNumber()
    }
}
input.buttonA2.onEvent(ButtonEvent.Click, function () {
    C2 = 1
})
input.touchA0.onEvent(ButtonEvent.Click, function () {
    keyboard.type("!yellow")
})
forever(function () {
    DriverActions()
    enter()
})
