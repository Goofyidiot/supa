input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 B C5 A G A F E ", 120), music.PlaybackMode.LoopingInBackground)
    basic.showString("supa")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        # # # # #
        # # # # #
        # . # . #
        `)
    music.play(music.stringPlayable("G F E C5 B A E D ", 106), music.PlaybackMode.UntilDone)
})
