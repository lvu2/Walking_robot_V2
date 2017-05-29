/**
 * Created by lvu on 10/8/2016.
 */
function drawBody(Tx) {
//        // Top front
//        context.beginPath(); context.fillStyle = "red";
//         moveToTx(-50 + shiftX, 200 + shiftY, 25 + shiftZ,Tx); lineToTx(50 + shiftX, 200 + shiftY, 25 + shiftZ,Tx);

    var list = {"left": calcDist(-50,175,0,Tx), "right": calcDist(50,175,0,Tx),
        "front": calcDist(0,175,25,Tx), "back": calcDist(0,175,-25,Tx),
        "bottom": calcDist(0,50,0,Tx), "top": calcDist(0,200,0,Tx)};
    var keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]});
    for(var i = keysSorted.length - 1; i >= 0; i--){
        if(keysSorted[i] == "front"){
            bodyFront(Tx,Math.floor(calcColor(0,175,25,Tx)*.9));
        }
        if(keysSorted[i] == "back"){
            bodyBack(Tx,Math.floor(calcColor(0,175,-25,Tx)*.9));
        }
        if(keysSorted[i] == "left"){
            bodyLeft(Tx,Math.floor(calcColor(-50,175,0,Tx)*.9));
        }
        if(keysSorted[i] == "right") {
            bodyRight(Tx, Math.floor(calcColor(50, 175, 0, Tx) * .9));
        }
        if(keysSorted[i] == "bottom"){
            bodyBottom(Tx,Math.floor(calcColor(0,50,0,Tx)*.9));
        }
        if(keysSorted[i] == "top"){
            bodyTop(Tx,Math.floor(calcColor(0,200,-0,Tx)*.9));
        }
    }
    // // Block cutoffs
    // // Top
    // moveToTx(-50 + shiftX, 150 + shiftY, 25 + shiftZ,Tx);lineToTx(50 + shiftX, 150 + shiftY, 25 + shiftZ,Tx);
    // lineToTx(50 + shiftX, 150 + shiftY, -25 + shiftZ,Tx);lineToTx(-50 + shiftX, 150 + shiftY, -25 + shiftZ,Tx);
    // lineToTx(-50 + shiftX, 150 + shiftY, 25 + shiftZ,Tx); context.stroke();
    //
    // // Middle
    // moveToTx(-40 + shiftX, 100 + shiftY, 25 + shiftZ,Tx);lineToTx(40 + shiftX, 100 + shiftY, 25 + shiftZ,Tx);
    // lineToTx(40 + shiftX, 100 + shiftY, -25 + shiftZ,Tx);lineToTx(-40 + shiftX, 100 + shiftY, -25 + shiftZ,Tx);
    // lineToTx(-40 + shiftX, 100 + shiftY, 25 + shiftZ,Tx); context.stroke();

}
function bodyFront(Tx,color){
    context.beginPath(); context.fillStyle = "rgb(85,"+color+",255)";
    moveToTx(-50 + shiftX, 200 + shiftY, 25 + shiftZ,Tx);lineToTx(50 + shiftX, 200 + shiftY, 25 + shiftZ,Tx);
    lineToTx(50 + shiftX,150 + shiftY,25 + shiftZ,Tx);lineToTx(40 + shiftX,100 + shiftY,25 + shiftZ,Tx);
    lineToTx(50 + shiftX,80 + shiftY,25 + shiftZ,Tx);
    lineToTx(50 + shiftX,50 + shiftY,25 + shiftZ,Tx);lineToTx(-50 + shiftX, 50 + shiftY, 25 + shiftZ,Tx);
    lineToTx(-50 + shiftX,80 + shiftY,25 + shiftZ,Tx);lineToTx(-40 + shiftX,100 + shiftY,25 + shiftZ,Tx);
    lineToTx(-50 + shiftX, 150 + shiftY, 25 + shiftZ,Tx);lineToTx(-50 + shiftX,200 + shiftY,25 + shiftZ,Tx);
    lineToTx(-50 + shiftX, 200 + shiftY, 25 + shiftZ,Tx); context.fill(); context.stroke();
}
function bodyLeft(Tx,color){
    context.beginPath(); context.fillStyle = "rgb(85,"+color+",255)";
    lineToTx(-50 + shiftX, 200 + shiftY, -25 + shiftZ,Tx);lineToTx(-50 + shiftX, 150 + shiftY, -25 + shiftZ,Tx);
    lineToTx(-40 + shiftX, 100 + shiftY, -25 + shiftZ,Tx);lineToTx(-50 + shiftX, 80 + shiftY, -25 + shiftZ,Tx);
    lineToTx(-50 + shiftX, 50 + shiftY, -25 + shiftZ,Tx); lineToTx(-50 + shiftX, 50 + shiftY, 25 + shiftZ,Tx);
    lineToTx(-50 + shiftX, 80 + shiftY, 25 + shiftZ,Tx); lineToTx(-40 + shiftX, 100 + shiftY, 25 + shiftZ,Tx);
    lineToTx(-50 + shiftX, 150 + shiftY, 25 + shiftZ,Tx); lineToTx(-50 + shiftX, 200 + shiftY, 25 + shiftZ,Tx);
    context.fill(); context.stroke();
}
function bodyRight(Tx,color){
    context.beginPath(); context.fillStyle = "rgb(85,"+color+",255)";
    moveToTx(50 + shiftX, 200 + shiftY, 25 + shiftZ, Tx);
    lineToTx(50 + shiftX, 200 + shiftY, -25 + shiftZ,Tx); lineToTx(50 + shiftX, 150 + shiftY, -25 + shiftZ,Tx);
    lineToTx(40 + shiftX, 100 + shiftY, -25 + shiftZ,Tx); lineToTx(50 + shiftX, 80 + shiftY, -25 + shiftZ,Tx);
    lineToTx(50 + shiftX, 50 + shiftY, -25 + shiftZ,Tx); lineToTx(50 + shiftX, 50 + shiftY, 25 + shiftZ,Tx);
    lineToTx(50 + shiftX, 80 + shiftY, 25 + shiftZ, Tx); lineToTx(40 + shiftX, 100 + shiftY, 25 + shiftZ,Tx);
    lineToTx(50 + shiftX, 150 + shiftY, 25 + shiftZ,Tx); lineToTx(50 + shiftX, 200 + shiftY, 25 + shiftZ,Tx);
    context.fill(); context.stroke();
}
function bodyBack(Tx,color){
    context.beginPath(); context.fillStyle = "rgb(85,"+color+",255)";
    moveToTx(-50 + shiftX, 200 + shiftY, -25 + shiftZ, Tx); lineToTx(50 + shiftX, 200 + shiftY, -25 + shiftZ, Tx);
    lineToTx(50 + shiftX, 150 + shiftY, -25 + shiftZ, Tx); lineToTx(40 + shiftX, 100 + shiftY, -25 + shiftZ, Tx);
    lineToTx(50 + shiftX, 80 + shiftY, -25 + shiftZ, Tx);
    lineToTx(50 + shiftX, 50 + shiftY, -25 + shiftZ, Tx); lineToTx(-50 + shiftX, 50 + shiftY, -25 + shiftZ, Tx);
    lineToTx(-50 + shiftX, 80 + shiftY, -25 + shiftZ, Tx); lineToTx(-40 + shiftX, 100 + shiftY, -25 + shiftZ, Tx);
    lineToTx(-50 + shiftX, 150 + shiftY, -25 + shiftZ, Tx); lineToTx(-50 + shiftX, 200 + shiftY, -25 + shiftZ, Tx);
    lineToTx(-50 + shiftX, 200 + shiftY, -25 + shiftZ, Tx); context.fill(); context.stroke();
}
function bodyTop(Tx,color){
    context.beginPath(); context.fillStyle = "rgb(85,"+color+",255)";
    moveToTx(-50 + shiftX, 200 + shiftY, -25 + shiftZ, Tx); lineToTx(50 + shiftX, 200 + shiftY, -25 + shiftZ, Tx);
    lineToTx(50 + shiftX, 200 + shiftY, 25 + shiftZ, Tx); lineToTx(-50 + shiftX, 200 + shiftY, 25 + shiftZ, Tx);
    lineToTx(-50 + shiftX, 200 + shiftY, -25 + shiftZ, Tx); context.fill(); context.stroke();
}
function bodyBottom(Tx,color){
    context.beginPath(); context.fillStyle = "rgb(85,"+color+",255)";
    moveToTx(-50 + shiftX, 50 + shiftY, -25 + shiftZ, Tx); lineToTx(50 + shiftX, 50 + shiftY, -25 + shiftZ, Tx);
    lineToTx(50 + shiftX, 50 + shiftY, 25 + shiftZ, Tx); lineToTx(-50 + shiftX, 50 + shiftY, 25 + shiftZ, Tx);
    lineToTx(-50 + shiftX, 50 + shiftY, -25 + shiftZ, Tx); context.fill(); context.stroke();
}