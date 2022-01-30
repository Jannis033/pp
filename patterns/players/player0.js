patternCreator.players.player0 = function() {
    const patternCanvas = document.createElement('canvas');
    const patternContext = patternCanvas.getContext('2d');

    patternCanvas.width = blockSize;
    patternCanvas.height = blockSize + playerOverlap;

    // #g81
    patternContext.save();
    patternContext.transform(0.264583, 0.000000, 0.000000, 0.264583, -0.317336 * zoomfactor, -1.671710 * zoomfactor);

    // #path7615
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(19, 19, 19)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 1.700000 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.miterLimit = 4;
    patternContext.moveTo(65.169242 * zoomfactor, 77.315107 * zoomfactor);
    patternContext.lineTo(31.412523 * zoomfactor, 126.453890 * zoomfactor);
    patternContext.bezierCurveTo(29.948573 * zoomfactor, 148.404890 * zoomfactor, 29.987746 * zoomfactor, 170.179050 * zoomfactor, 47.267952 * zoomfactor, 189.924850 * zoomfactor);
    patternContext.bezierCurveTo(59.590230 * zoomfactor, 205.069610 * zoomfactor, 74.565908 * zoomfactor, 219.370110 * zoomfactor, 111.201130 * zoomfactor, 226.778930 * zoomfactor);
    patternContext.lineTo(205.674330 * zoomfactor, 226.322510 * zoomfactor);
    patternContext.bezierCurveTo(219.116660 * zoomfactor, 223.546540 * zoomfactor, 231.196600 * zoomfactor, 216.189150 * zoomfactor, 240.765160 * zoomfactor, 209.855700 * zoomfactor);
    patternContext.bezierCurveTo(248.824930 * zoomfactor, 204.520930 * zoomfactor, 256.663000 * zoomfactor, 198.665020 * zoomfactor, 261.571960 * zoomfactor, 190.436710 * zoomfactor);
    patternContext.bezierCurveTo(274.442920 * zoomfactor, 171.068070 * zoomfactor, 283.756300 * zoomfactor, 150.862350 * zoomfactor, 277.737570 * zoomfactor, 127.049080 * zoomfactor);
    patternContext.lineTo(243.980870 * zoomfactor, 77.910293 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path2943
    patternContext.beginPath();
    patternContext.globalAlpha = 1.0;
    patternContext.fillStyle = 'rgb(26, 26, 26)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 1.983000 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.miterLimit = 4;
    patternContext.moveTo(105.707780 * zoomfactor, 10.460160 * zoomfactor);
    patternContext.bezierCurveTo(86.795824 * zoomfactor, 19.090652 * zoomfactor, 72.290751 * zoomfactor, 25.769829 * zoomfactor, 64.070831 * zoomfactor, 55.949125 * zoomfactor);
    patternContext.bezierCurveTo(64.706421 * zoomfactor, 81.870256 * zoomfactor, 74.480801 * zoomfactor, 103.215250 * zoomfactor, 105.287200 * zoomfactor, 114.028780 * zoomfactor);
    patternContext.bezierCurveTo(154.585260 * zoomfactor, 115.812970 * zoomfactor, 165.850030 * zoomfactor, 114.841080 * zoomfactor, 196.131440 * zoomfactor, 115.247230 * zoomfactor);
    patternContext.bezierCurveTo(226.800050 * zoomfactor, 105.009640 * zoomfactor, 244.244820 * zoomfactor, 88.386890 * zoomfactor, 245.759310 * zoomfactor, 64.072154 * zoomfactor);
    patternContext.bezierCurveTo(243.026620 * zoomfactor, 37.468221 * zoomfactor, 228.123230 * zoomfactor, 20.180674 * zoomfactor, 207.486960 * zoomfactor, 10.866312 * zoomfactor);
    patternContext.bezierCurveTo(174.682100 * zoomfactor, 10.324776 * zoomfactor, 155.041670 * zoomfactor, 11.001695 * zoomfactor, 105.707780 * zoomfactor, 10.460160 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path1073 
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 1.022109 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(47.267952 * zoomfactor, 190.345430 * zoomfactor);
    patternContext.lineTo(13.511233 * zoomfactor, 250.745190 * zoomfactor);
    patternContext.lineTo(55.451401 * zoomfactor, 320.358480 * zoomfactor);
    patternContext.lineTo(58.520191 * zoomfactor, 363.866810 * zoomfactor);
    patternContext.lineTo(63.634846 * zoomfactor, 378.198960 * zoomfactor);
    patternContext.lineTo(114.269920 * zoomfactor, 379.222680 * zoomfactor);
    patternContext.lineTo(122.964840 * zoomfactor, 366.426090 * zoomfactor);
    patternContext.lineTo(125.522160 * zoomfactor, 342.880430 * zoomfactor);
    patternContext.lineTo(171.042590 * zoomfactor, 342.368570 * zoomfactor);
    patternContext.lineTo(173.088450 * zoomfactor, 361.819340 * zoomfactor);
    patternContext.lineTo(179.226030 * zoomfactor, 377.175220 * zoomfactor);
    patternContext.lineTo(228.326710 * zoomfactor, 377.687080 * zoomfactor);
    patternContext.lineTo(240.601880 * zoomfactor, 362.331210 * zoomfactor);
    patternContext.lineTo(243.159210 * zoomfactor, 316.775450 * zoomfactor);
    patternContext.lineTo(293.794290 * zoomfactor, 247.674010 * zoomfactor);
    patternContext.lineTo(261.571960 * zoomfactor, 190.857290 * zoomfactor);
    patternContext.lineTo(240.090420 * zoomfactor, 212.355500 * zoomfactor);
    patternContext.lineTo(207.356630 * zoomfactor, 224.640210 * zoomfactor);
    patternContext.lineTo(183.317760 * zoomfactor, 228.223240 * zoomfactor);
    patternContext.lineTo(111.201130 * zoomfactor, 227.199510 * zoomfactor);
    patternContext.lineTo(85.116395 * zoomfactor, 219.521580 * zoomfactor);
    patternContext.lineTo(59.543124 * zoomfactor, 205.701300 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();
    patternContext.restore();

    return context.createPattern(patternCanvas, 'repeat');
}