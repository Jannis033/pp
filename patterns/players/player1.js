patternCreator.players.player1 = function() {
    const patternCanvas = document.createElement('canvas');
    const patternContext = patternCanvas.getContext('2d');

    patternCanvas.width = blockSize;
    patternCanvas.height = blockSize + playerOverlap;

    /// #g81
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
    patternContext.moveTo(77.842083 * zoomfactor, 77.315107 * zoomfactor);
    patternContext.lineTo(48.835853 * zoomfactor, 126.453890 * zoomfactor);
    patternContext.bezierCurveTo(47.577923 * zoomfactor, 148.404890 * zoomfactor, 47.611583 * zoomfactor, 170.179050 * zoomfactor, 62.459993 * zoomfactor, 189.924850 * zoomfactor);
    patternContext.bezierCurveTo(73.048183 * zoomfactor, 205.069610 * zoomfactor, 85.916383 * zoomfactor, 219.370110 * zoomfactor, 117.396030 * zoomfactor, 226.778930 * zoomfactor);
    patternContext.lineTo(198.574280 * zoomfactor, 226.322510 * zoomfactor);
    patternContext.bezierCurveTo(210.124910 * zoomfactor, 223.546540 * zoomfactor, 220.504880 * zoomfactor, 216.189150 * zoomfactor, 228.726880 * zoomfactor, 209.855700 * zoomfactor);
    patternContext.bezierCurveTo(235.652420 * zoomfactor, 204.520930 * zoomfactor, 242.387460 * zoomfactor, 198.665020 * zoomfactor, 246.605590 * zoomfactor, 190.436710 * zoomfactor);
    patternContext.bezierCurveTo(257.665260 * zoomfactor, 171.068070 * zoomfactor, 265.668000 * zoomfactor, 150.862350 * zoomfactor, 260.496260 * zoomfactor, 127.049080 * zoomfactor);
    patternContext.lineTo(231.490050 * zoomfactor, 77.910293 * zoomfactor);
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
    patternContext.moveTo(109.194750 * zoomfactor, 23.327016 * zoomfactor);
    patternContext.bezierCurveTo(92.383672 * zoomfactor, 32.108964 * zoomfactor, 79.489942 * zoomfactor, 38.897992 * zoomfactor, 72.183152 * zoomfactor, 66.352208 * zoomfactor);
    patternContext.bezierCurveTo(72.748132 * zoomfactor, 89.500249 * zoomfactor, 81.436702 * zoomfactor, 108.041810 * zoomfactor, 108.820890 * zoomfactor, 115.982030 * zoomfactor);
    patternContext.bezierCurveTo(152.642530 * zoomfactor, 114.807220 * zoomfactor, 162.655930 * zoomfactor, 113.304870 * zoomfactor, 189.573450 * zoomfactor, 111.966290 * zoomfactor);
    patternContext.bezierCurveTo(216.835150 * zoomfactor, 101.086210 * zoomfactor, 232.342020 * zoomfactor, 85.238479 * zoomfactor, 233.688260 * zoomfactor, 63.406357 * zoomfactor);
    patternContext.bezierCurveTo(231.259150 * zoomfactor, 39.765478 * zoomfactor, 218.011340 * zoomfactor, 25.141146 * zoomfactor, 199.667510 * zoomfactor, 17.970193 * zoomfactor);
    patternContext.bezierCurveTo(170.506870 * zoomfactor, 19.329508 * zoomfactor, 153.048250 * zoomfactor, 21.038751 * zoomfactor, 109.194750 * zoomfactor, 23.327016 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path1073
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 0.955130 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(60.758113 * zoomfactor, 190.345430 * zoomfactor);
    patternContext.lineTo(45.772153 * zoomfactor, 252.484170 * zoomfactor);
    patternContext.lineTo(67.904163 * zoomfactor, 320.358480 * zoomfactor);
    patternContext.lineTo(70.583933 * zoomfactor, 363.866810 * zoomfactor);
    patternContext.lineTo(75.050213 * zoomfactor, 378.198960 * zoomfactor);
    patternContext.lineTo(119.266410 * zoomfactor, 379.222680 * zoomfactor);
    patternContext.lineTo(126.859090 * zoomfactor, 366.426090 * zoomfactor);
    patternContext.lineTo(129.092230 * zoomfactor, 342.880430 * zoomfactor);
    patternContext.lineTo(168.842140 * zoomfactor, 342.368570 * zoomfactor);
    patternContext.lineTo(170.628650 * zoomfactor, 361.819340 * zoomfactor);
    patternContext.lineTo(175.988190 * zoomfactor, 377.175220 * zoomfactor);
    patternContext.lineTo(218.864490 * zoomfactor, 377.687080 * zoomfactor);
    patternContext.lineTo(229.583570 * zoomfactor, 362.331210 * zoomfactor);
    patternContext.lineTo(231.816710 * zoomfactor, 316.775450 * zoomfactor);
    patternContext.lineTo(249.948210 * zoomfactor, 249.412990 * zoomfactor);
    patternContext.lineTo(247.895320 * zoomfactor, 190.857290 * zoomfactor);
    patternContext.lineTo(229.136950 * zoomfactor, 212.355500 * zoomfactor);
    patternContext.lineTo(200.552740 * zoomfactor, 224.640210 * zoomfactor);
    patternContext.lineTo(179.561220 * zoomfactor, 228.223240 * zoomfactor);
    patternContext.lineTo(116.586640 * zoomfactor, 227.199510 * zoomfactor);
    patternContext.lineTo(93.808603 * zoomfactor, 219.521580 * zoomfactor);
    patternContext.lineTo(71.477193 * zoomfactor, 205.701300 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path7615-3
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(179, 179, 179)';
    patternContext.lineWidth = 1.381718 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.miterLimit = 4;
    patternContext.moveTo(220.944450 * zoomfactor, 98.851423 * zoomfactor);
    patternContext.bezierCurveTo(238.572390 * zoomfactor, 130.875910 * zoomfactor, 249.983180 * zoomfactor, 129.052620 * zoomfactor, 223.398500 * zoomfactor, 210.378820 * zoomfactor);
    patternContext.bezierCurveTo(228.722800 * zoomfactor, 205.044050 * zoomfactor, 245.328880 * zoomfactor, 187.022600 * zoomfactor, 248.571750 * zoomfactor, 178.794290 * zoomfactor);
    patternContext.bezierCurveTo(257.074330 * zoomfactor, 159.425650 * zoomfactor, 262.120810 * zoomfactor, 153.966030 * zoomfactor, 258.144830 * zoomfactor, 130.152760 * zoomfactor);
    patternContext.lineTo(231.789900 * zoomfactor, 85.069153 * zoomfactor);
    patternContext.fill();

    // #path10302
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(204, 204, 204)';
    patternContext.lineWidth = 0.177267 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(227.618500 * zoomfactor, 235.173840 * zoomfactor);
    patternContext.bezierCurveTo(231.705860 * zoomfactor, 235.184140 * zoomfactor, 235.910110 * zoomfactor, 235.310950 * zoomfactor, 239.582760 * zoomfactor, 235.173840 * zoomfactor);
    patternContext.bezierCurveTo(240.278980 * zoomfactor, 235.147840 * zoomfactor, 241.170190 * zoomfactor, 236.585050 * zoomfactor, 241.194120 * zoomfactor, 238.135350 * zoomfactor);
    patternContext.bezierCurveTo(241.323470 * zoomfactor, 246.517170 * zoomfactor, 241.290420 * zoomfactor, 256.215660 * zoomfactor, 241.234420 * zoomfactor, 265.955580 * zoomfactor);
    patternContext.bezierCurveTo(241.226420 * zoomfactor, 267.351530 * zoomfactor, 240.531550 * zoomfactor, 268.883760 * zoomfactor, 239.905060 * zoomfactor, 268.917090 * zoomfactor);
    patternContext.bezierCurveTo(236.043800 * zoomfactor, 269.122500 * zoomfactor, 231.744350 * zoomfactor, 269.086710 * zoomfactor, 227.497670 * zoomfactor, 268.917090 * zoomfactor);
    patternContext.bezierCurveTo(226.851840 * zoomfactor, 268.891290 * zoomfactor, 226.096260 * zoomfactor, 267.394450 * zoomfactor, 226.087740 * zoomfactor, 265.955580 * zoomfactor);
    patternContext.bezierCurveTo(226.035240 * zoomfactor, 257.073390 * zoomfactor, 226.022340 * zoomfactor, 247.171000 * zoomfactor, 226.047440 * zoomfactor, 238.673810 * zoomfactor);
    patternContext.bezierCurveTo(226.052440 * zoomfactor, 237.023940 * zoomfactor, 226.877900 * zoomfactor, 235.171980 * zoomfactor, 227.618500 * zoomfactor, 235.173840 * zoomfactor);
    patternContext.fill();

    // #path10302-0
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 0.133111 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(237.507530 * zoomfactor, 112.594080 * zoomfactor);
    patternContext.bezierCurveTo(239.738620 * zoomfactor, 111.982360 * zoomfactor, 242.044120 * zoomfactor, 111.395050 * zoomfactor, 244.030160 * zoomfactor, 110.774450 * zoomfactor);
    patternContext.bezierCurveTo(244.834730 * zoomfactor, 110.523000 * zoomfactor, 245.273360 * zoomfactor, 111.887200 * zoomfactor, 245.701420 * zoomfactor, 113.371210 * zoomfactor);
    patternContext.bezierCurveTo(248.015720 * zoomfactor, 121.394630 * zoomfactor, 250.593980 * zoomfactor, 130.706190 * zoomfactor, 253.170800 * zoomfactor, 140.061010 * zoomfactor);
    patternContext.bezierCurveTo(253.539680 * zoomfactor, 141.401890 * zoomfactor, 253.987240 * zoomfactor, 142.927310 * zoomfactor, 253.238900 * zoomfactor, 143.105010 * zoomfactor);
    patternContext.bezierCurveTo(251.108660 * zoomfactor, 143.610840 * zoomfactor, 248.756610 * zoomfactor, 144.224050 * zoomfactor, 246.474690 * zoomfactor, 144.992040 * zoomfactor);
    patternContext.bezierCurveTo(245.800330 * zoomfactor, 145.218990 * zoomfactor, 245.303060 * zoomfactor, 143.744080 * zoomfactor, 244.913230 * zoomfactor, 142.364660 * zoomfactor);
    patternContext.bezierCurveTo(242.506880 * zoomfactor, 133.849410 * zoomfactor, 239.848890 * zoomfactor, 124.349180 * zoomfactor, 237.587990 * zoomfactor, 116.191550 * zoomfactor);
    patternContext.bezierCurveTo(237.148250 * zoomfactor, 114.607820 * zoomfactor, 236.737720 * zoomfactor, 112.806920 * zoomfactor, 237.507590 * zoomfactor, 112.594090 * zoomfactor);
    patternContext.fill();

    // #path10302-0-8-7
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(77, 77, 77)';
    patternContext.lineWidth = 0.126965 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(251.669460 * zoomfactor, 162.548630 * zoomfactor);
    patternContext.bezierCurveTo(250.448020 * zoomfactor, 160.425270 * zoomfactor, 249.224230 * zoomfactor, 158.223340 * zoomfactor, 248.071820 * zoomfactor, 156.346380 * zoomfactor);
    patternContext.bezierCurveTo(247.604970 * zoomfactor, 155.586000 * zoomfactor, 248.630170 * zoomfactor, 154.901610 * zoomfactor, 249.772970 * zoomfactor, 154.226800 * zoomfactor);
    patternContext.lineTo(259.433700 * zoomfactor, 148.522270 * zoomfactor);
    patternContext.bezierCurveTo(259.533600 * zoomfactor, 148.463570 * zoomfactor, 257.380830 * zoomfactor, 158.938120 * zoomfactor, 255.520330 * zoomfactor, 162.327730 * zoomfactor);
    patternContext.bezierCurveTo(254.965720 * zoomfactor, 162.569470 * zoomfactor, 252.092400 * zoomfactor, 163.280950 * zoomfactor, 251.669460 * zoomfactor, 162.548650 * zoomfactor);
    patternContext.fill();
    patternContext.restore();

    return context.createPattern(patternCanvas, 'repeat');
}