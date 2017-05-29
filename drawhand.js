/**
 * Created by lvu on 10/9/2016.
 */
    function drawHand (xCent, yStart, zCent, rad, Tx) {
        // top
        moveToTx(xCent + rad*Math.sin(0), yStart, zCent + rad*Math.cos(0), Tx);
        for(var i = 0; i <= 360; i = i + (360/8)) {
            lineToTx(xCent + rad*Math.sin(i), yStart,zCent + rad*Math.cos(i), Tx);
            context.stroke();
        }
        // Middle
        moveToTx(xCent + rad*Math.sin(45), yStart, zCent + rad*Math.cos(45), Tx);
        lineToTx(xCent + rad*Math.sin(45) + 10, yStart - 15,zCent + rad*Math.cos(45), Tx);
        moveToTx(xCent + rad*Math.sin(90), yStart, zCent + rad*Math.cos(90), Tx);
        lineToTx(xCent + rad*Math.sin(90) + 10, yStart - 15,zCent + rad*Math.cos(90), Tx);
        moveToTx(xCent + rad*Math.sin(135), yStart, zCent + rad*Math.cos(135), Tx);
        lineToTx(xCent + rad*Math.sin(135), yStart - 15,zCent + rad*Math.cos(135), Tx);
        moveToTx(xCent + rad*Math.sin(180), yStart, zCent + rad*Math.cos(180), Tx);
        lineToTx(xCent + rad*Math.sin(180) - 10, yStart - 15,zCent + rad*Math.cos(180), Tx);
        moveToTx(xCent + rad*Math.sin(225), yStart, zCent + rad*Math.cos(225), Tx);
        lineToTx(xCent + rad*Math.sin(225) - 10, yStart - 15,zCent + rad*Math.cos(225), Tx);
        moveToTx(xCent + rad*Math.sin(0), yStart, zCent + rad*Math.cos(0), Tx);
        lineToTx(xCent + rad*Math.sin(0), yStart - 15,zCent + rad*Math.cos(0), Tx);
        context.stroke();
        // Bottom
        moveToTx(xCent + rad*Math.sin(0), yStart - 15, zCent + rad*Math.cos(0), Tx);
        lineToTx(xCent + rad*Math.sin(45) + 10, yStart - 15,zCent + rad*Math.cos(45), Tx);
        lineToTx(xCent + rad*Math.sin(90) + 10, yStart - 15,zCent + rad*Math.cos(90), Tx);
        lineToTx(xCent + rad*Math.sin(135), yStart - 15,zCent + rad*Math.cos(135), Tx);
        lineToTx(xCent + rad*Math.sin(180) - 10, yStart - 15,zCent + rad*Math.cos(180), Tx);
        lineToTx(xCent + rad*Math.sin(225) - 10, yStart - 15,zCent + rad*Math.cos(225), Tx);
        lineToTx(xCent + rad*Math.sin(0), yStart - 15,zCent + rad*Math.cos(0), Tx);
        context.stroke();

        //moveToTx(xCent + rad*Math.sin(0), yStart - 25, zCent + rad*Math.cos(0), Tx);
//        // Digits Bottom
        for(var i = 0; i <= 360; i = i + (360/8)) {
            moveToTx(xCent + rad*Math.sin(i), yStart - 25, zCent + rad*Math.cos(i), Tx);
            lineToTx(xCent + rad*Math.sin(i + 45), yStart - 25,zCent + rad*Math.cos(i + 45), Tx);
            lineToTx(xCent + 5*Math.sin(i + 45), yStart - 30,zCent + 5*Math.cos(i + 45), Tx);
            lineToTx(xCent + 5*Math.sin(i + 90), yStart - 30,zCent + 5*Math.cos(i + 90), Tx);
            context.stroke();

            //alt code
//            lineToTx(xCent + rad*Math.sin(i), yStart - 25,zCent + rad*Math.cos(i), Tx);
//            context.stroke();
        }
        // Digits Middle
        moveToTx(xCent + rad*Math.sin(0), yStart - 15, zCent + rad*Math.cos(0), Tx);
        lineToTx(xCent + rad*Math.sin(0), yStart - 25,zCent + rad*Math.cos(0), Tx);context.stroke();
        moveToTx(xCent + rad*Math.sin(45) + 10, yStart - 15,zCent + rad*Math.cos(45), Tx);
        lineToTx(xCent + rad*Math.sin(45), yStart - 25,zCent + rad*Math.cos(45), Tx);context.stroke();
        moveToTx(xCent + rad*Math.sin(90) + 10, yStart - 15,zCent + rad*Math.cos(90), Tx);
        lineToTx(xCent + rad*Math.sin(90), yStart - 25,zCent + rad*Math.cos(90), Tx);context.stroke();
        moveToTx(xCent + rad*Math.sin(135), yStart - 15,zCent + rad*Math.cos(135), Tx);
        lineToTx(xCent + rad*Math.sin(135), yStart - 25,zCent + rad*Math.cos(135), Tx);context.stroke();
        moveToTx(xCent + rad*Math.sin(180) - 10, yStart - 15,zCent + rad*Math.cos(180), Tx);
        lineToTx(xCent + rad*Math.sin(180), yStart - 25,zCent + rad*Math.cos(180), Tx);context.stroke();
        moveToTx(xCent + rad*Math.sin(225) - 10, yStart - 15,zCent + rad*Math.cos(225), Tx);
        lineToTx(xCent + rad*Math.sin(225), yStart - 25,zCent + rad*Math.cos(225), Tx);context.stroke();
    }