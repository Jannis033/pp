patternCreator.players.player7 = function() {
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
    patternContext.lineWidth = 1.575850 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.miterLimit = 4;
    patternContext.moveTo(231.130900 * zoomfactor, 77.315107 * zoomfactor);
    patternContext.lineTo(260.137130 * zoomfactor, 126.453890 * zoomfactor);
    patternContext.bezierCurveTo(261.395060 * zoomfactor, 148.404890 * zoomfactor, 261.361400 * zoomfactor, 170.179050 * zoomfactor, 246.512990 * zoomfactor, 189.924850 * zoomfactor);
    patternContext.bezierCurveTo(235.924800 * zoomfactor, 205.069610 * zoomfactor, 223.056600 * zoomfactor, 219.370110 * zoomfactor, 191.576950 * zoomfactor, 226.778930 * zoomfactor);
    patternContext.lineTo(110.398700 * zoomfactor, 226.322510 * zoomfactor);
    patternContext.bezierCurveTo(98.848073 * zoomfactor, 223.546540 * zoomfactor, 88.468103 * zoomfactor, 216.189150 * zoomfactor, 80.246103 * zoomfactor, 209.855700 * zoomfactor);
    patternContext.bezierCurveTo(73.320563 * zoomfactor, 204.520930 * zoomfactor, 66.585523 * zoomfactor, 198.665020 * zoomfactor, 62.367393 * zoomfactor, 190.436710 * zoomfactor);
    patternContext.bezierCurveTo(51.307723 * zoomfactor, 171.068070 * zoomfactor, 43.304983 * zoomfactor, 150.862350 * zoomfactor, 48.476723 * zoomfactor, 127.049080 * zoomfactor);
    patternContext.lineTo(77.482933 * zoomfactor, 77.910293 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path2943
    patternContext.beginPath();
    patternContext.globalAlpha = 1.0;
    patternContext.fillStyle = 'rgb(26, 26, 26)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 1.768139 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.miterLimit = 4;
    patternContext.moveTo(199.778230 * zoomfactor, 23.327016 * zoomfactor);
    patternContext.bezierCurveTo(216.589310 * zoomfactor, 32.108964 * zoomfactor, 229.483040 * zoomfactor, 38.897992 * zoomfactor, 236.789830 * zoomfactor, 66.352208 * zoomfactor);
    patternContext.bezierCurveTo(236.224850 * zoomfactor, 89.500249 * zoomfactor, 227.536280 * zoomfactor, 108.041810 * zoomfactor, 200.152090 * zoomfactor, 115.982030 * zoomfactor);
    patternContext.bezierCurveTo(156.330450 * zoomfactor, 114.807220 * zoomfactor, 146.317050 * zoomfactor, 113.304870 * zoomfactor, 119.399530 * zoomfactor, 111.966290 * zoomfactor);
    patternContext.bezierCurveTo(92.137833 * zoomfactor, 101.086210 * zoomfactor, 76.630963 * zoomfactor, 85.238479 * zoomfactor, 75.284723 * zoomfactor, 63.406357 * zoomfactor);
    patternContext.bezierCurveTo(77.713833 * zoomfactor, 39.765478 * zoomfactor, 90.961643 * zoomfactor, 25.141146 * zoomfactor, 109.305470 * zoomfactor, 17.970193 * zoomfactor);
    patternContext.bezierCurveTo(138.466110 * zoomfactor, 19.329508 * zoomfactor, 155.924730 * zoomfactor, 21.038751 * zoomfactor, 199.778230 * zoomfactor, 23.327016 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path1073
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 0.955130 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(248.214870 * zoomfactor, 190.345430 * zoomfactor);
    patternContext.lineTo(263.200830 * zoomfactor, 252.484170 * zoomfactor);
    patternContext.lineTo(241.068820 * zoomfactor, 320.358480 * zoomfactor);
    patternContext.lineTo(238.389050 * zoomfactor, 363.866810 * zoomfactor);
    patternContext.lineTo(233.922770 * zoomfactor, 378.198960 * zoomfactor);
    patternContext.lineTo(189.706570 * zoomfactor, 379.222680 * zoomfactor);
    patternContext.lineTo(182.113890 * zoomfactor, 366.426090 * zoomfactor);
    patternContext.lineTo(179.880750 * zoomfactor, 342.880430 * zoomfactor);
    patternContext.lineTo(140.130840 * zoomfactor, 342.368570 * zoomfactor);
    patternContext.lineTo(138.344330 * zoomfactor, 361.819340 * zoomfactor);
    patternContext.lineTo(132.984790 * zoomfactor, 377.175220 * zoomfactor);
    patternContext.lineTo(90.108493 * zoomfactor, 377.687080 * zoomfactor);
    patternContext.lineTo(79.389413 * zoomfactor, 362.331210 * zoomfactor);
    patternContext.lineTo(77.156273 * zoomfactor, 316.775450 * zoomfactor);
    patternContext.lineTo(59.024773 * zoomfactor, 249.412990 * zoomfactor);
    patternContext.lineTo(61.077663 * zoomfactor, 190.857290 * zoomfactor);
    patternContext.lineTo(79.836033 * zoomfactor, 212.355500 * zoomfactor);
    patternContext.lineTo(108.420240 * zoomfactor, 224.640210 * zoomfactor);
    patternContext.lineTo(129.411760 * zoomfactor, 228.223240 * zoomfactor);
    patternContext.lineTo(192.386340 * zoomfactor, 227.199510 * zoomfactor);
    patternContext.lineTo(215.164380 * zoomfactor, 219.521580 * zoomfactor);
    patternContext.lineTo(237.495790 * zoomfactor, 205.701300 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path7615-3
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(179, 179, 179)';
    patternContext.lineWidth = 1.381718 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.miterLimit = 4;
    patternContext.moveTo(88.028533 * zoomfactor, 98.851423 * zoomfactor);
    patternContext.bezierCurveTo(70.400593 * zoomfactor, 130.875910 * zoomfactor, 58.989803 * zoomfactor, 129.052620 * zoomfactor, 85.574483 * zoomfactor, 210.378820 * zoomfactor);
    patternContext.bezierCurveTo(80.250183 * zoomfactor, 205.044050 * zoomfactor, 63.644103 * zoomfactor, 187.022600 * zoomfactor, 60.401233 * zoomfactor, 178.794290 * zoomfactor);
    patternContext.bezierCurveTo(51.898653 * zoomfactor, 159.425650 * zoomfactor, 46.852173 * zoomfactor, 153.966030 * zoomfactor, 50.828153 * zoomfactor, 130.152760 * zoomfactor);
    patternContext.lineTo(77.183083 * zoomfactor, 85.069153 * zoomfactor);
    patternContext.fill();

    // #path10302
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(204, 204, 204)';
    patternContext.lineWidth = 0.177267 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(81.354483 * zoomfactor, 235.173840 * zoomfactor);
    patternContext.bezierCurveTo(77.267123 * zoomfactor, 235.184140 * zoomfactor, 73.062873 * zoomfactor, 235.310950 * zoomfactor, 69.390223 * zoomfactor, 235.173840 * zoomfactor);
    patternContext.bezierCurveTo(68.694003 * zoomfactor, 235.147840 * zoomfactor, 67.802793 * zoomfactor, 236.585050 * zoomfactor, 67.778863 * zoomfactor, 238.135350 * zoomfactor);
    patternContext.bezierCurveTo(67.649513 * zoomfactor, 246.517170 * zoomfactor, 67.682563 * zoomfactor, 256.215660 * zoomfactor, 67.738563 * zoomfactor, 265.955580 * zoomfactor);
    patternContext.bezierCurveTo(67.746563 * zoomfactor, 267.351530 * zoomfactor, 68.441433 * zoomfactor, 268.883760 * zoomfactor, 69.067923 * zoomfactor, 268.917090 * zoomfactor);
    patternContext.bezierCurveTo(72.929183 * zoomfactor, 269.122500 * zoomfactor, 77.228633 * zoomfactor, 269.086710 * zoomfactor, 81.475313 * zoomfactor, 268.917090 * zoomfactor);
    patternContext.bezierCurveTo(82.121143 * zoomfactor, 268.891290 * zoomfactor, 82.876723 * zoomfactor, 267.394450 * zoomfactor, 82.885243 * zoomfactor, 265.955580 * zoomfactor);
    patternContext.bezierCurveTo(82.937743 * zoomfactor, 257.073390 * zoomfactor, 82.950643 * zoomfactor, 247.171000 * zoomfactor, 82.925543 * zoomfactor, 238.673810 * zoomfactor);
    patternContext.bezierCurveTo(82.920543 * zoomfactor, 237.023940 * zoomfactor, 82.095083 * zoomfactor, 235.171980 * zoomfactor, 81.354483 * zoomfactor, 235.173840 * zoomfactor);
    patternContext.fill();

    // #path10302-0
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 0.133111 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(71.465453 * zoomfactor, 112.594080 * zoomfactor);
    patternContext.bezierCurveTo(69.234363 * zoomfactor, 111.982360 * zoomfactor, 66.928863 * zoomfactor, 111.395050 * zoomfactor, 64.942823 * zoomfactor, 110.774450 * zoomfactor);
    patternContext.bezierCurveTo(64.138253 * zoomfactor, 110.523000 * zoomfactor, 63.699623 * zoomfactor, 111.887200 * zoomfactor, 63.271563 * zoomfactor, 113.371210 * zoomfactor);
    patternContext.bezierCurveTo(60.957263 * zoomfactor, 121.394630 * zoomfactor, 58.379003 * zoomfactor, 130.706190 * zoomfactor, 55.802183 * zoomfactor, 140.061010 * zoomfactor);
    patternContext.bezierCurveTo(55.433303 * zoomfactor, 141.401890 * zoomfactor, 54.985743 * zoomfactor, 142.927310 * zoomfactor, 55.734083 * zoomfactor, 143.105010 * zoomfactor);
    patternContext.bezierCurveTo(57.864323 * zoomfactor, 143.610840 * zoomfactor, 60.216373 * zoomfactor, 144.224050 * zoomfactor, 62.498293 * zoomfactor, 144.992040 * zoomfactor);
    patternContext.bezierCurveTo(63.172653 * zoomfactor, 145.218990 * zoomfactor, 63.669923 * zoomfactor, 143.744080 * zoomfactor, 64.059753 * zoomfactor, 142.364660 * zoomfactor);
    patternContext.bezierCurveTo(66.466103 * zoomfactor, 133.849410 * zoomfactor, 69.124093 * zoomfactor, 124.349180 * zoomfactor, 71.384993 * zoomfactor, 116.191550 * zoomfactor);
    patternContext.bezierCurveTo(71.824733 * zoomfactor, 114.607820 * zoomfactor, 72.235263 * zoomfactor, 112.806920 * zoomfactor, 71.465393 * zoomfactor, 112.594090 * zoomfactor);
    patternContext.fill();

    // #path10302-0-8-7
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(77, 77, 77)';
    patternContext.lineWidth = 0.126965 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(57.303523 * zoomfactor, 162.548630 * zoomfactor);
    patternContext.bezierCurveTo(58.524963 * zoomfactor, 160.425270 * zoomfactor, 59.748753 * zoomfactor, 158.223340 * zoomfactor, 60.901163 * zoomfactor, 156.346380 * zoomfactor);
    patternContext.bezierCurveTo(61.368013 * zoomfactor, 155.586000 * zoomfactor, 60.342813 * zoomfactor, 154.901610 * zoomfactor, 59.200013 * zoomfactor, 154.226800 * zoomfactor);
    patternContext.lineTo(49.539283 * zoomfactor, 148.522270 * zoomfactor);
    patternContext.bezierCurveTo(49.439383 * zoomfactor, 148.463570 * zoomfactor, 51.592153 * zoomfactor, 158.938120 * zoomfactor, 53.452653 * zoomfactor, 162.327730 * zoomfactor);
    patternContext.bezierCurveTo(54.007263 * zoomfactor, 162.569470 * zoomfactor, 56.880583 * zoomfactor, 163.280950 * zoomfactor, 57.303523 * zoomfactor, 162.548650 * zoomfactor);
    patternContext.fill();
    patternContext.restore();

    return mainContext.createPattern(patternCanvas, 'repeat');
}