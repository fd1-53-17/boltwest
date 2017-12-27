function min (a, b) {
    a = a || 0;
    b = b || 1;
    console.log(arguments);
    if (a < b) {
        return a;
    }
    return b;
}

function max (a, b) {
    if (a > b) {
        return a;
    }
    return b;
}


console.log("Минимум", min(),"\nМаксимум", max(11, 89));



