function max() {
    var ansver;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] > ansver || ansver == undefined) {
                ansver = arguments[i];
            }
        }
    console.log(ansver);
    return ansver;
}

function min() {
    var ansver;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] < ansver || ansver == undefined) {
                ansver = arguments[i];
            }
        }
    console.log(ansver);
    return ansver;
}


max(5, 8, 12, 3, 22, 18);
min(5, 8, 12, 3, 22, 18);