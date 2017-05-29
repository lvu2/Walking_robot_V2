/**
 * Created by lvu on 10/9/2016.
 */
function drawCyl( xCent, yStart, zCent, rad, length, Tx, color) {
    var list = {
        "top": calcDist(xCent, yStart, zCent, Tx), "middle": calcDist(xCent, yStart - (length/2), zCent, Tx),
        "bottom": calcDist(xCent, yStart-length-1180, zCent, Tx)
    };
    var keysSorted = Object.keys(list).sort(function (a, b) {
        return list[a] - list[b]
    });
    for (var i = keysSorted.length - 1; i >= 0; i--) {
        if (keysSorted[i] == "top") {
            cylTop(xCent, yStart, zCent, rad,Tx);
        }
        if (keysSorted[i] == "middle") {
            cylMiddle(xCent, yStart, zCent, rad, length,Tx, color);
        }
        if (keysSorted[i] == "bottom") {
            cylBottom(xCent, yStart, zCent, rad, length,Tx);
        }
    }
}
function cylTop(xCent, yStart, zCent, rad, Tx) {
    context.beginPath(); context.fillStyle = "blue";
    moveToTx(xCent + rad*Math.sin(0), yStart, zCent + rad*Math.cos(0), Tx);
    for(var i = 0; i <= 360; i = i + (360/8)) {
        lineToTx(xCent + rad*Math.sin(i), yStart,zCent + rad*Math.cos(i), Tx);
    }
    context.fill(); context.stroke();
}
function cylMiddle(xCent, yStart, zCent, rad, length, Tx, color) {
    var list = {
        "0": calcDist(xCent + rad * Math.sin(0 + (360 / 16)), yStart - (length/2), zCent + rad * Math.cos(0 + (360 / 8)), Tx),
        "45": calcDist(xCent + rad * Math.sin(45 + (360 / 16)), yStart - (length/2), zCent + rad * Math.cos(45 + (360 / 8)), Tx),
        "90": calcDist(xCent + rad * Math.sin(90 + (360 / 16)), yStart - (length/2), zCent + rad * Math.cos(90 + (360 / 8)), Tx),
        "135": calcDist(xCent + rad * Math.sin(135 + (360 / 16)), yStart - (length/2), zCent + rad * Math.cos(135 + (360 / 8)), Tx),
        "180": calcDist(xCent + rad * Math.sin(180 + (360 / 16)), yStart - (length/2), zCent + rad * Math.cos(180 + (360 / 8)), Tx),
        "225": calcDist(xCent + rad * Math.sin(225 + (360 / 16)), yStart - (length/2), zCent + rad * Math.cos(225 + (360 / 8)), Tx),
        "270": calcDist(xCent + rad * Math.sin(270 + (360 / 16)), yStart - (length/2), zCent + rad * Math.cos(270 + (360 / 8)), Tx),
        "315": calcDist(xCent + rad * Math.sin(315 + (360 / 16)), yStart - (length/2), zCent + rad * Math.cos(315 + (360 / 8)), Tx),
    };
    var keysSorted = Object.keys(list).sort(function (a, b) {
        return list[a] - list[b]
    });
    for (var i = keysSorted.length - 1; i >= 0; i--) {
        if (keysSorted[i] == "0") {
            draw0(0, xCent, yStart, zCent, rad, length,Tx, color);
        }
        if (keysSorted[i] == "45") {
            draw45(45, xCent, yStart, zCent, rad, length,Tx, color);
        }
        if (keysSorted[i] == "90") {
            draw90(90, xCent, yStart, zCent, rad, length,Tx, color);
        }
        if (keysSorted[i] == "135") {
            draw135(135, xCent, yStart, zCent, rad, length,Tx, color);
        }
        if (keysSorted[i] == "180") {
            draw180(180, xCent, yStart, zCent, rad, length,Tx, color);
        }
        if (keysSorted[i] == "225") {
            draw225(225, xCent, yStart, zCent, rad, length,Tx, color);
        }
        if (keysSorted[i] == "270") {
            draw270(270, xCent, yStart, zCent, rad, length,Tx, color);
        }
        if (keysSorted[i] == "315") {
            draw315(315, xCent, yStart, zCent, rad, length,Tx, color);
        }
    }
    // for(var i = 0; i <= 360; i = i + (360/8)) {
    //     context.beginPath(); context.fillStyle = "rgb("+color+",0,0)";
    //     moveToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    //     lineToTx(xCent + rad * Math.sin(i), yStart - length, zCent + rad * Math.cos(i), Tx);
    //     lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart - length, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    //     lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    //     lineToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    //     context.fill();
    //     context.stroke();
    // }
}
function cylBottom(xCent, yStart, zCent, rad, length, Tx) {
    context.beginPath(); context.fillStyle = "green";
    moveToTx(xCent + rad*Math.sin(0), yStart - length, zCent + rad*Math.cos(0), Tx);
    for(var i = 0; i <= 360; i = i + (360/8)) {
        lineToTx(xCent + rad*Math.sin(i), yStart - length, zCent + rad*Math.cos(i), Tx);
    }
    context.fill(); context.stroke();
}
function draw0(i,xCent, yStart, zCent, rad, length, Tx, color){
    context.beginPath(); context.fillStyle = "rgb("+color+",0,0)";
    moveToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart - length, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart - length, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    context.fill();
    context.stroke();
}
function draw45(i,xCent, yStart, zCent, rad, length, Tx, color){
    context.beginPath(); context.fillStyle = "rgb("+color+",0,0)";
    moveToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart - length, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart - length, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    context.fill();
    context.stroke();
}
function draw90(i,xCent, yStart, zCent, rad, length, Tx, color){
    context.beginPath(); context.fillStyle = "rgb("+color+",0,0)";
    moveToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart - length, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart - length, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    context.fill();
    context.stroke();
}
function draw135(i, xCent, yStart, zCent, rad, length, Tx, color){
    context.beginPath(); context.fillStyle = "rgb("+color+",0,0)";
    moveToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart - length, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart - length, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    context.fill();
    context.stroke();
}
function draw180(i, xCent, yStart, zCent, rad, length, Tx, color){
    context.beginPath(); context.fillStyle = "rgb("+color+",0,0)";
    moveToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart - length, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart - length, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    context.fill();
    context.stroke();
}
function draw225(i, xCent, yStart, zCent, rad, length, Tx, color){
    context.beginPath(); context.fillStyle = "rgb("+color+",0,0)";
    moveToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart - length, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart - length, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    context.fill();
    context.stroke();
}
function draw270(i, xCent, yStart, zCent, rad, length, Tx, color){
    context.beginPath(); context.fillStyle = "rgb("+color+",0,0)";
    moveToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart - length, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart - length, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    context.fill();
    context.stroke();
}
function draw315(i, xCent, yStart, zCent, rad, length, Tx, color){
    context.beginPath(); context.fillStyle = "rgb("+color+",0,0)";
    moveToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart - length, zCent + rad * Math.cos(i), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart - length, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i + (360 / 8)), yStart, zCent + rad * Math.cos(i + (360 / 8)), Tx);
    lineToTx(xCent + rad * Math.sin(i), yStart, zCent + rad * Math.cos(i), Tx);
    context.fill();
    context.stroke();
}