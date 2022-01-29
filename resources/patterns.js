var patterns = {};

// replace pattern to make svg's zoomable
// ([0-9]+\.[0-9]+)
// $1 * zoomfactor

var PatternHelper = {
    createAll: function() {
        patterns.stairsX = this.stairsX();
        patterns.stairsY = this.stairsY();
        patterns.cookie = this.cookie();
        patterns.player0 = this.player0();
        patterns.player1 = this.player1();
        patterns.player2 = this.player2();
        patterns.player3 = this.player3();
        patterns.player4 = this.player4();
        patterns.player5 = this.player5();
        patterns.player6 = this.player6();
        patterns.player7 = this.player7();
        patterns.heizungA = this.heizungA();
        patterns.heizungM = this.heizungM();
        patterns.heizungE = this.heizungE();
        patterns.tisch2 = this.tisch2();
        patterns.portal = this.portal();
        patterns.stop = this.stop();
    },
    stairsX: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize;

        patternContext.fillStyle = '#999';
        patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
        patternContext.fillStyle = '#888';
        patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height / 4);
        patternContext.fillRect(0, 2 * patternCanvas.height / 4, patternCanvas.width, patternCanvas.height / 4);

        return context.createPattern(patternCanvas, 'repeat');
    },
    stairsY: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize;

        patternContext.fillStyle = '#999';
        patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
        patternContext.fillStyle = '#888';
        patternContext.fillRect(0, 0, patternCanvas.width / 4, patternCanvas.height);
        patternContext.fillRect(2 * patternCanvas.width / 4, 0, patternCanvas.width / 4, patternCanvas.height);

        return context.createPattern(patternCanvas, 'repeat');
    },
    cookie: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize;


        // #path1150
        patternContext.beginPath();
        patternContext.globalAlpha = 1.0;
        patternContext.fillStyle = 'rgb(174, 124, 59)';
        patternContext.lineWidth = 0.068794 * zoomfactor;
        patternContext.arc(39.842613 * zoomfactor, 40.399857 * zoomfactor, 35.484756 * zoomfactor, 0.000000, 6.28318531, 1);
        patternContext.fill();

        // #path1150-8
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(117, 83, 40)';
        patternContext.lineWidth = 0.009266 * zoomfactor;
        patternContext.arc(30.212559 * zoomfactor, 25.022020 * zoomfactor, 4.779509 * zoomfactor, 0.000000, 6.28318531, 1);
        patternContext.fill();

        // #path1150-8-6
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(117, 83, 40)';
        patternContext.lineWidth = 0.007800 * zoomfactor;
        patternContext.arc(12.767544 * zoomfactor, 36.114227 * zoomfactor, 4.023223 * zoomfactor, 0.000000, 6.28318531, 1);
        patternContext.fill();

        // #path1150-8-6-91
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(117, 83, 40)';
        patternContext.lineWidth = 0.006920 * zoomfactor;
        patternContext.arc(67.724388 * zoomfactor, 49.424877 * zoomfactor, 3.569451 * zoomfactor, 0.000000, 6.28318531, 1);
        patternContext.fill();

        // #path1150-8-6-9
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(117, 83, 40)';
        patternContext.lineWidth = 0.005356 * zoomfactor;
        patternContext.arc(36.666210 * zoomfactor, 71.609291 * zoomfactor, 2.762745 * zoomfactor, 0.000000, 6.28318531, 1);
        patternContext.fill();

        // #path1150-8-5
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(117, 83, 40)';
        patternContext.lineWidth = 0.005747 * zoomfactor;
        patternContext.arc(48.918049 * zoomfactor, 38.383087 * zoomfactor, 2.964421 * zoomfactor, 0.000000, 6.28318531, 1);
        patternContext.fill();

        // #path1150-8-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(117, 83, 40)';
        patternContext.lineWidth = 0.006725 * zoomfactor;
        patternContext.arc(48.615543 * zoomfactor, 14.988617 * zoomfactor, 3.468613 * zoomfactor, 0.000000, 6.28318531, 1);
        patternContext.fill();

        // #path1150-8-62
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(117, 83, 40)';
        patternContext.lineWidth = 0.007995 * zoomfactor;
        patternContext.arc(57.136368 * zoomfactor, 30.366447 * zoomfactor, 4.124062 * zoomfactor, 0.000000, 6.28318531, 1);
        patternContext.fill();

        // #path1150-8-70
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(117, 83, 40)';
        patternContext.lineWidth = 0.010048 * zoomfactor;
        patternContext.arc(49.321411 * zoomfactor, 59.054932 * zoomfactor, 5.182863 * zoomfactor, 0.000000, 6.28318531, 1);
        patternContext.fill();

        // #path1150-8-3
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(117, 83, 40)';
        patternContext.lineWidth = 0.008191 * zoomfactor;
        patternContext.arc(26.985737 * zoomfactor, 55.576004 * zoomfactor, 4.224899 * zoomfactor, 0.000000, 6.28318531, 1);
        patternContext.fill();

        // #path1150-8-9
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(117, 83, 40)';
        patternContext.lineWidth = 0.006725 * zoomfactor;
        patternContext.arc(35.506565 * zoomfactor, 41.408230 * zoomfactor, 3.468613 * zoomfactor, 0.000000, 6.28318531, 1);
        patternContext.fill();

        return context.createPattern(patternCanvas, 'repeat');
    },
    player0: function() {
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
    },
    player1: function() {
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
    },
    player2: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize + playerOverlap;

        // #g81
        patternContext.save();
        patternContext.transform(-0.264583, 0.000000, 0.000000, 0.264583, 81.841700 * zoomfactor, -1.671710 * zoomfactor);

        // #path7615
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.381718 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(214.789510 * zoomfactor, 77.315107 * zoomfactor);
        patternContext.lineTo(237.089270 * zoomfactor, 126.453890 * zoomfactor);
        patternContext.bezierCurveTo(238.056360 * zoomfactor, 148.404890 * zoomfactor, 238.030480 * zoomfactor, 170.179050 * zoomfactor, 226.615140 * zoomfactor, 189.924850 * zoomfactor);
        patternContext.bezierCurveTo(218.475020 * zoomfactor, 205.069610 * zoomfactor, 208.582050 * zoomfactor, 219.370110 * zoomfactor, 184.380750 * zoomfactor, 226.778930 * zoomfactor);
        patternContext.lineTo(121.971550 * zoomfactor, 226.322510 * zoomfactor);
        patternContext.bezierCurveTo(113.091510 * zoomfactor, 223.546540 * zoomfactor, 105.111480 * zoomfactor, 216.189150 * zoomfactor, 98.790469 * zoomfactor, 209.855700 * zoomfactor);
        patternContext.bezierCurveTo(93.466169 * zoomfactor, 204.520930 * zoomfactor, 88.288319 * zoomfactor, 198.665020 * zoomfactor, 85.045449 * zoomfactor, 190.436710 * zoomfactor);
        patternContext.bezierCurveTo(76.542869 * zoomfactor, 171.068070 * zoomfactor, 70.390429 * zoomfactor, 150.862350 * zoomfactor, 74.366409 * zoomfactor, 127.049080 * zoomfactor);
        patternContext.lineTo(96.666159 * zoomfactor, 77.910293 * zoomfactor);
        patternContext.fill();
        patternContext.stroke();

        // #path404-5
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.022109 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(218.156250 * zoomfactor, 89.103469 * zoomfactor);
        patternContext.lineTo(93.188199 * zoomfactor, 85.445874 * zoomfactor);
        patternContext.lineTo(84.084249 * zoomfactor, 104.015280 * zoomfactor);
        patternContext.lineTo(74.366409 * zoomfactor, 127.049080 * zoomfactor);
        patternContext.bezierCurveTo(127.460640 * zoomfactor, 98.050205 * zoomfactor, 79.267479 * zoomfactor, 152.297270 * zoomfactor, 229.528010 * zoomfactor, 182.547410 * zoomfactor);
        patternContext.bezierCurveTo(242.782870 * zoomfactor, 152.427800 * zoomfactor, 238.888440 * zoomfactor, 125.402550 * zoomfactor, 218.156250 * zoomfactor, 89.103469 * zoomfactor);
        patternContext.fill();
        patternContext.stroke();

        // #path2943
        patternContext.beginPath();
        patternContext.globalAlpha = 1.0;
        patternContext.fillStyle = 'rgb(128, 128, 128)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.357921 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(198.141960 * zoomfactor, 42.408596 * zoomfactor);
        patternContext.bezierCurveTo(213.035180 * zoomfactor, 49.009302 * zoomfactor, 224.458180 * zoomfactor, 54.107590 * zoomfactor, 231.026860 * zoomfactor, 72.755658 * zoomfactor);
        patternContext.bezierCurveTo(230.621010 * zoomfactor, 88.183421 * zoomfactor, 223.016870 * zoomfactor, 100.179350 * zoomfactor, 198.846590 * zoomfactor, 104.277280 * zoomfactor);
        patternContext.bezierCurveTo(160.111920 * zoomfactor, 101.568540 * zoomfactor, 151.255960 * zoomfactor, 100.125900 * zoomfactor, 127.460640 * zoomfactor, 98.050205 * zoomfactor);
        patternContext.bezierCurveTo(103.322610 * zoomfactor, 89.589943 * zoomfactor, 89.553499 * zoomfactor, 78.329713 * zoomfactor, 88.275499 * zoomfactor, 63.696461 * zoomfactor);
        patternContext.bezierCurveTo(90.326889 * zoomfactor, 48.021567 * zoomfactor, 101.976340 * zoomfactor, 38.840823 * zoomfactor, 118.159800 * zoomfactor, 34.859412 * zoomfactor);
        patternContext.bezierCurveTo(143.937690 * zoomfactor, 37.047452 * zoomfactor, 159.374660 * zoomfactor, 38.955187 * zoomfactor, 198.141960 * zoomfactor, 42.408596 * zoomfactor);
        patternContext.fill();
        patternContext.stroke();

        // #path1073
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.839780 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(194.466090 * zoomfactor, 264.735130 * zoomfactor);
        patternContext.lineTo(192.579780 * zoomfactor, 321.912920 * zoomfactor);
        patternContext.lineTo(171.336770 * zoomfactor, 378.893050 * zoomfactor);
        patternContext.lineTo(129.557670 * zoomfactor, 377.668240 * zoomfactor);
        patternContext.lineTo(110.427920 * zoomfactor, 305.376230 * zoomfactor);
        patternContext.lineTo(108.371700 * zoomfactor, 263.218400 * zoomfactor);
        patternContext.lineTo(121.971550 * zoomfactor, 226.322510 * zoomfactor);
        patternContext.bezierCurveTo(143.153190 * zoomfactor, 230.709730 * zoomfactor, 164.334820 * zoomfactor, 231.102380 * zoomfactor, 185.516460 * zoomfactor, 227.199510 * zoomfactor);
        patternContext.fill();
        patternContext.stroke();

        // #path10302
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.224324 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(141.157110 * zoomfactor, 257.905910 * zoomfactor);
        patternContext.bezierCurveTo(134.611650 * zoomfactor, 257.916210 * zoomfactor, 127.878990 * zoomfactor, 258.043020 * zoomfactor, 121.997630 * zoomfactor, 257.905910 * zoomfactor);
        patternContext.bezierCurveTo(120.882720 * zoomfactor, 257.879910 * zoomfactor, 119.455540 * zoomfactor, 259.317120 * zoomfactor, 119.417220 * zoomfactor, 260.867420 * zoomfactor);
        patternContext.bezierCurveTo(119.210070 * zoomfactor, 269.249240 * zoomfactor, 119.263060 * zoomfactor, 278.947730 * zoomfactor, 119.352720 * zoomfactor, 288.687650 * zoomfactor);
        patternContext.bezierCurveTo(119.365620 * zoomfactor, 290.083600 * zoomfactor, 120.478300 * zoomfactor, 291.615830 * zoomfactor, 121.481560 * zoomfactor, 291.649160 * zoomfactor);
        patternContext.bezierCurveTo(127.664950 * zoomfactor, 291.854570 * zoomfactor, 134.550060 * zoomfactor, 291.818780 * zoomfactor, 141.350650 * zoomfactor, 291.649160 * zoomfactor);
        patternContext.bezierCurveTo(142.384880 * zoomfactor, 291.623360 * zoomfactor, 143.594870 * zoomfactor, 290.126520 * zoomfactor, 143.608500 * zoomfactor, 288.687650 * zoomfactor);
        patternContext.bezierCurveTo(143.692600 * zoomfactor, 279.805460 * zoomfactor, 143.713290 * zoomfactor, 269.903070 * zoomfactor, 143.673000 * zoomfactor, 261.405880 * zoomfactor);
        patternContext.bezierCurveTo(143.665000 * zoomfactor, 259.756010 * zoomfactor, 142.343110 * zoomfactor, 257.904050 * zoomfactor, 141.157110 * zoomfactor, 257.905910 * zoomfactor);
        patternContext.fill();

        // #path10302-0
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.173157 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(104.254200 * zoomfactor, 153.458980 * zoomfactor);
        patternContext.bezierCurveTo(100.339420 * zoomfactor, 153.469280 * zoomfactor, 96.314449 * zoomfactor, 153.523080 * zoomfactor, 92.795089 * zoomfactor, 153.458980 * zoomfactor);
        patternContext.bezierCurveTo(91.369309 * zoomfactor, 153.432980 * zoomfactor, 91.274679 * zoomfactor, 154.864870 * zoomfactor, 91.251769 * zoomfactor, 156.409320 * zoomfactor);
        patternContext.bezierCurveTo(91.127869 * zoomfactor, 164.759520 * zoomfactor, 91.159569 * zoomfactor, 174.421420 * zoomfactor, 91.213169 * zoomfactor, 184.124600 * zoomfactor);
        patternContext.bezierCurveTo(91.221169 * zoomfactor, 185.515280 * zoomfactor, 91.185769 * zoomfactor, 187.104860 * zoomfactor, 92.486409 * zoomfactor, 187.074930 * zoomfactor);
        patternContext.bezierCurveTo(96.188639 * zoomfactor, 186.989730 * zoomfactor, 100.301250 * zoomfactor, 186.948370 * zoomfactor, 104.369930 * zoomfactor, 187.074930 * zoomfactor);
        patternContext.bezierCurveTo(105.572320 * zoomfactor, 187.112330 * zoomfactor, 105.712190 * zoomfactor, 185.558040 * zoomfactor, 105.720340 * zoomfactor, 184.124600 * zoomfactor);
        patternContext.bezierCurveTo(105.770640 * zoomfactor, 175.275920 * zoomfactor, 105.783040 * zoomfactor, 165.410870 * zoomfactor, 105.758940 * zoomfactor, 156.945740 * zoomfactor);
        patternContext.bezierCurveTo(105.754940 * zoomfactor, 155.302100 * zoomfactor, 105.605750 * zoomfactor, 153.457120 * zoomfactor, 104.254210 * zoomfactor, 153.458980 * zoomfactor);
        patternContext.fill();

        // #path10302-0-8-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(77, 77, 77)';
        patternContext.lineWidth = 0.187205 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(113.691590 * zoomfactor, 211.171870 * zoomfactor);
        patternContext.bezierCurveTo(113.678490 * zoomfactor, 207.572000 * zoomfactor, 113.610090 * zoomfactor, 203.870820 * zoomfactor, 113.691590 * zoomfactor, 200.634560 * zoomfactor);
        patternContext.bezierCurveTo(113.724590 * zoomfactor, 199.323480 * zoomfactor, 111.904720 * zoomfactor, 199.219600 * zoomfactor, 109.941450 * zoomfactor, 199.215400 * zoomfactor);
        patternContext.lineTo(93.345009 * zoomfactor, 199.179900 * zoomfactor);
        patternContext.bezierCurveTo(93.173589 * zoomfactor, 199.179900 * zoomfactor, 103.703170 * zoomfactor, 210.849280 * zoomfactor, 108.599910 * zoomfactor, 213.759040 * zoomfactor);
        patternContext.bezierCurveTo(109.489030 * zoomfactor, 213.652420 * zoomfactor, 113.693940 * zoomfactor, 212.414680 * zoomfactor, 113.691590 * zoomfactor, 211.171860 * zoomfactor);
        patternContext.fill();

        // #path10302-0-8-7-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.lineWidth = 0.173216 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(94.845469 * zoomfactor, 62.294399 * zoomfactor);
        patternContext.lineTo(91.026189 * zoomfactor, 65.321869 * zoomfactor);
        patternContext.bezierCurveTo(92.179889 * zoomfactor, 75.914279 * zoomfactor, 104.854520 * zoomfactor, 84.790485 * zoomfactor, 108.208100 * zoomfactor, 86.250458 * zoomfactor);
        patternContext.lineTo(115.499460 * zoomfactor, 82.702352 * zoomfactor);
        patternContext.bezierCurveTo(111.742110 * zoomfactor, 81.295368 * zoomfactor, 96.026529 * zoomfactor, 72.265157 * zoomfactor, 94.845469 * zoomfactor, 62.294399 * zoomfactor);
        patternContext.fill();
        patternContext.restore();

        return context.createPattern(patternCanvas, 'repeat');
    },
    player3: function() {
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
    },
    player4: function() {
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
    },
    player5: function() {
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

        return context.createPattern(patternCanvas, 'repeat');
    },
    player6: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize + playerOverlap;

        // #g81
        patternContext.save();
        patternContext.transform(-0.264583, 0.000000, 0.000000, 0.264583, 81.841700 * zoomfactor, -1.671710 * zoomfactor);

        // #path7615
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.381718 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(95.732979 * zoomfactor, 77.315107 * zoomfactor);
        patternContext.lineTo(73.433218 * zoomfactor, 126.453890 * zoomfactor);
        patternContext.bezierCurveTo(72.466130 * zoomfactor, 148.404890 * zoomfactor, 72.492007 * zoomfactor, 170.179050 * zoomfactor, 83.907349 * zoomfactor, 189.924850 * zoomfactor);
        patternContext.bezierCurveTo(92.047472 * zoomfactor, 205.069610 * zoomfactor, 101.940440 * zoomfactor, 219.370110 * zoomfactor, 126.141740 * zoomfactor, 226.778930 * zoomfactor);
        patternContext.lineTo(188.550940 * zoomfactor, 226.322510 * zoomfactor);
        patternContext.bezierCurveTo(197.430980 * zoomfactor, 223.546540 * zoomfactor, 205.411010 * zoomfactor, 216.189150 * zoomfactor, 211.732020 * zoomfactor, 209.855700 * zoomfactor);
        patternContext.bezierCurveTo(217.056320 * zoomfactor, 204.520930 * zoomfactor, 222.234170 * zoomfactor, 198.665020 * zoomfactor, 225.477040 * zoomfactor, 190.436710 * zoomfactor);
        patternContext.bezierCurveTo(233.979620 * zoomfactor, 171.068070 * zoomfactor, 240.132060 * zoomfactor, 150.862350 * zoomfactor, 236.156080 * zoomfactor, 127.049080 * zoomfactor);
        patternContext.lineTo(213.856330 * zoomfactor, 77.910293 * zoomfactor);
        patternContext.fill();
        patternContext.stroke();

        // #path404-5
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.022109 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(92.366240 * zoomfactor, 89.103469 * zoomfactor);
        patternContext.lineTo(217.334290 * zoomfactor, 85.445874 * zoomfactor);
        patternContext.lineTo(226.438240 * zoomfactor, 104.015280 * zoomfactor);
        patternContext.lineTo(236.156080 * zoomfactor, 127.049080 * zoomfactor);
        patternContext.bezierCurveTo(183.061850 * zoomfactor, 98.050205 * zoomfactor, 231.255010 * zoomfactor, 152.297270 * zoomfactor, 80.994482 * zoomfactor, 182.547410 * zoomfactor);
        patternContext.bezierCurveTo(67.739616 * zoomfactor, 152.427800 * zoomfactor, 71.634047 * zoomfactor, 125.402550 * zoomfactor, 92.366240 * zoomfactor, 89.103469 * zoomfactor);
        patternContext.fill();
        patternContext.stroke();

        // #path2943
        patternContext.beginPath();
        patternContext.globalAlpha = 1.0;
        patternContext.fillStyle = 'rgb(128, 128, 128)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.357921 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(112.380530 * zoomfactor, 42.408596 * zoomfactor);
        patternContext.bezierCurveTo(97.487307 * zoomfactor, 49.009302 * zoomfactor, 86.064307 * zoomfactor, 54.107590 * zoomfactor, 79.495632 * zoomfactor, 72.755658 * zoomfactor);
        patternContext.bezierCurveTo(79.901480 * zoomfactor, 88.183421 * zoomfactor, 87.505615 * zoomfactor, 100.179350 * zoomfactor, 111.675900 * zoomfactor, 104.277280 * zoomfactor);
        patternContext.bezierCurveTo(150.410570 * zoomfactor, 101.568540 * zoomfactor, 159.266530 * zoomfactor, 100.125900 * zoomfactor, 183.061850 * zoomfactor, 98.050205 * zoomfactor);
        patternContext.bezierCurveTo(207.199880 * zoomfactor, 89.589943 * zoomfactor, 220.968990 * zoomfactor, 78.329713 * zoomfactor, 222.246990 * zoomfactor, 63.696461 * zoomfactor);
        patternContext.bezierCurveTo(220.195600 * zoomfactor, 48.021567 * zoomfactor, 208.546150 * zoomfactor, 38.840823 * zoomfactor, 192.362690 * zoomfactor, 34.859412 * zoomfactor);
        patternContext.bezierCurveTo(166.584800 * zoomfactor, 37.047452 * zoomfactor, 151.147830 * zoomfactor, 38.955187 * zoomfactor, 112.380530 * zoomfactor, 42.408596 * zoomfactor);
        patternContext.fill();
        patternContext.stroke();

        // #path1073
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.839780 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(116.056400 * zoomfactor, 264.735130 * zoomfactor);
        patternContext.lineTo(117.942710 * zoomfactor, 321.912920 * zoomfactor);
        patternContext.lineTo(139.185720 * zoomfactor, 378.893050 * zoomfactor);
        patternContext.lineTo(180.964820 * zoomfactor, 377.668240 * zoomfactor);
        patternContext.lineTo(200.094570 * zoomfactor, 305.376230 * zoomfactor);
        patternContext.lineTo(202.150790 * zoomfactor, 263.218400 * zoomfactor);
        patternContext.lineTo(188.550940 * zoomfactor, 226.322510 * zoomfactor);
        patternContext.bezierCurveTo(167.369300 * zoomfactor, 230.709730 * zoomfactor, 146.187670 * zoomfactor, 231.102380 * zoomfactor, 125.006030 * zoomfactor, 227.199510 * zoomfactor);
        patternContext.fill();
        patternContext.stroke();

        // #path10302
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.224324 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(169.365380 * zoomfactor, 257.905910 * zoomfactor);
        patternContext.bezierCurveTo(175.910840 * zoomfactor, 257.916210 * zoomfactor, 182.643500 * zoomfactor, 258.043020 * zoomfactor, 188.524860 * zoomfactor, 257.905910 * zoomfactor);
        patternContext.bezierCurveTo(189.639770 * zoomfactor, 257.879910 * zoomfactor, 191.066950 * zoomfactor, 259.317120 * zoomfactor, 191.105270 * zoomfactor, 260.867420 * zoomfactor);
        patternContext.bezierCurveTo(191.312420 * zoomfactor, 269.249240 * zoomfactor, 191.259430 * zoomfactor, 278.947730 * zoomfactor, 191.169770 * zoomfactor, 288.687650 * zoomfactor);
        patternContext.bezierCurveTo(191.156870 * zoomfactor, 290.083600 * zoomfactor, 190.044190 * zoomfactor, 291.615830 * zoomfactor, 189.040930 * zoomfactor, 291.649160 * zoomfactor);
        patternContext.bezierCurveTo(182.857540 * zoomfactor, 291.854570 * zoomfactor, 175.972430 * zoomfactor, 291.818780 * zoomfactor, 169.171840 * zoomfactor, 291.649160 * zoomfactor);
        patternContext.bezierCurveTo(168.137610 * zoomfactor, 291.623360 * zoomfactor, 166.927620 * zoomfactor, 290.126520 * zoomfactor, 166.913990 * zoomfactor, 288.687650 * zoomfactor);
        patternContext.bezierCurveTo(166.829890 * zoomfactor, 279.805460 * zoomfactor, 166.809200 * zoomfactor, 269.903070 * zoomfactor, 166.849490 * zoomfactor, 261.405880 * zoomfactor);
        patternContext.bezierCurveTo(166.857490 * zoomfactor, 259.756010 * zoomfactor, 168.179380 * zoomfactor, 257.904050 * zoomfactor, 169.365380 * zoomfactor, 257.905910 * zoomfactor);
        patternContext.fill();

        // #path10302-0
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.173157 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(206.268290 * zoomfactor, 153.458980 * zoomfactor);
        patternContext.bezierCurveTo(210.183070 * zoomfactor, 153.469280 * zoomfactor, 214.208040 * zoomfactor, 153.523080 * zoomfactor, 217.727400 * zoomfactor, 153.458980 * zoomfactor);
        patternContext.bezierCurveTo(219.153180 * zoomfactor, 153.432980 * zoomfactor, 219.247810 * zoomfactor, 154.864870 * zoomfactor, 219.270720 * zoomfactor, 156.409320 * zoomfactor);
        patternContext.bezierCurveTo(219.394620 * zoomfactor, 164.759520 * zoomfactor, 219.362920 * zoomfactor, 174.421420 * zoomfactor, 219.309320 * zoomfactor, 184.124600 * zoomfactor);
        patternContext.bezierCurveTo(219.301320 * zoomfactor, 185.515280 * zoomfactor, 219.336720 * zoomfactor, 187.104860 * zoomfactor, 218.036080 * zoomfactor, 187.074930 * zoomfactor);
        patternContext.bezierCurveTo(214.333850 * zoomfactor, 186.989730 * zoomfactor, 210.221240 * zoomfactor, 186.948370 * zoomfactor, 206.152560 * zoomfactor, 187.074930 * zoomfactor);
        patternContext.bezierCurveTo(204.950170 * zoomfactor, 187.112330 * zoomfactor, 204.810300 * zoomfactor, 185.558040 * zoomfactor, 204.802150 * zoomfactor, 184.124600 * zoomfactor);
        patternContext.bezierCurveTo(204.751850 * zoomfactor, 175.275920 * zoomfactor, 204.739450 * zoomfactor, 165.410870 * zoomfactor, 204.763550 * zoomfactor, 156.945740 * zoomfactor);
        patternContext.bezierCurveTo(204.767550 * zoomfactor, 155.302100 * zoomfactor, 204.916740 * zoomfactor, 153.457120 * zoomfactor, 206.268280 * zoomfactor, 153.458980 * zoomfactor);
        patternContext.fill();

        // #path10302-0-8-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(77, 77, 77)';
        patternContext.lineWidth = 0.187205 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(196.830900 * zoomfactor, 211.171870 * zoomfactor);
        patternContext.bezierCurveTo(196.844000 * zoomfactor, 207.572000 * zoomfactor, 196.912400 * zoomfactor, 203.870820 * zoomfactor, 196.830900 * zoomfactor, 200.634560 * zoomfactor);
        patternContext.bezierCurveTo(196.797900 * zoomfactor, 199.323480 * zoomfactor, 198.617770 * zoomfactor, 199.219600 * zoomfactor, 200.581040 * zoomfactor, 199.215400 * zoomfactor);
        patternContext.lineTo(217.177480 * zoomfactor, 199.179900 * zoomfactor);
        patternContext.bezierCurveTo(217.348900 * zoomfactor, 199.179900 * zoomfactor, 206.819320 * zoomfactor, 210.849280 * zoomfactor, 201.922580 * zoomfactor, 213.759040 * zoomfactor);
        patternContext.bezierCurveTo(201.033460 * zoomfactor, 213.652420 * zoomfactor, 196.828550 * zoomfactor, 212.414680 * zoomfactor, 196.830900 * zoomfactor, 211.171860 * zoomfactor);
        patternContext.fill();

        // #path10302-0-8-7-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.lineWidth = 0.173216 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(215.677020 * zoomfactor, 62.294399 * zoomfactor);
        patternContext.lineTo(219.496300 * zoomfactor, 65.321869 * zoomfactor);
        patternContext.bezierCurveTo(218.342600 * zoomfactor, 75.914279 * zoomfactor, 205.667970 * zoomfactor, 84.790485 * zoomfactor, 202.314390 * zoomfactor, 86.250458 * zoomfactor);
        patternContext.lineTo(195.023030 * zoomfactor, 82.702352 * zoomfactor);
        patternContext.bezierCurveTo(198.780380 * zoomfactor, 81.295368 * zoomfactor, 214.495960 * zoomfactor, 72.265157 * zoomfactor, 215.677020 * zoomfactor, 62.294399 * zoomfactor);
        patternContext.fill();
        patternContext.restore();

        return context.createPattern(patternCanvas, 'repeat');
    },
    player7: function() {
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

        return context.createPattern(patternCanvas, 'repeat');
    },
    heizungA: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize;

        // #rect611
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.070004 * zoomfactor;
        patternContext.moveTo(52.140999 * zoomfactor, 28.113303 * zoomfactor);
        patternContext.lineTo(52.140999 * zoomfactor, 28.113303 * zoomfactor);
        patternContext.quadraticCurveTo(52.140999 * zoomfactor, 28.203617 * zoomfactor, 52.140999 * zoomfactor, 28.203617 * zoomfactor);
        patternContext.lineTo(52.381837 * zoomfactor, 28.203617 * zoomfactor);
        patternContext.quadraticCurveTo(52.381837 * zoomfactor, 28.203617 * zoomfactor, 52.381837 * zoomfactor, 28.113303 * zoomfactor);
        patternContext.lineTo(52.381837 * zoomfactor, 28.113303 * zoomfactor);
        patternContext.quadraticCurveTo(52.381837 * zoomfactor, 28.022989 * zoomfactor, 52.381837 * zoomfactor, 28.022989 * zoomfactor);
        patternContext.lineTo(52.140999 * zoomfactor, 28.022989 * zoomfactor);
        patternContext.quadraticCurveTo(52.140999 * zoomfactor, 28.022989 * zoomfactor, 52.140999 * zoomfactor, 28.113303 * zoomfactor);
        patternContext.fill();

        // #rect13-2
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212 * zoomfactor;
        patternContext.moveTo(9.031005 * zoomfactor, 25.071089 * zoomfactor);
        patternContext.lineTo(9.031005 * zoomfactor, 37.966369 * zoomfactor);
        patternContext.quadraticCurveTo(9.031005 * zoomfactor, 37.966369 * zoomfactor, 13.031005 * zoomfactor, 37.966369 * zoomfactor);
        patternContext.lineTo(65.031005 * zoomfactor, 37.966369 * zoomfactor);
        patternContext.quadraticCurveTo(69.031005 * zoomfactor, 37.966369 * zoomfactor, 69.031005 * zoomfactor, 37.966369 * zoomfactor);
        patternContext.lineTo(69.031005 * zoomfactor, 25.071089 * zoomfactor);
        patternContext.quadraticCurveTo(69.031005 * zoomfactor, 25.071089 * zoomfactor, 65.031005 * zoomfactor, 25.071089 * zoomfactor);
        patternContext.lineTo(13.031005 * zoomfactor, 25.071089 * zoomfactor);
        patternContext.quadraticCurveTo(9.031005 * zoomfactor, 25.071089 * zoomfactor, 9.031005 * zoomfactor, 25.071089 * zoomfactor);
        patternContext.fill();

        // #rect13-2-4
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212 * zoomfactor;
        patternContext.moveTo(9.031005 * zoomfactor, 45.179443 * zoomfactor);
        patternContext.lineTo(9.031005 * zoomfactor, 58.074723 * zoomfactor);
        patternContext.quadraticCurveTo(9.031005 * zoomfactor, 58.074723 * zoomfactor, 13.031005 * zoomfactor, 58.074723 * zoomfactor);
        patternContext.lineTo(65.031005 * zoomfactor, 58.074723 * zoomfactor);
        patternContext.quadraticCurveTo(69.031005 * zoomfactor, 58.074723 * zoomfactor, 69.031005 * zoomfactor, 58.074723 * zoomfactor);
        patternContext.lineTo(69.031005 * zoomfactor, 45.179443 * zoomfactor);
        patternContext.quadraticCurveTo(69.031005 * zoomfactor, 45.179443 * zoomfactor, 65.031005 * zoomfactor, 45.179443 * zoomfactor);
        patternContext.lineTo(13.031005 * zoomfactor, 45.179443 * zoomfactor);
        patternContext.quadraticCurveTo(9.031005 * zoomfactor, 45.179443 * zoomfactor, 9.031005 * zoomfactor, 45.179443 * zoomfactor);
        patternContext.fill();

        // #rect13-2-4-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212 * zoomfactor;
        patternContext.moveTo(9.031005 * zoomfactor, 64.424721 * zoomfactor);
        patternContext.lineTo(9.031005 * zoomfactor, 77.320001 * zoomfactor);
        patternContext.quadraticCurveTo(9.031005 * zoomfactor, 77.320001 * zoomfactor, 13.031005 * zoomfactor, 77.320001 * zoomfactor);
        patternContext.lineTo(65.031005 * zoomfactor, 77.320001 * zoomfactor);
        patternContext.quadraticCurveTo(69.031005 * zoomfactor, 77.320001 * zoomfactor, 69.031005 * zoomfactor, 77.320001 * zoomfactor);
        patternContext.lineTo(69.031005 * zoomfactor, 64.424721 * zoomfactor);
        patternContext.quadraticCurveTo(69.031005 * zoomfactor, 64.424721 * zoomfactor, 65.031005 * zoomfactor, 64.424721 * zoomfactor);
        patternContext.lineTo(13.031005 * zoomfactor, 64.424721 * zoomfactor);
        patternContext.quadraticCurveTo(9.031005 * zoomfactor, 64.424721 * zoomfactor, 9.031005 * zoomfactor, 64.424721 * zoomfactor);
        patternContext.fill();

        // #rect002
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.058956 * zoomfactor;
        patternContext.rect(32.633125 * zoomfactor, 27.134724 * zoomfactor, 12.523574 * zoomfactor, 52.867401 * zoomfactor);
        patternContext.fill();

        // #rect310
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(128, 128, 128)';
        patternContext.lineWidth = 0.029679 * zoomfactor;
        patternContext.rect(35.991089 * zoomfactor, 21.421928 * zoomfactor, 6.260000 * zoomfactor, 3.665672 * zoomfactor);
        patternContext.fill();

        // #rect095
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(102, 102, 102)';
        patternContext.lineWidth = 0.070004 * zoomfactor;
        patternContext.moveTo(33.485291 * zoomfactor, 19.926117 * zoomfactor);
        patternContext.lineTo(33.485291 * zoomfactor, 21.464729 * zoomfactor);
        patternContext.quadraticCurveTo(33.485291 * zoomfactor, 21.464729 * zoomfactor, 33.585291 * zoomfactor, 21.464729 * zoomfactor);
        patternContext.lineTo(44.656889 * zoomfactor, 21.464729 * zoomfactor);
        patternContext.quadraticCurveTo(44.756889 * zoomfactor, 21.464729 * zoomfactor, 44.756889 * zoomfactor, 21.464729 * zoomfactor);
        patternContext.lineTo(44.756889 * zoomfactor, 19.926117 * zoomfactor);
        patternContext.quadraticCurveTo(44.756889 * zoomfactor, 19.926117 * zoomfactor, 44.656889 * zoomfactor, 19.926117 * zoomfactor);
        patternContext.lineTo(33.585291 * zoomfactor, 19.926117 * zoomfactor);
        patternContext.quadraticCurveTo(33.485291 * zoomfactor, 19.926117 * zoomfactor, 33.485291 * zoomfactor, 19.926117 * zoomfactor);
        patternContext.fill();

        // #path828
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.lineWidth = 0.070004 * zoomfactor;
        patternContext.moveTo(36.232546 * zoomfactor, 7.131331 * zoomfactor);
        patternContext.bezierCurveTo(36.546739 * zoomfactor, 6.866747 * zoomfactor, 39.438957 * zoomfactor, 6.680007 * zoomfactor, 42.306434 * zoomfactor, 7.139101 * zoomfactor);
        patternContext.bezierCurveTo(42.697796 * zoomfactor, 6.965998 * zoomfactor, 44.662285 * zoomfactor, 19.926116 * zoomfactor, 44.662285 * zoomfactor, 19.926116 * zoomfactor);
        patternContext.bezierCurveTo(42.214509 * zoomfactor, 20.244816 * zoomfactor, 39.732509 * zoomfactor, 20.554761 * zoomfactor, 33.579893 * zoomfactor, 19.925711 * zoomfactor);
        patternContext.bezierCurveTo(33.579893 * zoomfactor, 19.925711 * zoomfactor, 35.984499 * zoomfactor, 7.214009 * zoomfactor, 36.232546 * zoomfactor, 7.131327 * zoomfactor);
        patternContext.fill();

        return context.createPattern(patternCanvas, 'repeat');
    },
    heizungM: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize;

        // #rect611
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.070004 * zoomfactor;
        patternContext.moveTo(52.141422 * zoomfactor, 27.907100 * zoomfactor);
        patternContext.lineTo(52.141422 * zoomfactor, 27.907100 * zoomfactor);
        patternContext.quadraticCurveTo(52.141422 * zoomfactor, 27.997414 * zoomfactor, 52.141422 * zoomfactor, 27.997414 * zoomfactor);
        patternContext.lineTo(52.382260 * zoomfactor, 27.997414 * zoomfactor);
        patternContext.quadraticCurveTo(52.382260 * zoomfactor, 27.997414 * zoomfactor, 52.382260 * zoomfactor, 27.907100 * zoomfactor);
        patternContext.lineTo(52.382260 * zoomfactor, 27.907100 * zoomfactor);
        patternContext.quadraticCurveTo(52.382260 * zoomfactor, 27.816786 * zoomfactor, 52.382260 * zoomfactor, 27.816786 * zoomfactor);
        patternContext.lineTo(52.141422 * zoomfactor, 27.816786 * zoomfactor);
        patternContext.quadraticCurveTo(52.141422 * zoomfactor, 27.816786 * zoomfactor, 52.141422 * zoomfactor, 27.907100 * zoomfactor);
        patternContext.fill();

        // #rect613
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212 * zoomfactor;
        patternContext.moveTo(9.031423 * zoomfactor, 4.756549 * zoomfactor);
        patternContext.lineTo(9.031423 * zoomfactor, 17.651829 * zoomfactor);
        patternContext.quadraticCurveTo(9.031423 * zoomfactor, 17.651829 * zoomfactor, 13.031423 * zoomfactor, 17.651829 * zoomfactor);
        patternContext.lineTo(65.031423 * zoomfactor, 17.651829 * zoomfactor);
        patternContext.quadraticCurveTo(69.031423 * zoomfactor, 17.651829 * zoomfactor, 69.031423 * zoomfactor, 17.651829 * zoomfactor);
        patternContext.lineTo(69.031423 * zoomfactor, 4.756549 * zoomfactor);
        patternContext.quadraticCurveTo(69.031423 * zoomfactor, 4.756549 * zoomfactor, 65.031423 * zoomfactor, 4.756549 * zoomfactor);
        patternContext.lineTo(13.031423 * zoomfactor, 4.756549 * zoomfactor);
        patternContext.quadraticCurveTo(9.031423 * zoomfactor, 4.756549 * zoomfactor, 9.031423 * zoomfactor, 4.756549 * zoomfactor);
        patternContext.fill();

        // #rect613-2
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212 * zoomfactor;
        patternContext.moveTo(9.031427 * zoomfactor, 24.864885 * zoomfactor);
        patternContext.lineTo(9.031427 * zoomfactor, 37.760165 * zoomfactor);
        patternContext.quadraticCurveTo(9.031427 * zoomfactor, 37.760165 * zoomfactor, 13.031427 * zoomfactor, 37.760165 * zoomfactor);
        patternContext.lineTo(65.031427 * zoomfactor, 37.760165 * zoomfactor);
        patternContext.quadraticCurveTo(69.031427 * zoomfactor, 37.760165 * zoomfactor, 69.031427 * zoomfactor, 37.760165 * zoomfactor);
        patternContext.lineTo(69.031427 * zoomfactor, 24.864885 * zoomfactor);
        patternContext.quadraticCurveTo(69.031427 * zoomfactor, 24.864885 * zoomfactor, 65.031427 * zoomfactor, 24.864885 * zoomfactor);
        patternContext.lineTo(13.031427 * zoomfactor, 24.864885 * zoomfactor);
        patternContext.quadraticCurveTo(9.031427 * zoomfactor, 24.864885 * zoomfactor, 9.031427 * zoomfactor, 24.864885 * zoomfactor);
        patternContext.fill();

        // #rect613-2-4
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212 * zoomfactor;
        patternContext.moveTo(9.031427 * zoomfactor, 44.973240 * zoomfactor);
        patternContext.lineTo(9.031427 * zoomfactor, 57.868520 * zoomfactor);
        patternContext.quadraticCurveTo(9.031427 * zoomfactor, 57.868520 * zoomfactor, 13.031427 * zoomfactor, 57.868520 * zoomfactor);
        patternContext.lineTo(65.031427 * zoomfactor, 57.868520 * zoomfactor);
        patternContext.quadraticCurveTo(69.031427 * zoomfactor, 57.868520 * zoomfactor, 69.031427 * zoomfactor, 57.868520 * zoomfactor);
        patternContext.lineTo(69.031427 * zoomfactor, 44.973240 * zoomfactor);
        patternContext.quadraticCurveTo(69.031427 * zoomfactor, 44.973240 * zoomfactor, 65.031427 * zoomfactor, 44.973240 * zoomfactor);
        patternContext.lineTo(13.031427 * zoomfactor, 44.973240 * zoomfactor);
        patternContext.quadraticCurveTo(9.031427 * zoomfactor, 44.973240 * zoomfactor, 9.031427 * zoomfactor, 44.973240 * zoomfactor);
        patternContext.fill();

        // #rect613-2-4-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212 * zoomfactor;
        patternContext.moveTo(9.031427 * zoomfactor, 64.218521 * zoomfactor);
        patternContext.lineTo(9.031427 * zoomfactor, 77.113801 * zoomfactor);
        patternContext.quadraticCurveTo(9.031427 * zoomfactor, 77.113801 * zoomfactor, 13.031427 * zoomfactor, 77.113801 * zoomfactor);
        patternContext.lineTo(65.031427 * zoomfactor, 77.113801 * zoomfactor);
        patternContext.quadraticCurveTo(69.031427 * zoomfactor, 77.113801 * zoomfactor, 69.031427 * zoomfactor, 77.113801 * zoomfactor);
        patternContext.lineTo(69.031427 * zoomfactor, 64.218521 * zoomfactor);
        patternContext.quadraticCurveTo(69.031427 * zoomfactor, 64.218521 * zoomfactor, 65.031427 * zoomfactor, 64.218521 * zoomfactor);
        patternContext.lineTo(13.031427 * zoomfactor, 64.218521 * zoomfactor);
        patternContext.quadraticCurveTo(9.031427 * zoomfactor, 64.218521 * zoomfactor, 9.031427 * zoomfactor, 64.218521 * zoomfactor);
        patternContext.fill();

        // #rect1002
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.072500 * zoomfactor;
        patternContext.rect(32.633549 * zoomfactor, 0.010118 * zoomfactor, 12.523574 * zoomfactor, 79.948090 * zoomfactor);
        patternContext.fill();

        return context.createPattern(patternCanvas, 'repeat');
    },
    heizungE: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize;

        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.070004 * zoomfactor;
        patternContext.moveTo(52.140999 * zoomfactor, 27.943006 * zoomfactor);
        patternContext.lineTo(52.140999 * zoomfactor, 27.943006 * zoomfactor);
        patternContext.quadraticCurveTo(52.140999 * zoomfactor, 28.033320 * zoomfactor, 52.140999 * zoomfactor, 28.033320 * zoomfactor);
        patternContext.lineTo(52.381837 * zoomfactor, 28.033320 * zoomfactor);
        patternContext.quadraticCurveTo(52.381837 * zoomfactor, 28.033320 * zoomfactor, 52.381837 * zoomfactor, 27.943006 * zoomfactor);
        patternContext.lineTo(52.381837 * zoomfactor, 27.943006 * zoomfactor);
        patternContext.quadraticCurveTo(52.381837 * zoomfactor, 27.852692 * zoomfactor, 52.381837 * zoomfactor, 27.852692 * zoomfactor);
        patternContext.lineTo(52.140999 * zoomfactor, 27.852692 * zoomfactor);
        patternContext.quadraticCurveTo(52.140999 * zoomfactor, 27.852692 * zoomfactor, 52.140999 * zoomfactor, 27.943006 * zoomfactor);
        patternContext.fill();

        //     rernContext613
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212 * zoomfactor;
        patternContext.moveTo(9.031000 * zoomfactor, 4.792455 * zoomfactor);
        patternContext.lineTo(9.031000 * zoomfactor, 17.687735 * zoomfactor);
        patternContext.quadraticCurveTo(9.031000 * zoomfactor, 17.687735 * zoomfactor, 13.031000 * zoomfactor, 17.687735 * zoomfactor);
        patternContext.lineTo(65.031000 * zoomfactor, 17.687735 * zoomfactor);
        patternContext.quadraticCurveTo(69.031000 * zoomfactor, 17.687735 * zoomfactor, 69.031000 * zoomfactor, 17.687735 * zoomfactor);
        patternContext.lineTo(69.031000 * zoomfactor, 4.792455 * zoomfactor);
        patternContext.quadraticCurveTo(69.031000 * zoomfactor, 4.792455 * zoomfactor, 65.031000 * zoomfactor, 4.792455 * zoomfactor);
        patternContext.lineTo(13.031000 * zoomfactor, 4.792455 * zoomfactor);
        patternContext.quadraticCurveTo(9.031000 * zoomfactor, 4.792455 * zoomfactor, 9.031000 * zoomfactor, 4.792455 * zoomfactor);
        patternContext.fill();

        //     rernContext613-2
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212 * zoomfactor;
        patternContext.moveTo(9.031005 * zoomfactor, 24.900791 * zoomfactor);
        patternContext.lineTo(9.031005 * zoomfactor, 37.796071 * zoomfactor);
        patternContext.quadraticCurveTo(9.031005 * zoomfactor, 37.796071 * zoomfactor, 13.031005 * zoomfactor, 37.796071 * zoomfactor);
        patternContext.lineTo(65.031005 * zoomfactor, 37.796071 * zoomfactor);
        patternContext.quadraticCurveTo(69.031005 * zoomfactor, 37.796071 * zoomfactor, 69.031005 * zoomfactor, 37.796071 * zoomfactor);
        patternContext.lineTo(69.031005 * zoomfactor, 24.900791 * zoomfactor);
        patternContext.quadraticCurveTo(69.031005 * zoomfactor, 24.900791 * zoomfactor, 65.031005 * zoomfactor, 24.900791 * zoomfactor);
        patternContext.lineTo(13.031005 * zoomfactor, 24.900791 * zoomfactor);
        patternContext.quadraticCurveTo(9.031005 * zoomfactor, 24.900791 * zoomfactor, 9.031005 * zoomfactor, 24.900791 * zoomfactor);
        patternContext.fill();

        //     rernContext613-2-4
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212 * zoomfactor;
        patternContext.moveTo(9.031005 * zoomfactor, 45.009144 * zoomfactor);
        patternContext.lineTo(9.031005 * zoomfactor, 57.904424 * zoomfactor);
        patternContext.quadraticCurveTo(9.031005 * zoomfactor, 57.904424 * zoomfactor, 13.031005 * zoomfactor, 57.904424 * zoomfactor);
        patternContext.lineTo(65.031005 * zoomfactor, 57.904424 * zoomfactor);
        patternContext.quadraticCurveTo(69.031005 * zoomfactor, 57.904424 * zoomfactor, 69.031005 * zoomfactor, 57.904424 * zoomfactor);
        patternContext.lineTo(69.031005 * zoomfactor, 45.009144 * zoomfactor);
        patternContext.quadraticCurveTo(69.031005 * zoomfactor, 45.009144 * zoomfactor, 65.031005 * zoomfactor, 45.009144 * zoomfactor);
        patternContext.lineTo(13.031005 * zoomfactor, 45.009144 * zoomfactor);
        patternContext.quadraticCurveTo(9.031005 * zoomfactor, 45.009144 * zoomfactor, 9.031005 * zoomfactor, 45.009144 * zoomfactor);
        patternContext.fill();

        //     pernContext6153
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(153, 153, 153)';
        patternContext.strokeStyle = 'rgb(153, 153, 153)';
        patternContext.lineWidth = 0.070004 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(34.195951 * zoomfactor, 77.155711 * zoomfactor);
        patternContext.lineTo(34.781352 * zoomfactor, 76.623531 * zoomfactor);
        patternContext.lineTo(43.040813 * zoomfactor, 76.612891 * zoomfactor);
        patternContext.lineTo(43.594281 * zoomfactor, 77.070567 * zoomfactor);
        patternContext.lineTo(43.583641 * zoomfactor, 77.943345 * zoomfactor);
        patternContext.lineTo(43.040816 * zoomfactor, 78.550032 * zoomfactor);
        patternContext.lineTo(34.728137 * zoomfactor, 78.592602 * zoomfactor);
        patternContext.lineTo(34.206599 * zoomfactor, 77.996559 * zoomfactor);
        patternContext.fill();
        patternContext.stroke();

        //     rernContext613-2-4-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212 * zoomfactor;
        patternContext.moveTo(9.031005 * zoomfactor, 63.725258 * zoomfactor);
        patternContext.lineTo(9.031005 * zoomfactor, 76.620538 * zoomfactor);
        patternContext.quadraticCurveTo(9.031005 * zoomfactor, 76.620538 * zoomfactor, 13.031005 * zoomfactor, 76.620538 * zoomfactor);
        patternContext.lineTo(65.031005 * zoomfactor, 76.620538 * zoomfactor);
        patternContext.quadraticCurveTo(69.031005 * zoomfactor, 76.620538 * zoomfactor, 69.031005 * zoomfactor, 76.620538 * zoomfactor);
        patternContext.lineTo(69.031005 * zoomfactor, 63.725258 * zoomfactor);
        patternContext.quadraticCurveTo(69.031005 * zoomfactor, 63.725258 * zoomfactor, 65.031005 * zoomfactor, 63.725258 * zoomfactor);
        patternContext.lineTo(13.031005 * zoomfactor, 63.725258 * zoomfactor);
        patternContext.quadraticCurveTo(9.031005 * zoomfactor, 63.725258 * zoomfactor, 9.031005 * zoomfactor, 63.725258 * zoomfactor);
        patternContext.fill();

        //     r002
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.070899 * zoomfactor;
        patternContext.rect(32.633125 * zoomfactor, 0.046024 * zoomfactor, 12.524000 * zoomfactor, 76.455940 * zoomfactor);
        patternContext.fill();

        return context.createPattern(patternCanvas, 'repeat');
    },
    tisch2: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize;

        // #rect20251
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(110, 58, 29)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.266353 * zoomfactor;
        patternContext.rect(10.503345 * zoomfactor, 0.503345 * zoomfactor, 68.993309 * zoomfactor, 78.993317 * zoomfactor);
        patternContext.fill();
        patternContext.stroke();

        // #path20711
        patternContext.beginPath();
        patternContext.fillStyle = 'rgba(131, 72, 35, 0.634956)';
        patternContext.lineWidth = 0.104295 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(15.449412 * zoomfactor, 0.510894 * zoomfactor);
        patternContext.bezierCurveTo(14.422144 * zoomfactor, 3.695097 * zoomfactor, 13.339358 * zoomfactor, 6.984411 * zoomfactor, 13.937440 * zoomfactor, 10.217890 * zoomfactor);
        patternContext.bezierCurveTo(14.302395 * zoomfactor, 12.190976 * zoomfactor, 14.440380 * zoomfactor, 10.662543 * zoomfactor, 14.693427 * zoomfactor, 12.942660 * zoomfactor);
        patternContext.bezierCurveTo(14.824184 * zoomfactor, 14.120804 * zoomfactor, 14.475419 * zoomfactor, 15.340328 * zoomfactor, 14.693427 * zoomfactor, 16.518922 * zoomfactor);
        patternContext.bezierCurveTo(15.197504 * zoomfactor, 19.244165 * zoomfactor, 16.324030 * zoomfactor, 22.071094 * zoomfactor, 18.095361 * zoomfactor, 24.693234 * zoomfactor);
        patternContext.bezierCurveTo(19.080281 * zoomfactor, 26.151234 * zoomfactor, 20.803840 * zoomfactor, 27.502519 * zoomfactor, 21.875289 * zoomfactor, 28.950687 * zoomfactor);
        patternContext.bezierCurveTo(24.169051 * zoomfactor, 32.050934 * zoomfactor, 21.123562 * zoomfactor, 28.106870 * zoomfactor, 23.009266 * zoomfactor, 31.505159 * zoomfactor);
        patternContext.bezierCurveTo(23.363773 * zoomfactor, 32.144028 * zoomfactor, 24.255517 * zoomfactor, 32.798411 * zoomfactor, 24.899231 * zoomfactor, 33.378441 * zoomfactor);
        patternContext.bezierCurveTo(25.734572 * zoomfactor, 34.131138 * zoomfactor, 26.661366 * zoomfactor, 36.148446 * zoomfactor, 26.789192 * zoomfactor, 36.954700 * zoomfactor);
        patternContext.bezierCurveTo(27.203515 * zoomfactor, 39.568011 * zoomfactor, 26.985782 * zoomfactor, 42.370060 * zoomfactor, 26.411202 * zoomfactor, 44.958714 * zoomfactor);
        patternContext.bezierCurveTo(26.335982 * zoomfactor, 45.297621 * zoomfactor, 26.559471 * zoomfactor, 45.646522 * zoomfactor, 26.411202 * zoomfactor, 45.980503 * zoomfactor);
        patternContext.bezierCurveTo(26.254921 * zoomfactor, 46.332552 * zoomfactor, 25.811497 * zoomfactor, 46.650245 * zoomfactor, 25.655215 * zoomfactor, 47.002292 * zoomfactor);
        patternContext.bezierCurveTo(25.379899 * zoomfactor, 47.622489 * zoomfactor, 25.417064 * zoomfactor, 48.245545 * zoomfactor, 25.277223 * zoomfactor, 48.875574 * zoomfactor);
        patternContext.bezierCurveTo(24.973021 * zoomfactor, 50.246105 * zoomfactor, 23.893635 * zoomfactor, 51.934493 * zoomfactor, 23.387259 * zoomfactor, 53.303325 * zoomfactor);
        patternContext.bezierCurveTo(23.230578 * zoomfactor, 53.726881 * zoomfactor, 23.619819 * zoomfactor, 54.246607 * zoomfactor, 23.387259 * zoomfactor, 54.665710 * zoomfactor);
        patternContext.bezierCurveTo(22.658204 * zoomfactor, 55.979562 * zoomfactor, 22.588514 * zoomfactor, 59.810102 * zoomfactor, 23.009266 * zoomfactor, 61.137040 * zoomfactor);
        patternContext.bezierCurveTo(23.342359 * zoomfactor, 62.187526 * zoomfactor, 23.625224 * zoomfactor, 63.300596 * zoomfactor, 23.387259 * zoomfactor, 64.372706 * zoomfactor);
        patternContext.bezierCurveTo(23.093760 * zoomfactor, 65.695025 * zoomfactor, 21.685945 * zoomfactor, 66.842811 * zoomfactor, 21.119302 * zoomfactor, 68.119264 * zoomfactor);
        patternContext.bezierCurveTo(20.703599 * zoomfactor, 69.055707 * zoomfactor, 20.735022 * zoomfactor, 69.915187 * zoomfactor, 19.985325 * zoomfactor, 70.844036 * zoomfactor);
        patternContext.bezierCurveTo(19.600195 * zoomfactor, 71.321199 * zoomfactor, 18.829729 * zoomfactor, 71.724744 * zoomfactor, 18.473353 * zoomfactor, 72.206421 * zoomfactor);
        patternContext.bezierCurveTo(17.987848 * zoomfactor, 72.862632 * zoomfactor, 19.275193 * zoomfactor, 75.633042 * zoomfactor, 19.985325 * zoomfactor, 75.952981 * zoomfactor);
        patternContext.bezierCurveTo(20.074425 * zoomfactor, 75.993121 * zoomfactor, 20.274223 * zoomfactor, 75.912841 * zoomfactor, 20.363318 * zoomfactor, 75.952981 * zoomfactor);
        patternContext.bezierCurveTo(20.971433 * zoomfactor, 76.226957 * zoomfactor, 19.086780 * zoomfactor, 77.337752 * zoomfactor, 18.851346 * zoomfactor, 77.655961 * zoomfactor);
        patternContext.bezierCurveTo(18.577945 * zoomfactor, 78.025492 * zoomfactor, 18.851346 * zoomfactor, 78.614944 * zoomfactor, 18.851346 * zoomfactor, 79.018349 * zoomfactor);
        patternContext.fill();

        // #path20713
        patternContext.beginPath();
        patternContext.fillStyle = 'rgba(103, 57, 28, 0.643805)';
        patternContext.lineWidth = 0.088960 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(49.737416 * zoomfactor, 58.858095 * zoomfactor);
        patternContext.bezierCurveTo(48.169259 * zoomfactor, 71.129519 * zoomfactor, 66.959300 * zoomfactor, 80.479034 * zoomfactor, 68.493118 * zoomfactor, 78.626100 * zoomfactor);
        patternContext.bezierCurveTo(69.207136 * zoomfactor, 77.763534 * zoomfactor, 69.072970 * zoomfactor, 76.636919 * zoomfactor, 68.757284 * zoomfactor, 75.789435 * zoomfactor);
        patternContext.bezierCurveTo(68.727084 * zoomfactor, 75.708355 * zoomfactor, 68.523320 * zoomfactor, 75.693215 * zoomfactor, 68.493118 * zoomfactor, 75.612145 * zoomfactor);
        patternContext.bezierCurveTo(68.375088 * zoomfactor, 75.295296 * zoomfactor, 68.648425 * zoomfactor, 74.861088 * zoomfactor, 68.493118 * zoomfactor, 74.548395 * zoomfactor);
        patternContext.bezierCurveTo(68.119759 * zoomfactor, 73.796666 * zoomfactor, 68.133718 * zoomfactor, 73.037235 * zoomfactor, 67.964789 * zoomfactor, 72.243605 * zoomfactor);
        patternContext.bezierCurveTo(67.953159 * zoomfactor, 72.188765 * zoomfactor, 67.448134 * zoomfactor, 71.234700 * zoomfactor, 67.436461 * zoomfactor, 71.179855 * zoomfactor);
        patternContext.bezierCurveTo(67.230274 * zoomfactor, 70.211196 * zoomfactor, 66.923286 * zoomfactor, 68.991328 * zoomfactor, 67.172295 * zoomfactor, 67.988607 * zoomfactor);
        patternContext.bezierCurveTo(67.494429 * zoomfactor, 66.691426 * zoomfactor, 67.586986 * zoomfactor, 65.533275 * zoomfactor, 67.964789 * zoomfactor, 64.265485 * zoomfactor);
        patternContext.bezierCurveTo(68.089008 * zoomfactor, 63.848665 * zoomfactor, 68.603167 * zoomfactor, 63.438185 * zoomfactor, 68.757284 * zoomfactor, 63.024445 * zoomfactor);
        patternContext.bezierCurveTo(69.018623 * zoomfactor, 62.322870 * zoomfactor, 68.963023 * zoomfactor, 61.546460 * zoomfactor, 69.285612 * zoomfactor, 60.896946 * zoomfactor);
        patternContext.bezierCurveTo(69.570328 * zoomfactor, 60.323697 * zoomfactor, 69.136899 * zoomfactor, 59.545585 * zoomfactor, 69.285612 * zoomfactor, 58.946738 * zoomfactor);
        patternContext.bezierCurveTo(69.373672 * zoomfactor, 58.769448 * zoomfactor, 69.461723 * zoomfactor, 58.592155 * zoomfactor, 69.549778 * zoomfactor, 58.414863 * zoomfactor);
        patternContext.bezierCurveTo(69.637838 * zoomfactor, 58.355773 * zoomfactor, 69.774566 * zoomfactor, 58.316853 * zoomfactor, 69.813944 * zoomfactor, 58.237574 * zoomfactor);
        patternContext.bezierCurveTo(69.925320 * zoomfactor, 58.013314 * zoomfactor, 69.756034 * zoomfactor, 57.761579 * zoomfactor, 69.813944 * zoomfactor, 57.528406 * zoomfactor);
        patternContext.bezierCurveTo(69.977086 * zoomfactor, 56.871453 * zoomfactor, 70.204245 * zoomfactor, 56.226644 * zoomfactor, 70.342273 * zoomfactor, 55.578200 * zoomfactor);
        patternContext.bezierCurveTo(70.465469 * zoomfactor, 54.999463 * zoomfactor, 70.234217 * zoomfactor, 54.385439 * zoomfactor, 70.342273 * zoomfactor, 53.805283 * zoomfactor);
        patternContext.bezierCurveTo(70.442977 * zoomfactor, 53.264641 * zoomfactor, 70.769908 * zoomfactor, 52.750302 * zoomfactor, 70.870601 * zoomfactor, 52.209660 * zoomfactor);
        patternContext.bezierCurveTo(71.097551 * zoomfactor, 50.991157 * zoomfactor, 70.570072 * zoomfactor, 49.696726 * zoomfactor, 70.870601 * zoomfactor, 48.486537 * zoomfactor);
        patternContext.bezierCurveTo(71.382931 * zoomfactor, 46.423468 * zoomfactor, 71.134767 * zoomfactor, 44.215418 * zoomfactor, 71.134767 * zoomfactor, 42.104043 * zoomfactor);
        patternContext.bezierCurveTo(71.134767 * zoomfactor, 41.001291 * zoomfactor, 70.953810 * zoomfactor, 39.828532 * zoomfactor, 71.134767 * zoomfactor, 38.735503 * zoomfactor);
        patternContext.bezierCurveTo(71.323384 * zoomfactor, 37.596217 * zoomfactor, 71.646975 * zoomfactor, 36.354977 * zoomfactor, 71.398933 * zoomfactor, 35.189673 * zoomfactor);
        patternContext.bezierCurveTo(71.323193 * zoomfactor, 34.833812 * zoomfactor, 71.304143 * zoomfactor, 34.466950 * zoomfactor, 71.134767 * zoomfactor, 34.125923 * zoomfactor);
        patternContext.bezierCurveTo(71.034374 * zoomfactor, 33.923780 * zoomfactor, 78.499698 * zoomfactor, 45.320142 * zoomfactor, 78.399302 * zoomfactor, 45.118000 * zoomfactor);
        patternContext.bezierCurveTo(78.315772 * zoomfactor, 44.949805 * zoomfactor, 70.643792 * zoomfactor, 33.237684 * zoomfactor, 70.606439 * zoomfactor, 33.062174 * zoomfactor);
        patternContext.bezierCurveTo(70.400224 * zoomfactor, 32.093380 * zoomfactor, 71.634745 * zoomfactor, 27.304377 * zoomfactor, 70.738523 * zoomfactor, 26.502386 * zoomfactor);
        patternContext.bezierCurveTo(70.264818 * zoomfactor, 26.078490 * zoomfactor, 67.872972 * zoomfactor, 28.360159 * zoomfactor, 67.436463 * zoomfactor, 27.920719 * zoomfactor);
        patternContext.bezierCurveTo(67.218026 * zoomfactor, 27.700816 * zoomfactor, 64.099125 * zoomfactor, 38.241399 * zoomfactor, 66.908131 * zoomfactor, 27.211553 * zoomfactor);
        patternContext.bezierCurveTo(66.971081 * zoomfactor, 26.964409 * zoomfactor, 66.282709 * zoomfactor, 26.903936 * zoomfactor, 66.115637 * zoomfactor, 26.679678 * zoomfactor);
        patternContext.bezierCurveTo(66.031017 * zoomfactor, 26.566097 * zoomfactor, 65.637368 * zoomfactor, 25.074748 * zoomfactor, 65.587308 * zoomfactor, 24.906763 * zoomfactor);
        patternContext.bezierCurveTo(65.077214 * zoomfactor, 23.195045 * zoomfactor, 65.557088 * zoomfactor, 26.360435 * zoomfactor, 65.058979 * zoomfactor, 24.020305 * zoomfactor);
        patternContext.bezierCurveTo(64.792161 * zoomfactor, 22.766810 * zoomfactor, 64.850452 * zoomfactor, 21.024862 * zoomfactor, 65.058979 * zoomfactor, 19.765309 * zoomfactor);
        patternContext.bezierCurveTo(65.165266 * zoomfactor, 19.123272 * zoomfactor, 65.521964 * zoomfactor, 18.482285 * zoomfactor, 65.323143 * zoomfactor, 17.815102 * zoomfactor);
        patternContext.bezierCurveTo(64.997365 * zoomfactor, 16.721890 * zoomfactor, 64.215086 * zoomfactor, 15.588936 * zoomfactor, 64.002319 * zoomfactor, 14.446562 * zoomfactor);
        patternContext.bezierCurveTo(63.804143 * zoomfactor, 13.382537 * zoomfactor, 63.858911 * zoomfactor, 12.465966 * zoomfactor, 63.473989 * zoomfactor, 11.432606 * zoomfactor);
        patternContext.bezierCurveTo(63.328953 * zoomfactor, 11.043260 * zoomfactor, 63.619026 * zoomfactor, 10.580910 * zoomfactor, 63.473989 * zoomfactor, 10.191564 * zoomfactor);
        patternContext.bezierCurveTo(63.358984 * zoomfactor, 9.882819 * zoomfactor, 63.038656 * zoomfactor, 9.617174 * zoomfactor, 62.945659 * zoomfactor, 9.305106 * zoomfactor);
        patternContext.bezierCurveTo(62.859319 * zoomfactor, 9.015358 * zoomfactor, 63.084894 * zoomfactor, 8.698971 * zoomfactor, 62.945659 * zoomfactor, 8.418648 * zoomfactor);
        patternContext.bezierCurveTo(62.153171 * zoomfactor, 6.823037 * zoomfactor, 62.399938 * zoomfactor, 5.026764 * zoomfactor, 61.360670 * zoomfactor, 3.631776 * zoomfactor);
        patternContext.bezierCurveTo(61.228586 * zoomfactor, 3.454484 * zoomfactor, 61.624836 * zoomfactor, 3.277193 * zoomfactor, 61.360670 * zoomfactor, 3.099901 * zoomfactor);
        patternContext.bezierCurveTo(61.236140 * zoomfactor, 3.016325 * zoomfactor, 60.956869 * zoomfactor, 3.183477 * zoomfactor, 60.832341 * zoomfactor, 3.099901 * zoomfactor);
        patternContext.bezierCurveTo(60.828941 * zoomfactor, 3.097611 * zoomfactor, 60.376540 * zoomfactor, 2.237782 * zoomfactor, 60.304011 * zoomfactor, 2.213444 * zoomfactor);
        patternContext.bezierCurveTo(60.146493 * zoomfactor, 2.160586 * zoomfactor, 59.922214 * zoomfactor, 2.279006 * zoomfactor, 59.775681 * zoomfactor, 2.213444 * zoomfactor);
        patternContext.bezierCurveTo(59.205004 * zoomfactor, 1.958108 * zoomfactor, 59.451187 * zoomfactor, 1.463788 * zoomfactor, 58.983185 * zoomfactor, 1.149694 * zoomfactor);
        patternContext.fill();

        // #path20715
        patternContext.beginPath();
        patternContext.fillStyle = 'rgba(131, 72, 35, 0.634956)';
        patternContext.lineWidth = 0.070004 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(29.631880 * zoomfactor, 1.021789 * zoomfactor);
        patternContext.bezierCurveTo(29.404815 * zoomfactor, 1.192087 * zoomfactor, 29.151386 * zoomfactor, 1.331985 * zoomfactor, 28.950687 * zoomfactor, 1.532684 * zoomfactor);
        patternContext.bezierCurveTo(28.610594 * zoomfactor, 1.872778 * zoomfactor, 28.524768 * zoomfactor, 2.682973 * zoomfactor, 28.439792 * zoomfactor, 3.065367 * zoomfactor);
        patternContext.bezierCurveTo(27.947159 * zoomfactor, 5.282215 * zoomfactor, 28.478062 * zoomfactor, 8.080551 * zoomfactor, 29.461581 * zoomfactor, 10.047592 * zoomfactor);
        patternContext.bezierCurveTo(29.744524 * zoomfactor, 10.613475 * zoomfactor, 29.570166 * zoomfactor, 11.511141 * zoomfactor, 29.802179 * zoomfactor, 12.091170 * zoomfactor);
        patternContext.bezierCurveTo(29.861809 * zoomfactor, 12.240244 * zoomfactor, 30.070970 * zoomfactor, 12.288158 * zoomfactor, 30.142775 * zoomfactor, 12.431766 * zoomfactor);
        patternContext.bezierCurveTo(30.599626 * zoomfactor, 13.345468 * zoomfactor, 29.408842 * zoomfactor, 18.485599 * zoomfactor, 29.120986 * zoomfactor, 19.924885 * zoomfactor);
        patternContext.bezierCurveTo(28.884761 * zoomfactor, 21.106006 * zoomfactor, 29.527897 * zoomfactor, 22.063421 * zoomfactor, 29.802179 * zoomfactor, 23.160550 * zoomfactor);
        patternContext.bezierCurveTo(29.884789 * zoomfactor, 23.490977 * zoomfactor, 29.768289 * zoomfactor, 23.843433 * zoomfactor, 29.802179 * zoomfactor, 24.182339 * zoomfactor);
        patternContext.bezierCurveTo(29.830979 * zoomfactor, 24.470354 * zoomfactor, 29.946272 * zoomfactor, 24.745567 * zoomfactor, 29.972476 * zoomfactor, 25.033830 * zoomfactor);
        patternContext.bezierCurveTo(30.047786 * zoomfactor, 25.862178 * zoomfactor, 29.835625 * zoomfactor, 26.767197 * zoomfactor, 29.972476 * zoomfactor, 27.588302 * zoomfactor);
        patternContext.bezierCurveTo(30.145241 * zoomfactor, 28.624887 * zoomfactor, 30.227481 * zoomfactor, 29.722794 * zoomfactor, 30.142775 * zoomfactor, 30.823969 * zoomfactor);
        patternContext.bezierCurveTo(29.926454 * zoomfactor, 33.636129 * zoomfactor, 30.061335 * zoomfactor, 30.453687 * zoomfactor, 29.802179 * zoomfactor, 32.526949 * zoomfactor);
        patternContext.bezierCurveTo(29.745849 * zoomfactor, 32.977571 * zoomfactor, 29.858509 * zoomfactor, 33.438713 * zoomfactor, 29.802179 * zoomfactor, 33.889336 * zoomfactor);
        patternContext.bezierCurveTo(29.626197 * zoomfactor, 35.297186 * zoomfactor, 29.210568 * zoomfactor, 36.677092 * zoomfactor, 28.950687 * zoomfactor, 37.976489 * zoomfactor);
        patternContext.bezierCurveTo(28.806817 * zoomfactor, 38.695841 * zoomfactor, 28.923387 * zoomfactor, 39.475378 * zoomfactor, 28.780390 * zoomfactor, 40.190367 * zoomfactor);
        patternContext.bezierCurveTo(28.709980 * zoomfactor, 40.542416 * zoomfactor, 28.490566 * zoomfactor, 40.856744 * zoomfactor, 28.439792 * zoomfactor, 41.212156 * zoomfactor);
        patternContext.bezierCurveTo(28.336033 * zoomfactor, 41.938466 * zoomfactor, 28.373112 * zoomfactor, 42.700731 * zoomfactor, 28.269496 * zoomfactor, 43.426033 * zoomfactor);
        patternContext.bezierCurveTo(28.251556 * zoomfactor, 43.551689 * zoomfactor, 28.117149 * zoomfactor, 43.640970 * zoomfactor, 28.099197 * zoomfactor, 43.766628 * zoomfactor);
        patternContext.bezierCurveTo(27.971474 * zoomfactor, 44.660692 * zoomfactor, 28.201376 * zoomfactor, 44.481879 * zoomfactor, 28.099197 * zoomfactor, 45.299312 * zoomfactor);
        patternContext.bezierCurveTo(27.991993 * zoomfactor, 46.156943 * zoomfactor, 27.708995 * zoomfactor, 47.008933 * zoomfactor, 27.588302 * zoomfactor, 47.853785 * zoomfactor);
        patternContext.bezierCurveTo(27.500862 * zoomfactor, 48.465853 * zoomfactor, 27.656612 * zoomfactor, 49.112254 * zoomfactor, 27.588302 * zoomfactor, 49.727064 * zoomfactor);
        patternContext.bezierCurveTo(27.531532 * zoomfactor, 50.237958 * zoomfactor, 27.518812 * zoomfactor, 50.755690 * zoomfactor, 27.418003 * zoomfactor, 51.259747 * zoomfactor);
        patternContext.bezierCurveTo(27.323613 * zoomfactor, 51.731687 * zoomfactor, 27.077408 * zoomfactor, 51.611762 * zoomfactor, 27.077408 * zoomfactor, 52.111237 * zoomfactor);
        patternContext.bezierCurveTo(27.077408 * zoomfactor, 52.960129 * zoomfactor, 26.875552 * zoomfactor, 53.833267 * zoomfactor, 26.736812 * zoomfactor, 54.665710 * zoomfactor);
        patternContext.bezierCurveTo(26.642202 * zoomfactor, 55.233371 * zoomfactor, 26.878727 * zoomfactor, 54.807625 * zoomfactor, 26.736812 * zoomfactor, 55.517200 * zoomfactor);
        patternContext.bezierCurveTo(26.407972 * zoomfactor, 57.161400 * zoomfactor, 26.717342 * zoomfactor, 54.120872 * zoomfactor, 26.396215 * zoomfactor, 56.368693 * zoomfactor);
        patternContext.bezierCurveTo(26.318745 * zoomfactor, 56.911001 * zoomfactor, 26.116469 * zoomfactor, 59.257636 * zoomfactor, 25.885321 * zoomfactor, 59.604356 * zoomfactor);
        patternContext.bezierCurveTo(25.814911 * zoomfactor, 59.709973 * zoomfactor, 25.610031 * zoomfactor, 59.665806 * zoomfactor, 25.544724 * zoomfactor, 59.774655 * zoomfactor);
        patternContext.bezierCurveTo(25.332102 * zoomfactor, 60.129025 * zoomfactor, 25.409164 * zoomfactor, 60.607929 * zoomfactor, 25.204128 * zoomfactor, 60.966743 * zoomfactor);
        patternContext.bezierCurveTo(24.922490 * zoomfactor, 61.459609 * zoomfactor, 24.483199 * zoomfactor, 61.847753 * zoomfactor, 24.182339 * zoomfactor, 62.329128 * zoomfactor);
        patternContext.bezierCurveTo(23.719043 * zoomfactor, 63.070401 * zoomfactor, 23.296261 * zoomfactor, 63.828543 * zoomfactor, 22.819954 * zoomfactor, 64.543003 * zoomfactor);
        patternContext.bezierCurveTo(22.608725 * zoomfactor, 64.859846 * zoomfactor, 22.578324 * zoomfactor, 65.295528 * zoomfactor, 22.309059 * zoomfactor, 65.564792 * zoomfactor);
        patternContext.bezierCurveTo(22.223909 * zoomfactor, 65.649942 * zoomfactor, 22.053612 * zoomfactor, 65.649942 * zoomfactor, 21.968463 * zoomfactor, 65.735091 * zoomfactor);
        patternContext.bezierCurveTo(21.888183 * zoomfactor, 65.815371 * zoomfactor, 21.990733 * zoomfactor, 65.964360 * zoomfactor, 21.968463 * zoomfactor, 66.075686 * zoomfactor);
        patternContext.bezierCurveTo(21.922563 * zoomfactor, 66.305194 * zoomfactor, 21.872183 * zoomfactor, 66.534839 * zoomfactor, 21.798165 * zoomfactor, 66.756880 * zoomfactor);
        patternContext.bezierCurveTo(21.417478 * zoomfactor, 67.898938 * zoomfactor, 21.145386 * zoomfactor, 69.055813 * zoomfactor, 20.776376 * zoomfactor, 70.162842 * zoomfactor);
        patternContext.bezierCurveTo(20.696856 * zoomfactor, 70.401399 * zoomfactor, 20.938532 * zoomfactor, 71.022476 * zoomfactor, 20.776376 * zoomfactor, 71.184632 * zoomfactor);
        patternContext.bezierCurveTo(20.736236 * zoomfactor, 71.224772 * zoomfactor, 20.631464 * zoomfactor, 71.133862 * zoomfactor, 20.606078 * zoomfactor, 71.184632 * zoomfactor);
        patternContext.bezierCurveTo(20.394615 * zoomfactor, 71.607557 * zoomfactor, 20.568098 * zoomfactor, 73.209848 * zoomfactor, 20.435780 * zoomfactor, 73.739104 * zoomfactor);
        patternContext.bezierCurveTo(20.329589 * zoomfactor, 74.163866 * zoomfactor, 20.095183 * zoomfactor, 74.662246 * zoomfactor, 20.095183 * zoomfactor, 75.101489 * zoomfactor);
        patternContext.bezierCurveTo(20.095183 * zoomfactor, 75.358727 * zoomfactor, 20.234298 * zoomfactor, 78.816866 * zoomfactor, 19.924885 * zoomfactor, 78.507454 * zoomfactor);
        patternContext.bezierCurveTo(19.708726 * zoomfactor, 78.291295 * zoomfactor, 20.120552 * zoomfactor, 77.925117 * zoomfactor, 20.265481 * zoomfactor, 77.655961 * zoomfactor);
        patternContext.bezierCurveTo(23.048802 * zoomfactor, 72.486937 * zoomfactor, 19.578958 * zoomfactor, 78.905845 * zoomfactor, 21.798165 * zoomfactor, 75.101489 * zoomfactor);
        patternContext.bezierCurveTo(21.985233 * zoomfactor, 74.780803 * zoomfactor, 22.378023 * zoomfactor, 73.329545 * zoomfactor, 22.649656 * zoomfactor, 73.057913 * zoomfactor);
        patternContext.bezierCurveTo(22.689796 * zoomfactor, 73.017773 * zoomfactor, 22.788466 * zoomfactor, 73.105143 * zoomfactor, 22.819954 * zoomfactor, 73.057913 * zoomfactor);
        patternContext.bezierCurveTo(23.019102 * zoomfactor, 72.759188 * zoomfactor, 22.936272 * zoomfactor, 72.316471 * zoomfactor, 23.160550 * zoomfactor, 72.036124 * zoomfactor);
        patternContext.bezierCurveTo(23.288408 * zoomfactor, 71.876300 * zoomfactor, 23.548641 * zoomfactor, 71.859266 * zoomfactor, 23.671445 * zoomfactor, 71.695526 * zoomfactor);
        patternContext.bezierCurveTo(23.739565 * zoomfactor, 71.604696 * zoomfactor, 23.620675 * zoomfactor, 71.456478 * zoomfactor, 23.671445 * zoomfactor, 71.354931 * zoomfactor);
        patternContext.bezierCurveTo(23.850955 * zoomfactor, 70.995910 * zoomfactor, 24.261710 * zoomfactor, 70.808204 * zoomfactor, 24.522936 * zoomfactor, 70.503441 * zoomfactor);
        patternContext.bezierCurveTo(25.483972 * zoomfactor, 69.382232 * zoomfactor, 26.961716 * zoomfactor, 67.274254 * zoomfactor, 27.418003 * zoomfactor, 65.905390 * zoomfactor);
        patternContext.bezierCurveTo(28.011924 * zoomfactor, 64.123630 * zoomfactor, 27.680377 * zoomfactor, 61.484972 * zoomfactor, 28.780390 * zoomfactor, 59.944954 * zoomfactor);
        patternContext.bezierCurveTo(29.267279 * zoomfactor, 59.263308 * zoomfactor, 29.721696 * zoomfactor, 59.173945 * zoomfactor, 30.313074 * zoomfactor, 58.582567 * zoomfactor);
        patternContext.bezierCurveTo(30.898084 * zoomfactor, 57.997558 * zoomfactor, 31.665844 * zoomfactor, 57.233004 * zoomfactor, 32.186353 * zoomfactor, 56.538989 * zoomfactor);
        patternContext.bezierCurveTo(32.636018 * zoomfactor, 55.939438 * zoomfactor, 32.896315 * zoomfactor, 54.948772 * zoomfactor, 33.208142 * zoomfactor, 54.325115 * zoomfactor);
        patternContext.bezierCurveTo(33.408424 * zoomfactor, 53.924551 * zoomfactor, 33.901432 * zoomfactor, 53.528528 * zoomfactor, 34.059632 * zoomfactor, 53.133026 * zoomfactor);
        patternContext.bezierCurveTo(34.413975 * zoomfactor, 52.247167 * zoomfactor, 34.647256 * zoomfactor, 51.331796 * zoomfactor, 34.911122 * zoomfactor, 50.408257 * zoomfactor);
        patternContext.bezierCurveTo(35.093656 * zoomfactor, 49.769392 * zoomfactor, 35.448181 * zoomfactor, 49.183583 * zoomfactor, 35.592316 * zoomfactor, 48.534976 * zoomfactor);
        patternContext.bezierCurveTo(35.680616 * zoomfactor, 48.137614 * zoomfactor, 35.526086 * zoomfactor, 47.740252 * zoomfactor, 35.592316 * zoomfactor, 47.342890 * zoomfactor);
        patternContext.bezierCurveTo(35.842228 * zoomfactor, 45.843417 * zoomfactor, 35.762615 * zoomfactor, 44.284204 * zoomfactor, 35.762615 * zoomfactor, 42.744839 * zoomfactor);
        patternContext.bezierCurveTo(35.762615 * zoomfactor, 40.957722 * zoomfactor, 35.940298 * zoomfactor, 39.072140 * zoomfactor, 35.762615 * zoomfactor, 37.295298 * zoomfactor);
        patternContext.bezierCurveTo(35.682795 * zoomfactor, 36.497114 * zoomfactor, 35.510604 * zoomfactor, 35.708396 * zoomfactor, 35.422017 * zoomfactor, 34.911122 * zoomfactor);
        patternContext.bezierCurveTo(35.341027 * zoomfactor, 34.182158 * zoomfactor, 35.495007 * zoomfactor, 33.427103 * zoomfactor, 35.422017 * zoomfactor, 32.697248 * zoomfactor);
        patternContext.bezierCurveTo(35.285955 * zoomfactor, 31.336607 * zoomfactor, 35.047864 * zoomfactor, 29.977506 * zoomfactor, 34.911122 * zoomfactor, 28.610091 * zoomfactor);
        patternContext.bezierCurveTo(34.849352 * zoomfactor, 27.992411 * zoomfactor, 34.979672 * zoomfactor, 27.353723 * zoomfactor, 34.911122 * zoomfactor, 26.736812 * zoomfactor);
        patternContext.bezierCurveTo(34.803315 * zoomfactor, 25.766524 * zoomfactor, 34.691693 * zoomfactor, 24.811077 * zoomfactor, 34.570527 * zoomfactor, 23.841743 * zoomfactor);
        patternContext.bezierCurveTo(34.509187 * zoomfactor, 23.351048 * zoomfactor, 34.677604 * zoomfactor, 22.790904 * zoomfactor, 34.570527 * zoomfactor, 22.309059 * zoomfactor);
        patternContext.bezierCurveTo(34.492647 * zoomfactor, 21.958589 * zoomfactor, 34.300339 * zoomfactor, 21.639319 * zoomfactor, 34.229931 * zoomfactor, 21.287270 * zoomfactor);
        patternContext.bezierCurveTo(34.120764 * zoomfactor, 20.741443 * zoomfactor, 34.339096 * zoomfactor, 20.130116 * zoomfactor, 34.229931 * zoomfactor, 19.584289 * zoomfactor);
        patternContext.bezierCurveTo(34.205031 * zoomfactor, 19.459821 * zoomfactor, 34.077584 * zoomfactor, 19.369349 * zoomfactor, 34.059632 * zoomfactor, 19.243692 * zoomfactor);
        patternContext.bezierCurveTo(33.773319 * zoomfactor, 17.239496 * zoomfactor, 34.310843 * zoomfactor, 15.122650 * zoomfactor, 34.059632 * zoomfactor, 13.112959 * zoomfactor);
        patternContext.bezierCurveTo(34.030602 * zoomfactor, 12.880713 * zoomfactor, 33.927811 * zoomfactor, 12.662634 * zoomfactor, 33.889336 * zoomfactor, 12.431766 * zoomfactor);
        patternContext.bezierCurveTo(33.788381 * zoomfactor, 11.826048 * zoomfactor, 34.009644 * zoomfactor, 11.160034 * zoomfactor, 33.889336 * zoomfactor, 10.558486 * zoomfactor);
        patternContext.bezierCurveTo(33.839546 * zoomfactor, 10.309551 * zoomfactor, 33.610309 * zoomfactor, 10.123579 * zoomfactor, 33.548738 * zoomfactor, 9.877293 * zoomfactor);
        patternContext.bezierCurveTo(33.472438 * zoomfactor, 9.572097 * zoomfactor, 33.439277 * zoomfactor, 9.159693 * zoomfactor, 33.378441 * zoomfactor, 8.855505 * zoomfactor);
        patternContext.bezierCurveTo(33.258357 * zoomfactor, 8.255094 * zoomfactor, 33.498522 * zoomfactor, 7.582635 * zoomfactor, 33.378441 * zoomfactor, 6.982225 * zoomfactor);
        patternContext.bezierCurveTo(33.265512 * zoomfactor, 6.417578 * zoomfactor, 33.177996 * zoomfactor, 5.839855 * zoomfactor, 33.037843 * zoomfactor, 5.279243 * zoomfactor);
        patternContext.bezierCurveTo(32.863514 * zoomfactor, 4.581924 * zoomfactor, 33.075243 * zoomfactor, 1.096596 * zoomfactor, 32.867547 * zoomfactor, 0.681193 * zoomfactor);
        patternContext.bezierCurveTo(32.591697 * zoomfactor, 0.129495 * zoomfactor, 31.301782 * zoomfactor, 0.868031 * zoomfactor, 30.994265 * zoomfactor, 1.021789 * zoomfactor);
        patternContext.bezierCurveTo(30.781640 * zoomfactor, 1.128101 * zoomfactor, 29.744410 * zoomfactor, 1.021789 * zoomfactor, 29.631880 * zoomfactor, 1.021789 * zoomfactor);
        patternContext.fill();

        // #path20715-9
        patternContext.beginPath();
        patternContext.fillStyle = 'rgba(102, 57, 27, 0.670354)';
        patternContext.lineWidth = 0.101431 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(31.643983 * zoomfactor, 1.276316 * zoomfactor);
        patternContext.bezierCurveTo(31.171471 * zoomfactor, 1.448122 * zoomfactor, 30.644096 * zoomfactor, 1.589259 * zoomfactor, 30.226450 * zoomfactor, 1.791735 * zoomfactor);
        patternContext.bezierCurveTo(29.518731 * zoomfactor, 2.134841 * zoomfactor, 29.340131 * zoomfactor, 2.952211 * zoomfactor, 29.163300 * zoomfactor, 3.337990 * zoomfactor);
        patternContext.bezierCurveTo(28.138152 * zoomfactor, 5.574469 * zoomfactor, 29.242940 * zoomfactor, 8.397584 * zoomfactor, 31.289598 * zoomfactor, 10.382044 * zoomfactor);
        patternContext.bezierCurveTo(31.878390 * zoomfactor, 10.952938 * zoomfactor, 31.515559 * zoomfactor, 11.858554 * zoomfactor, 31.998368 * zoomfactor, 12.443719 * zoomfactor);
        patternContext.bezierCurveTo(32.122455 * zoomfactor, 12.594113 * zoomfactor, 32.557710 * zoomfactor, 12.642452 * zoomfactor, 32.707133 * zoomfactor, 12.787331 * zoomfactor);
        patternContext.bezierCurveTo(33.657820 * zoomfactor, 13.709124 * zoomfactor, 31.179851 * zoomfactor, 18.894772 * zoomfactor, 30.580835 * zoomfactor, 20.346803 * zoomfactor);
        patternContext.bezierCurveTo(30.089261 * zoomfactor, 21.538383 * zoomfactor, 31.427599 * zoomfactor, 22.504276 * zoomfactor, 31.998368 * zoomfactor, 23.611121 * zoomfactor);
        patternContext.bezierCurveTo(32.170276 * zoomfactor, 23.944474 * zoomfactor, 31.927848 * zoomfactor, 24.300051 * zoomfactor, 31.998368 * zoomfactor, 24.641958 * zoomfactor);
        patternContext.bezierCurveTo(32.058298 * zoomfactor, 24.932523 * zoomfactor, 32.298219 * zoomfactor, 25.210173 * zoomfactor, 32.352748 * zoomfactor, 25.500989 * zoomfactor);
        patternContext.bezierCurveTo(32.509465 * zoomfactor, 26.336672 * zoomfactor, 32.067967 * zoomfactor, 27.249705 * zoomfactor, 32.352748 * zoomfactor, 28.078081 * zoomfactor);
        patternContext.bezierCurveTo(32.712265 * zoomfactor, 29.123845 * zoomfactor, 32.883403 * zoomfactor, 30.231474 * zoomfactor, 32.707133 * zoomfactor, 31.342400 * zoomfactor);
        patternContext.bezierCurveTo(32.256979 * zoomfactor, 34.179463 * zoomfactor, 32.537660 * zoomfactor, 30.968840 * zoomfactor, 31.998368 * zoomfactor, 33.060461 * zoomfactor);
        patternContext.bezierCurveTo(31.881148 * zoomfactor, 33.515073 * zoomfactor, 32.115588 * zoomfactor, 33.980299 * zoomfactor, 31.998368 * zoomfactor, 34.434912 * zoomfactor);
        patternContext.bezierCurveTo(31.632157 * zoomfactor, 35.855229 * zoomfactor, 30.767251 * zoomfactor, 37.247354 * zoomfactor, 30.226450 * zoomfactor, 38.558257 * zoomfactor);
        patternContext.bezierCurveTo(29.927063 * zoomfactor, 39.283979 * zoomfactor, 30.169640 * zoomfactor, 40.070419 * zoomfactor, 29.872070 * zoomfactor, 40.791740 * zoomfactor);
        patternContext.bezierCurveTo(29.725549 * zoomfactor, 41.146906 * zoomfactor, 29.268958 * zoomfactor, 41.464017 * zoomfactor, 29.163300 * zoomfactor, 41.822577 * zoomfactor);
        patternContext.bezierCurveTo(28.947382 * zoomfactor, 42.555318 * zoomfactor, 29.024542 * zoomfactor, 43.324333 * zoomfactor, 28.808921 * zoomfactor, 44.056058 * zoomfactor);
        patternContext.bezierCurveTo(28.771591 * zoomfactor, 44.182827 * zoomfactor, 28.491894 * zoomfactor, 44.272898 * zoomfactor, 28.454537 * zoomfactor, 44.399669 * zoomfactor);
        patternContext.bezierCurveTo(28.188751 * zoomfactor, 45.301650 * zoomfactor, 28.667167 * zoomfactor, 45.121254 * zoomfactor, 28.454537 * zoomfactor, 45.945925 * zoomfactor);
        patternContext.bezierCurveTo(28.231450 * zoomfactor, 46.811151 * zoomfactor, 27.642543 * zoomfactor, 47.670685 * zoomfactor, 27.391387 * zoomfactor, 48.523019 * zoomfactor);
        patternContext.bezierCurveTo(27.209428 * zoomfactor, 49.140507 * zoomfactor, 27.533537 * zoomfactor, 49.792632 * zoomfactor, 27.391387 * zoomfactor, 50.412886 * zoomfactor);
        patternContext.bezierCurveTo(27.273251 * zoomfactor, 50.928304 * zoomfactor, 27.246781 * zoomfactor, 51.450620 * zoomfactor, 27.037002 * zoomfactor, 51.959141 * zoomfactor);
        patternContext.bezierCurveTo(26.840580 * zoomfactor, 52.435260 * zoomfactor, 26.328238 * zoomfactor, 52.314273 * zoomfactor, 26.328238 * zoomfactor, 52.818171 * zoomfactor);
        patternContext.bezierCurveTo(26.328238 * zoomfactor, 53.674580 * zoomfactor, 25.908185 * zoomfactor, 54.555450 * zoomfactor, 25.619473 * zoomfactor, 55.395264 * zoomfactor);
        patternContext.bezierCurveTo(25.422594 * zoomfactor, 55.967952 * zoomfactor, 25.914792 * zoomfactor, 55.538436 * zoomfactor, 25.619473 * zoomfactor, 56.254294 * zoomfactor);
        patternContext.bezierCurveTo(24.935171 * zoomfactor, 57.913054 * zoomfactor, 25.578953 * zoomfactor, 54.845602 * zoomfactor, 24.910706 * zoomfactor, 57.113328 * zoomfactor);
        patternContext.bezierCurveTo(24.749494 * zoomfactor, 57.660438 * zoomfactor, 24.328566 * zoomfactor, 60.027853 * zoomfactor, 23.847557 * zoomfactor, 60.377643 * zoomfactor);
        patternContext.bezierCurveTo(23.701037 * zoomfactor, 60.484195 * zoomfactor, 23.274691 * zoomfactor, 60.439633 * zoomfactor, 23.138790 * zoomfactor, 60.549450 * zoomfactor);
        patternContext.bezierCurveTo(22.696333 * zoomfactor, 60.906958 * zoomfactor, 22.856696 * zoomfactor, 61.390103 * zoomfactor, 22.430025 * zoomfactor, 61.752094 * zoomfactor);
        patternContext.bezierCurveTo(21.843948 * zoomfactor, 62.249325 * zoomfactor, 20.929803 * zoomfactor, 62.640906 * zoomfactor, 20.303726 * zoomfactor, 63.126543 * zoomfactor);
        patternContext.bezierCurveTo(19.339628 * zoomfactor, 63.874380 * zoomfactor, 18.459837 * zoomfactor, 64.639236 * zoomfactor, 17.468663 * zoomfactor, 65.360023 * zoomfactor);
        patternContext.bezierCurveTo(17.029104 * zoomfactor, 65.679671 * zoomfactor, 16.965841 * zoomfactor, 66.119211 * zoomfactor, 16.405513 * zoomfactor, 66.390860 * zoomfactor);
        patternContext.bezierCurveTo(16.228319 * zoomfactor, 66.476760 * zoomfactor, 15.873938 * zoomfactor, 66.476760 * zoomfactor, 15.696747 * zoomfactor, 66.562667 * zoomfactor);
        patternContext.bezierCurveTo(15.529688 * zoomfactor, 66.643657 * zoomfactor, 15.743087 * zoomfactor, 66.793966 * zoomfactor, 15.696747 * zoomfactor, 66.906278 * zoomfactor);
        patternContext.bezierCurveTo(15.601227 * zoomfactor, 67.137818 * zoomfactor, 15.496393 * zoomfactor, 67.369497 * zoomfactor, 15.342364 * zoomfactor, 67.593504 * zoomfactor);
        patternContext.bezierCurveTo(14.550171 * zoomfactor, 68.745675 * zoomfactor, 13.983960 * zoomfactor, 69.912794 * zoomfactor, 13.216066 * zoomfactor, 71.029626 * zoomfactor);
        patternContext.bezierCurveTo(13.050589 * zoomfactor, 71.270296 * zoomfactor, 13.553506 * zoomfactor, 71.896872 * zoomfactor, 13.216066 * zoomfactor, 72.060464 * zoomfactor);
        patternContext.bezierCurveTo(13.132536 * zoomfactor, 72.100964 * zoomfactor, 12.914511 * zoomfactor, 72.009244 * zoomfactor, 12.861683 * zoomfactor, 72.060464 * zoomfactor);
        patternContext.bezierCurveTo(12.421638 * zoomfactor, 72.487134 * zoomfactor, 12.782653 * zoomfactor, 74.103614 * zoomfactor, 12.507301 * zoomfactor, 74.637557 * zoomfactor);
        patternContext.bezierCurveTo(12.286322 * zoomfactor, 75.066080 * zoomfactor, 11.798533 * zoomfactor, 75.568873 * zoomfactor, 11.798533 * zoomfactor, 76.012006 * zoomfactor);
        patternContext.bezierCurveTo(11.798533 * zoomfactor, 76.271522 * zoomfactor, 12.088026 * zoomfactor, 79.760283 * zoomfactor, 11.444151 * zoomfactor, 79.448131 * zoomfactor);
        patternContext.bezierCurveTo(10.994333 * zoomfactor, 79.230058 * zoomfactor, 11.851325 * zoomfactor, 78.860638 * zoomfactor, 12.152916 * zoomfactor, 78.589098 * zoomfactor);
        patternContext.bezierCurveTo(17.944885 * zoomfactor, 73.374301 * zoomfactor, 10.724292 * zoomfactor, 79.850050 * zoomfactor, 15.342364 * zoomfactor, 76.012006 * zoomfactor);
        patternContext.bezierCurveTo(15.731645 * zoomfactor, 75.688480 * zoomfactor, 16.549024 * zoomfactor, 74.224371 * zoomfactor, 17.114280 * zoomfactor, 73.950334 * zoomfactor);
        patternContext.bezierCurveTo(17.197810 * zoomfactor, 73.909834 * zoomfactor, 17.403138 * zoomfactor, 73.997984 * zoomfactor, 17.468663 * zoomfactor, 73.950334 * zoomfactor);
        patternContext.bezierCurveTo(17.883081 * zoomfactor, 73.648963 * zoomfactor, 17.710715 * zoomfactor, 73.202326 * zoomfactor, 18.177428 * zoomfactor, 72.919496 * zoomfactor);
        patternContext.bezierCurveTo(18.443495 * zoomfactor, 72.758257 * zoomfactor, 18.985029 * zoomfactor, 72.741072 * zoomfactor, 19.240578 * zoomfactor, 72.575882 * zoomfactor);
        patternContext.bezierCurveTo(19.382333 * zoomfactor, 72.484252 * zoomfactor, 19.134928 * zoomfactor, 72.334718 * zoomfactor, 19.240578 * zoomfactor, 72.232271 * zoomfactor);
        patternContext.bezierCurveTo(19.614131 * zoomfactor, 71.870071 * zoomfactor, 20.468894 * zoomfactor, 71.680703 * zoomfactor, 21.012494 * zoomfactor, 71.373241 * zoomfactor);
        patternContext.bezierCurveTo(23.012368 * zoomfactor, 70.242104 * zoomfactor, 26.087488 * zoomfactor, 68.115459 * zoomfactor, 27.037002 * zoomfactor, 66.734474 * zoomfactor);
        patternContext.bezierCurveTo(28.272925 * zoomfactor, 64.936936 * zoomfactor, 27.582991 * zoomfactor, 62.274912 * zoomfactor, 29.872070 * zoomfactor, 60.721257 * zoomfactor);
        patternContext.bezierCurveTo(30.885264 * zoomfactor, 60.033575 * zoomfactor, 31.830886 * zoomfactor, 59.943421 * zoomfactor, 33.061518 * zoomfactor, 59.346806 * zoomfactor);
        patternContext.bezierCurveTo(34.278898 * zoomfactor, 58.756616 * zoomfactor, 35.876573 * zoomfactor, 57.985292 * zoomfactor, 36.959730 * zoomfactor, 57.285132 * zoomfactor);
        patternContext.bezierCurveTo(37.895463 * zoomfactor, 56.680271 * zoomfactor, 38.437130 * zoomfactor, 55.680833 * zoomfactor, 39.086028 * zoomfactor, 55.051653 * zoomfactor);
        patternContext.bezierCurveTo(39.502806 * zoomfactor, 54.647542 * zoomfactor, 40.528734 * zoomfactor, 54.248012 * zoomfactor, 40.857941 * zoomfactor, 53.849008 * zoomfactor);
        patternContext.bezierCurveTo(41.595314 * zoomfactor, 52.955305 * zoomfactor, 42.080761 * zoomfactor, 52.031828 * zoomfactor, 42.629855 * zoomfactor, 51.100111 * zoomfactor);
        patternContext.bezierCurveTo(43.009700 * zoomfactor, 50.455589 * zoomfactor, 43.747451 * zoomfactor, 49.864592 * zoomfactor, 44.047390 * zoomfactor, 49.210242 * zoomfactor);
        patternContext.bezierCurveTo(44.231138 * zoomfactor, 48.809361 * zoomfactor, 43.909568 * zoomfactor, 48.408480 * zoomfactor, 44.047390 * zoomfactor, 48.007599 * zoomfactor);
        patternContext.bezierCurveTo(44.567446 * zoomfactor, 46.494848 * zoomfactor, 44.401775 * zoomfactor, 44.921828 * zoomfactor, 44.401775 * zoomfactor, 43.368832 * zoomfactor);
        patternContext.bezierCurveTo(44.401775 * zoomfactor, 41.565890 * zoomfactor, 44.771525 * zoomfactor, 39.663611 * zoomfactor, 44.401775 * zoomfactor, 37.871034 * zoomfactor);
        patternContext.bezierCurveTo(44.235673 * zoomfactor, 37.065782 * zoomfactor, 43.877351 * zoomfactor, 36.270080 * zoomfactor, 43.693005 * zoomfactor, 35.465746 * zoomfactor);
        patternContext.bezierCurveTo(43.524468 * zoomfactor, 34.730327 * zoomfactor, 43.844894 * zoomfactor, 33.968586 * zoomfactor, 43.693005 * zoomfactor, 33.232268 * zoomfactor);
        patternContext.bezierCurveTo(43.409866 * zoomfactor, 31.859578 * zoomfactor, 42.914409 * zoomfactor, 30.488442 * zoomfactor, 42.629855 * zoomfactor, 29.108918 * zoomfactor);
        patternContext.bezierCurveTo(42.501314 * zoomfactor, 28.485769 * zoomfactor, 42.772504 * zoomfactor, 27.841425 * zoomfactor, 42.629855 * zoomfactor, 27.219051 * zoomfactor);
        patternContext.bezierCurveTo(42.405513 * zoomfactor, 26.240171 * zoomfactor, 42.173233 * zoomfactor, 25.276263 * zoomfactor, 41.921092 * zoomfactor, 24.298346 * zoomfactor);
        patternContext.bezierCurveTo(41.793446 * zoomfactor, 23.803305 * zoomfactor, 42.143914 * zoomfactor, 23.238201 * zoomfactor, 41.921092 * zoomfactor, 22.752089 * zoomfactor);
        patternContext.bezierCurveTo(41.759027 * zoomfactor, 22.398516 * zoomfactor, 41.358842 * zoomfactor, 22.076419 * zoomfactor, 41.212326 * zoomfactor, 21.721252 * zoomfactor);
        patternContext.bezierCurveTo(40.985154 * zoomfactor, 21.170592 * zoomfactor, 41.439494 * zoomfactor, 20.553852 * zoomfactor, 41.212326 * zoomfactor, 20.003191 * zoomfactor);
        patternContext.bezierCurveTo(41.160506 * zoomfactor, 19.877621 * zoomfactor, 40.895299 * zoomfactor, 19.786348 * zoomfactor, 40.857941 * zoomfactor, 19.659578 * zoomfactor);
        patternContext.bezierCurveTo(40.262137 * zoomfactor, 17.637635 * zoomfactor, 41.380701 * zoomfactor, 15.502044 * zoomfactor, 40.857941 * zoomfactor, 13.474556 * zoomfactor);
        patternContext.bezierCurveTo(40.797531 * zoomfactor, 13.240254 * zoomfactor, 40.583628 * zoomfactor, 13.020244 * zoomfactor, 40.503563 * zoomfactor, 12.787331 * zoomfactor);
        patternContext.bezierCurveTo(40.293480 * zoomfactor, 12.176250 * zoomfactor, 40.753919 * zoomfactor, 11.504338 * zoomfactor, 40.503563 * zoomfactor, 10.897462 * zoomfactor);
        patternContext.bezierCurveTo(40.399952 * zoomfactor, 10.646323 * zoomfactor, 39.922920 * zoomfactor, 10.458704 * zoomfactor, 39.794793 * zoomfactor, 10.210237 * zoomfactor);
        patternContext.bezierCurveTo(39.636016 * zoomfactor, 9.902338 * zoomfactor, 39.567010 * zoomfactor, 9.486283 * zoomfactor, 39.440413 * zoomfactor, 9.179400 * zoomfactor);
        patternContext.bezierCurveTo(39.190523 * zoomfactor, 8.573674 * zoomfactor, 39.690296 * zoomfactor, 7.895259 * zoomfactor, 39.440413 * zoomfactor, 7.289532 * zoomfactor);
        patternContext.bezierCurveTo(39.205412 * zoomfactor, 6.719885 * zoomfactor, 39.023295 * zoomfactor, 6.137047 * zoomfactor, 38.731643 * zoomfactor, 5.571471 * zoomfactor);
        patternContext.bezierCurveTo(38.368872 * zoomfactor, 4.867977 * zoomfactor, 38.809473 * zoomfactor, 1.351785 * zoomfactor, 38.377265 * zoomfactor, 0.932703 * zoomfactor);
        patternContext.bezierCurveTo(37.803233 * zoomfactor, 0.376121 * zoomfactor, 35.118976 * zoomfactor, 1.121196 * zoomfactor, 34.479047 * zoomfactor, 1.276316 * zoomfactor);
        patternContext.bezierCurveTo(34.036583 * zoomfactor, 1.383570 * zoomfactor, 31.878153 * zoomfactor, 1.276316 * zoomfactor, 31.643983 * zoomfactor, 1.276316 * zoomfactor);
        patternContext.fill();

        // #path20715-9-4
        patternContext.beginPath();
        patternContext.fillStyle = 'rgba(131, 72, 35, 0.265487)';
        patternContext.lineWidth = 0.070004 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(47.583203 * zoomfactor, 1.277363 * zoomfactor);
        patternContext.bezierCurveTo(47.356138 * zoomfactor, 1.447661 * zoomfactor, 47.102709 * zoomfactor, 1.587559 * zoomfactor, 46.902010 * zoomfactor, 1.788257 * zoomfactor);
        patternContext.bezierCurveTo(46.561917 * zoomfactor, 2.128352 * zoomfactor, 46.476091 * zoomfactor, 2.938547 * zoomfactor, 46.391115 * zoomfactor, 3.320940 * zoomfactor);
        patternContext.bezierCurveTo(45.898482 * zoomfactor, 5.537788 * zoomfactor, 46.429385 * zoomfactor, 8.336124 * zoomfactor, 47.412904 * zoomfactor, 10.303164 * zoomfactor);
        patternContext.bezierCurveTo(47.695847 * zoomfactor, 10.869047 * zoomfactor, 47.521489 * zoomfactor, 11.766713 * zoomfactor, 47.753502 * zoomfactor, 12.346742 * zoomfactor);
        patternContext.bezierCurveTo(47.813132 * zoomfactor, 12.495816 * zoomfactor, 48.022293 * zoomfactor, 12.543730 * zoomfactor, 48.094098 * zoomfactor, 12.687338 * zoomfactor);
        patternContext.bezierCurveTo(48.550949 * zoomfactor, 13.601040 * zoomfactor, 47.360165 * zoomfactor, 18.741171 * zoomfactor, 47.072309 * zoomfactor, 20.180457 * zoomfactor);
        patternContext.bezierCurveTo(46.836084 * zoomfactor, 21.361578 * zoomfactor, 47.479220 * zoomfactor, 22.318993 * zoomfactor, 47.753502 * zoomfactor, 23.416122 * zoomfactor);
        patternContext.bezierCurveTo(47.836112 * zoomfactor, 23.746549 * zoomfactor, 47.719612 * zoomfactor, 24.099005 * zoomfactor, 47.753502 * zoomfactor, 24.437911 * zoomfactor);
        patternContext.bezierCurveTo(47.782302 * zoomfactor, 24.725926 * zoomfactor, 47.897595 * zoomfactor, 25.001139 * zoomfactor, 47.923799 * zoomfactor, 25.289402 * zoomfactor);
        patternContext.bezierCurveTo(47.999109 * zoomfactor, 26.117750 * zoomfactor, 47.786948 * zoomfactor, 27.022769 * zoomfactor, 47.923799 * zoomfactor, 27.843874 * zoomfactor);
        patternContext.bezierCurveTo(48.096564 * zoomfactor, 28.880459 * zoomfactor, 48.178804 * zoomfactor, 29.978366 * zoomfactor, 48.094098 * zoomfactor, 31.079541 * zoomfactor);
        patternContext.bezierCurveTo(47.877777 * zoomfactor, 33.891701 * zoomfactor, 48.012658 * zoomfactor, 30.709259 * zoomfactor, 47.753502 * zoomfactor, 32.782521 * zoomfactor);
        patternContext.bezierCurveTo(47.697172 * zoomfactor, 33.233143 * zoomfactor, 47.809832 * zoomfactor, 33.694285 * zoomfactor, 47.753502 * zoomfactor, 34.144908 * zoomfactor);
        patternContext.bezierCurveTo(47.577520 * zoomfactor, 35.552758 * zoomfactor, 47.161891 * zoomfactor, 36.932664 * zoomfactor, 46.902010 * zoomfactor, 38.232061 * zoomfactor);
        patternContext.bezierCurveTo(46.758140 * zoomfactor, 38.951413 * zoomfactor, 46.874710 * zoomfactor, 39.730950 * zoomfactor, 46.731713 * zoomfactor, 40.445939 * zoomfactor);
        patternContext.bezierCurveTo(46.661303 * zoomfactor, 40.797988 * zoomfactor, 46.441889 * zoomfactor, 41.112316 * zoomfactor, 46.391115 * zoomfactor, 41.467728 * zoomfactor);
        patternContext.bezierCurveTo(46.287356 * zoomfactor, 42.194038 * zoomfactor, 46.324435 * zoomfactor, 42.956303 * zoomfactor, 46.220819 * zoomfactor, 43.681605 * zoomfactor);
        patternContext.bezierCurveTo(46.202879 * zoomfactor, 43.807261 * zoomfactor, 46.068472 * zoomfactor, 43.896542 * zoomfactor, 46.050520 * zoomfactor, 44.022200 * zoomfactor);
        patternContext.bezierCurveTo(45.922797 * zoomfactor, 44.916264 * zoomfactor, 46.152699 * zoomfactor, 44.737451 * zoomfactor, 46.050520 * zoomfactor, 45.554884 * zoomfactor);
        patternContext.bezierCurveTo(45.943316 * zoomfactor, 46.412515 * zoomfactor, 45.660318 * zoomfactor, 47.264505 * zoomfactor, 45.539625 * zoomfactor, 48.109357 * zoomfactor);
        patternContext.bezierCurveTo(45.452185 * zoomfactor, 48.721425 * zoomfactor, 45.607935 * zoomfactor, 49.367826 * zoomfactor, 45.539625 * zoomfactor, 49.982636 * zoomfactor);
        patternContext.bezierCurveTo(45.482855 * zoomfactor, 50.493530 * zoomfactor, 45.470135 * zoomfactor, 51.011262 * zoomfactor, 45.369326 * zoomfactor, 51.515319 * zoomfactor);
        patternContext.bezierCurveTo(45.274936 * zoomfactor, 51.987259 * zoomfactor, 45.028731 * zoomfactor, 51.867334 * zoomfactor, 45.028731 * zoomfactor, 52.366809 * zoomfactor);
        patternContext.bezierCurveTo(45.028731 * zoomfactor, 53.215701 * zoomfactor, 44.826875 * zoomfactor, 54.088839 * zoomfactor, 44.688135 * zoomfactor, 54.921282 * zoomfactor);
        patternContext.bezierCurveTo(44.593525 * zoomfactor, 55.488943 * zoomfactor, 44.830050 * zoomfactor, 55.063197 * zoomfactor, 44.688135 * zoomfactor, 55.772772 * zoomfactor);
        patternContext.bezierCurveTo(44.359295 * zoomfactor, 57.416972 * zoomfactor, 44.668665 * zoomfactor, 54.376444 * zoomfactor, 44.347538 * zoomfactor, 56.624265 * zoomfactor);
        patternContext.bezierCurveTo(44.270068 * zoomfactor, 57.166573 * zoomfactor, 44.067792 * zoomfactor, 59.513208 * zoomfactor, 43.836644 * zoomfactor, 59.859928 * zoomfactor);
        patternContext.bezierCurveTo(43.766234 * zoomfactor, 59.965545 * zoomfactor, 43.561354 * zoomfactor, 59.921378 * zoomfactor, 43.496047 * zoomfactor, 60.030227 * zoomfactor);
        patternContext.bezierCurveTo(43.283425 * zoomfactor, 60.384597 * zoomfactor, 43.360487 * zoomfactor, 60.863501 * zoomfactor, 43.155451 * zoomfactor, 61.222315 * zoomfactor);
        patternContext.bezierCurveTo(42.873813 * zoomfactor, 61.715181 * zoomfactor, 42.434522 * zoomfactor, 62.103325 * zoomfactor, 42.133662 * zoomfactor, 62.584700 * zoomfactor);
        patternContext.bezierCurveTo(41.670366 * zoomfactor, 63.325973 * zoomfactor, 41.247584 * zoomfactor, 64.084115 * zoomfactor, 40.771277 * zoomfactor, 64.798575 * zoomfactor);
        patternContext.bezierCurveTo(40.560048 * zoomfactor, 65.115418 * zoomfactor, 40.529647 * zoomfactor, 65.551100 * zoomfactor, 40.260382 * zoomfactor, 65.820364 * zoomfactor);
        patternContext.bezierCurveTo(40.175232 * zoomfactor, 65.905514 * zoomfactor, 40.004935 * zoomfactor, 65.905514 * zoomfactor, 39.919786 * zoomfactor, 65.990663 * zoomfactor);
        patternContext.bezierCurveTo(39.839506 * zoomfactor, 66.070943 * zoomfactor, 39.942056 * zoomfactor, 66.219932 * zoomfactor, 39.919786 * zoomfactor, 66.331258 * zoomfactor);
        patternContext.bezierCurveTo(39.873886 * zoomfactor, 66.560766 * zoomfactor, 39.823506 * zoomfactor, 66.790411 * zoomfactor, 39.749488 * zoomfactor, 67.012452 * zoomfactor);
        patternContext.bezierCurveTo(39.368801 * zoomfactor, 68.154510 * zoomfactor, 39.096709 * zoomfactor, 69.311385 * zoomfactor, 38.727699 * zoomfactor, 70.418414 * zoomfactor);
        patternContext.bezierCurveTo(38.648179 * zoomfactor, 70.656971 * zoomfactor, 38.889855 * zoomfactor, 71.278048 * zoomfactor, 38.727699 * zoomfactor, 71.440204 * zoomfactor);
        patternContext.bezierCurveTo(38.687559 * zoomfactor, 71.480344 * zoomfactor, 38.582787 * zoomfactor, 71.389434 * zoomfactor, 38.557401 * zoomfactor, 71.440204 * zoomfactor);
        patternContext.bezierCurveTo(38.345938 * zoomfactor, 71.863129 * zoomfactor, 38.519421 * zoomfactor, 73.465420 * zoomfactor, 38.387103 * zoomfactor, 73.994676 * zoomfactor);
        patternContext.bezierCurveTo(38.280912 * zoomfactor, 74.419438 * zoomfactor, 38.046506 * zoomfactor, 74.917818 * zoomfactor, 38.046506 * zoomfactor, 75.357061 * zoomfactor);
        patternContext.bezierCurveTo(38.046506 * zoomfactor, 75.614299 * zoomfactor, 38.185621 * zoomfactor, 79.072438 * zoomfactor, 37.876208 * zoomfactor, 78.763026 * zoomfactor);
        patternContext.bezierCurveTo(37.660049 * zoomfactor, 78.546867 * zoomfactor, 38.071875 * zoomfactor, 78.180689 * zoomfactor, 38.216804 * zoomfactor, 77.911533 * zoomfactor);
        patternContext.bezierCurveTo(41.000125 * zoomfactor, 72.742509 * zoomfactor, 37.530281 * zoomfactor, 79.161417 * zoomfactor, 39.749488 * zoomfactor, 75.357061 * zoomfactor);
        patternContext.bezierCurveTo(39.936556 * zoomfactor, 75.036375 * zoomfactor, 40.329346 * zoomfactor, 73.585117 * zoomfactor, 40.600979 * zoomfactor, 73.313485 * zoomfactor);
        patternContext.bezierCurveTo(40.641119 * zoomfactor, 73.273345 * zoomfactor, 40.739789 * zoomfactor, 73.360715 * zoomfactor, 40.771277 * zoomfactor, 73.313485 * zoomfactor);
        patternContext.bezierCurveTo(40.970425 * zoomfactor, 73.014760 * zoomfactor, 40.887595 * zoomfactor, 72.572043 * zoomfactor, 41.111873 * zoomfactor, 72.291696 * zoomfactor);
        patternContext.bezierCurveTo(41.239731 * zoomfactor, 72.131872 * zoomfactor, 41.499964 * zoomfactor, 72.114838 * zoomfactor, 41.622768 * zoomfactor, 71.951098 * zoomfactor);
        patternContext.bezierCurveTo(41.690888 * zoomfactor, 71.860268 * zoomfactor, 41.571998 * zoomfactor, 71.712050 * zoomfactor, 41.622768 * zoomfactor, 71.610503 * zoomfactor);
        patternContext.bezierCurveTo(41.802278 * zoomfactor, 71.251482 * zoomfactor, 42.213033 * zoomfactor, 71.063776 * zoomfactor, 42.474259 * zoomfactor, 70.759013 * zoomfactor);
        patternContext.bezierCurveTo(43.435295 * zoomfactor, 69.637804 * zoomfactor, 44.913039 * zoomfactor, 67.529826 * zoomfactor, 45.369326 * zoomfactor, 66.160962 * zoomfactor);
        patternContext.bezierCurveTo(45.963247 * zoomfactor, 64.379202 * zoomfactor, 45.631700 * zoomfactor, 61.740544 * zoomfactor, 46.731713 * zoomfactor, 60.200526 * zoomfactor);
        patternContext.bezierCurveTo(47.218602 * zoomfactor, 59.518880 * zoomfactor, 47.673019 * zoomfactor, 59.429517 * zoomfactor, 48.264397 * zoomfactor, 58.838139 * zoomfactor);
        patternContext.bezierCurveTo(48.849407 * zoomfactor, 58.253130 * zoomfactor, 49.617167 * zoomfactor, 57.488576 * zoomfactor, 50.137676 * zoomfactor, 56.794561 * zoomfactor);
        patternContext.bezierCurveTo(50.587341 * zoomfactor, 56.195010 * zoomfactor, 50.847638 * zoomfactor, 55.204344 * zoomfactor, 51.159465 * zoomfactor, 54.580687 * zoomfactor);
        patternContext.bezierCurveTo(51.359747 * zoomfactor, 54.180123 * zoomfactor, 51.852755 * zoomfactor, 53.784100 * zoomfactor, 52.010955 * zoomfactor, 53.388598 * zoomfactor);
        patternContext.bezierCurveTo(52.365298 * zoomfactor, 52.502739 * zoomfactor, 52.598579 * zoomfactor, 51.587368 * zoomfactor, 52.862445 * zoomfactor, 50.663829 * zoomfactor);
        patternContext.bezierCurveTo(53.044979 * zoomfactor, 50.024964 * zoomfactor, 53.399504 * zoomfactor, 49.439155 * zoomfactor, 53.543639 * zoomfactor, 48.790548 * zoomfactor);
        patternContext.bezierCurveTo(53.631939 * zoomfactor, 48.393186 * zoomfactor, 53.477409 * zoomfactor, 47.995824 * zoomfactor, 53.543639 * zoomfactor, 47.598462 * zoomfactor);
        patternContext.bezierCurveTo(53.793551 * zoomfactor, 46.098989 * zoomfactor, 53.713938 * zoomfactor, 44.539776 * zoomfactor, 53.713938 * zoomfactor, 43.000411 * zoomfactor);
        patternContext.bezierCurveTo(53.713938 * zoomfactor, 41.213294 * zoomfactor, 53.891621 * zoomfactor, 39.327712 * zoomfactor, 53.713938 * zoomfactor, 37.550870 * zoomfactor);
        patternContext.bezierCurveTo(53.634118 * zoomfactor, 36.752686 * zoomfactor, 53.461927 * zoomfactor, 35.963968 * zoomfactor, 53.373340 * zoomfactor, 35.166694 * zoomfactor);
        patternContext.bezierCurveTo(53.292350 * zoomfactor, 34.437730 * zoomfactor, 53.446330 * zoomfactor, 33.682675 * zoomfactor, 53.373340 * zoomfactor, 32.952820 * zoomfactor);
        patternContext.bezierCurveTo(53.237278 * zoomfactor, 31.592179 * zoomfactor, 52.999187 * zoomfactor, 30.233078 * zoomfactor, 52.862445 * zoomfactor, 28.865663 * zoomfactor);
        patternContext.bezierCurveTo(52.800675 * zoomfactor, 28.247983 * zoomfactor, 52.930995 * zoomfactor, 27.609295 * zoomfactor, 52.862445 * zoomfactor, 26.992384 * zoomfactor);
        patternContext.bezierCurveTo(52.754638 * zoomfactor, 26.022096 * zoomfactor, 52.643016 * zoomfactor, 25.066649 * zoomfactor, 52.521850 * zoomfactor, 24.097315 * zoomfactor);
        patternContext.bezierCurveTo(52.460510 * zoomfactor, 23.606620 * zoomfactor, 52.628927 * zoomfactor, 23.046476 * zoomfactor, 52.521850 * zoomfactor, 22.564631 * zoomfactor);
        patternContext.bezierCurveTo(52.443970 * zoomfactor, 22.214161 * zoomfactor, 52.251662 * zoomfactor, 21.894891 * zoomfactor, 52.181254 * zoomfactor, 21.542842 * zoomfactor);
        patternContext.bezierCurveTo(52.072087 * zoomfactor, 20.997015 * zoomfactor, 52.290419 * zoomfactor, 20.385688 * zoomfactor, 52.181254 * zoomfactor, 19.839861 * zoomfactor);
        patternContext.bezierCurveTo(52.156354 * zoomfactor, 19.715393 * zoomfactor, 52.028907 * zoomfactor, 19.624921 * zoomfactor, 52.010955 * zoomfactor, 19.499264 * zoomfactor);
        patternContext.bezierCurveTo(51.724642 * zoomfactor, 17.495068 * zoomfactor, 52.262166 * zoomfactor, 15.378222 * zoomfactor, 52.010955 * zoomfactor, 13.368531 * zoomfactor);
        patternContext.bezierCurveTo(51.981925 * zoomfactor, 13.136285 * zoomfactor, 51.879134 * zoomfactor, 12.918206 * zoomfactor, 51.840659 * zoomfactor, 12.687338 * zoomfactor);
        patternContext.bezierCurveTo(51.739704 * zoomfactor, 12.081620 * zoomfactor, 51.960967 * zoomfactor, 11.415606 * zoomfactor, 51.840659 * zoomfactor, 10.814058 * zoomfactor);
        patternContext.bezierCurveTo(51.790869 * zoomfactor, 10.565123 * zoomfactor, 51.561632 * zoomfactor, 10.379151 * zoomfactor, 51.500061 * zoomfactor, 10.132866 * zoomfactor);
        patternContext.bezierCurveTo(51.423761 * zoomfactor, 9.827669 * zoomfactor, 51.390600 * zoomfactor, 9.415266 * zoomfactor, 51.329764 * zoomfactor, 9.111078 * zoomfactor);
        patternContext.bezierCurveTo(51.209680 * zoomfactor, 8.510668 * zoomfactor, 51.449845 * zoomfactor, 7.838208 * zoomfactor, 51.329764 * zoomfactor, 7.237798 * zoomfactor);
        patternContext.bezierCurveTo(51.216835 * zoomfactor, 6.673151 * zoomfactor, 51.129319 * zoomfactor, 6.095429 * zoomfactor, 50.989166 * zoomfactor, 5.534817 * zoomfactor);
        patternContext.bezierCurveTo(50.814837 * zoomfactor, 4.837497 * zoomfactor, 51.026566 * zoomfactor, 1.352170 * zoomfactor, 50.818870 * zoomfactor, 0.936766 * zoomfactor);
        patternContext.bezierCurveTo(50.543020 * zoomfactor, 0.385069 * zoomfactor, 49.253105 * zoomfactor, 1.123604 * zoomfactor, 48.945588 * zoomfactor, 1.277363 * zoomfactor);
        patternContext.bezierCurveTo(48.732963 * zoomfactor, 1.383675 * zoomfactor, 47.695733 * zoomfactor, 1.277363 * zoomfactor, 47.583203 * zoomfactor, 1.277363 * zoomfactor);
        patternContext.fill();

        // #path26238
        patternContext.beginPath();
        patternContext.fillStyle = 'rgba(130, 72, 34, 0.25885)';
        patternContext.lineWidth = 0.070004 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(58.752866 * zoomfactor, 78.507454 * zoomfactor);
        patternContext.bezierCurveTo(58.752866 * zoomfactor, 77.996560 * zoomfactor, 58.718886 * zoomfactor, 77.484533 * zoomfactor, 58.752866 * zoomfactor, 76.974770 * zoomfactor);
        patternContext.bezierCurveTo(58.906415 * zoomfactor, 74.671530 * zoomfactor, 58.909375 * zoomfactor, 77.126438 * zoomfactor, 59.093462 * zoomfactor, 75.101489 * zoomfactor);
        patternContext.bezierCurveTo(59.254881 * zoomfactor, 73.325881 * zoomfactor, 58.724008 * zoomfactor, 71.339071 * zoomfactor, 58.241972 * zoomfactor, 69.651948 * zoomfactor);
        patternContext.bezierCurveTo(57.926916 * zoomfactor, 68.549252 * zoomfactor, 57.274809 * zoomfactor, 67.540901 * zoomfactor, 57.049884 * zoomfactor, 66.416284 * zoomfactor);
        patternContext.bezierCurveTo(56.730775 * zoomfactor, 64.820733 * zoomfactor, 57.038984 * zoomfactor, 63.241890 * zoomfactor, 56.879587 * zoomfactor, 61.647934 * zoomfactor);
        patternContext.bezierCurveTo(56.777299 * zoomfactor, 60.625068 * zoomfactor, 56.454288 * zoomfactor, 59.609717 * zoomfactor, 56.368693 * zoomfactor, 58.582567 * zoomfactor);
        patternContext.bezierCurveTo(56.288993 * zoomfactor, 57.626225 * zoomfactor, 56.464183 * zoomfactor, 56.642449 * zoomfactor, 56.368693 * zoomfactor, 55.687499 * zoomfactor);
        patternContext.bezierCurveTo(56.120466 * zoomfactor, 53.205226 * zoomfactor, 56.198394 * zoomfactor, 56.829308 * zoomfactor, 56.198394 * zoomfactor, 53.643921 * zoomfactor);
        patternContext.bezierCurveTo(56.198394 * zoomfactor, 51.892115 * zoomfactor, 56.118894 * zoomfactor, 50.113713 * zoomfactor, 56.198394 * zoomfactor, 48.364679 * zoomfactor);
        patternContext.bezierCurveTo(56.253124 * zoomfactor, 47.160603 * zoomfactor, 56.407107 * zoomfactor, 45.975357 * zoomfactor, 56.538989 * zoomfactor, 44.788417 * zoomfactor);
        patternContext.bezierCurveTo(56.698631 * zoomfactor, 43.351656 * zoomfactor, 56.374958 * zoomfactor, 41.943475 * zoomfactor, 56.198394 * zoomfactor, 40.530962 * zoomfactor);
        patternContext.bezierCurveTo(56.106594 * zoomfactor, 39.796540 * zoomfactor, 56.160494 * zoomfactor, 39.045287 * zoomfactor, 56.028095 * zoomfactor, 38.317087 * zoomfactor);
        patternContext.bezierCurveTo(55.695275 * zoomfactor, 36.486568 * zoomfactor, 54.819094 * zoomfactor, 34.025803 * zoomfactor, 53.984516 * zoomfactor, 32.356652 * zoomfactor);
        patternContext.bezierCurveTo(53.852087 * zoomfactor, 32.091791 * zoomfactor, 53.984516 * zoomfactor, 31.274022 * zoomfactor, 53.984516 * zoomfactor, 30.994265 * zoomfactor);
        patternContext.bezierCurveTo(53.984516 * zoomfactor, 29.833239 * zoomfactor, 53.741695 * zoomfactor, 27.999811 * zoomfactor, 53.984516 * zoomfactor, 26.907109 * zoomfactor);
        patternContext.bezierCurveTo(54.107889 * zoomfactor, 26.351941 * zoomfactor, 54.551394 * zoomfactor, 25.775707 * zoomfactor, 54.665710 * zoomfactor, 25.204128 * zoomfactor);
        patternContext.bezierCurveTo(54.732510 * zoomfactor, 24.870146 * zoomfactor, 54.609720 * zoomfactor, 24.518301 * zoomfactor, 54.665710 * zoomfactor, 24.182339 * zoomfactor);
        patternContext.bezierCurveTo(54.789800 * zoomfactor, 23.437798 * zoomfactor, 54.899276 * zoomfactor, 22.717683 * zoomfactor, 55.006305 * zoomfactor, 21.968463 * zoomfactor);
        patternContext.bezierCurveTo(55.031675 * zoomfactor, 21.790757 * zoomfactor, 55.119838 * zoomfactor, 21.627867 * zoomfactor, 55.176605 * zoomfactor, 21.457569 * zoomfactor);
        patternContext.bezierCurveTo(55.233375 * zoomfactor, 21.230504 * zoomfactor, 55.317873 * zoomfactor, 21.008621 * zoomfactor, 55.346904 * zoomfactor, 20.776376 * zoomfactor);
        patternContext.bezierCurveTo(55.495131 * zoomfactor, 19.590561 * zoomfactor, 55.519052 * zoomfactor, 18.379252 * zoomfactor, 55.687499 * zoomfactor, 17.200114 * zoomfactor);
        patternContext.bezierCurveTo(55.745939 * zoomfactor, 16.791005 * zoomfactor, 55.960155 * zoomfactor, 16.415668 * zoomfactor, 56.028095 * zoomfactor, 16.008027 * zoomfactor);
        patternContext.bezierCurveTo(56.097145 * zoomfactor, 15.593729 * zoomfactor, 56.067975 * zoomfactor, 15.036884 * zoomfactor, 56.198394 * zoomfactor, 14.645642 * zoomfactor);
        patternContext.bezierCurveTo(56.238534 * zoomfactor, 14.525223 * zoomfactor, 56.311926 * zoomfactor, 14.418578 * zoomfactor, 56.368693 * zoomfactor, 14.305046 * zoomfactor);
        patternContext.bezierCurveTo(56.482225 * zoomfactor, 14.191513 * zoomfactor, 56.649659 * zoomfactor, 14.113524 * zoomfactor, 56.709288 * zoomfactor, 13.964449 * zoomfactor);
        patternContext.bezierCurveTo(56.772538 * zoomfactor, 13.806331 * zoomfactor, 56.675888 * zoomfactor, 13.620546 * zoomfactor, 56.709288 * zoomfactor, 13.453555 * zoomfactor);
        patternContext.bezierCurveTo(56.779988 * zoomfactor, 13.100066 * zoomfactor, 57.105848 * zoomfactor, 12.774771 * zoomfactor, 57.220183 * zoomfactor, 12.431766 * zoomfactor);
        patternContext.bezierCurveTo(57.383539 * zoomfactor, 11.941700 * zoomfactor, 57.513312 * zoomfactor, 10.946549 * zoomfactor, 57.901376 * zoomfactor, 10.558486 * zoomfactor);
        patternContext.bezierCurveTo(58.184703 * zoomfactor, 10.275158 * zoomfactor, 58.865058 * zoomfactor, 9.765103 * zoomfactor, 59.263761 * zoomfactor, 9.366399 * zoomfactor);
        patternContext.bezierCurveTo(59.479068 * zoomfactor, 9.151092 * zoomfactor, 59.769004 * zoomfactor, 8.520559 * zoomfactor, 59.944954 * zoomfactor, 8.344610 * zoomfactor);
        patternContext.bezierCurveTo(60.034704 * zoomfactor, 8.254855 * zoomfactor, 60.209390 * zoomfactor, 8.275858 * zoomfactor, 60.285550 * zoomfactor, 8.174312 * zoomfactor);
        patternContext.bezierCurveTo(60.949265 * zoomfactor, 7.289359 * zoomfactor, 60.305500 * zoomfactor, 7.944185 * zoomfactor, 60.455849 * zoomfactor, 7.493119 * zoomfactor);
        patternContext.bezierCurveTo(60.574303 * zoomfactor, 7.137753 * zoomfactor, 60.848287 * zoomfactor, 6.996994 * zoomfactor, 60.966743 * zoomfactor, 6.641628 * zoomfactor);
        patternContext.bezierCurveTo(61.095654 * zoomfactor, 6.254897 * zoomfactor, 61.041943 * zoomfactor, 5.829939 * zoomfactor, 61.137040 * zoomfactor, 5.449541 * zoomfactor);
        patternContext.bezierCurveTo(61.327122 * zoomfactor, 4.689221 * zoomfactor, 61.485364 * zoomfactor, 3.731104 * zoomfactor, 61.818233 * zoomfactor, 3.065367 * zoomfactor);
        patternContext.bezierCurveTo(61.869643 * zoomfactor, 2.962545 * zoomfactor, 61.739513 * zoomfactor, 2.633195 * zoomfactor, 61.818233 * zoomfactor, 2.554472 * zoomfactor);
        patternContext.bezierCurveTo(61.858373 * zoomfactor, 2.514332 * zoomfactor, 61.948393 * zoomfactor, 2.594612 * zoomfactor, 61.988533 * zoomfactor, 2.554472 * zoomfactor);
        patternContext.bezierCurveTo(62.243980 * zoomfactor, 2.299025 * zoomfactor, 62.243980 * zoomfactor, 1.788131 * zoomfactor, 62.499427 * zoomfactor, 1.532684 * zoomfactor);
        patternContext.bezierCurveTo(62.539567 * zoomfactor, 1.492544 * zoomfactor, 62.629584 * zoomfactor, 1.572824 * zoomfactor, 62.669723 * zoomfactor, 1.532684 * zoomfactor);
        patternContext.bezierCurveTo(62.709863 * zoomfactor, 1.492544 * zoomfactor, 62.629583 * zoomfactor, 1.402525 * zoomfactor, 62.669723 * zoomfactor, 1.362385 * zoomfactor);
        patternContext.bezierCurveTo(62.750003 * zoomfactor, 1.282106 * zoomfactor, 62.930042 * zoomfactor, 1.442664 * zoomfactor, 63.010322 * zoomfactor, 1.362385 * zoomfactor);
        patternContext.bezierCurveTo(63.050462 * zoomfactor, 1.322245 * zoomfactor, 62.970182 * zoomfactor, 1.232227 * zoomfactor, 63.010322 * zoomfactor, 1.192087 * zoomfactor);
        patternContext.bezierCurveTo(63.090602 * zoomfactor, 1.111808 * zoomfactor, 63.243210 * zoomfactor, 1.227989 * zoomfactor, 63.350917 * zoomfactor, 1.192087 * zoomfactor);
        patternContext.bezierCurveTo(64.976419 * zoomfactor, 0.650253 * zoomfactor, 64.915404 * zoomfactor, 1.192087 * zoomfactor, 66.756880 * zoomfactor, 1.192087 * zoomfactor);
        patternContext.bezierCurveTo(67.551336 * zoomfactor, 1.192087 * zoomfactor, 69.293422 * zoomfactor, 0.457105 * zoomfactor, 69.651948 * zoomfactor, 1.532684 * zoomfactor);
        patternContext.bezierCurveTo(69.948162 * zoomfactor, 2.421321 * zoomfactor, 69.561178 * zoomfactor, 5.255948 * zoomfactor, 69.481651 * zoomfactor, 6.130734 * zoomfactor);
        patternContext.bezierCurveTo(69.455301 * zoomfactor, 6.420646 * zoomfactor, 69.512401 * zoomfactor, 8.129372 * zoomfactor, 69.481651 * zoomfactor, 8.344610 * zoomfactor);
        patternContext.bezierCurveTo(69.233927 * zoomfactor, 10.078668 * zoomfactor, 68.584193 * zoomfactor, 11.779818 * zoomfactor, 68.119264 * zoomfactor, 13.453555 * zoomfactor);
        patternContext.bezierCurveTo(67.964324 * zoomfactor, 14.011338 * zoomfactor, 67.925997 * zoomfactor, 14.596695 * zoomfactor, 67.778669 * zoomfactor, 15.156536 * zoomfactor);
        patternContext.bezierCurveTo(66.303291 * zoomfactor, 20.762969 * zoomfactor, 68.277689 * zoomfactor, 12.308971 * zoomfactor, 66.756880 * zoomfactor, 18.392202 * zoomfactor);
        patternContext.bezierCurveTo(66.673130 * zoomfactor, 18.727186 * zoomfactor, 66.685800 * zoomfactor, 19.083258 * zoomfactor, 66.586581 * zoomfactor, 19.413990 * zoomfactor);
        patternContext.bezierCurveTo(66.513631 * zoomfactor, 19.657150 * zoomfactor, 66.315727 * zoomfactor, 19.851086 * zoomfactor, 66.245985 * zoomfactor, 20.095183 * zoomfactor);
        patternContext.bezierCurveTo(66.199205 * zoomfactor, 20.258929 * zoomfactor, 66.270065 * zoomfactor, 20.437491 * zoomfactor, 66.245985 * zoomfactor, 20.606078 * zoomfactor);
        patternContext.bezierCurveTo(66.099224 * zoomfactor, 21.633420 * zoomfactor, 65.711937 * zoomfactor, 22.641444 * zoomfactor, 65.564792 * zoomfactor, 23.671445 * zoomfactor);
        patternContext.bezierCurveTo(65.410862 * zoomfactor, 24.748961 * zoomfactor, 65.323804 * zoomfactor, 25.811436 * zoomfactor, 65.224196 * zoomfactor, 26.907109 * zoomfactor);
        patternContext.bezierCurveTo(65.171786 * zoomfactor, 27.483636 * zoomfactor, 64.936012 * zoomfactor, 28.033567 * zoomfactor, 64.883601 * zoomfactor, 28.610091 * zoomfactor);
        patternContext.bezierCurveTo(64.723546 * zoomfactor, 30.370695 * zoomfactor, 64.489758 * zoomfactor, 32.441568 * zoomfactor, 64.713302 * zoomfactor, 34.229931 * zoomfactor);
        patternContext.bezierCurveTo(64.735552 * zoomfactor, 34.408054 * zoomfactor, 64.863775 * zoomfactor, 34.562412 * zoomfactor, 64.883601 * zoomfactor, 34.740826 * zoomfactor);
        patternContext.bezierCurveTo(64.921211 * zoomfactor, 35.079339 * zoomfactor, 64.822671 * zoomfactor, 35.427512 * zoomfactor, 64.883601 * zoomfactor, 35.762615 * zoomfactor);
        patternContext.bezierCurveTo(64.938281 * zoomfactor, 36.063377 * zoomfactor, 65.164244 * zoomfactor, 36.314348 * zoomfactor, 65.224196 * zoomfactor, 36.614105 * zoomfactor);
        patternContext.bezierCurveTo(65.419218 * zoomfactor, 37.589211 * zoomfactor, 65.254446 * zoomfactor, 38.699127 * zoomfactor, 65.394495 * zoomfactor, 39.679472 * zoomfactor);
        patternContext.bezierCurveTo(65.452935 * zoomfactor, 40.088581 * zoomfactor, 65.676647 * zoomfactor, 40.462451 * zoomfactor, 65.735091 * zoomfactor, 40.871560 * zoomfactor);
        patternContext.bezierCurveTo(65.791291 * zoomfactor, 41.264927 * zoomfactor, 65.702091 * zoomfactor, 41.667657 * zoomfactor, 65.735091 * zoomfactor, 42.063646 * zoomfactor);
        patternContext.bezierCurveTo(65.862427 * zoomfactor, 43.591670 * zoomfactor, 65.957703 * zoomfactor, 45.127894 * zoomfactor, 66.075686 * zoomfactor, 46.661696 * zoomfactor);
        patternContext.bezierCurveTo(66.123166 * zoomfactor, 47.278991 * zoomfactor, 66.343619 * zoomfactor, 48.478961 * zoomfactor, 66.586581 * zoomfactor, 49.045870 * zoomfactor);
        patternContext.bezierCurveTo(66.649831 * zoomfactor, 49.193447 * zoomfactor, 66.855374 * zoomfactor, 49.242860 * zoomfactor, 66.927179 * zoomfactor, 49.386468 * zoomfactor);
        patternContext.bezierCurveTo(67.341622 * zoomfactor, 50.215355 * zoomfactor, 67.187180 * zoomfactor, 51.565280 * zoomfactor, 67.267774 * zoomfactor, 52.451835 * zoomfactor);
        patternContext.bezierCurveTo(67.385689 * zoomfactor, 53.748892 * zoomfactor, 67.875887 * zoomfactor, 55.031105 * zoomfactor, 67.608370 * zoomfactor, 56.368693 * zoomfactor);
        patternContext.bezierCurveTo(67.412337 * zoomfactor, 57.348860 * zoomfactor, 66.708120 * zoomfactor, 58.091326 * zoomfactor, 66.245985 * zoomfactor, 58.923165 * zoomfactor);
        patternContext.bezierCurveTo(65.857519 * zoomfactor, 59.622403 * zoomfactor, 65.506268 * zoomfactor, 60.555147 * zoomfactor, 65.224196 * zoomfactor, 61.307339 * zoomfactor);
        patternContext.bezierCurveTo(64.933435 * zoomfactor, 62.082700 * zoomfactor, 65.179126 * zoomfactor, 62.156310 * zoomfactor, 64.713302 * zoomfactor, 63.010322 * zoomfactor);
        patternContext.bezierCurveTo(64.342665 * zoomfactor, 63.689822 * zoomfactor, 63.969878 * zoomfactor, 63.924042 * zoomfactor, 63.521216 * zoomfactor, 64.372706 * zoomfactor);
        patternContext.bezierCurveTo(63.332388 * zoomfactor, 64.561534 * zoomfactor, 63.343331 * zoomfactor, 65.402081 * zoomfactor, 63.180618 * zoomfactor, 65.564792 * zoomfactor);
        patternContext.bezierCurveTo(62.718629 * zoomfactor, 66.026783 * zoomfactor, 62.824772 * zoomfactor, 65.315692 * zoomfactor, 62.669723 * zoomfactor, 66.245985 * zoomfactor);
        patternContext.bezierCurveTo(62.536540 * zoomfactor, 67.045090 * zoomfactor, 62.894072 * zoomfactor, 66.517233 * zoomfactor, 62.499427 * zoomfactor, 67.438073 * zoomfactor);
        patternContext.bezierCurveTo(62.418797 * zoomfactor, 67.626197 * zoomfactor, 62.234844 * zoomfactor, 67.758934 * zoomfactor, 62.158829 * zoomfactor, 67.948968 * zoomfactor);
        patternContext.bezierCurveTo(61.981727 * zoomfactor, 68.391724 * zoomfactor, 62.158035 * zoomfactor, 72.204420 * zoomfactor, 62.329128 * zoomfactor, 72.717315 * zoomfactor);
        patternContext.bezierCurveTo(62.476218 * zoomfactor, 73.158585 * zoomfactor, 63.957218 * zoomfactor, 75.857575 * zoomfactor, 63.521216 * zoomfactor, 76.293577 * zoomfactor);
        patternContext.bezierCurveTo(63.481076 * zoomfactor, 76.333717 * zoomfactor, 63.391057 * zoomfactor, 76.253437 * zoomfactor, 63.350917 * zoomfactor, 76.293577 * zoomfactor);
        patternContext.bezierCurveTo(63.129683 * zoomfactor, 76.514811 * zoomfactor, 62.877178 * zoomfactor, 77.296787 * zoomfactor, 62.499427 * zoomfactor, 77.485665 * zoomfactor);
        patternContext.bezierCurveTo(62.195519 * zoomfactor, 77.637618 * zoomfactor, 61.343195 * zoomfactor, 78.163861 * zoomfactor, 61.137040 * zoomfactor, 78.507454 * zoomfactor);
        patternContext.bezierCurveTo(61.044680 * zoomfactor, 78.661381 * zoomfactor, 61.066320 * zoomfactor, 78.868986 * zoomfactor, 60.966743 * zoomfactor, 79.018349 * zoomfactor);
        patternContext.bezierCurveTo(60.909043 * zoomfactor, 79.104909 * zoomfactor, 60.643452 * zoomfactor, 79.205951 * zoomfactor, 60.626145 * zoomfactor, 79.188645 * zoomfactor);
        patternContext.bezierCurveTo(60.455426 * zoomfactor, 79.017925 * zoomfactor, 60.796444 * zoomfactor, 78.748990 * zoomfactor, 60.796444 * zoomfactor, 78.677750 * zoomfactor);
        patternContext.bezierCurveTo(60.796444 * zoomfactor, 78.620980 * zoomfactor, 60.682912 * zoomfactor, 78.677750 * zoomfactor, 60.626145 * zoomfactor, 78.677750 * zoomfactor);
        patternContext.bezierCurveTo(59.961994 * zoomfactor, 78.677750 * zoomfactor, 59.417984 * zoomfactor, 78.640480 * zoomfactor, 58.752866 * zoomfactor, 78.507454 * zoomfactor);
        patternContext.fill();

        // #path27562
        patternContext.beginPath();
        patternContext.fillStyle = 'rgba(174, 95, 45, 0.110619)';
        patternContext.lineWidth = 0.070004 * zoomfactor;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(22.649656 * zoomfactor, 1.021789 * zoomfactor);
        patternContext.bezierCurveTo(22.145005 * zoomfactor, 1.749127 * zoomfactor, 22.149425 * zoomfactor, 2.533144 * zoomfactor, 21.798165 * zoomfactor, 3.235665 * zoomfactor);
        patternContext.bezierCurveTo(21.518860 * zoomfactor, 3.794274 * zoomfactor, 22.595177 * zoomfactor, 6.409989 * zoomfactor, 22.309059 * zoomfactor, 6.982225 * zoomfactor);
        patternContext.bezierCurveTo(21.922118 * zoomfactor, 7.756107 * zoomfactor, 21.339554 * zoomfactor, 8.410341 * zoomfactor, 20.946674 * zoomfactor, 9.196101 * zoomfactor);
        patternContext.bezierCurveTo(20.738103 * zoomfactor, 9.613242 * zoomfactor, 20.552244 * zoomfactor, 10.176135 * zoomfactor, 20.265481 * zoomfactor, 10.558486 * zoomfactor);
        patternContext.bezierCurveTo(19.790287 * zoomfactor, 11.192078 * zoomfactor, 20.001037 * zoomfactor, 10.576476 * zoomfactor, 19.584289 * zoomfactor, 11.409977 * zoomfactor);
        patternContext.bezierCurveTo(19.504009 * zoomfactor, 11.570536 * zoomfactor, 19.526129 * zoomfactor, 11.780698 * zoomfactor, 19.413990 * zoomfactor, 11.920872 * zoomfactor);
        patternContext.bezierCurveTo(19.286132 * zoomfactor, 12.080694 * zoomfactor, 19.030954 * zoomfactor, 12.101645 * zoomfactor, 18.903096 * zoomfactor, 12.261468 * zoomfactor);
        patternContext.bezierCurveTo(18.790957 * zoomfactor, 12.401641 * zoomfactor, 18.859726 * zoomfactor, 12.645430 * zoomfactor, 18.732798 * zoomfactor, 12.772362 * zoomfactor);
        patternContext.bezierCurveTo(18.652518 * zoomfactor, 12.852642 * zoomfactor, 18.486666 * zoomfactor, 12.709382 * zoomfactor, 18.392202 * zoomfactor, 12.772362 * zoomfactor);
        patternContext.bezierCurveTo(18.235280 * zoomfactor, 12.876977 * zoomfactor, 18.150320 * zoomfactor, 13.354840 * zoomfactor, 18.051605 * zoomfactor, 13.453555 * zoomfactor);
        patternContext.bezierCurveTo(17.874526 * zoomfactor, 13.630634 * zoomfactor, 17.396574 * zoomfactor, 13.840058 * zoomfactor, 17.200114 * zoomfactor, 14.134748 * zoomfactor);
        patternContext.bezierCurveTo(17.137134 * zoomfactor, 14.229208 * zoomfactor, 17.236014 * zoomfactor, 14.367638 * zoomfactor, 17.200114 * zoomfactor, 14.475344 * zoomfactor);
        patternContext.bezierCurveTo(16.852028 * zoomfactor, 15.519603 * zoomfactor, 15.963340 * zoomfactor, 16.479306 * zoomfactor, 15.326835 * zoomfactor, 17.370413 * zoomfactor);
        patternContext.bezierCurveTo(15.105500 * zoomfactor, 17.680281 * zoomfactor, 15.085205 * zoomfactor, 18.122937 * zoomfactor, 14.815940 * zoomfactor, 18.392202 * zoomfactor);
        patternContext.bezierCurveTo(14.775800 * zoomfactor, 18.432342 * zoomfactor, 14.685782 * zoomfactor, 18.352062 * zoomfactor, 14.645642 * zoomfactor, 18.392202 * zoomfactor);
        patternContext.bezierCurveTo(14.548122 * zoomfactor, 18.489722 * zoomfactor, 14.527723 * zoomfactor, 18.916257 * zoomfactor, 14.475344 * zoomfactor, 19.073394 * zoomfactor);
        patternContext.bezierCurveTo(14.209034 * zoomfactor, 19.872325 * zoomfactor, 13.278987 * zoomfactor, 22.143031 * zoomfactor, 12.772362 * zoomfactor, 22.649656 * zoomfactor);
        patternContext.bezierCurveTo(12.732222 * zoomfactor, 22.689796 * zoomfactor, 12.642204 * zoomfactor, 22.609516 * zoomfactor, 12.602064 * zoomfactor, 22.649656 * zoomfactor);
        patternContext.bezierCurveTo(12.561764 * zoomfactor, 22.689956 * zoomfactor, 12.504024 * zoomfactor, 24.037816 * zoomfactor, 12.431766 * zoomfactor, 24.182339 * zoomfactor);
        patternContext.bezierCurveTo(12.317609 * zoomfactor, 24.410654 * zoomfactor, 11.840616 * zoomfactor, 25.114086 * zoomfactor, 11.750573 * zoomfactor, 25.204128 * zoomfactor);
        patternContext.bezierCurveTo(11.665423 * zoomfactor, 25.289278 * zoomfactor, 11.324828 * zoomfactor, 25.118978 * zoomfactor, 11.239679 * zoomfactor, 25.204128 * zoomfactor);
        patternContext.bezierCurveTo(11.154529 * zoomfactor, 25.289278 * zoomfactor, 11.154529 * zoomfactor, 25.459575 * zoomfactor, 11.069381 * zoomfactor, 25.544724 * zoomfactor);
        patternContext.bezierCurveTo(11.029241 * zoomfactor, 25.584864 * zoomfactor, 10.939222 * zoomfactor, 25.504584 * zoomfactor, 10.899082 * zoomfactor, 25.544724 * zoomfactor);
        patternContext.bezierCurveTo(10.673824 * zoomfactor, 25.769983 * zoomfactor, 10.930212 * zoomfactor, 27.449134 * zoomfactor, 11.069381 * zoomfactor, 27.588302 * zoomfactor);
        patternContext.bezierCurveTo(11.109521 * zoomfactor, 27.628442 * zoomfactor, 11.214292 * zoomfactor, 27.537532 * zoomfactor, 11.239679 * zoomfactor, 27.588302 * zoomfactor);
        patternContext.bezierCurveTo(11.434239 * zoomfactor, 27.977422 * zoomfactor, 11.239679 * zoomfactor, 33.423632 * zoomfactor, 11.239679 * zoomfactor, 34.400228 * zoomfactor);
        patternContext.bezierCurveTo(11.239679 * zoomfactor, 34.647071 * zoomfactor, 11.045388 * zoomfactor, 35.568323 * zoomfactor, 11.239679 * zoomfactor, 35.762615 * zoomfactor);
        patternContext.bezierCurveTo(11.281739 * zoomfactor, 35.804675 * zoomfactor, 12.389709 * zoomfactor, 35.804675 * zoomfactor, 12.431766 * zoomfactor, 35.762615 * zoomfactor);
        patternContext.bezierCurveTo(12.521526 * zoomfactor, 35.672865 * zoomfactor, 12.512306 * zoomfactor, 35.511774 * zoomfactor, 12.602064 * zoomfactor, 35.422017 * zoomfactor);
        patternContext.bezierCurveTo(12.849070 * zoomfactor, 35.175012 * zoomfactor, 13.174532 * zoomfactor, 35.290688 * zoomfactor, 13.453555 * zoomfactor, 35.081421 * zoomfactor);
        patternContext.bezierCurveTo(14.104522 * zoomfactor, 34.593196 * zoomfactor, 14.658041 * zoomfactor, 34.223732 * zoomfactor, 15.326835 * zoomfactor, 33.889336 * zoomfactor);
        patternContext.bezierCurveTo(15.850028 * zoomfactor, 33.627737 * zoomfactor, 15.045170 * zoomfactor, 33.793286 * zoomfactor, 15.667431 * zoomfactor, 33.378441 * zoomfactor);
        patternContext.bezierCurveTo(15.761891 * zoomfactor, 33.315461 * zoomfactor, 15.913563 * zoomfactor, 33.441421 * zoomfactor, 16.008027 * zoomfactor, 33.378441 * zoomfactor);
        patternContext.bezierCurveTo(16.284125 * zoomfactor, 33.194376 * zoomfactor, 17.112309 * zoomfactor, 31.933562 * zoomfactor, 17.370413 * zoomfactor, 31.675459 * zoomfactor);
        patternContext.bezierCurveTo(17.868703 * zoomfactor, 31.177169 * zoomfactor, 18.752224 * zoomfactor, 30.974839 * zoomfactor, 19.243692 * zoomfactor, 30.483370 * zoomfactor);
        patternContext.bezierCurveTo(19.333452 * zoomfactor, 30.393620 * zoomfactor, 19.324232 * zoomfactor, 30.232530 * zoomfactor, 19.413990 * zoomfactor, 30.142775 * zoomfactor);
        patternContext.bezierCurveTo(19.953672 * zoomfactor, 29.603094 * zoomfactor, 20.625578 * zoomfactor, 29.281535 * zoomfactor, 21.287270 * zoomfactor, 28.950687 * zoomfactor);
        patternContext.bezierCurveTo(21.423574 * zoomfactor, 28.882537 * zoomfactor, 22.200873 * zoomfactor, 27.920881 * zoomfactor, 22.309059 * zoomfactor, 27.758601 * zoomfactor);
        patternContext.bezierCurveTo(22.515571 * zoomfactor, 27.448832 * zoomfactor, 22.860698 * zoomfactor, 27.497582 * zoomfactor, 23.160550 * zoomfactor, 27.247707 * zoomfactor);
        patternContext.bezierCurveTo(23.475018 * zoomfactor, 26.985650 * zoomfactor, 23.552292 * zoomfactor, 26.515369 * zoomfactor, 23.841743 * zoomfactor, 26.225917 * zoomfactor);
        patternContext.bezierCurveTo(23.986469 * zoomfactor, 26.081191 * zoomfactor, 24.224779 * zoomfactor, 26.045144 * zoomfactor, 24.352637 * zoomfactor, 25.885321 * zoomfactor);
        patternContext.bezierCurveTo(24.878973 * zoomfactor, 25.227401 * zoomfactor, 24.734942 * zoomfactor, 24.034628 * zoomfactor, 25.204128 * zoomfactor, 23.330848 * zoomfactor);
        patternContext.bezierCurveTo(25.337721 * zoomfactor, 23.130459 * zoomfactor, 25.581430 * zoomfactor, 23.020343 * zoomfactor, 25.715023 * zoomfactor, 22.819954 * zoomfactor);
        patternContext.bezierCurveTo(26.177502 * zoomfactor, 22.126235 * zoomfactor, 26.633350 * zoomfactor, 21.005580 * zoomfactor, 27.077408 * zoomfactor, 20.265481 * zoomfactor);
        patternContext.bezierCurveTo(27.160018 * zoomfactor, 20.127804 * zoomfactor, 27.346201 * zoomfactor, 20.068493 * zoomfactor, 27.418003 * zoomfactor, 19.924885 * zoomfactor);
        patternContext.bezierCurveTo(27.468773 * zoomfactor, 19.823339 * zoomfactor, 27.367233 * zoomfactor, 19.685835 * zoomfactor, 27.418003 * zoomfactor, 19.584289 * zoomfactor);
        patternContext.bezierCurveTo(27.489813 * zoomfactor, 19.440681 * zoomfactor, 27.719660 * zoomfactor, 19.399457 * zoomfactor, 27.758601 * zoomfactor, 19.243692 * zoomfactor);
        patternContext.bezierCurveTo(27.841211 * zoomfactor, 18.913265 * zoomfactor, 27.724711 * zoomfactor, 18.560810 * zoomfactor, 27.758601 * zoomfactor, 18.221903 * zoomfactor);
        patternContext.bezierCurveTo(27.821631 * zoomfactor, 17.591584 * zoomfactor, 27.996316 * zoomfactor, 16.965907 * zoomfactor, 28.099197 * zoomfactor, 16.348624 * zoomfactor);
        patternContext.bezierCurveTo(28.166927 * zoomfactor, 15.942261 * zoomfactor, 27.968292 * zoomfactor, 15.378955 * zoomfactor, 28.099197 * zoomfactor, 14.986238 * zoomfactor);
        patternContext.bezierCurveTo(28.350861 * zoomfactor, 14.231246 * zoomfactor, 28.605660 * zoomfactor, 12.239307 * zoomfactor, 28.439792 * zoomfactor, 11.409977 * zoomfactor);
        patternContext.bezierCurveTo(28.424052 * zoomfactor, 11.331257 * zoomfactor, 28.294883 * zoomfactor, 11.315837 * zoomfactor, 28.269496 * zoomfactor, 11.239679 * zoomfactor);
        patternContext.bezierCurveTo(27.929840 * zoomfactor, 10.220709 * zoomfactor, 27.533118 * zoomfactor, 8.961126 * zoomfactor, 27.758601 * zoomfactor, 7.833715 * zoomfactor);
        patternContext.bezierCurveTo(27.837301 * zoomfactor, 7.440218 * zoomfactor, 28.007529 * zoomfactor, 7.178599 * zoomfactor, 28.099197 * zoomfactor, 6.811926 * zoomfactor);
        patternContext.bezierCurveTo(28.190507 * zoomfactor, 6.446699 * zoomfactor, 27.928448 * zoomfactor, 5.791039 * zoomfactor, 28.099197 * zoomfactor, 5.449541 * zoomfactor);
        patternContext.bezierCurveTo(28.307212 * zoomfactor, 5.033512 * zoomfactor, 28.640037 * zoomfactor, 4.818869 * zoomfactor, 28.780390 * zoomfactor, 4.257454 * zoomfactor);
        patternContext.bezierCurveTo(28.937201 * zoomfactor, 3.630208 * zoomfactor, 28.780390 * zoomfactor, 2.716843 * zoomfactor, 28.780390 * zoomfactor, 2.043578 * zoomfactor);
        patternContext.bezierCurveTo(28.780390 * zoomfactor, 1.973455 * zoomfactor, 28.825470 * zoomfactor, 1.577762 * zoomfactor, 28.780390 * zoomfactor, 1.532683 * zoomfactor);
        patternContext.bezierCurveTo(28.689030 * zoomfactor, 1.441320 * zoomfactor, 28.150253 * zoomfactor, 1.634795 * zoomfactor, 28.099197 * zoomfactor, 1.532683 * zoomfactor);
        patternContext.bezierCurveTo(28.099197 * zoomfactor, 0.567661 * zoomfactor, 28.212729 * zoomfactor, 1.475917 * zoomfactor, 27.928898 * zoomfactor, 1.192087 * zoomfactor);
        patternContext.bezierCurveTo(27.786983 * zoomfactor, 1.050172 * zoomfactor, 28.070815 * zoomfactor, 0.482511 * zoomfactor, 27.928898 * zoomfactor, 0.340596 * zoomfactor);
        patternContext.bezierCurveTo(27.843928 * zoomfactor, 0.255622 * zoomfactor, 27.210752 * zoomfactor, 0.340596 * zoomfactor, 27.077408 * zoomfactor, 0.340596 * zoomfactor);
        patternContext.bezierCurveTo(26.529225 * zoomfactor, 0.340596 * zoomfactor, 27.368124 * zoomfactor, 0.300457 * zoomfactor, 26.736812 * zoomfactor, 0.510894 * zoomfactor);
        patternContext.bezierCurveTo(26.467546 * zoomfactor, 0.600649 * zoomfactor, 26.160676 * zoomfactor, 0.442056 * zoomfactor, 25.885321 * zoomfactor, 0.510894 * zoomfactor);
        patternContext.bezierCurveTo(25.649804 * zoomfactor, 0.569774 * zoomfactor, 25.317172 * zoomfactor, 0.780655 * zoomfactor, 25.033830 * zoomfactor, 0.851491 * zoomfactor);
        patternContext.bezierCurveTo(24.489042 * zoomfactor, 0.987688 * zoomfactor, 23.189346 * zoomfactor, 1.021789 * zoomfactor, 22.649656 * zoomfactor, 1.021789 * zoomfactor);
        patternContext.fill();

        return context.createPattern(patternCanvas, 'repeat');
    },
    portal: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize;

        patternContext.arc(blockSize / 2, blockSize / 2, blockSize / 2, 0, 2 * Math.PI);
        patternContext.fillStyle = "#888";
        patternContext.fill();

        return context.createPattern(patternCanvas, 'repeat');
    },
    stop: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize;

        patternContext.beginPath();
        patternContext.fillStyle = 'rgba(255, 255, 255, 0)';
        patternContext.strokeStyle = 'rgba(180, 35, 35, 0.533186)';
        patternContext.lineWidth = 3 * zoomfactor;
        patternContext.moveTo(21.366168 * zoomfactor, 21.509076 * zoomfactor);
        patternContext.bezierCurveTo(11.145551 * zoomfactor, 31.792731 * zoomfactor, 11.183869 * zoomfactor, 48.410824 * zoomfactor, 21.451801 * zoomfactor, 58.647236 * zoomfactor);
        patternContext.bezierCurveTo(31.719733 * zoomfactor, 68.883649 * zoomfactor, 48.337865 * zoomfactor, 68.870876 * zoomfactor, 58.590049 * zoomfactor, 58.618692 * zoomfactor);
        patternContext.bezierCurveTo(68.842233 * zoomfactor, 48.366508 * zoomfactor, 68.855006 * zoomfactor, 31.748376 * zoomfactor, 58.618593 * zoomfactor, 21.480444 * zoomfactor);
        patternContext.bezierCurveTo(48.382181 * zoomfactor, 11.212512 * zoomfactor, 31.764088 * zoomfactor, 11.174194 * zoomfactor, 21.480433 * zoomfactor, 21.394811 * zoomfactor);
        patternContext.moveTo(21.366168 * zoomfactor, 21.509076 * zoomfactor);
        patternContext.lineTo(58.616520 * zoomfactor, 58.530897 * zoomfactor);
        patternContext.fill();
        patternContext.stroke();

        return context.createPattern(patternCanvas, 'repeat');
    }
}