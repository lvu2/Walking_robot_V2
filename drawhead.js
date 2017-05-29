/**
 * Created by lvu on 10/7/2016.
 */
function drawHead(Tx) {
    var list = {"left": calcDist(-25,225,0,Tx), "right": calcDist(25,225,0,Tx),
        "front": calcDist(0,225,25,Tx), "back": calcDist(0,225,-25,Tx),
        "bottom": calcDist(0,215,0,Tx), "top": calcDist(0,265,0,Tx)};
    var keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]});
    for(var i = keysSorted.length - 1; i >= 0; i--){
        if(keysSorted[i] == "front"){
            headFront(Tx,Math.floor(calcColor(0,225,25,Tx)*.9));
        }
        if(keysSorted[i] == "back"){
            headBack(Tx,Math.floor(calcColor(0,225,-25,Tx)*.9));
        }
        if(keysSorted[i] == "left"){
            headLeft(Tx,Math.floor(calcColor(-25,225,0,Tx)*.9));
        }
        if(keysSorted[i] == "right"){
            headRight(Tx,Math.floor(calcColor(25,225,0,Tx)*.9));
        }
        if(keysSorted[i] == "bottom"){
            headBottom(Tx,Math.floor(calcColor(0,215,0,Tx)*.9));
        }
        if(keysSorted[i] == "top"){
            headTop(Tx,Math.floor(calcColor(0,265,0,Tx)*.9));
        }
        //console.log(Math.floor(calcDist(0,225,25,Tx)*.3)+slider4.value);
    }
}
function headFront(Tx,color){
    console.log(color.toString());
    context.beginPath(); context.fillStyle = "rgb(85,"+color.toString()+",255)";
    moveToTx(-20 + shiftX, 215 + shiftY, 25 + shiftZ,Tx);lineToTx(20 +shiftX, 215 + shiftY, 25 + shiftZ,Tx);
    lineToTx(25 + shiftX, 230 + shiftY, 25 + shiftZ,Tx);
    lineToTx(25 + shiftX,265 + shiftY,25 + shiftZ,Tx);lineToTx(-25 +shiftX, 265 + shiftY, 25 + shiftZ,Tx);
    lineToTx(-25 + shiftX, 230 + shiftY, 25 + shiftZ,Tx);lineToTx(-20 +shiftX, 215 + shiftY, 25 + shiftZ,Tx);
    context.fill(); context.stroke();
}
function headBack(Tx,color){
    context.beginPath(); context.fillStyle = "rgb(85,"+color.toString()+",255)";
    moveToTx(25 + shiftX, 265 + shiftY, -25 + shiftZ,Tx);lineToTx(-25 +shiftX, 265 + shiftY, -25 + shiftZ,Tx);
    lineToTx(-25 +shiftX, 230 + shiftY, -25 + shiftZ,Tx); lineToTx(-20 +shiftX, 215 + shiftY, -25 + shiftZ,Tx);
    lineToTx(20 +shiftX, 215 + shiftY, -25 + shiftZ,Tx); lineToTx(25 + shiftX, 230 + shiftY, -25 + shiftZ,Tx);
    lineToTx(25 + shiftX, 265 + shiftY, -25 + shiftZ,Tx); context.fill(); context.stroke();
}
function headLeft(Tx,color){
    context.beginPath(); context.fillStyle = "rgb(85,"+color.toString()+",255)";
    moveToTx(-20 + shiftX, 215 + shiftY, -25 + shiftZ,Tx);lineToTx(-25 +shiftX, 230 + shiftY, -25 + shiftZ,Tx);
    lineToTx(-25 + shiftX, 265 + shiftY, -25 + shiftZ,Tx); lineToTx(-25 +shiftX,265 + shiftY, 25 + shiftZ,Tx);
    lineToTx(-25 +shiftX,230 + shiftY, 25 + shiftZ,Tx);lineToTx(-20 +shiftX,215 + shiftY, 25 + shiftZ,Tx);
    lineToTx(-20 +shiftX,215 + shiftY, -25 + shiftZ,Tx); context.fill(); context.stroke();
}
function headRight(Tx,color){
    context.beginPath(); context.fillStyle = "rgb(85,"+color.toString()+",255)";
    moveToTx(20 + shiftX, 215 + shiftY, 25 + shiftZ, Tx);
    lineToTx(20 + shiftX, 215 + shiftY, -25 + shiftZ,Tx);lineToTx(25 + shiftX, 230 + shiftY, -25 + shiftZ,Tx);
    lineToTx(25 + shiftX, 265 + shiftY, -25 + shiftZ,Tx);lineToTx(25 +shiftX, 265 + shiftY, 25 + shiftZ,Tx);
    lineToTx(25 + shiftX, 230 +  shiftY, 25 + shiftZ, Tx);lineToTx(20 + shiftX, 215 + shiftY, 25 + shiftZ, Tx);
    context.fill(); context.stroke();
}
function headTop(Tx,color){
    context.beginPath(); context.fillStyle = "rgb(85,"+color.toString()+",255)";
    moveToTx(25 + shiftX, 265 + shiftY, -25 + shiftZ, Tx); lineToTx(-25 + shiftX, 265 + shiftY, -25 + shiftZ, Tx);
    lineToTx(-25 + shiftX, 265 + shiftY, 25 + shiftZ, Tx); lineToTx(25 + shiftX, 265 + shiftY, 25 + shiftZ, Tx);
    lineToTx(25 + shiftX, 265 + shiftY, -25 + shiftZ,Tx); context.fill(); context.stroke();
}
function headBottom(Tx,color){
    context.beginPath(); context.fillStyle = "rgb(85,"+color.toString()+",255)";
    moveToTx(20 + shiftX, 215 + shiftY, -25 + shiftZ, Tx); lineToTx(-20 + shiftX, 215 + shiftY, -25 + shiftZ, Tx);
    lineToTx(-20 + shiftX, 215 + shiftY, 25 + shiftZ, Tx); lineToTx(20 + shiftX, 215 + shiftY, 25 + shiftZ, Tx);
    lineToTx(20 + shiftX, 215 + shiftY, -25 + shiftZ,Tx); context.fill(); context.stroke();
}