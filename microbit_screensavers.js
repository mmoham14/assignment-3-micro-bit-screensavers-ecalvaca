let sleep: boolean = true
let motion: Gesture = Gesture.Shake

/*First*/input.onButtonPressed(Button.A, function () {
    sleep = true
})
/*Second*/input.onButtonPressed(Button.B, function () {
    sleep = false
})

/*1*/input.onGesture(Gesture.Shake, function () {
    motion = Gesture.Shake
})

/*2*/input.onGesture(Gesture.LogoDown, function () {
    motion = Gesture.LogoDown
})

/*3*/input.onGesture(Gesture.LogoUp, function () {
    motion = Gesture.LogoUp
})

/*4*/input.onGesture(Gesture.TiltLeft, function () {
    motion = Gesture.TiltLeft
})

/*5*/input.onGesture(Gesture.TiltRight, function () {
    motion = Gesture.TiltRight
})

/*a*/function saver1() {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
}

/*b*/function saver2() {
    let sprite = game.createSprite(Math.randomRange(0, 4), Math.randomRange(0, 4))
    if (Math.randomBoolean()) {
        sprite.turn(Direction.Right, 45)
    } else {
        sprite.turn(Direction.Left, 45)
    }
    sprite.move(2)
    sprite.ifOnEdgeBounce()
    basic.pause(300)
    sprite.delete()
    basic.clearScreen()
}

/*c*/function saver3() {
    basic.showLeds
        (`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    `)

    //

    basic.showLeds
        (`
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    . # . # .
    `)

    //

    basic.showLeds
        (`
    . . . . .
    . . . . .
    . . # . .
    . # . # .
    # # # # #
    `)

    //

    basic.showLeds
        (`
    . . . . .
    . . # . .
    . # . # .
    # # # # #
    . # . # .
    `)

    //

    basic.showLeds
        (`
    . . # . .
    . # . # .
    # # # # #
    . # . # .
    . # . # .
    `)



    basic.showLeds
        (`
    . # . # .
    # # # # #
    . # . # .
    . # . # .
    . . . . .
    `)

    //

    basic.showLeds
        (`
    # # # # #
    . # . # .
    . # . # .
    . . . . .
    # . . # .
    `)

    //

    basic.showLeds
        (`
    . # . # .
    . # . # .
    . . . . .
    . # . # .
    . # . . #
    `)

    //

    basic.showLeds
        (`
    . # . # .
    . . . . .
    # . . # .
    . # # . .
    # . . # #
    `)



    basic.showLeds
        (`
    . . . . .
    # . # . .
    . # . # .
    . . # . .
    # . . . #
    `)
    basic.clearScreen()
    basic.pause(1000)
}

/*d*/function saver4() {
    basic.showString("DND!!")
}

/*e*/function saver5() {
    basic.showIcon(IconNames.Skull)
    basic.clearScreen()
    basic.pause(100)
}

basic.forever(function () {
    if (sleep) {
        if (motion == Gesture.Shake) {
            saver1()
        }
        else if (motion == Gesture.LogoDown) {
            saver2()
        }
        else if (motion == Gesture.LogoUp) {
            saver3()
        }
        else if (motion == Gesture.TiltLeft) {
            saver4()
        }
        else if (motion == Gesture.TiltRight) {
            saver5()
        }
        else { // default
            saver1()
        }
    }
    else {
        basic.showString("Working")
    }
})
