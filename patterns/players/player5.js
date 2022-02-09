patternCreator.players.player5 = function() {
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
    patternContext.fillStyle = 'rgb(128, 128, 128)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 1.768139 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.miterLimit = 4;
    patternContext.moveTo(200.498470 * zoomfactor, 21.463758 * zoomfactor);
    patternContext.bezierCurveTo(217.309550 * zoomfactor, 29.621865 * zoomfactor, 230.203280 * zoomfactor, 35.932420 * zoomfactor, 237.510070 * zoomfactor, 63.115488 * zoomfactor);
    patternContext.bezierCurveTo(236.945090 * zoomfactor, 86.284495 * zoomfactor, 228.256520 * zoomfactor, 105.148480 * zoomfactor, 200.872330 * zoomfactor, 114.104900 * zoomfactor);
    patternContext.bezierCurveTo(157.050690 * zoomfactor, 114.556260 * zoomfactor, 147.037290 * zoomfactor, 113.425500 * zoomfactor, 120.119770 * zoomfactor, 113.085800 * zoomfactor);
    patternContext.bezierCurveTo(92.858073 * zoomfactor, 103.217380 * zoomfactor, 77.351203 * zoomfactor, 87.945090 * zoomfactor, 76.004963 * zoomfactor, 66.162925 * zoomfactor);
    patternContext.bezierCurveTo(78.434073 * zoomfactor, 42.431904 * zoomfactor, 91.681883 * zoomfactor, 27.315960 * zoomfactor, 110.025710 * zoomfactor, 19.464286 * zoomfactor);
    patternContext.bezierCurveTo(139.186350 * zoomfactor, 19.741480 * zoomfactor, 156.644970 * zoomfactor, 20.802852 * zoomfactor, 200.498470 * zoomfactor, 21.463758 * zoomfactor);
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

    // #path404
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 1.022109 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(201.064470 * zoomfactor, 116.417940 * zoomfactor);
    patternContext.bezierCurveTo(223.858610 * zoomfactor, 106.281080 * zoomfactor, 236.530010 * zoomfactor, 95.300650 * zoomfactor, 232.790200 * zoomfactor, 82.952623 * zoomfactor);
    patternContext.lineTo(258.568060 * zoomfactor, 128.186390 * zoomfactor);
    patternContext.lineTo(261.329980 * zoomfactor, 149.481210 * zoomfactor);
    patternContext.bezierCurveTo(258.431680 * zoomfactor, 176.725230 * zoomfactor, 202.920650 * zoomfactor, 175.315010 * zoomfactor, 202.920650 * zoomfactor, 175.315010 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path404-5
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 1.022109 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(80.960893 * zoomfactor, 87.184854 * zoomfactor);
    patternContext.lineTo(74.686913 * zoomfactor, 82.947592 * zoomfactor);
    patternContext.lineTo(62.241243 * zoomfactor, 104.994960 * zoomfactor);
    patternContext.lineTo(48.476723 * zoomfactor, 127.049080 * zoomfactor);
    patternContext.lineTo(66.878553 * zoomfactor, 135.313430 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path10302
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(204, 204, 204)';
    patternContext.lineWidth = 0.179101 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(84.041423 * zoomfactor, 232.662350 * zoomfactor);
    patternContext.bezierCurveTo(79.869053 * zoomfactor, 232.672650 * zoomfactor, 75.577353 * zoomfactor, 232.799460 * zoomfactor, 71.828293 * zoomfactor, 232.662350 * zoomfactor);
    patternContext.bezierCurveTo(71.117603 * zoomfactor, 232.636350 * zoomfactor, 70.207853 * zoomfactor, 234.073560 * zoomfactor, 70.183433 * zoomfactor, 235.623860 * zoomfactor);
    patternContext.bezierCurveTo(70.051383 * zoomfactor, 244.005680 * zoomfactor, 70.085133 * zoomfactor, 253.704170 * zoomfactor, 70.142333 * zoomfactor, 263.444090 * zoomfactor);
    patternContext.bezierCurveTo(70.150333 * zoomfactor, 264.840040 * zoomfactor, 70.859823 * zoomfactor, 266.372270 * zoomfactor, 71.499343 * zoomfactor, 266.405600 * zoomfactor);
    patternContext.bezierCurveTo(75.440923 * zoomfactor, 266.611010 * zoomfactor, 79.829803 * zoomfactor, 266.575220 * zoomfactor, 84.164813 * zoomfactor, 266.405600 * zoomfactor);
    patternContext.bezierCurveTo(84.824083 * zoomfactor, 266.379800 * zoomfactor, 85.595383 * zoomfactor, 264.882960 * zoomfactor, 85.604073 * zoomfactor, 263.444090 * zoomfactor);
    patternContext.bezierCurveTo(85.657673 * zoomfactor, 254.561900 * zoomfactor, 85.670873 * zoomfactor, 244.659510 * zoomfactor, 85.645173 * zoomfactor, 236.162320 * zoomfactor);
    patternContext.bezierCurveTo(85.640173 * zoomfactor, 234.512450 * zoomfactor, 84.797433 * zoomfactor, 232.660490 * zoomfactor, 84.041423 * zoomfactor, 232.662350 * zoomfactor);
    patternContext.fill();

    // #path10302-0
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 0.228866 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(114.528240 * zoomfactor, 132.226540 * zoomfactor);
    patternContext.bezierCurveTo(109.227870 * zoomfactor, 131.301770 * zoomfactor, 103.768740 * zoomfactor, 130.405060 * zoomfactor, 99.020013 * zoomfactor, 129.481850 * zoomfactor);
    patternContext.bezierCurveTo(97.096183 * zoomfactor, 129.107850 * zoomfactor, 96.650933 * zoomfactor, 130.877340 * zoomfactor, 96.277803 * zoomfactor, 132.804940 * zoomfactor);
    patternContext.bezierCurveTo(94.260403 * zoomfactor, 143.226670 * zoomfactor, 92.163003 * zoomfactor, 155.327450 * zoomfactor, 90.086183 * zoomfactor, 167.485140 * zoomfactor);
    patternContext.bezierCurveTo(89.788553 * zoomfactor, 169.227620 * zoomfactor, 89.388973 * zoomfactor, 171.208790 * zoomfactor, 91.155773 * zoomfactor, 171.482850 * zoomfactor);
    patternContext.bezierCurveTo(96.185063 * zoomfactor, 172.262980 * zoomfactor, 101.760040 * zoomfactor, 173.196260 * zoomfactor, 107.238370 * zoomfactor, 174.329190 * zoomfactor);
    patternContext.bezierCurveTo(108.857340 * zoomfactor, 174.663960 * zoomfactor, 109.390940 * zoomfactor, 172.752100 * zoomfactor, 109.719500 * zoomfactor, 170.959900 * zoomfactor);
    patternContext.bezierCurveTo(111.747690 * zoomfactor, 159.896620 * zoomfactor, 113.949710 * zoomfactor, 147.552140 * zoomfactor, 115.792300 * zoomfactor, 136.951110 * zoomfactor);
    patternContext.bezierCurveTo(116.150490 * zoomfactor, 134.892830 * zoomfactor, 116.357760 * zoomfactor, 132.547940 * zoomfactor, 114.528250 * zoomfactor, 132.226540 * zoomfactor);
    patternContext.fill();

    // #path10302-0-8
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 0.228866 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(161.818770 * zoomfactor, 144.964990 * zoomfactor);
    patternContext.bezierCurveTo(156.507180 * zoomfactor, 144.107060 * zoomfactor, 151.037190 * zoomfactor, 143.279180 * zoomfactor, 146.277200 * zoomfactor, 142.415860 * zoomfactor);
    patternContext.bezierCurveTo(144.348810 * zoomfactor, 142.066120 * zoomfactor, 143.925890 * zoomfactor, 143.841080 * zoomfactor, 143.577070 * zoomfactor, 145.773230 * zoomfactor);
    patternContext.bezierCurveTo(141.691090 * zoomfactor, 156.219540 * zoomfactor, 139.746290 * zoomfactor, 168.345780 * zoomfactor, 137.822760 * zoomfactor, 180.528660 * zoomfactor);
    patternContext.bezierCurveTo(137.547110 * zoomfactor, 182.274750 * zoomfactor, 137.172510 * zoomfactor, 184.260790 * zoomfactor, 138.942620 * zoomfactor, 184.512580 * zoomfactor);
    patternContext.bezierCurveTo(143.981340 * zoomfactor, 185.229310 * zoomfactor, 149.567630 * zoomfactor, 186.092290 * zoomfactor, 155.059800 * zoomfactor, 187.156130 * zoomfactor);
    patternContext.bezierCurveTo(156.682860 * zoomfactor, 187.470480 * zoomfactor, 157.192330 * zoomfactor, 185.552040 * zoomfactor, 157.498290 * zoomfactor, 183.755850 * zoomfactor);
    patternContext.bezierCurveTo(159.386970 * zoomfactor, 172.667900 * zoomfactor, 161.433330 * zoomfactor, 160.296670 * zoomfactor, 163.142240 * zoomfactor, 149.673270 * zoomfactor);
    patternContext.bezierCurveTo(163.474480 * zoomfactor, 147.610640 * zoomfactor, 163.652200 * zoomfactor, 145.263320 * zoomfactor, 161.818780 * zoomfactor, 144.964990 * zoomfactor);
    patternContext.fill();

    // #path10302-0-8-7
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(77, 77, 77)';
    patternContext.lineWidth = 0.202701 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(134.726710 * zoomfactor, 210.525100 * zoomfactor);
    patternContext.bezierCurveTo(135.296830 * zoomfactor, 206.343250 * zoomfactor, 135.828580 * zoomfactor, 202.036100 * zoomfactor, 136.433500 * zoomfactor, 198.289520 * zoomfactor);
    patternContext.bezierCurveTo(136.678540 * zoomfactor, 196.771690 * zoomfactor, 134.890070 * zoomfactor, 196.419210 * zoomfactor, 132.949190 * zoomfactor, 196.123530 * zoomfactor);
    patternContext.bezierCurveTo(122.455600 * zoomfactor, 194.524870 * zoomfactor, 110.287520 * zoomfactor, 192.862010 * zoomfactor, 98.064233 * zoomfactor, 191.215290 * zoomfactor);
    patternContext.bezierCurveTo(96.312383 * zoomfactor, 190.979000 * zoomfactor, 94.316463 * zoomfactor, 190.662720 * zoomfactor, 94.160413 * zoomfactor, 192.056710 * zoomfactor);
    patternContext.bezierCurveTo(93.716233 * zoomfactor, 196.024760 * zoomfactor, 93.155753 * zoomfactor, 200.423300 * zoomfactor, 92.390413 * zoomfactor, 204.745450 * zoomfactor);
    patternContext.bezierCurveTo(92.164273 * zoomfactor, 206.022750 * zoomfactor, 94.100103 * zoomfactor, 206.445040 * zoomfactor, 95.903453 * zoomfactor, 206.705480 * zoomfactor);
    patternContext.bezierCurveTo(107.035540 * zoomfactor, 208.313050 * zoomfactor, 119.452790 * zoomfactor, 210.058610 * zoomfactor, 130.113090 * zoomfactor, 211.519510 * zoomfactor);
    patternContext.bezierCurveTo(132.182960 * zoomfactor, 211.803190 * zoomfactor, 134.527730 * zoomfactor, 211.968560 * zoomfactor, 134.726710 * zoomfactor, 210.525120 * zoomfactor);
    patternContext.fill();

    // #path10302-0-8-7-7
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(179, 179, 179)';
    patternContext.lineWidth = 0.250360 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(168.245840 * zoomfactor, 106.148180 * zoomfactor);
    patternContext.bezierCurveTo(168.288340 * zoomfactor, 101.927860 * zoomfactor, 168.248840 * zoomfactor, 97.587268 * zoomfactor, 168.428740 * zoomfactor, 93.795757 * zoomfactor);
    patternContext.bezierCurveTo(168.501840 * zoomfactor, 92.259721 * zoomfactor, 165.727220 * zoomfactor, 92.108538 * zoomfactor, 162.733200 * zoomfactor, 92.030788 * zoomfactor);
    patternContext.bezierCurveTo(146.545690 * zoomfactor, 91.610388 * zoomfactor, 127.812530 * zoomfactor, 91.312668 * zoomfactor, 108.999010 * zoomfactor, 91.037147 * zoomfactor);
    patternContext.bezierCurveTo(106.302590 * zoomfactor, 90.997377 * zoomfactor, 103.221260 * zoomfactor, 90.905276 * zoomfactor, 103.258520 * zoomfactor, 92.308300 * zoomfactor);
    patternContext.bezierCurveTo(103.364600 * zoomfactor, 96.302064 * zoomfactor, 102.767360 * zoomfactor, 98.442186 * zoomfactor, 104.729430 * zoomfactor, 100.624810 * zoomfactor);
    patternContext.bezierCurveTo(105.561870 * zoomfactor, 101.550810 * zoomfactor, 110.183550 * zoomfactor, 105.278760 * zoomfactor, 112.962620 * zoomfactor, 105.336790 * zoomfactor);
    patternContext.bezierCurveTo(130.117760 * zoomfactor, 105.694940 * zoomfactor, 145.048910 * zoomfactor, 107.385570 * zoomfactor, 161.461600 * zoomfactor, 107.650460 * zoomfactor);
    patternContext.bezierCurveTo(164.648420 * zoomfactor, 107.701960 * zoomfactor, 168.227850 * zoomfactor, 107.605160 * zoomfactor, 168.245840 * zoomfactor, 106.148200 * zoomfactor);
    patternContext.fill();

    // #path10302-6
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(204, 204, 204)';
    patternContext.lineWidth = 0.298524 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(232.338830 * zoomfactor, 247.141070 * zoomfactor);
    patternContext.bezierCurveTo(220.747170 * zoomfactor, 247.151370 * zoomfactor, 208.823980 * zoomfactor, 247.278180 * zoomfactor, 198.408390 * zoomfactor, 247.141070 * zoomfactor);
    patternContext.bezierCurveTo(196.433940 * zoomfactor, 247.115070 * zoomfactor, 193.906480 * zoomfactor, 248.552280 * zoomfactor, 193.838630 * zoomfactor, 250.102580 * zoomfactor);
    patternContext.bezierCurveTo(193.471770 * zoomfactor, 258.484400 * zoomfactor, 193.565620 * zoomfactor, 268.182890 * zoomfactor, 193.724440 * zoomfactor, 277.922810 * zoomfactor);
    patternContext.bezierCurveTo(193.747240 * zoomfactor, 279.318760 * zoomfactor, 195.717780 * zoomfactor, 280.850990 * zoomfactor, 197.494490 * zoomfactor, 280.884320 * zoomfactor);
    patternContext.bezierCurveTo(208.444950 * zoomfactor, 281.089730 * zoomfactor, 220.638140 * zoomfactor, 281.053940 * zoomfactor, 232.681610 * zoomfactor, 280.884320 * zoomfactor);
    patternContext.bezierCurveTo(234.513190 * zoomfactor, 280.858520 * zoomfactor, 236.656020 * zoomfactor, 279.361680 * zoomfactor, 236.680160 * zoomfactor, 277.922810 * zoomfactor);
    patternContext.bezierCurveTo(236.829110 * zoomfactor, 269.040620 * zoomfactor, 236.865730 * zoomfactor, 259.138230 * zoomfactor, 236.794350 * zoomfactor, 250.641040 * zoomfactor);
    patternContext.bezierCurveTo(236.780450 * zoomfactor, 248.991170 * zoomfactor, 234.439180 * zoomfactor, 247.139210 * zoomfactor, 232.338830 * zoomfactor, 247.141070 * zoomfactor);
    patternContext.fill();
    patternContext.restore();

    return mainContext.createPattern(patternCanvas, 'repeat');
}