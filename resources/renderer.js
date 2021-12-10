var EntityHelper = {
    beginRotationOffset: function(x, y, angle) {
        context.translate(-(-x + context.canvas.width / 2), -(-y + context.canvas.height / 2));
        context.translate(context.canvas.width / 2, context.canvas.height / 2);

        context.rotate(angle);
    },

    endRotationOffset: function(x, y, angle) {
        context.rotate(-angle);

        context.translate(-context.canvas.width / 2, -context.canvas.height / 2);
        context.translate(+(-x + context.canvas.width / 2), +(-y + context.canvas.height / 2));
    }
};

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

        patternContext.beginPath();
        patternContext.fillStyle = '#d2691e';
        patternContext.arc(patternCanvas.width / 2, patternCanvas.height / 2, 30 * zoomfactor, 0, 2 * Math.PI);
        patternContext.fill();

        patternContext.beginPath();
        patternContext.fillStyle = '#864313';
        patternContext.arc(patternCanvas.width / 3, patternCanvas.height / 3, 7 * zoomfactor, 0, 2 * Math.PI);
        patternContext.fill();
        patternContext.beginPath();
        patternContext.arc(patternCanvas.width / 2, patternCanvas.height / 1.8, 5 * zoomfactor, 0, 2 * Math.PI);
        patternContext.fill();
        patternContext.beginPath();
        patternContext.arc(patternCanvas.width / 1.5, patternCanvas.height / 2.3, 4 * zoomfactor, 0, 2 * Math.PI);
        patternContext.fill();
        patternContext.beginPath();
        patternContext.arc(patternCanvas.width / 2.7, patternCanvas.height / 1.4, 5 * zoomfactor, 0, 2 * Math.PI);
        patternContext.fill();
        patternContext.beginPath();
        patternContext.arc(patternCanvas.width / 1.5, patternCanvas.height / 1.4, 6 * zoomfactor, 0, 2 * Math.PI);
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
        patternContext.globalAlpha = 1.0 * zoomfactor;
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
        patternContext.globalAlpha = 1.0 * zoomfactor;
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
        patternContext.globalAlpha = 1.0 * zoomfactor;
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
        patternContext.globalAlpha = 1.0 * zoomfactor;
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
        patternContext.globalAlpha = 1.0 * zoomfactor;
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
        patternContext.globalAlpha = 1.0 * zoomfactor;
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
        patternContext.globalAlpha = 1.0 * zoomfactor;
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
        patternContext.globalAlpha = 1.0 * zoomfactor;
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
    }
}

var EntityDrawer = {
    player: function(rotation) {
        context.beginPath();
        context.rect(-blockSize / 2, -blockSize / 2 - playerOverlap, blockSize, blockSize + playerOverlap);
        context.translate(-blockSize / 2, -blockSize / 2 - playerOverlap);
        switch (rotation) {
            case 1:
                context.fillStyle = patterns.player1;
                break;
            case 2:
                context.fillStyle = patterns.player2;
                break;
            case 3:
                context.fillStyle = patterns.player3;
                break;
            case 4:
                /*if (tmpplayerrotation == 20) {
                    tmpplayerrotation = 0;
                }
                if (tmpplayerrotation < 5) {
                    context.fillStyle = patterns.player5;
                } else if (tmpplayerrotation < 10) {
                    context.fillStyle = patterns.player4;
                } else if (tmpplayerrotation < 15) {
                    context.fillStyle = patterns.player3;
                } else {
                    context.fillStyle = patterns.player4;
                }
                tmpplayerrotation += 1;*/
                if (rotateplayer) {
                    if (tmpplayerrotation == 40) {
                        tmpplayerrotation = 0;
                    }

                    if (tmpplayerrotation < 5) {
                        context.fillStyle = patterns.player0;
                    } else if (tmpplayerrotation < 10) {
                        context.fillStyle = patterns.player1;
                    } else if (tmpplayerrotation < 15) {
                        context.fillStyle = patterns.player2;
                    } else if (tmpplayerrotation < 20) {
                        context.fillStyle = patterns.player3;
                    } else if (tmpplayerrotation < 25) {
                        context.fillStyle = patterns.player4;
                    } else if (tmpplayerrotation < 30) {
                        context.fillStyle = patterns.player5;
                    } else if (tmpplayerrotation < 35) {
                        context.fillStyle = patterns.player6;
                    } else {
                        context.fillStyle = patterns.player7;
                    }
                    tmpplayerrotation += 1;
                } else {
                    context.fillStyle = patterns.player4;
                }
                break;
            case 5:
                context.fillStyle = patterns.player5;
                break;
            case 6:
                context.fillStyle = patterns.player6;
                break;
            case 7:
                context.fillStyle = patterns.player7;
                break;
            default:
                context.fillStyle = patterns.player0;
                break;

        }
        context.fill();
        if (rotateplayer) {
            context.font = '42px sans-serif';
            context.fillStyle = "#000";
            context.fillText('loading...', -35, 140);
        }
        context.translate(blockSize / 2, blockSize / 2 + playerOverlap);
    },
    wall: function(x, y, type, details, corners) {
        context.beginPath();

        context.fillStyle = colors.wall;
        switch (details) {
            case 'i':
                context.fillStyle = "#00000000";
                context.rect(x, y, blockSize, blockSize);
                break;
            default:
                context.rect(x + blockSize / 4, y + blockSize / 4, blockSize / 2, blockSize / 2);
                if (corners.right) {
                    context.rect(x + blockSize / 4 * 3, y + blockSize / 4, blockSize / 4, blockSize / 2);
                }
                if (corners.left) {
                    context.rect(x, y + blockSize / 4, blockSize / 4, blockSize / 2);
                }
                if (corners.bottom) {
                    context.rect(x + blockSize / 4, y + blockSize / 4 * 3, blockSize / 2, blockSize / 4);
                }
                if (corners.top) {
                    context.rect(x + blockSize / 4, y, blockSize / 2, blockSize / 4);
                }
                break;
        }
        context.fill();
    },
    carpet: function(x, y, type, details) {
        context.beginPath();
        context.rect(x, y, blockSize, blockSize);
        switch (type) {
            case 't':
                context.fillStyle = patterns.stairsX;
                break;
            case 'T':
                context.fillStyle = patterns.stairsY;
                break;
            case 'H':
                switch (details) {
                    case 'a':
                        context.fillStyle = patterns.heizungA;
                        break;
                    case 'm':
                        context.fillStyle = patterns.heizungM;
                        break;
                    case 'e':
                        context.fillStyle = patterns.heizungE;
                        break;
                }
                break;
            case 'v':
            case 'V':
                context.fillStyle = '#aa0000';
                break;
            case 'D':
                context.fillStyle = '#0088ff11';
                break;
        }
        context.fill();
    },
    entity: function(x, y, type, details) {
        context.beginPath();
        context.rect(x, y, blockSize, blockSize);
        switch (type) {
            case 'e':
                switch (details) {
                    case 'k':
                        context.fillStyle = patterns.cookie;
                        break;
                }
                break;
        }
        context.fill();
    }
};

EntityCollision = {};

EntityCollision.arcToWall = function(arcX, arcY, arcRadius, wallX, wallY, wallSize, details, corners) {
    var wallSizeX = (corners.left && corners.right ? wallSize : (corners.left || corners.right ? wallSize / 4 * 3 : wallSize / 2));
    var wallSizeY = (corners.top && corners.bottom ? wallSize : (corners.top || corners.bottom ? wallSize / 4 * 3 : wallSize / 2));

    wallX = (corners.left ? wallX : wallX + wallSize / 4);
    wallY = (corners.top ? wallY : wallY + wallSize / 4);

    var distX = Math.abs(arcX - wallX - wallSizeX / 2);
    var distY = Math.abs(arcY - wallY - wallSizeY / 2);

    if (distX > (wallSizeX / 2 + arcRadius)) { return false; }
    if (distY > (wallSizeY / 2 + arcRadius)) { return false; }

    if (distX <= (wallSizeX / 2)) { return true; }
    if (distY <= (wallSizeY / 2)) { return true; }

    var dx = distX - wallSizeX / 2;
    var dy = distY - wallSizeY / 2;

    return (dx * dx + dy * dy <= (arcRadius * arcRadius));
};

EntityCollision.arcToWalls = function(arcX, arcY) {
    var resultVector = { x: 0, y: 0 };

    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];

        if (EntityCollision.arcToWall(arcX, arcY, arcSizeRadius, wall.x, wall.y, blockSize, wall.details, wall.collCorners)) {
            var wallCenterX = wall.x + blockSize / 2;
            var wallCenterY = wall.y + blockSize / 2;

            var vectorX = arcX - wallCenterX;
            var vectorY = arcY - wallCenterY;

            var length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

            if (length > 0) {
                vectorX /= length;
                vectorY /= length;

                resultVector.x += vectorX;
                resultVector.y += vectorY;
            }
        }
    }

    return resultVector;
};

EntityCollision.entities = function(x, y) {
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];

        var entityCenterX = entity.x + blockSize / 2;
        var entityCenterY = entity.y + blockSize / 2;

        var distX = Math.abs(x - entityCenterX) - blockSize / 2 - entityInteractRadius;
        var distY = Math.abs(y - entityCenterY) - blockSize / 2 - entityInteractRadius;

        if (distX <= 0 && distY <= 0) {
            return entity;
        }
    }
    return null;
}


EntityCollision.carpet = function(x, y, type) {
    for (var i = 0; i < carpets.length; i++) {
        var carpet = carpets[i];
        if (carpet.type == type) {
            var carpetCenterX = carpet.x + blockSize / 2;
            var carpetCenterY = carpet.y + blockSize / 2;

            var distX = Math.abs(x - carpetCenterX) - blockSize / 2;
            var distY = Math.abs(y - carpetCenterY) - blockSize / 2;

            if (distX <= 0 && distY <= 0) {
                return carpet;
            }
        }
    }
    return null;
}

var Player = function(x, y) {
    this.render = 'entity';
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.angle = 0;
    this.rotation = 4;
    this.tmprotation = 0;
    this.footPosition = 0;
    this.speed = 4;
    this.lsdspeed = 10;
    this.damagecounter = 80;
    this.damagevalue = 0.7;
    this.regeneratecounter = 5;
    this.regeneratevalue = 0.15;
    this.health = 20;
    this.maxhealth = 20;

    this.teleport = function(x, y) {
        this.x = x * blockSize;
        this.y = y * blockSize;
    }

    this.startRotate = function() {
        this.tmprotation = this.rotation;
        this.rotation = 4;
        rotateplayer = true;
    }

    this.endRotate = function() {
        this.rotation = this.tmprotation;
        rotateplayer = false;
    }

    this.die = function() {
        console.log("*dies*");
    }

    this.setHealth = function(health) {
        this.health = health;
        if (this.health > this.maxhealth) {
            this.health = this.maxhealth;
        }
        if (this.health < 0) {
            this.health = 0;
        }
        if (this.health == 0) {
            this.die();
        }
        this.updatehealth();
    }

    this.updatehealth = function() {
        document.getElementById('healthbar').children[0].style.width = (this.health / this.maxhealth * 100 + "%");
        if ((this.health / this.maxhealth) < 0.25) {
            document.getElementById('healthbar').children[0].style.backgroundColor = "#a83500";
        } else if ((this.health / this.maxhealth) < 0.4) {
            document.getElementById('healthbar').children[0].style.backgroundColor = "#c28e00";
        } else if ((this.health / this.maxhealth) < 0.6) {
            document.getElementById('healthbar').children[0].style.backgroundColor = "#348d00";
        } else {
            document.getElementById('healthbar').children[0].style.backgroundColor = "#0b5e00";
        }
    }

    this.damage = function() {
        if (this.damagecounter > 80) {
            getSound("damage").loop(false).volume(100).play();
            this.setHealth(this.health - this.damagevalue);
            this.damagecounter = 0;

        }
        this.damagecounter++;
    }

    this.regenerate = function() {
        if (this.regeneratecounter > 5) {
            this.setHealth(this.health + this.regeneratevalue);
            this.regeneratecounter = 0;
        }
        this.regeneratecounter++;
    }

    this.update = function() {
        var keysCount = 0;
        keysCount += keyboard.up ? 1 : 0;
        keysCount += keyboard.down ? 1 : 0;
        keysCount += keyboard.left ? 1 : 0;
        keysCount += keyboard.right ? 1 : 0;
        keysCount += keyboard.touchx != 0 ? 1 : 0;
        keysCount += keyboard.touchy != 0 ? 1 : 0;

        var currentSpeed = (keyboard.ctrl ? this.lsdspeed : this.speed);

        if (keysCount > 1) {
            currentSpeed /= Math.sqrt(2);
        }

        // keyboard

        if (keyboard.up) this.y -= currentSpeed;
        if (keyboard.down) this.y += currentSpeed;
        if (keyboard.left) this.x -= currentSpeed;
        if (keyboard.right) this.x += currentSpeed;
        if (!keyboard.up && !keyboard.down && !keyboard.left && !keyboard.right) {
            if (keyboard.touchx) this.x += currentSpeed * keyboard.touchx;
            if (keyboard.touchy) this.y += currentSpeed * keyboard.touchy;
        }

        var rot = -1;
        if (keyboard.up && !keyboard.down) {
            rot = 0;
        } else if (keyboard.down && !keyboard.up) {
            rot = 4;
        }
        if (keyboard.left && !keyboard.right) {
            rot < 0 ? rot = 6 : (rot == 0 ? rot = 7 : rot = 5);
        } else if (keyboard.right && !keyboard.left) {
            rot < 0 ? rot = 2 : (rot == 0 ? rot = 1 : rot = 3);
        }
        if (rot < 0) {
            if (keyboard.touchy != 0) {
                rot = (keyboard.touchy < 0 ? 0 : 4);
            }
            if (keyboard.touchx != 0) {
                keyboard.touchx > 0 ? (rot < 0 ? rot = 2 : (rot == 0 ? rot = 1 : rot = 3)) : (rot < 0 ? rot = 6 : (rot == 0 ? rot = 7 : rot = 5));
            }
        }

        if (rot >= 0) {
            this.rotation = rot;
        }

        // collision
        if (!keyboard.shift) {
            var collisionVector = EntityCollision.arcToWalls(this.x, this.y);
            this.x += collisionVector.x * currentSpeed;
            this.y += collisionVector.y * currentSpeed;
        }

        //portal
        if (!keyboard.shift) {
            var portal = EntityCollision.carpet(this.x, this.y, "V");

            if (portal != null) {
                portalList.get(portal.details)["function"]();
                return;
            }
        }

        //damage
        if (!keyboard.shift) {
            var damage = EntityCollision.carpet(this.x, this.y, "D");

            if (damage != null) {
                this.damage();
            } else {
                this.damagecounter = 80;
            }
        }

        //regenrate
        if (!keyboard.shift) {
            var heizung = EntityCollision.carpet(this.x, this.y, "H");

            if (heizung != null) {
                this.regenerate();
            } else {
                this.regeneratecounter = 5;
            }
        }

        //entities
        if (!keyboard.shift) {
            var entity = EntityCollision.entities(this.x, this.y);

            if (entity != null) {
                console.log(1);
                removeItemOnce(entities, entity);
                removeItemOnce(elements, entity);
            }
        }

        // mouse
        /*var vectorX = camera.offsetX + context.canvas.width / 2 - mouse.x;
        var vectorY = camera.offsetY + context.canvas.height / 2 - mouse.y;

        var length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

        if (length > 0) {
            vectorX /= length;
            vectorY /= length;

            this.angle = Math.atan2(vectorY, vectorX) + 90 * Math.PI / 180;
        }*/

        // foot

        if (keyboard.up || keyboard.down || keyboard.left || keyboard.right || keyboard.touchx > 0 || keyboard.touchy > 0) {
            this.footIncrementer += this.speed;
        }

        this.footPosition = Math.sin(this.footIncrementer * Math.PI / 180);
    };

    this.render = function() {

        EntityHelper.beginRotationOffset(this.x, this.y, this.angle);

        EntityDrawer.player(this.rotation);

        EntityHelper.endRotationOffset(this.x, this.y, this.angle);
    };

    this.reload = function() {

    }
}

var wallAt = function(x, y) {
    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];
        if (wall.x == x && wall.y == y && wall.details != "i") {
            return true;
        }
    }
    return false;
}
var collWallAt = function(x, y) {
    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];
        if (wall.x == x && wall.y == y) {
            return true;
        }
    }
    return false;
}

var cornerCheck = function() {
    for (var i = 0; i < walls.length; i++) {
        walls[i].cornerCheck();
    }
}

var Wall = function(x, y, type, details) {
    this.render = 'box';
    this.type = type;
    this.details = details;
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;
    this.corners = { right: false, left: false, top: false, bottom: false };
    this.collCorners = { right: false, left: false, top: false, bottom: false };

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.cornerCheck = function() {
        this.corners.right = wallAt(this.x + blockSize, this.y);
        this.corners.left = wallAt(this.x - blockSize, this.y);
        this.corners.bottom = wallAt(this.x, this.y + blockSize);
        this.corners.top = wallAt(this.x, this.y - blockSize);
        this.collCorners.right = collWallAt(this.x + blockSize, this.y);
        this.collCorners.left = collWallAt(this.x - blockSize, this.y);
        this.collCorners.bottom = collWallAt(this.x, this.y + blockSize);
        this.collCorners.top = collWallAt(this.x, this.y - blockSize);
    }

    this.render = function() {
        if (this.sleep) return;

        EntityDrawer.wall(this.x, this.y, this.type, this.details, this.corners);
    };

    this.reload = function() {
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
    }
};

var Entity = function(x, y, type, details) {
    this.render = 'box';
    this.type = type;
    this.details = details;
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.render = function() {
        if (this.sleep) return;

        EntityDrawer.entity(this.x, this.y, this.type, this.details);
    };

    this.reload = function() {
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
    }
};

var Passage = function(x, y, type, details) {
    this.render = 'box';
    this.type = type;
    this.details = details;
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;
    this.corners = { positive: false, negative: false };

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.render = function() {
        if (this.sleep) return;

        EntityDrawer.wall(this.x, this.y, this.type, this.details, this.corners);
    };

    this.reload = function() {
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
    }
};

var Carpet = function(x, y, type, details) {
    this.render = 'box';
    this.type = type;
    this.details = details;
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.render = function() {
        if (this.sleep) return;

        EntityDrawer.carpet(this.x, this.y, this.type, this.details);
    };

    this.reload = function() {
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
    }
};

var Camera = function() {
    this.x = 0;
    this.y = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    var frames = 0;

    this.rectangleIntersection = function(r1, r2) {
        return !(r1.x + r1.width < r2.x || r1.y + r1.height < r2.y || r1.x > r2.x + r2.width || r1.y > r2.y + r2.height);
    };

    this.update = function() {
        frames++;
        if (frames >= 5) {
            frames = 0;

            var screen = { x: player.x - this.offsetX - context.canvas.width / 2 - blockSize, y: player.y - this.offsetY - context.canvas.height / 2 - blockSize, width: context.canvas.width + blockSize * 2, height: context.canvas.height + blockSize * 2 };

            for (var i = 0; i < elements.length; i++) {
                var entity = elements[i];
                var bounds = {};

                if (entity.render === 'entity') {
                    bounds.x = entity.x - arcSizeRadius;
                    bounds.y = entity.y - arcSizeRadius;
                    bounds.width = arcSizeRadius * 2;
                    bounds.height = arcSizeRadius * 2;

                } else if (entity.render === 'box') {
                    bounds.x = entity.x;
                    bounds.y = entity.y;
                    bounds.width = blockSize;
                    bounds.height = blockSize;
                }

                entity.sleep = !this.rectangleIntersection(bounds, screen);
            }
        }
    };

    this.resize = function() {
        // resize
    };

    this.preRender = function() {

        var targetX = -player.x + context.canvas.width / 2;
        var targetY = -player.y + context.canvas.height / 2;

        var vectorX = targetX - this.x;
        var vectorY = targetY - this.y;

        this.offsetX = this.x - targetX;
        this.offsetY = this.y - targetY;

        this.x += vectorX / 10;
        this.y += vectorY / 10;

        context.save();
        context.translate(this.x, this.y);
    };

    this.postRender = function() {
        context.restore();
    };

};

var MapProcessor = function() {
    this.map = null;
    this.spawn = null;

    this.wallPositions = [];
    this.carpetPositions = [];
    this.portalPositions = [];
    this.passagePositions = [];
    this.entityPositions = [];
    this.playerPosition = { x: 0, y: 0 };

    this.selectMap = function(map) {
        this.map = map.split(/\r?\n/);
    }

    this.setSpawn = function(spawn = null) {
        this.spawn = spawn;
    }

    this.setZoom = function(zoom = 1) {
        zoomfactor = zoom;

        blockSize = 80 * zoomfactor;
        arcSizeRadius = 35 * zoomfactor;
        entityInteractRadius = 20 * zoomfactor;
        playerOverlap = 20 * zoomfactor;

        PatternHelper.createAll();
        this.reloadMap();
    }

    this.generate = function() {
        this.wallPositions = [];
        this.carpetPositions = [];
        this.portalPositions = [];
        this.passagePositions = [];
        this.entityPositions = [];
        this.playerPosition = { x: 0, y: 0 };

        if (this.map == null) {
            return;
        }
        for (var y = 0; y < this.map.length; y++) {
            var row = this.map[y];

            for (var x = 0; x < row.length; x += 2) {
                var char = row[x];
                var realX = x / 2;

                switch (char) {
                    case 'W':
                    case 'S':
                        this.wallPositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
                        break;
                    case 'P':
                        if (this.spawn == null || this.spawn == row[x + 1]) {
                            this.playerPosition = { x: realX, y: y };
                        }
                        break;
                    case 't':
                    case 'T':
                    case 'H':
                    case 'V':
                    case 'D':
                        this.carpetPositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
                        break;
                    case 'o':
                    case 'O':
                        this.portalPositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
                        break;
                    case 'w':
                        this.passagePositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
                        break;
                    case 'e':
                        this.entityPositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
                        break;
                }
            }
        };

        this.getPlayerPosition = function() {
            return this.playerPosition;
        };
        this.getWallPositions = function() {
            return this.wallPositions;
        };
        this.getCarpetPositions = function() {
            return this.carpetPositions;
        };
        this.getPortalPositions = function() {
            return this.portalPositions;
        };
        this.getPassagePositions = function() {
            return this.passagePositions;
        };
        this.getEntityPositions = function() {
            return this.entityPositions;
        };
    };

    this.reloadMap = function() {
        for (var y = 0; y < elements.length; y++) {
            var element = elements[y];
            element.reload();
        }
        cornerCheck();
    };

    this.loadMap = function(map, spawn = null, rotation = 4, load = false) {
        this.selectMap(map);
        this.setSpawn(spawn);
        this.generate();

        elements = [];
        entities = [];
        walls = [];
        carpets = [];

        for (var i = 0; i < this.getCarpetPositions().length; i++) {
            var carpetPosition = this.getCarpetPositions()[i];
            var carpet = new Carpet(carpetPosition.x, carpetPosition.y, carpetPosition.type, carpetPosition.details);
            elements.push(carpet);
            carpets.push(carpet);
        }

        for (var i = 0; i < this.getEntityPositions().length; i++) {
            var entityPosition = this.getEntityPositions()[i];
            var entity = new Entity(entityPosition.x, entityPosition.y, entityPosition.type, entityPosition.details);
            elements.push(entity);
            entities.push(entity);
        }

        for (var i = 0; i < this.getWallPositions().length; i++) {
            var wallPosition = this.getWallPositions()[i];
            var wall = new Wall(wallPosition.x, wallPosition.y, wallPosition.type, wallPosition.details);
            elements.push(wall);
            walls.push(wall);
        }

        cornerCheck();

        for (var i = 0; i < this.getPassagePositions().length; i++) {
            var passagePosition = this.getPassagePositions()[i];
            var passage = new Passage(passagePosition.x, passagePosition.y, passagePosition.type, passagePosition.details);
            elements.push(passage);
        }

        playerPosition = this.getPlayerPosition();
        player = new Player(playerPosition.x, playerPosition.y);

        player.rotation = rotation;

        elements.push(player);

        loaded = true;

        if (load) {
            player.startRotate();
            setTimeout(function() {
                player.endRotate();
            }, loadingtime * 1000);
        }

        camera = new Camera();
    };
}

var canvas = document.querySelector('canvas#main');
var context = canvas.getContext('2d');

var zoomfactor = 1;

var blockSize = 80 * zoomfactor;
var arcSizeRadius = 35 * zoomfactor;
var entityInteractRadius = 20 * zoomfactor;
var playerOverlap = 20 * zoomfactor;

var colors = { wall: '#666', player: '#111' };

var elements = [];
var entities = [];
var walls = [];
var carpets = [];

var mapProcessor = new MapProcessor();
var loaded = false;

var playerPosition;
var player;

var tmpplayerrotation = 0;
var rotateplayer = false;

var loadingtime = 1;

PatternHelper.createAll();

var camera;;

mapProcessor.loadMap(map1);

var onUpdate = function() {
    camera.update();
    for (var i = 0; i < elements.length; i++) {
        elements[i].update();
    }
    if (keyboard.touch) keyboard.touch = false;
};

var onRender = function() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    camera.preRender();

    for (var i = 0; i < elements.length; i++) {
        elements[i].render();
    }

    camera.postRender();
};

var keyboard = { up: false, down: false, left: false, right: false, space: false, shift: false, ctrl: false, touchx: 0, touchy: 0, touch: false };
var mouse = { x: 0, y: 0, pressed: false };


var onTick = function() {
    if (loaded) {
        onUpdate();
        onRender();
    }
}

var onResize = function(width, height) {
    context.canvas.width = width;
    context.canvas.height = height;
    camera.resize();
};

var resizeCallback = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    onResize(width, height);
};
window.addEventListener('resize', resizeCallback);
resizeCallback();

var tick = setInterval(function() {
    onTick();
}, 16.5);

window.addEventListener("keydown", function(event) {
    if (rotateplayer) {
        return;
    }
    if (event.ctrlKey || event.metaKey || event.altKey) {
        event.preventDefault();
    }
    switch (event.keyCode) {
        case 87:
            keyboard.up = true;
            break;
        case 83:
            keyboard.down = true;
            break;
        case 65:
            keyboard.left = true;
            break;
        case 68:
            keyboard.right = true;
            break;
        case 32:
            keyboard.space = true;
            break;
        case 16:
            keyboard.shift = true;
            break;
        case 18:
            getSound("lsd").loop(true).play().volume(10);
            keyboard.ctrl = true;
            break;
    }
});

window.addEventListener("keyup", function(event) {
    if (rotateplayer) {
        return;
    }
    if (event.ctrlKey || event.metaKey || event.altKey) {
        event.preventDefault();
    }
    switch (event.keyCode) {
        case 87:
            keyboard.up = false;
            break;
        case 83:
            keyboard.down = false;
            break;
        case 65:
            keyboard.left = false;
            break;
        case 68:
            keyboard.right = false;
            break;
        case 32:
            keyboard.space = false;
            break;
        case 16:
            keyboard.shift = false;
            break;
        case 18:
            getSound("lsd").pause();
            keyboard.ctrl = false;
            break;
    }
});

window.addEventListener("mousedown", function() {
    if (rotateplayer) {
        return;
    }
    mouse.pressed = true;
});

window.addEventListener("mouseup", function() {
    if (rotateplayer) {
        return;
    }
    mouse.pressed = false;
});

window.addEventListener("mousemove", function(event) {
    if (rotateplayer) {
        return;
    }
    mouse.x = event.x;
    mouse.y = event.y;
});

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchEnd, false);

var xDown = null;
var yDown = null;
var down = false;

function limitNumberWithinRange(num, min, max) {
    const MIN = min || 1;
    const MAX = max || 20;
    const parsed = parseInt(num)
    return Math.min(Math.max(parsed, MIN), MAX)
}

function getTouches(evt) {
    return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    if (rotateplayer) {
        return;
    }
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
    down = true;
};

function handleTouchMove(evt) {
    if (rotateplayer) {
        return;
    }
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    keyboard.touchx = limitNumberWithinRange(-xDiff / 50, -1, 1);
    keyboard.touchy = limitNumberWithinRange(-yDiff / 50, -1, 1);
    down = Math.abs(xDiff) < 10 && Math.abs(yDiff) < 10;

    // if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
    //     if (xDiff > 0) {
    //         /* right swipe */
    //         keyboard.left = true;
    //     } else {
    //         /* left swipe */
    //         keyboard.right = true;
    //     }
    // } else {
    //     if (yDiff > 0) {
    //         /* down swipe */
    //         keyboard.up = true;
    //     } else {
    //         /* up swipe */
    //         keyboard.down = true;
    //     }
    // }
};

function handleTouchEnd() {
    if (rotateplayer) {
        return;
    }
    /* reset values */
    xDown = null;
    yDown = null;
    keyboard.touchx = 0;
    keyboard.touchy = 0;
    keyboard.touch = down;
    down = false;
}

var sounds = {};

function getSound(name, file = name) {
    if (!sounds[name]) {
        sounds[name] = new Sound(file);
    }
    return sounds[name];
}

var Sound = function(file) {
    this.file = file;
    this.buffer = 0.44;
    this.looped = false;

    this.load = function() {
        var _self = this;
        this.audio = new Audio('audio/' + this.file + '.mp3');
        this.audio.addEventListener('timeupdate', function() {
            if (this.currentTime > this.duration - _self.buffer && _self.looped) {
                this.currentTime = 0
                this.play()
            }
        });
        return this;
    }

    this.play = function() {
        if (!this.audio || this.audio.paused)
            this.audio.play();
        return this;
    }

    this.restart = function() {
        this.audio.currentTime = 0;
        this.audio.play();
        return this;
    }

    this.pause = function() {
        this.audio.pause();
        return this;
    }

    this.stop = function() {
        this.audio.pause();
        this.audio.currentTime = 0;
        return this;
    }

    this.volume = function(volume) {
        this.audio.volume = (volume / 100);
        return this;
    }

    this.loop = function(loop) {
        this.looped = loop;
        return this;
    }

    this.load();
    this.volume(20);
}

// todo entspannungs sound