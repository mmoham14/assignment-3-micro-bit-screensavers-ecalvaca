let item = game.createSprite(2, 2);
let awakeMode: boolean = true

input.onButtonPressed(Button.A, function () {
    awakeMode = true
})
input.onButtonPressed(Button.B, function () {
    awakeMode = false
})

function screensaver1() {
    basic.showString("|/-\|")
}

function screensaver2() {
    item.setX(Math.randomRange(0, 4));
    item.setY(Math.randomRange(0, 4));
    item.ifOnEdgeBounce();
    item.move(1);
}

function screensaver3() {
    basic.showIcon(IconNames.Heart);
}

function screensaver4() {
    basic.showString("*.*.*.*.*")
}
function screensaver5() {
    basic.showString("-_-_-_-_-")
}

basic.forever(function () {
    if (awakeMode) {
        basic.showString("Hello")
    }
    else {
        basic.showString("Sleep")
        screensaver1();
        screensaver2();
        screensaver3();
        screensaver4();
        screensaver5();
    }
})
