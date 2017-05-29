/**
 * Created by lvu on 10/9/2016.
 */
function drawFoot (xCent, yStart, zCent, rad, Tx,color) {
    var list = {
        "foottop": calcDist(xCent, yStart - 80, zCent - 80, Tx),
        "sole": calcDist(xCent, yStart - 95, zCent -95, Tx),

        "mid45": calcDist(xCent + rad * Math.sin(45 + (360 / 16)), yStart - (25/2), zCent + rad * Math.cos(45 + (360 / 8)), Tx),
        "mid90": calcDist(xCent + rad * Math.sin(90 + (360 / 16)), yStart - (25/2), zCent + rad * Math.cos(90 + (360 / 8)), Tx),
        "mid135": calcDist(xCent + rad * Math.sin(135 + (360 / 16)), yStart - (25/2), zCent + rad * Math.cos(135 + (360 / 8)), Tx),
        "mid180": calcDist(xCent + rad * Math.sin(180 + (360 / 16)), yStart - (25/2), zCent + rad * Math.cos(180 + (360 / 8)), Tx),

        "topleft": calcDist(xCent + rad * Math.sin(225 + (360 / 16)), yStart - (25/4), zCent + rad * Math.cos(225 + (360 / 16)), Tx),
        "topright": calcDist(xCent + rad * Math.sin(0 + (360 / 16)), yStart - (25/4), zCent + rad * Math.cos(0 + (360 / 16)), Tx),
        "bottomleft": calcDist(xCent + rad * Math.sin(225 + (360 / 16)), yStart - (25/2), zCent + rad * Math.cos(225 + (360 / 16)), Tx),
        "bottomright": calcDist(xCent + rad * Math.sin(0 + (360 / 16)), yStart - (25/2), zCent + rad * Math.cos(0 + (360 / 16)), Tx),
    };
    var keysSorted = Object.keys(list).sort(function (a, b) {
        return list[a] - list[b]
    });
    for (var i = keysSorted.length - 1; i >= 0; i--) {
        if (keysSorted[i] == "foottop") {
            footTop(xCent, yStart, zCent, rad, Tx);
        }
        if (keysSorted[i] == "sole") {
           sole(xCent, yStart, zCent, rad, Tx);
        }
        if (keysSorted[i] == "mid45") {
            mid45(xCent, yStart, zCent, rad, Tx);
        }
        if (keysSorted[i] == "mid90") {
            mid90(xCent, yStart, zCent, rad, Tx);
        }
        if (keysSorted[i] == "mid135") {
            mid135(xCent, yStart, zCent, rad, Tx);
        }
        if (keysSorted[i] == "mid180") {
            mid180(xCent, yStart, zCent, rad, Tx);
        }
        if (keysSorted[i] == "topleft") {
            topLeft(xCent, yStart, zCent, rad, Tx);
        }
        if (keysSorted[i] == "topright") {
            topRight(xCent, yStart, zCent, rad, Tx);
        }
        if (keysSorted[i] == "bottomleft") {
            bottomLeft(xCent, yStart, zCent, rad, Tx);
        }
        if (keysSorted[i] == "bottomright") {
            bottomRight(xCent, yStart, zCent, rad, Tx);
        }
    }

}
function footTop (xCent, yStart, zCent, rad, Tx) {
    context.beginPath(); context.fillStyle = "blue";
    moveToTx(xCent + rad*Math.sin(0), yStart, zCent + rad*Math.cos(0), Tx);
    for(var i = 0; i <= 360; i = i + (360/8)) {
        lineToTx(xCent + rad*Math.sin(i), yStart,zCent + rad*Math.cos(i), Tx);
    }
    context.fill(); context.stroke();
}
function sole(xCent, yStart, zCent, rad, Tx){
    context.beginPath();context.fillStyle = "brown"
    moveToTx(xCent + rad*Math.sin(265), yStart - 25, zCent + rad*Math.cos(265), Tx);
    for(var i = (265); i <= 450; i = i + (360/8)) {
        lineToTx(xCent + rad*Math.sin(i), yStart - 25,zCent + rad*Math.cos(i), Tx);
    }
    lineToTx(xCent + rad*Math.sin(0), yStart - 25,zCent + rad*Math.cos(0) + 55, Tx);
    lineToTx(xCent + rad*Math.sin(265), yStart - 25, zCent + rad*Math.cos(265), Tx);
    context.fill();  context.stroke();
}
// top left
function topLeft(xCent, yStart, zCent, rad, Tx) {
    context.beginPath();
    context.fillStyle = "orange";
    moveToTx(xCent + rad * Math.sin(225), yStart, zCent + rad * Math.cos(225), Tx);
    lineToTx(xCent + rad * Math.sin(0), yStart, zCent + rad * Math.cos(0), Tx);
    lineToTx(xCent + rad * Math.sin(0), yStart - 25, zCent + rad * Math.cos(0) + 55, Tx);
    lineToTx(xCent + rad * Math.sin(225), yStart, zCent + rad * Math.cos(225), Tx);
    context.fill();
    context.stroke();
}

// top right
function topRight(xCent, yStart, zCent, rad, Tx) {
    context.beginPath();
    context.fillStyle = "orange";
    moveToTx(xCent + rad * Math.sin(0), yStart, zCent + rad * Math.cos(0), Tx);
    lineToTx(xCent + rad * Math.sin(45), yStart, zCent + rad * Math.cos(45), Tx);
    lineToTx(xCent + rad * Math.sin(0), yStart - 25, zCent + rad * Math.cos(0) + 55, Tx);
    lineToTx(xCent + rad * Math.sin(0), yStart, zCent + rad * Math.cos(0), Tx);
    context.fill();
    context.stroke();
}

// bottom right
function bottomRight(xCent, yStart, zCent, rad, Tx) {
    context.beginPath();
    context.fillStyle = "orange";
    moveToTx(xCent + rad * Math.sin(45), yStart, zCent + rad * Math.cos(45), Tx);
    lineToTx(xCent + rad * Math.sin(45), yStart - 25, zCent + rad * Math.cos(45), Tx);
    lineToTx(xCent + rad * Math.sin(0), yStart - 25, zCent + rad * Math.cos(0) + 55, Tx);
    lineToTx(xCent + rad * Math.sin(45), yStart, zCent + rad * Math.cos(45), Tx);
    context.fill();
    context.stroke();
}

// bottom left
function bottomLeft (xCent, yStart, zCent, rad, Tx) {
    context.beginPath();
    context.fillStyle = "orange";
    moveToTx(xCent + rad * Math.sin(225), yStart, zCent + rad * Math.cos(225), Tx);
    lineToTx(xCent + rad * Math.sin(225), yStart - 25, zCent + rad * Math.cos(225), Tx);
    lineToTx(xCent + rad * Math.sin(0), yStart - 25, zCent + rad * Math.cos(0) + 55, Tx);
    lineToTx(xCent + rad * Math.sin(225), yStart, zCent + rad * Math.cos(225), Tx);
    context.fill();
    context.stroke();
}

// 45
function mid45(xCent, yStart, zCent, rad, Tx) {
    context.beginPath();
    context.fillStyle = "orange";
    moveToTx(xCent + rad * Math.sin(45), yStart, zCent + rad * Math.cos(45), Tx);
    lineToTx(xCent + rad * Math.sin(90), yStart, zCent + rad * Math.cos(90), Tx);
    lineToTx(xCent + rad * Math.sin(90), yStart - 25, zCent + rad * Math.cos(90), Tx);
    lineToTx(xCent + rad * Math.sin(45), yStart - 25, zCent + rad * Math.cos(45), Tx);
    lineToTx(xCent + rad * Math.sin(45), yStart, zCent + rad * Math.cos(45), Tx);
    context.fill();
    context.stroke();
}
// 90
function mid90(xCent, yStart, zCent, rad, Tx) {
    context.beginPath();
    context.fillStyle = "orange";
    moveToTx(xCent + rad * Math.sin(90), yStart, zCent + rad * Math.cos(90), Tx);
    lineToTx(xCent + rad * Math.sin(135), yStart, zCent + rad * Math.cos(135), Tx);
    lineToTx(xCent + rad * Math.sin(135), yStart - 25, zCent + rad * Math.cos(135), Tx);
    lineToTx(xCent + rad * Math.sin(90), yStart - 25, zCent + rad * Math.cos(90), Tx);
    lineToTx(xCent + rad * Math.sin(90), yStart, zCent + rad * Math.cos(90), Tx);
    context.fill();
    context.stroke();
}
//135
function mid135(xCent, yStart, zCent, rad, Tx) {
    context.beginPath();
    context.fillStyle = "orange";
    moveToTx(xCent + rad * Math.sin(135), yStart, zCent + rad * Math.cos(135), Tx);
    lineToTx(xCent + rad * Math.sin(180), yStart, zCent + rad * Math.cos(180), Tx);
    lineToTx(xCent + rad * Math.sin(180), yStart - 25, zCent + rad * Math.cos(180), Tx);
    lineToTx(xCent + rad * Math.sin(135), yStart - 25, zCent + rad * Math.cos(135), Tx);
    lineToTx(xCent + rad * Math.sin(135), yStart, zCent + rad * Math.cos(135), Tx);
    context.fill();
    context.stroke();
}

//180
function mid180(xCent, yStart, zCent, rad, Tx) {
    context.beginPath();
    context.fillStyle = "orange";
    moveToTx(xCent + rad * Math.sin(180), yStart, zCent + rad * Math.cos(180), Tx);
    lineToTx(xCent + rad * Math.sin(225), yStart, zCent + rad * Math.cos(225), Tx);
    lineToTx(xCent + rad * Math.sin(225), yStart - 25, zCent + rad * Math.cos(225), Tx);
    lineToTx(xCent + rad * Math.sin(180), yStart - 25, zCent + rad * Math.cos(180), Tx);
    lineToTx(xCent + rad * Math.sin(180), yStart, zCent + rad * Math.cos(180), Tx);
    context.fill();
    context.stroke();
}