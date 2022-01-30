patternCreator.players.player4 = function() {
    const patternCanvas = document.createElement('canvas');
    const patternContext = patternCanvas.getContext('2d');

    patternCanvas.width = blockSize;
    patternCanvas.height = blockSize + playerOverlap;

    // #g81
    patternContext.save();
    patternContext.transform(0.264583, 0.000000, 0.000000, 0.264583, -0.317336 * zoomfactor, -1.671710 * zoomfactor);

    // #path7615
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(179, 179, 179)';
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
    patternContext.fillStyle = 'rgb(128, 128, 128)';
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

    // #path404
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 1.022109 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(73.182198 * zoomfactor, 94.145805 * zoomfactor);
    patternContext.lineTo(68.067542 * zoomfactor, 82.372963 * zoomfactor);
    patternContext.lineTo(44.028665 * zoomfactor, 108.477950 * zoomfactor);
    patternContext.lineTo(34.310823 * zoomfactor, 131.511750 * zoomfactor);
    patternContext.lineTo(70.113404 * zoomfactor, 159.664190 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path404-5
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 1.022109 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(237.127220 * zoomfactor, 95.479732 * zoomfactor);
    patternContext.lineTo(242.241880 * zoomfactor, 83.706890 * zoomfactor);
    patternContext.lineTo(266.280750 * zoomfactor, 109.811880 * zoomfactor);
    patternContext.lineTo(275.998590 * zoomfactor, 132.845680 * zoomfactor);
    patternContext.lineTo(240.196020 * zoomfactor, 160.998110 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path10302
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(204, 204, 204)';
    patternContext.lineWidth = 0.264583 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(228.074290 * zoomfactor, 242.516570 * zoomfactor);
    patternContext.bezierCurveTo(237.179950 * zoomfactor, 242.526870 * zoomfactor, 246.546040 * zoomfactor, 242.653680 * zoomfactor, 254.727860 * zoomfactor, 242.516570 * zoomfactor);
    patternContext.bezierCurveTo(256.278860 * zoomfactor, 242.490570 * zoomfactor, 258.264270 * zoomfactor, 243.927780 * zoomfactor, 258.317570 * zoomfactor, 245.478080 * zoomfactor);
    patternContext.bezierCurveTo(258.605750 * zoomfactor, 253.859900 * zoomfactor, 258.532030 * zoomfactor, 263.558390 * zoomfactor, 258.407270 * zoomfactor, 273.298310 * zoomfactor);
    patternContext.bezierCurveTo(258.389370 * zoomfactor, 274.694260 * zoomfactor, 256.841430 * zoomfactor, 276.226490 * zoomfactor, 255.445760 * zoomfactor, 276.259820 * zoomfactor);
    patternContext.bezierCurveTo(246.843780 * zoomfactor, 276.465230 * zoomfactor, 237.265600 * zoomfactor, 276.429440 * zoomfactor, 227.805020 * zoomfactor, 276.259820 * zoomfactor);
    patternContext.bezierCurveTo(226.366250 * zoomfactor, 276.234020 * zoomfactor, 224.682980 * zoomfactor, 274.737180 * zoomfactor, 224.664020 * zoomfactor, 273.298310 * zoomfactor);
    patternContext.bezierCurveTo(224.547010 * zoomfactor, 264.416120 * zoomfactor, 224.518250 * zoomfactor, 254.513730 * zoomfactor, 224.574320 * zoomfactor, 246.016540 * zoomfactor);
    patternContext.bezierCurveTo(224.585220 * zoomfactor, 244.366670 * zoomfactor, 226.424390 * zoomfactor, 242.514710 * zoomfactor, 228.074290 * zoomfactor, 242.516570 * zoomfactor);
    patternContext.fill();

    // #path10302-0
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 0.228866 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(171.961660 * zoomfactor, 150.222210 * zoomfactor);
    patternContext.bezierCurveTo(177.342080 * zoomfactor, 150.235310 * zoomfactor, 182.873940 * zoomfactor, 150.303710 * zoomfactor, 187.710900 * zoomfactor, 150.222210 * zoomfactor);
    patternContext.bezierCurveTo(189.670470 * zoomfactor, 150.189210 * zoomfactor, 189.800520 * zoomfactor, 152.009220 * zoomfactor, 189.832010 * zoomfactor, 153.972350 * zoomfactor);
    patternContext.bezierCurveTo(190.002300 * zoomfactor, 164.586180 * zoomfactor, 189.958740 * zoomfactor, 176.867300 * zoomfactor, 189.885010 * zoomfactor, 189.200880 * zoomfactor);
    patternContext.bezierCurveTo(189.874410 * zoomfactor, 190.968560 * zoomfactor, 189.922610 * zoomfactor, 192.989050 * zoomfactor, 188.135090 * zoomfactor, 192.951010 * zoomfactor);
    patternContext.bezierCurveTo(183.046800 * zoomfactor, 192.842730 * zoomfactor, 177.394490 * zoomfactor, 192.790150 * zoomfactor, 171.802550 * zoomfactor, 192.951010 * zoomfactor);
    patternContext.bezierCurveTo(170.150010 * zoomfactor, 192.998510 * zoomfactor, 169.957770 * zoomfactor, 191.022910 * zoomfactor, 169.946570 * zoomfactor, 189.200880 * zoomfactor);
    patternContext.bezierCurveTo(169.877470 * zoomfactor, 177.953440 * zoomfactor, 169.860470 * zoomfactor, 165.414110 * zoomfactor, 169.893570 * zoomfactor, 154.654190 * zoomfactor);
    patternContext.bezierCurveTo(169.899570 * zoomfactor, 152.564980 * zoomfactor, 170.104120 * zoomfactor, 150.219850 * zoomfactor, 171.961650 * zoomfactor, 150.222210 * zoomfactor);
    patternContext.fill();

    // #path10302-0-8
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 0.228866 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(114.568460 * zoomfactor, 152.091090 * zoomfactor);
    patternContext.bezierCurveTo(119.948880 * zoomfactor, 152.104190 * zoomfactor, 125.480740 * zoomfactor, 152.172590 * zoomfactor, 130.317700 * zoomfactor, 152.091090 * zoomfactor);
    patternContext.bezierCurveTo(132.277270 * zoomfactor, 152.058090 * zoomfactor, 132.407320 * zoomfactor, 153.878100 * zoomfactor, 132.438810 * zoomfactor, 155.841230 * zoomfactor);
    patternContext.bezierCurveTo(132.609100 * zoomfactor, 166.455060 * zoomfactor, 132.565540 * zoomfactor, 178.736180 * zoomfactor, 132.491810 * zoomfactor, 191.069760 * zoomfactor);
    patternContext.bezierCurveTo(132.481210 * zoomfactor, 192.837440 * zoomfactor, 132.529410 * zoomfactor, 194.857930 * zoomfactor, 130.741890 * zoomfactor, 194.819890 * zoomfactor);
    patternContext.bezierCurveTo(125.653600 * zoomfactor, 194.711610 * zoomfactor, 120.001290 * zoomfactor, 194.659030 * zoomfactor, 114.409350 * zoomfactor, 194.819890 * zoomfactor);
    patternContext.bezierCurveTo(112.756810 * zoomfactor, 194.867390 * zoomfactor, 112.564570 * zoomfactor, 192.891790 * zoomfactor, 112.553370 * zoomfactor, 191.069760 * zoomfactor);
    patternContext.bezierCurveTo(112.484270 * zoomfactor, 179.822320 * zoomfactor, 112.467270 * zoomfactor, 167.282990 * zoomfactor, 112.500370 * zoomfactor, 156.523070 * zoomfactor);
    patternContext.bezierCurveTo(112.506370 * zoomfactor, 154.433860 * zoomfactor, 112.710920 * zoomfactor, 152.088730 * zoomfactor, 114.568450 * zoomfactor, 152.091090 * zoomfactor);
    patternContext.fill();

    // #path10302-0-8-7
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(77, 77, 77)';
    patternContext.lineWidth = 0.202701 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(130.870970 * zoomfactor, 220.388670 * zoomfactor);
    patternContext.bezierCurveTo(130.884070 * zoomfactor, 216.168150 * zoomfactor, 130.952470 * zoomfactor, 211.828840 * zoomfactor, 130.870970 * zoomfactor, 208.034620 * zoomfactor);
    patternContext.bezierCurveTo(130.837970 * zoomfactor, 206.497490 * zoomfactor, 132.657990 * zoomfactor, 206.395480 * zoomfactor, 134.621110 * zoomfactor, 206.370780 * zoomfactor);
    patternContext.bezierCurveTo(145.234940 * zoomfactor, 206.237200 * zoomfactor, 157.516060 * zoomfactor, 206.271380 * zoomfactor, 169.849640 * zoomfactor, 206.329180 * zoomfactor);
    patternContext.bezierCurveTo(171.617330 * zoomfactor, 206.337180 * zoomfactor, 173.637810 * zoomfactor, 206.299680 * zoomfactor, 173.599780 * zoomfactor, 207.701860 * zoomfactor);
    patternContext.bezierCurveTo(173.491490 * zoomfactor, 211.693230 * zoomfactor, 173.438910 * zoomfactor, 216.127020 * zoomfactor, 173.599780 * zoomfactor, 220.513460 * zoomfactor);
    patternContext.bezierCurveTo(173.647280 * zoomfactor, 221.809750 * zoomfactor, 171.671680 * zoomfactor, 221.960550 * zoomfactor, 169.849640 * zoomfactor, 221.969340 * zoomfactor);
    patternContext.bezierCurveTo(158.602200 * zoomfactor, 222.023540 * zoomfactor, 146.062870 * zoomfactor, 222.036840 * zoomfactor, 135.302960 * zoomfactor, 222.010940 * zoomfactor);
    patternContext.bezierCurveTo(133.213740 * zoomfactor, 222.005940 * zoomfactor, 130.868620 * zoomfactor, 221.845780 * zoomfactor, 130.870970 * zoomfactor, 220.388690 * zoomfactor);
    patternContext.fill();

    // #path10302-0-8-7-7
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(179, 179, 179)';
    patternContext.lineWidth = 0.261849 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(120.607790 * zoomfactor, 107.890260 * zoomfactor);
    patternContext.bezierCurveTo(120.629590 * zoomfactor, 103.669740 * zoomfactor, 120.743790 * zoomfactor, 99.330430 * zoomfactor, 120.607790 * zoomfactor, 95.536219 * zoomfactor);
    patternContext.bezierCurveTo(120.552690 * zoomfactor, 93.999089 * zoomfactor, 123.589860 * zoomfactor, 93.897079 * zoomfactor, 126.865800 * zoomfactor, 93.872379 * zoomfactor);
    patternContext.bezierCurveTo(144.577510 * zoomfactor, 93.738799 * zoomfactor, 165.071490 * zoomfactor, 93.772979 * zoomfactor, 185.653030 * zoomfactor, 93.830779 * zoomfactor);
    patternContext.bezierCurveTo(188.602840 * zoomfactor, 93.838779 * zoomfactor, 191.974500 * zoomfactor, 93.801279 * zoomfactor, 191.911030 * zoomfactor, 95.203459 * zoomfactor);
    patternContext.bezierCurveTo(191.730320 * zoomfactor, 99.194820 * zoomfactor, 191.642590 * zoomfactor, 103.628610 * zoomfactor, 191.911030 * zoomfactor, 108.015050 * zoomfactor);
    patternContext.bezierCurveTo(191.990230 * zoomfactor, 109.311340 * zoomfactor, 188.693540 * zoomfactor, 109.462140 * zoomfactor, 185.653030 * zoomfactor, 109.470930 * zoomfactor);
    patternContext.bezierCurveTo(166.883990 * zoomfactor, 109.525130 * zoomfactor, 145.959110 * zoomfactor, 109.538430 * zoomfactor, 128.003640 * zoomfactor, 109.512530 * zoomfactor);
    patternContext.bezierCurveTo(124.517260 * zoomfactor, 109.507530 * zoomfactor, 120.603870 * zoomfactor, 109.347370 * zoomfactor, 120.607790 * zoomfactor, 107.890280 * zoomfactor);
    patternContext.fill();

    // #path10302-6
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(204, 204, 204)';
    patternContext.lineWidth = 0.264583 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(58.860909 * zoomfactor, 248.880050 * zoomfactor);
    patternContext.bezierCurveTo(67.966569 * zoomfactor, 248.890350 * zoomfactor, 77.332659 * zoomfactor, 249.017160 * zoomfactor, 85.514479 * zoomfactor, 248.880050 * zoomfactor);
    patternContext.bezierCurveTo(87.065479 * zoomfactor, 248.854050 * zoomfactor, 89.050889 * zoomfactor, 250.291260 * zoomfactor, 89.104189 * zoomfactor, 251.841560 * zoomfactor);
    patternContext.bezierCurveTo(89.392369 * zoomfactor, 260.223380 * zoomfactor, 89.318649 * zoomfactor, 269.921870 * zoomfactor, 89.193889 * zoomfactor, 279.661790 * zoomfactor);
    patternContext.bezierCurveTo(89.175989 * zoomfactor, 281.057740 * zoomfactor, 87.628049 * zoomfactor, 282.589970 * zoomfactor, 86.232379 * zoomfactor, 282.623300 * zoomfactor);
    patternContext.bezierCurveTo(77.630399 * zoomfactor, 282.828710 * zoomfactor, 68.052219 * zoomfactor, 282.792920 * zoomfactor, 58.591639 * zoomfactor, 282.623300 * zoomfactor);
    patternContext.bezierCurveTo(57.152869 * zoomfactor, 282.597500 * zoomfactor, 55.469599 * zoomfactor, 281.100660 * zoomfactor, 55.450639 * zoomfactor, 279.661790 * zoomfactor);
    patternContext.bezierCurveTo(55.333629 * zoomfactor, 270.779600 * zoomfactor, 55.304869 * zoomfactor, 260.877210 * zoomfactor, 55.360939 * zoomfactor, 252.380020 * zoomfactor);
    patternContext.bezierCurveTo(55.371839 * zoomfactor, 250.730150 * zoomfactor, 57.211009 * zoomfactor, 248.878190 * zoomfactor, 58.860909 * zoomfactor, 248.880050 * zoomfactor);
    patternContext.fill();
    patternContext.restore();

    return context.createPattern(patternCanvas, 'repeat');
}