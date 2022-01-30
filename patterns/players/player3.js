patternCreator.players.player3 = function() {
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
    patternContext.moveTo(77.842081 * zoomfactor, 77.315107 * zoomfactor);
    patternContext.lineTo(48.835851 * zoomfactor, 126.453890 * zoomfactor);
    patternContext.bezierCurveTo(47.577919 * zoomfactor, 148.404890 * zoomfactor, 47.611579 * zoomfactor, 170.179050 * zoomfactor, 62.459990 * zoomfactor, 189.924850 * zoomfactor);
    patternContext.bezierCurveTo(73.048188 * zoomfactor, 205.069610 * zoomfactor, 85.916381 * zoomfactor, 219.370110 * zoomfactor, 117.396030 * zoomfactor, 226.778930 * zoomfactor);
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
    patternContext.fillStyle = 'rgb(128, 128, 128)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 1.768139 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.miterLimit = 4;
    patternContext.moveTo(108.474510 * zoomfactor, 21.463758 * zoomfactor);
    patternContext.bezierCurveTo(91.663438 * zoomfactor, 29.621865 * zoomfactor, 78.769700 * zoomfactor, 35.932420 * zoomfactor, 71.462913 * zoomfactor, 63.115488 * zoomfactor);
    patternContext.bezierCurveTo(72.027896 * zoomfactor, 86.284495 * zoomfactor, 80.716463 * zoomfactor, 105.148480 * zoomfactor, 108.100650 * zoomfactor, 114.104900 * zoomfactor);
    patternContext.bezierCurveTo(151.922290 * zoomfactor, 114.556260 * zoomfactor, 161.935690 * zoomfactor, 113.425500 * zoomfactor, 188.853210 * zoomfactor, 113.085800 * zoomfactor);
    patternContext.bezierCurveTo(216.114910 * zoomfactor, 103.217380 * zoomfactor, 231.621780 * zoomfactor, 87.945090 * zoomfactor, 232.968020 * zoomfactor, 66.162925 * zoomfactor);
    patternContext.bezierCurveTo(230.538910 * zoomfactor, 42.431904 * zoomfactor, 217.291100 * zoomfactor, 27.315960 * zoomfactor, 198.947270 * zoomfactor, 19.464286 * zoomfactor);
    patternContext.bezierCurveTo(169.786630 * zoomfactor, 19.741480 * zoomfactor, 152.328010 * zoomfactor, 20.802852 * zoomfactor, 108.474510 * zoomfactor, 21.463758 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path1073
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 0.955130 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(60.758114 * zoomfactor, 190.345430 * zoomfactor);
    patternContext.lineTo(45.772153 * zoomfactor, 252.484170 * zoomfactor);
    patternContext.lineTo(67.904167 * zoomfactor, 320.358480 * zoomfactor);
    patternContext.lineTo(70.583934 * zoomfactor, 363.866810 * zoomfactor);
    patternContext.lineTo(75.050217 * zoomfactor, 378.198960 * zoomfactor);
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
    patternContext.lineTo(93.808602 * zoomfactor, 219.521580 * zoomfactor);
    patternContext.lineTo(71.477193 * zoomfactor, 205.701300 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path404
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 1.022109 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(107.908510 * zoomfactor, 116.417940 * zoomfactor);
    patternContext.bezierCurveTo(85.114370 * zoomfactor, 106.281080 * zoomfactor, 72.442970 * zoomfactor, 95.300650 * zoomfactor, 76.182783 * zoomfactor, 82.952623 * zoomfactor);
    patternContext.lineTo(50.404925 * zoomfactor, 128.186390 * zoomfactor);
    patternContext.lineTo(47.643005 * zoomfactor, 149.481210 * zoomfactor);
    patternContext.bezierCurveTo(50.541305 * zoomfactor, 176.725230 * zoomfactor, 106.052330 * zoomfactor, 175.315010 * zoomfactor, 106.052330 * zoomfactor, 175.315010 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path404-5
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.strokeStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 1.022109 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(228.012090 * zoomfactor, 87.184854 * zoomfactor);
    patternContext.lineTo(234.286070 * zoomfactor, 82.947592 * zoomfactor);
    patternContext.lineTo(246.731740 * zoomfactor, 104.994960 * zoomfactor);
    patternContext.lineTo(260.496260 * zoomfactor, 127.049080 * zoomfactor);
    patternContext.lineTo(242.094430 * zoomfactor, 135.313430 * zoomfactor);
    patternContext.fill();
    patternContext.stroke();

    // #path10302
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(204, 204, 204)';
    patternContext.lineWidth = 0.179101 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(224.931560 * zoomfactor, 232.662350 * zoomfactor);
    patternContext.bezierCurveTo(229.103930 * zoomfactor, 232.672650 * zoomfactor, 233.395630 * zoomfactor, 232.799460 * zoomfactor, 237.144690 * zoomfactor, 232.662350 * zoomfactor);
    patternContext.bezierCurveTo(237.855380 * zoomfactor, 232.636350 * zoomfactor, 238.765130 * zoomfactor, 234.073560 * zoomfactor, 238.789550 * zoomfactor, 235.623860 * zoomfactor);
    patternContext.bezierCurveTo(238.921600 * zoomfactor, 244.005680 * zoomfactor, 238.887850 * zoomfactor, 253.704170 * zoomfactor, 238.830650 * zoomfactor, 263.444090 * zoomfactor);
    patternContext.bezierCurveTo(238.822650 * zoomfactor, 264.840040 * zoomfactor, 238.113160 * zoomfactor, 266.372270 * zoomfactor, 237.473640 * zoomfactor, 266.405600 * zoomfactor);
    patternContext.bezierCurveTo(233.532060 * zoomfactor, 266.611010 * zoomfactor, 229.143180 * zoomfactor, 266.575220 * zoomfactor, 224.808170 * zoomfactor, 266.405600 * zoomfactor);
    patternContext.bezierCurveTo(224.148900 * zoomfactor, 266.379800 * zoomfactor, 223.377600 * zoomfactor, 264.882960 * zoomfactor, 223.368910 * zoomfactor, 263.444090 * zoomfactor);
    patternContext.bezierCurveTo(223.315310 * zoomfactor, 254.561900 * zoomfactor, 223.302110 * zoomfactor, 244.659510 * zoomfactor, 223.327810 * zoomfactor, 236.162320 * zoomfactor);
    patternContext.bezierCurveTo(223.332810 * zoomfactor, 234.512450 * zoomfactor, 224.175550 * zoomfactor, 232.660490 * zoomfactor, 224.931560 * zoomfactor, 232.662350 * zoomfactor);
    patternContext.fill();

    // #path10302-0
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 0.228866 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(194.444740 * zoomfactor, 132.226540 * zoomfactor);
    patternContext.bezierCurveTo(199.745110 * zoomfactor, 131.301770 * zoomfactor, 205.204240 * zoomfactor, 130.405060 * zoomfactor, 209.952970 * zoomfactor, 129.481850 * zoomfactor);
    patternContext.bezierCurveTo(211.876800 * zoomfactor, 129.107850 * zoomfactor, 212.322050 * zoomfactor, 130.877340 * zoomfactor, 212.695180 * zoomfactor, 132.804940 * zoomfactor);
    patternContext.bezierCurveTo(214.712580 * zoomfactor, 143.226670 * zoomfactor, 216.809980 * zoomfactor, 155.327450 * zoomfactor, 218.886800 * zoomfactor, 167.485140 * zoomfactor);
    patternContext.bezierCurveTo(219.184430 * zoomfactor, 169.227620 * zoomfactor, 219.584010 * zoomfactor, 171.208790 * zoomfactor, 217.817210 * zoomfactor, 171.482850 * zoomfactor);
    patternContext.bezierCurveTo(212.787920 * zoomfactor, 172.262980 * zoomfactor, 207.212940 * zoomfactor, 173.196260 * zoomfactor, 201.734610 * zoomfactor, 174.329190 * zoomfactor);
    patternContext.bezierCurveTo(200.115640 * zoomfactor, 174.663960 * zoomfactor, 199.582040 * zoomfactor, 172.752100 * zoomfactor, 199.253480 * zoomfactor, 170.959900 * zoomfactor);
    patternContext.bezierCurveTo(197.225290 * zoomfactor, 159.896620 * zoomfactor, 195.023270 * zoomfactor, 147.552140 * zoomfactor, 193.180680 * zoomfactor, 136.951110 * zoomfactor);
    patternContext.bezierCurveTo(192.822490 * zoomfactor, 134.892830 * zoomfactor, 192.615220 * zoomfactor, 132.547940 * zoomfactor, 194.444730 * zoomfactor, 132.226540 * zoomfactor);
    patternContext.fill();

    // #path10302-0-8
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 0, 0)';
    patternContext.lineWidth = 0.228866 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(147.154210 * zoomfactor, 144.964990 * zoomfactor);
    patternContext.bezierCurveTo(152.465800 * zoomfactor, 144.107060 * zoomfactor, 157.935790 * zoomfactor, 143.279180 * zoomfactor, 162.695780 * zoomfactor, 142.415860 * zoomfactor);
    patternContext.bezierCurveTo(164.624170 * zoomfactor, 142.066120 * zoomfactor, 165.047090 * zoomfactor, 143.841080 * zoomfactor, 165.395910 * zoomfactor, 145.773230 * zoomfactor);
    patternContext.bezierCurveTo(167.281890 * zoomfactor, 156.219540 * zoomfactor, 169.226690 * zoomfactor, 168.345780 * zoomfactor, 171.150220 * zoomfactor, 180.528660 * zoomfactor);
    patternContext.bezierCurveTo(171.425870 * zoomfactor, 182.274750 * zoomfactor, 171.800470 * zoomfactor, 184.260790 * zoomfactor, 170.030360 * zoomfactor, 184.512580 * zoomfactor);
    patternContext.bezierCurveTo(164.991640 * zoomfactor, 185.229310 * zoomfactor, 159.405350 * zoomfactor, 186.092290 * zoomfactor, 153.913180 * zoomfactor, 187.156130 * zoomfactor);
    patternContext.bezierCurveTo(152.290120 * zoomfactor, 187.470480 * zoomfactor, 151.780650 * zoomfactor, 185.552040 * zoomfactor, 151.474690 * zoomfactor, 183.755850 * zoomfactor);
    patternContext.bezierCurveTo(149.586010 * zoomfactor, 172.667900 * zoomfactor, 147.539650 * zoomfactor, 160.296670 * zoomfactor, 145.830740 * zoomfactor, 149.673270 * zoomfactor);
    patternContext.bezierCurveTo(145.498500 * zoomfactor, 147.610640 * zoomfactor, 145.320780 * zoomfactor, 145.263320 * zoomfactor, 147.154200 * zoomfactor, 144.964990 * zoomfactor);
    patternContext.fill();

    // #path10302-0-8-7
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(77, 77, 77)';
    patternContext.lineWidth = 0.202701 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(174.246270 * zoomfactor, 210.525100 * zoomfactor);
    patternContext.bezierCurveTo(173.676150 * zoomfactor, 206.343250 * zoomfactor, 173.144400 * zoomfactor, 202.036100 * zoomfactor, 172.539480 * zoomfactor, 198.289520 * zoomfactor);
    patternContext.bezierCurveTo(172.294440 * zoomfactor, 196.771690 * zoomfactor, 174.082910 * zoomfactor, 196.419210 * zoomfactor, 176.023790 * zoomfactor, 196.123530 * zoomfactor);
    patternContext.bezierCurveTo(186.517380 * zoomfactor, 194.524870 * zoomfactor, 198.685460 * zoomfactor, 192.862010 * zoomfactor, 210.908750 * zoomfactor, 191.215290 * zoomfactor);
    patternContext.bezierCurveTo(212.660600 * zoomfactor, 190.979000 * zoomfactor, 214.656520 * zoomfactor, 190.662720 * zoomfactor, 214.812570 * zoomfactor, 192.056710 * zoomfactor);
    patternContext.bezierCurveTo(215.256750 * zoomfactor, 196.024760 * zoomfactor, 215.817230 * zoomfactor, 200.423300 * zoomfactor, 216.582570 * zoomfactor, 204.745450 * zoomfactor);
    patternContext.bezierCurveTo(216.808710 * zoomfactor, 206.022750 * zoomfactor, 214.872880 * zoomfactor, 206.445040 * zoomfactor, 213.069530 * zoomfactor, 206.705480 * zoomfactor);
    patternContext.bezierCurveTo(201.937440 * zoomfactor, 208.313050 * zoomfactor, 189.520190 * zoomfactor, 210.058610 * zoomfactor, 178.859890 * zoomfactor, 211.519510 * zoomfactor);
    patternContext.bezierCurveTo(176.790020 * zoomfactor, 211.803190 * zoomfactor, 174.445250 * zoomfactor, 211.968560 * zoomfactor, 174.246270 * zoomfactor, 210.525120 * zoomfactor);
    patternContext.fill();

    // #path10302-0-8-7-7
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(179, 179, 179)';
    patternContext.lineWidth = 0.250360 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(140.727140 * zoomfactor, 106.148180 * zoomfactor);
    patternContext.bezierCurveTo(140.684640 * zoomfactor, 101.927860 * zoomfactor, 140.724140 * zoomfactor, 97.587268 * zoomfactor, 140.544240 * zoomfactor, 93.795757 * zoomfactor);
    patternContext.bezierCurveTo(140.471140 * zoomfactor, 92.259721 * zoomfactor, 143.245760 * zoomfactor, 92.108538 * zoomfactor, 146.239780 * zoomfactor, 92.030788 * zoomfactor);
    patternContext.bezierCurveTo(162.427290 * zoomfactor, 91.610388 * zoomfactor, 181.160450 * zoomfactor, 91.312668 * zoomfactor, 199.973970 * zoomfactor, 91.037147 * zoomfactor);
    patternContext.bezierCurveTo(202.670390 * zoomfactor, 90.997377 * zoomfactor, 205.751720 * zoomfactor, 90.905276 * zoomfactor, 205.714460 * zoomfactor, 92.308300 * zoomfactor);
    patternContext.bezierCurveTo(205.608380 * zoomfactor, 96.302064 * zoomfactor, 206.205620 * zoomfactor, 98.442186 * zoomfactor, 204.243550 * zoomfactor, 100.624810 * zoomfactor);
    patternContext.bezierCurveTo(203.411110 * zoomfactor, 101.550810 * zoomfactor, 198.789430 * zoomfactor, 105.278760 * zoomfactor, 196.010360 * zoomfactor, 105.336790 * zoomfactor);
    patternContext.bezierCurveTo(178.855220 * zoomfactor, 105.694940 * zoomfactor, 163.924070 * zoomfactor, 107.385570 * zoomfactor, 147.511380 * zoomfactor, 107.650460 * zoomfactor);
    patternContext.bezierCurveTo(144.324560 * zoomfactor, 107.701960 * zoomfactor, 140.745130 * zoomfactor, 107.605160 * zoomfactor, 140.727140 * zoomfactor, 106.148200 * zoomfactor);
    patternContext.fill();

    // #path10302-6
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(204, 204, 204)';
    patternContext.lineWidth = 0.298524 * zoomfactor;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(76.634156 * zoomfactor, 247.141070 * zoomfactor);
    patternContext.bezierCurveTo(88.225812 * zoomfactor, 247.151370 * zoomfactor, 100.149000 * zoomfactor, 247.278180 * zoomfactor, 110.564590 * zoomfactor, 247.141070 * zoomfactor);
    patternContext.bezierCurveTo(112.539040 * zoomfactor, 247.115070 * zoomfactor, 115.066500 * zoomfactor, 248.552280 * zoomfactor, 115.134350 * zoomfactor, 250.102580 * zoomfactor);
    patternContext.bezierCurveTo(115.501210 * zoomfactor, 258.484400 * zoomfactor, 115.407360 * zoomfactor, 268.182890 * zoomfactor, 115.248540 * zoomfactor, 277.922810 * zoomfactor);
    patternContext.bezierCurveTo(115.225740 * zoomfactor, 279.318760 * zoomfactor, 113.255200 * zoomfactor, 280.850990 * zoomfactor, 111.478490 * zoomfactor, 280.884320 * zoomfactor);
    patternContext.bezierCurveTo(100.528030 * zoomfactor, 281.089730 * zoomfactor, 88.334846 * zoomfactor, 281.053940 * zoomfactor, 76.291371 * zoomfactor, 280.884320 * zoomfactor);
    patternContext.bezierCurveTo(74.459792 * zoomfactor, 280.858520 * zoomfactor, 72.316962 * zoomfactor, 279.361680 * zoomfactor, 72.292825 * zoomfactor, 277.922810 * zoomfactor);
    patternContext.bezierCurveTo(72.143870 * zoomfactor, 269.040620 * zoomfactor, 72.107258 * zoomfactor, 259.138230 * zoomfactor, 72.178636 * zoomfactor, 250.641040 * zoomfactor);
    patternContext.bezierCurveTo(72.192516 * zoomfactor, 248.991170 * zoomfactor, 74.533806 * zoomfactor, 247.139210 * zoomfactor, 76.634156 * zoomfactor, 247.141070 * zoomfactor);
    patternContext.fill();
    patternContext.restore();

    return context.createPattern(patternCanvas, 'repeat');
}