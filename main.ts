basic.forever(function () {
    if (input.temperature() < 27) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
