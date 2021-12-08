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
        patternContext.arc(patternCanvas.width / 2, patternCanvas.height / 2, 30, 0, 2 * Math.PI);
        patternContext.fill();

        patternContext.beginPath();
        patternContext.fillStyle = '#864313';
        patternContext.arc(patternCanvas.width / 3, patternCanvas.height / 3, 7, 0, 2 * Math.PI);
        patternContext.fill();
        patternContext.beginPath();
        patternContext.arc(patternCanvas.width / 2, patternCanvas.height / 1.8, 5, 0, 2 * Math.PI);
        patternContext.fill();
        patternContext.beginPath();
        patternContext.arc(patternCanvas.width / 1.5, patternCanvas.height / 2.3, 4, 0, 2 * Math.PI);
        patternContext.fill();
        patternContext.beginPath();
        patternContext.arc(patternCanvas.width / 2.7, patternCanvas.height / 1.4, 5, 0, 2 * Math.PI);
        patternContext.fill();
        patternContext.beginPath();
        patternContext.arc(patternCanvas.width / 1.5, patternCanvas.height / 1.4, 6, 0, 2 * Math.PI);
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
        patternContext.transform(0.264583, 0.000000, 0.000000, 0.264583, -0.317336, -1.671710);

        // #path7615
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(19, 19, 19)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.700000;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(65.169242, 77.315107);
        patternContext.lineTo(31.412523, 126.453890);
        patternContext.bezierCurveTo(29.948573, 148.404890, 29.987746, 170.179050, 47.267952, 189.924850);
        patternContext.bezierCurveTo(59.590230, 205.069610, 74.565908, 219.370110, 111.201130, 226.778930);
        patternContext.lineTo(205.674330, 226.322510);
        patternContext.bezierCurveTo(219.116660, 223.546540, 231.196600, 216.189150, 240.765160, 209.855700);
        patternContext.bezierCurveTo(248.824930, 204.520930, 256.663000, 198.665020, 261.571960, 190.436710);
        patternContext.bezierCurveTo(274.442920, 171.068070, 283.756300, 150.862350, 277.737570, 127.049080);
        patternContext.lineTo(243.980870, 77.910293);
        patternContext.fill();
        patternContext.stroke();

        // #path2943
        patternContext.beginPath();
        patternContext.globalAlpha = 1.0;
        patternContext.fillStyle = 'rgb(26, 26, 26)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.983000;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(105.707780, 10.460160);
        patternContext.bezierCurveTo(86.795824, 19.090652, 72.290751, 25.769829, 64.070831, 55.949125);
        patternContext.bezierCurveTo(64.706421, 81.870256, 74.480801, 103.215250, 105.287200, 114.028780);
        patternContext.bezierCurveTo(154.585260, 115.812970, 165.850030, 114.841080, 196.131440, 115.247230);
        patternContext.bezierCurveTo(226.800050, 105.009640, 244.244820, 88.386890, 245.759310, 64.072154);
        patternContext.bezierCurveTo(243.026620, 37.468221, 228.123230, 20.180674, 207.486960, 10.866312);
        patternContext.bezierCurveTo(174.682100, 10.324776, 155.041670, 11.001695, 105.707780, 10.460160);
        patternContext.fill();
        patternContext.stroke();

        // #path1073
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.022109;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(47.267952, 190.345430);
        patternContext.lineTo(13.511233, 250.745190);
        patternContext.lineTo(55.451401, 320.358480);
        patternContext.lineTo(58.520191, 363.866810);
        patternContext.lineTo(63.634846, 378.198960);
        patternContext.lineTo(114.269920, 379.222680);
        patternContext.lineTo(122.964840, 366.426090);
        patternContext.lineTo(125.522160, 342.880430);
        patternContext.lineTo(171.042590, 342.368570);
        patternContext.lineTo(173.088450, 361.819340);
        patternContext.lineTo(179.226030, 377.175220);
        patternContext.lineTo(228.326710, 377.687080);
        patternContext.lineTo(240.601880, 362.331210);
        patternContext.lineTo(243.159210, 316.775450);
        patternContext.lineTo(293.794290, 247.674010);
        patternContext.lineTo(261.571960, 190.857290);
        patternContext.lineTo(240.090420, 212.355500);
        patternContext.lineTo(207.356630, 224.640210);
        patternContext.lineTo(183.317760, 228.223240);
        patternContext.lineTo(111.201130, 227.199510);
        patternContext.lineTo(85.116395, 219.521580);
        patternContext.lineTo(59.543124, 205.701300);
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
        patternContext.transform(0.264583, 0.000000, 0.000000, 0.264583, -0.317336, -1.671710);

        // #path7615
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(19, 19, 19)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.575850;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(77.842083, 77.315107);
        patternContext.lineTo(48.835853, 126.453890);
        patternContext.bezierCurveTo(47.577923, 148.404890, 47.611583, 170.179050, 62.459993, 189.924850);
        patternContext.bezierCurveTo(73.048183, 205.069610, 85.916383, 219.370110, 117.396030, 226.778930);
        patternContext.lineTo(198.574280, 226.322510);
        patternContext.bezierCurveTo(210.124910, 223.546540, 220.504880, 216.189150, 228.726880, 209.855700);
        patternContext.bezierCurveTo(235.652420, 204.520930, 242.387460, 198.665020, 246.605590, 190.436710);
        patternContext.bezierCurveTo(257.665260, 171.068070, 265.668000, 150.862350, 260.496260, 127.049080);
        patternContext.lineTo(231.490050, 77.910293);
        patternContext.fill();
        patternContext.stroke();

        // #path2943
        patternContext.beginPath();
        patternContext.globalAlpha = 1.0;
        patternContext.fillStyle = 'rgb(26, 26, 26)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.768139;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(109.194750, 23.327016);
        patternContext.bezierCurveTo(92.383672, 32.108964, 79.489942, 38.897992, 72.183152, 66.352208);
        patternContext.bezierCurveTo(72.748132, 89.500249, 81.436702, 108.041810, 108.820890, 115.982030);
        patternContext.bezierCurveTo(152.642530, 114.807220, 162.655930, 113.304870, 189.573450, 111.966290);
        patternContext.bezierCurveTo(216.835150, 101.086210, 232.342020, 85.238479, 233.688260, 63.406357);
        patternContext.bezierCurveTo(231.259150, 39.765478, 218.011340, 25.141146, 199.667510, 17.970193);
        patternContext.bezierCurveTo(170.506870, 19.329508, 153.048250, 21.038751, 109.194750, 23.327016);
        patternContext.fill();
        patternContext.stroke();

        // #path1073
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.955130;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(60.758113, 190.345430);
        patternContext.lineTo(45.772153, 252.484170);
        patternContext.lineTo(67.904163, 320.358480);
        patternContext.lineTo(70.583933, 363.866810);
        patternContext.lineTo(75.050213, 378.198960);
        patternContext.lineTo(119.266410, 379.222680);
        patternContext.lineTo(126.859090, 366.426090);
        patternContext.lineTo(129.092230, 342.880430);
        patternContext.lineTo(168.842140, 342.368570);
        patternContext.lineTo(170.628650, 361.819340);
        patternContext.lineTo(175.988190, 377.175220);
        patternContext.lineTo(218.864490, 377.687080);
        patternContext.lineTo(229.583570, 362.331210);
        patternContext.lineTo(231.816710, 316.775450);
        patternContext.lineTo(249.948210, 249.412990);
        patternContext.lineTo(247.895320, 190.857290);
        patternContext.lineTo(229.136950, 212.355500);
        patternContext.lineTo(200.552740, 224.640210);
        patternContext.lineTo(179.561220, 228.223240);
        patternContext.lineTo(116.586640, 227.199510);
        patternContext.lineTo(93.808603, 219.521580);
        patternContext.lineTo(71.477193, 205.701300);
        patternContext.fill();
        patternContext.stroke();

        // #path7615-3
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.lineWidth = 1.381718;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(220.944450, 98.851423);
        patternContext.bezierCurveTo(238.572390, 130.875910, 249.983180, 129.052620, 223.398500, 210.378820);
        patternContext.bezierCurveTo(228.722800, 205.044050, 245.328880, 187.022600, 248.571750, 178.794290);
        patternContext.bezierCurveTo(257.074330, 159.425650, 262.120810, 153.966030, 258.144830, 130.152760);
        patternContext.lineTo(231.789900, 85.069153);
        patternContext.fill();

        // #path10302
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.177267;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(227.618500, 235.173840);
        patternContext.bezierCurveTo(231.705860, 235.184140, 235.910110, 235.310950, 239.582760, 235.173840);
        patternContext.bezierCurveTo(240.278980, 235.147840, 241.170190, 236.585050, 241.194120, 238.135350);
        patternContext.bezierCurveTo(241.323470, 246.517170, 241.290420, 256.215660, 241.234420, 265.955580);
        patternContext.bezierCurveTo(241.226420, 267.351530, 240.531550, 268.883760, 239.905060, 268.917090);
        patternContext.bezierCurveTo(236.043800, 269.122500, 231.744350, 269.086710, 227.497670, 268.917090);
        patternContext.bezierCurveTo(226.851840, 268.891290, 226.096260, 267.394450, 226.087740, 265.955580);
        patternContext.bezierCurveTo(226.035240, 257.073390, 226.022340, 247.171000, 226.047440, 238.673810);
        patternContext.bezierCurveTo(226.052440, 237.023940, 226.877900, 235.171980, 227.618500, 235.173840);
        patternContext.fill();

        // #path10302-0
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.133111;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(237.507530, 112.594080);
        patternContext.bezierCurveTo(239.738620, 111.982360, 242.044120, 111.395050, 244.030160, 110.774450);
        patternContext.bezierCurveTo(244.834730, 110.523000, 245.273360, 111.887200, 245.701420, 113.371210);
        patternContext.bezierCurveTo(248.015720, 121.394630, 250.593980, 130.706190, 253.170800, 140.061010);
        patternContext.bezierCurveTo(253.539680, 141.401890, 253.987240, 142.927310, 253.238900, 143.105010);
        patternContext.bezierCurveTo(251.108660, 143.610840, 248.756610, 144.224050, 246.474690, 144.992040);
        patternContext.bezierCurveTo(245.800330, 145.218990, 245.303060, 143.744080, 244.913230, 142.364660);
        patternContext.bezierCurveTo(242.506880, 133.849410, 239.848890, 124.349180, 237.587990, 116.191550);
        patternContext.bezierCurveTo(237.148250, 114.607820, 236.737720, 112.806920, 237.507590, 112.594090);
        patternContext.fill();

        // #path10302-0-8-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(77, 77, 77)';
        patternContext.lineWidth = 0.126965;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(251.669460, 162.548630);
        patternContext.bezierCurveTo(250.448020, 160.425270, 249.224230, 158.223340, 248.071820, 156.346380);
        patternContext.bezierCurveTo(247.604970, 155.586000, 248.630170, 154.901610, 249.772970, 154.226800);
        patternContext.lineTo(259.433700, 148.522270);
        patternContext.bezierCurveTo(259.533600, 148.463570, 257.380830, 158.938120, 255.520330, 162.327730);
        patternContext.bezierCurveTo(254.965720, 162.569470, 252.092400, 163.280950, 251.669460, 162.548650);
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
        patternContext.transform(-0.264583, 0.000000, 0.000000, 0.264583, 81.841700, -1.671710);

        // #path7615
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.381718;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(214.789510, 77.315107);
        patternContext.lineTo(237.089270, 126.453890);
        patternContext.bezierCurveTo(238.056360, 148.404890, 238.030480, 170.179050, 226.615140, 189.924850);
        patternContext.bezierCurveTo(218.475020, 205.069610, 208.582050, 219.370110, 184.380750, 226.778930);
        patternContext.lineTo(121.971550, 226.322510);
        patternContext.bezierCurveTo(113.091510, 223.546540, 105.111480, 216.189150, 98.790469, 209.855700);
        patternContext.bezierCurveTo(93.466169, 204.520930, 88.288319, 198.665020, 85.045449, 190.436710);
        patternContext.bezierCurveTo(76.542869, 171.068070, 70.390429, 150.862350, 74.366409, 127.049080);
        patternContext.lineTo(96.666159, 77.910293);
        patternContext.fill();
        patternContext.stroke();

        // #path404-5
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.022109;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(218.156250, 89.103469);
        patternContext.lineTo(93.188199, 85.445874);
        patternContext.lineTo(84.084249, 104.015280);
        patternContext.lineTo(74.366409, 127.049080);
        patternContext.bezierCurveTo(127.460640, 98.050205, 79.267479, 152.297270, 229.528010, 182.547410);
        patternContext.bezierCurveTo(242.782870, 152.427800, 238.888440, 125.402550, 218.156250, 89.103469);
        patternContext.fill();
        patternContext.stroke();

        // #path2943
        patternContext.beginPath();
        patternContext.globalAlpha = 1.0;
        patternContext.fillStyle = 'rgb(128, 128, 128)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.357921;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(198.141960, 42.408596);
        patternContext.bezierCurveTo(213.035180, 49.009302, 224.458180, 54.107590, 231.026860, 72.755658);
        patternContext.bezierCurveTo(230.621010, 88.183421, 223.016870, 100.179350, 198.846590, 104.277280);
        patternContext.bezierCurveTo(160.111920, 101.568540, 151.255960, 100.125900, 127.460640, 98.050205);
        patternContext.bezierCurveTo(103.322610, 89.589943, 89.553499, 78.329713, 88.275499, 63.696461);
        patternContext.bezierCurveTo(90.326889, 48.021567, 101.976340, 38.840823, 118.159800, 34.859412);
        patternContext.bezierCurveTo(143.937690, 37.047452, 159.374660, 38.955187, 198.141960, 42.408596);
        patternContext.fill();
        patternContext.stroke();

        // #path1073
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.839780;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(194.466090, 264.735130);
        patternContext.lineTo(192.579780, 321.912920);
        patternContext.lineTo(171.336770, 378.893050);
        patternContext.lineTo(129.557670, 377.668240);
        patternContext.lineTo(110.427920, 305.376230);
        patternContext.lineTo(108.371700, 263.218400);
        patternContext.lineTo(121.971550, 226.322510);
        patternContext.bezierCurveTo(143.153190, 230.709730, 164.334820, 231.102380, 185.516460, 227.199510);
        patternContext.fill();
        patternContext.stroke();

        // #path10302
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.224324;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(141.157110, 257.905910);
        patternContext.bezierCurveTo(134.611650, 257.916210, 127.878990, 258.043020, 121.997630, 257.905910);
        patternContext.bezierCurveTo(120.882720, 257.879910, 119.455540, 259.317120, 119.417220, 260.867420);
        patternContext.bezierCurveTo(119.210070, 269.249240, 119.263060, 278.947730, 119.352720, 288.687650);
        patternContext.bezierCurveTo(119.365620, 290.083600, 120.478300, 291.615830, 121.481560, 291.649160);
        patternContext.bezierCurveTo(127.664950, 291.854570, 134.550060, 291.818780, 141.350650, 291.649160);
        patternContext.bezierCurveTo(142.384880, 291.623360, 143.594870, 290.126520, 143.608500, 288.687650);
        patternContext.bezierCurveTo(143.692600, 279.805460, 143.713290, 269.903070, 143.673000, 261.405880);
        patternContext.bezierCurveTo(143.665000, 259.756010, 142.343110, 257.904050, 141.157110, 257.905910);
        patternContext.fill();

        // #path10302-0
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.173157;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(104.254200, 153.458980);
        patternContext.bezierCurveTo(100.339420, 153.469280, 96.314449, 153.523080, 92.795089, 153.458980);
        patternContext.bezierCurveTo(91.369309, 153.432980, 91.274679, 154.864870, 91.251769, 156.409320);
        patternContext.bezierCurveTo(91.127869, 164.759520, 91.159569, 174.421420, 91.213169, 184.124600);
        patternContext.bezierCurveTo(91.221169, 185.515280, 91.185769, 187.104860, 92.486409, 187.074930);
        patternContext.bezierCurveTo(96.188639, 186.989730, 100.301250, 186.948370, 104.369930, 187.074930);
        patternContext.bezierCurveTo(105.572320, 187.112330, 105.712190, 185.558040, 105.720340, 184.124600);
        patternContext.bezierCurveTo(105.770640, 175.275920, 105.783040, 165.410870, 105.758940, 156.945740);
        patternContext.bezierCurveTo(105.754940, 155.302100, 105.605750, 153.457120, 104.254210, 153.458980);
        patternContext.fill();

        // #path10302-0-8-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(77, 77, 77)';
        patternContext.lineWidth = 0.187205;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(113.691590, 211.171870);
        patternContext.bezierCurveTo(113.678490, 207.572000, 113.610090, 203.870820, 113.691590, 200.634560);
        patternContext.bezierCurveTo(113.724590, 199.323480, 111.904720, 199.219600, 109.941450, 199.215400);
        patternContext.lineTo(93.345009, 199.179900);
        patternContext.bezierCurveTo(93.173589, 199.179900, 103.703170, 210.849280, 108.599910, 213.759040);
        patternContext.bezierCurveTo(109.489030, 213.652420, 113.693940, 212.414680, 113.691590, 211.171860);
        patternContext.fill();

        // #path10302-0-8-7-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.lineWidth = 0.173216;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(94.845469, 62.294399);
        patternContext.lineTo(91.026189, 65.321869);
        patternContext.bezierCurveTo(92.179889, 75.914279, 104.854520, 84.790485, 108.208100, 86.250458);
        patternContext.lineTo(115.499460, 82.702352);
        patternContext.bezierCurveTo(111.742110, 81.295368, 96.026529, 72.265157, 94.845469, 62.294399);
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
        patternContext.transform(0.264583, 0.000000, 0.000000, 0.264583, -0.317336, -1.671710);

        // #path7615
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.575850;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(77.842081, 77.315107);
        patternContext.lineTo(48.835851, 126.453890);
        patternContext.bezierCurveTo(47.577919, 148.404890, 47.611579, 170.179050, 62.459990, 189.924850);
        patternContext.bezierCurveTo(73.048188, 205.069610, 85.916381, 219.370110, 117.396030, 226.778930);
        patternContext.lineTo(198.574280, 226.322510);
        patternContext.bezierCurveTo(210.124910, 223.546540, 220.504880, 216.189150, 228.726880, 209.855700);
        patternContext.bezierCurveTo(235.652420, 204.520930, 242.387460, 198.665020, 246.605590, 190.436710);
        patternContext.bezierCurveTo(257.665260, 171.068070, 265.668000, 150.862350, 260.496260, 127.049080);
        patternContext.lineTo(231.490050, 77.910293);
        patternContext.fill();
        patternContext.stroke();

        // #path2943
        patternContext.beginPath();
        patternContext.globalAlpha = 1.0;
        patternContext.fillStyle = 'rgb(128, 128, 128)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.768139;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(108.474510, 21.463758);
        patternContext.bezierCurveTo(91.663438, 29.621865, 78.769700, 35.932420, 71.462913, 63.115488);
        patternContext.bezierCurveTo(72.027896, 86.284495, 80.716463, 105.148480, 108.100650, 114.104900);
        patternContext.bezierCurveTo(151.922290, 114.556260, 161.935690, 113.425500, 188.853210, 113.085800);
        patternContext.bezierCurveTo(216.114910, 103.217380, 231.621780, 87.945090, 232.968020, 66.162925);
        patternContext.bezierCurveTo(230.538910, 42.431904, 217.291100, 27.315960, 198.947270, 19.464286);
        patternContext.bezierCurveTo(169.786630, 19.741480, 152.328010, 20.802852, 108.474510, 21.463758);
        patternContext.fill();
        patternContext.stroke();

        // #path1073
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.955130;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(60.758114, 190.345430);
        patternContext.lineTo(45.772153, 252.484170);
        patternContext.lineTo(67.904167, 320.358480);
        patternContext.lineTo(70.583934, 363.866810);
        patternContext.lineTo(75.050217, 378.198960);
        patternContext.lineTo(119.266410, 379.222680);
        patternContext.lineTo(126.859090, 366.426090);
        patternContext.lineTo(129.092230, 342.880430);
        patternContext.lineTo(168.842140, 342.368570);
        patternContext.lineTo(170.628650, 361.819340);
        patternContext.lineTo(175.988190, 377.175220);
        patternContext.lineTo(218.864490, 377.687080);
        patternContext.lineTo(229.583570, 362.331210);
        patternContext.lineTo(231.816710, 316.775450);
        patternContext.lineTo(249.948210, 249.412990);
        patternContext.lineTo(247.895320, 190.857290);
        patternContext.lineTo(229.136950, 212.355500);
        patternContext.lineTo(200.552740, 224.640210);
        patternContext.lineTo(179.561220, 228.223240);
        patternContext.lineTo(116.586640, 227.199510);
        patternContext.lineTo(93.808602, 219.521580);
        patternContext.lineTo(71.477193, 205.701300);
        patternContext.fill();
        patternContext.stroke();

        // #path404
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.022109;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(107.908510, 116.417940);
        patternContext.bezierCurveTo(85.114370, 106.281080, 72.442970, 95.300650, 76.182783, 82.952623);
        patternContext.lineTo(50.404925, 128.186390);
        patternContext.lineTo(47.643005, 149.481210);
        patternContext.bezierCurveTo(50.541305, 176.725230, 106.052330, 175.315010, 106.052330, 175.315010);
        patternContext.fill();
        patternContext.stroke();

        // #path404-5
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.022109;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(228.012090, 87.184854);
        patternContext.lineTo(234.286070, 82.947592);
        patternContext.lineTo(246.731740, 104.994960);
        patternContext.lineTo(260.496260, 127.049080);
        patternContext.lineTo(242.094430, 135.313430);
        patternContext.fill();
        patternContext.stroke();

        // #path10302
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.179101;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(224.931560, 232.662350);
        patternContext.bezierCurveTo(229.103930, 232.672650, 233.395630, 232.799460, 237.144690, 232.662350);
        patternContext.bezierCurveTo(237.855380, 232.636350, 238.765130, 234.073560, 238.789550, 235.623860);
        patternContext.bezierCurveTo(238.921600, 244.005680, 238.887850, 253.704170, 238.830650, 263.444090);
        patternContext.bezierCurveTo(238.822650, 264.840040, 238.113160, 266.372270, 237.473640, 266.405600);
        patternContext.bezierCurveTo(233.532060, 266.611010, 229.143180, 266.575220, 224.808170, 266.405600);
        patternContext.bezierCurveTo(224.148900, 266.379800, 223.377600, 264.882960, 223.368910, 263.444090);
        patternContext.bezierCurveTo(223.315310, 254.561900, 223.302110, 244.659510, 223.327810, 236.162320);
        patternContext.bezierCurveTo(223.332810, 234.512450, 224.175550, 232.660490, 224.931560, 232.662350);
        patternContext.fill();

        // #path10302-0
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.228866;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(194.444740, 132.226540);
        patternContext.bezierCurveTo(199.745110, 131.301770, 205.204240, 130.405060, 209.952970, 129.481850);
        patternContext.bezierCurveTo(211.876800, 129.107850, 212.322050, 130.877340, 212.695180, 132.804940);
        patternContext.bezierCurveTo(214.712580, 143.226670, 216.809980, 155.327450, 218.886800, 167.485140);
        patternContext.bezierCurveTo(219.184430, 169.227620, 219.584010, 171.208790, 217.817210, 171.482850);
        patternContext.bezierCurveTo(212.787920, 172.262980, 207.212940, 173.196260, 201.734610, 174.329190);
        patternContext.bezierCurveTo(200.115640, 174.663960, 199.582040, 172.752100, 199.253480, 170.959900);
        patternContext.bezierCurveTo(197.225290, 159.896620, 195.023270, 147.552140, 193.180680, 136.951110);
        patternContext.bezierCurveTo(192.822490, 134.892830, 192.615220, 132.547940, 194.444730, 132.226540);
        patternContext.fill();

        // #path10302-0-8
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.228866;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(147.154210, 144.964990);
        patternContext.bezierCurveTo(152.465800, 144.107060, 157.935790, 143.279180, 162.695780, 142.415860);
        patternContext.bezierCurveTo(164.624170, 142.066120, 165.047090, 143.841080, 165.395910, 145.773230);
        patternContext.bezierCurveTo(167.281890, 156.219540, 169.226690, 168.345780, 171.150220, 180.528660);
        patternContext.bezierCurveTo(171.425870, 182.274750, 171.800470, 184.260790, 170.030360, 184.512580);
        patternContext.bezierCurveTo(164.991640, 185.229310, 159.405350, 186.092290, 153.913180, 187.156130);
        patternContext.bezierCurveTo(152.290120, 187.470480, 151.780650, 185.552040, 151.474690, 183.755850);
        patternContext.bezierCurveTo(149.586010, 172.667900, 147.539650, 160.296670, 145.830740, 149.673270);
        patternContext.bezierCurveTo(145.498500, 147.610640, 145.320780, 145.263320, 147.154200, 144.964990);
        patternContext.fill();

        // #path10302-0-8-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(77, 77, 77)';
        patternContext.lineWidth = 0.202701;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(174.246270, 210.525100);
        patternContext.bezierCurveTo(173.676150, 206.343250, 173.144400, 202.036100, 172.539480, 198.289520);
        patternContext.bezierCurveTo(172.294440, 196.771690, 174.082910, 196.419210, 176.023790, 196.123530);
        patternContext.bezierCurveTo(186.517380, 194.524870, 198.685460, 192.862010, 210.908750, 191.215290);
        patternContext.bezierCurveTo(212.660600, 190.979000, 214.656520, 190.662720, 214.812570, 192.056710);
        patternContext.bezierCurveTo(215.256750, 196.024760, 215.817230, 200.423300, 216.582570, 204.745450);
        patternContext.bezierCurveTo(216.808710, 206.022750, 214.872880, 206.445040, 213.069530, 206.705480);
        patternContext.bezierCurveTo(201.937440, 208.313050, 189.520190, 210.058610, 178.859890, 211.519510);
        patternContext.bezierCurveTo(176.790020, 211.803190, 174.445250, 211.968560, 174.246270, 210.525120);
        patternContext.fill();

        // #path10302-0-8-7-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.lineWidth = 0.250360;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(140.727140, 106.148180);
        patternContext.bezierCurveTo(140.684640, 101.927860, 140.724140, 97.587268, 140.544240, 93.795757);
        patternContext.bezierCurveTo(140.471140, 92.259721, 143.245760, 92.108538, 146.239780, 92.030788);
        patternContext.bezierCurveTo(162.427290, 91.610388, 181.160450, 91.312668, 199.973970, 91.037147);
        patternContext.bezierCurveTo(202.670390, 90.997377, 205.751720, 90.905276, 205.714460, 92.308300);
        patternContext.bezierCurveTo(205.608380, 96.302064, 206.205620, 98.442186, 204.243550, 100.624810);
        patternContext.bezierCurveTo(203.411110, 101.550810, 198.789430, 105.278760, 196.010360, 105.336790);
        patternContext.bezierCurveTo(178.855220, 105.694940, 163.924070, 107.385570, 147.511380, 107.650460);
        patternContext.bezierCurveTo(144.324560, 107.701960, 140.745130, 107.605160, 140.727140, 106.148200);
        patternContext.fill();

        // #path10302-6
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.298524;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(76.634156, 247.141070);
        patternContext.bezierCurveTo(88.225812, 247.151370, 100.149000, 247.278180, 110.564590, 247.141070);
        patternContext.bezierCurveTo(112.539040, 247.115070, 115.066500, 248.552280, 115.134350, 250.102580);
        patternContext.bezierCurveTo(115.501210, 258.484400, 115.407360, 268.182890, 115.248540, 277.922810);
        patternContext.bezierCurveTo(115.225740, 279.318760, 113.255200, 280.850990, 111.478490, 280.884320);
        patternContext.bezierCurveTo(100.528030, 281.089730, 88.334846, 281.053940, 76.291371, 280.884320);
        patternContext.bezierCurveTo(74.459792, 280.858520, 72.316962, 279.361680, 72.292825, 277.922810);
        patternContext.bezierCurveTo(72.143870, 269.040620, 72.107258, 259.138230, 72.178636, 250.641040);
        patternContext.bezierCurveTo(72.192516, 248.991170, 74.533806, 247.139210, 76.634156, 247.141070);
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
        patternContext.transform(0.264583, 0.000000, 0.000000, 0.264583, -0.317336, -1.671710);

        // #path7615
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.700000;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(65.169242, 77.315107);
        patternContext.lineTo(31.412523, 126.453890);
        patternContext.bezierCurveTo(29.948573, 148.404890, 29.987746, 170.179050, 47.267952, 189.924850);
        patternContext.bezierCurveTo(59.590230, 205.069610, 74.565908, 219.370110, 111.201130, 226.778930);
        patternContext.lineTo(205.674330, 226.322510);
        patternContext.bezierCurveTo(219.116660, 223.546540, 231.196600, 216.189150, 240.765160, 209.855700);
        patternContext.bezierCurveTo(248.824930, 204.520930, 256.663000, 198.665020, 261.571960, 190.436710);
        patternContext.bezierCurveTo(274.442920, 171.068070, 283.756300, 150.862350, 277.737570, 127.049080);
        patternContext.lineTo(243.980870, 77.910293);
        patternContext.fill();
        patternContext.stroke();

        // #path2943
        patternContext.beginPath();
        patternContext.globalAlpha = 1.0;
        patternContext.fillStyle = 'rgb(128, 128, 128)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.983000;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(105.707780, 10.460160);
        patternContext.bezierCurveTo(86.795824, 19.090652, 72.290751, 25.769829, 64.070831, 55.949125);
        patternContext.bezierCurveTo(64.706421, 81.870256, 74.480801, 103.215250, 105.287200, 114.028780);
        patternContext.bezierCurveTo(154.585260, 115.812970, 165.850030, 114.841080, 196.131440, 115.247230);
        patternContext.bezierCurveTo(226.800050, 105.009640, 244.244820, 88.386890, 245.759310, 64.072154);
        patternContext.bezierCurveTo(243.026620, 37.468221, 228.123230, 20.180674, 207.486960, 10.866312);
        patternContext.bezierCurveTo(174.682100, 10.324776, 155.041670, 11.001695, 105.707780, 10.460160);
        patternContext.fill();
        patternContext.stroke();

        // #path1073
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.022109;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(47.267952, 190.345430);
        patternContext.lineTo(13.511233, 250.745190);
        patternContext.lineTo(55.451401, 320.358480);
        patternContext.lineTo(58.520191, 363.866810);
        patternContext.lineTo(63.634846, 378.198960);
        patternContext.lineTo(114.269920, 379.222680);
        patternContext.lineTo(122.964840, 366.426090);
        patternContext.lineTo(125.522160, 342.880430);
        patternContext.lineTo(171.042590, 342.368570);
        patternContext.lineTo(173.088450, 361.819340);
        patternContext.lineTo(179.226030, 377.175220);
        patternContext.lineTo(228.326710, 377.687080);
        patternContext.lineTo(240.601880, 362.331210);
        patternContext.lineTo(243.159210, 316.775450);
        patternContext.lineTo(293.794290, 247.674010);
        patternContext.lineTo(261.571960, 190.857290);
        patternContext.lineTo(240.090420, 212.355500);
        patternContext.lineTo(207.356630, 224.640210);
        patternContext.lineTo(183.317760, 228.223240);
        patternContext.lineTo(111.201130, 227.199510);
        patternContext.lineTo(85.116395, 219.521580);
        patternContext.lineTo(59.543124, 205.701300);
        patternContext.fill();
        patternContext.stroke();

        // #path404
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.022109;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(73.182198, 94.145805);
        patternContext.lineTo(68.067542, 82.372963);
        patternContext.lineTo(44.028665, 108.477950);
        patternContext.lineTo(34.310823, 131.511750);
        patternContext.lineTo(70.113404, 159.664190);
        patternContext.fill();
        patternContext.stroke();

        // #path404-5
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.022109;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(237.127220, 95.479732);
        patternContext.lineTo(242.241880, 83.706890);
        patternContext.lineTo(266.280750, 109.811880);
        patternContext.lineTo(275.998590, 132.845680);
        patternContext.lineTo(240.196020, 160.998110);
        patternContext.fill();
        patternContext.stroke();

        // #path10302
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.264583;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(228.074290, 242.516570);
        patternContext.bezierCurveTo(237.179950, 242.526870, 246.546040, 242.653680, 254.727860, 242.516570);
        patternContext.bezierCurveTo(256.278860, 242.490570, 258.264270, 243.927780, 258.317570, 245.478080);
        patternContext.bezierCurveTo(258.605750, 253.859900, 258.532030, 263.558390, 258.407270, 273.298310);
        patternContext.bezierCurveTo(258.389370, 274.694260, 256.841430, 276.226490, 255.445760, 276.259820);
        patternContext.bezierCurveTo(246.843780, 276.465230, 237.265600, 276.429440, 227.805020, 276.259820);
        patternContext.bezierCurveTo(226.366250, 276.234020, 224.682980, 274.737180, 224.664020, 273.298310);
        patternContext.bezierCurveTo(224.547010, 264.416120, 224.518250, 254.513730, 224.574320, 246.016540);
        patternContext.bezierCurveTo(224.585220, 244.366670, 226.424390, 242.514710, 228.074290, 242.516570);
        patternContext.fill();

        // #path10302-0
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.228866;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(171.961660, 150.222210);
        patternContext.bezierCurveTo(177.342080, 150.235310, 182.873940, 150.303710, 187.710900, 150.222210);
        patternContext.bezierCurveTo(189.670470, 150.189210, 189.800520, 152.009220, 189.832010, 153.972350);
        patternContext.bezierCurveTo(190.002300, 164.586180, 189.958740, 176.867300, 189.885010, 189.200880);
        patternContext.bezierCurveTo(189.874410, 190.968560, 189.922610, 192.989050, 188.135090, 192.951010);
        patternContext.bezierCurveTo(183.046800, 192.842730, 177.394490, 192.790150, 171.802550, 192.951010);
        patternContext.bezierCurveTo(170.150010, 192.998510, 169.957770, 191.022910, 169.946570, 189.200880);
        patternContext.bezierCurveTo(169.877470, 177.953440, 169.860470, 165.414110, 169.893570, 154.654190);
        patternContext.bezierCurveTo(169.899570, 152.564980, 170.104120, 150.219850, 171.961650, 150.222210);
        patternContext.fill();

        // #path10302-0-8
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.228866;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(114.568460, 152.091090);
        patternContext.bezierCurveTo(119.948880, 152.104190, 125.480740, 152.172590, 130.317700, 152.091090);
        patternContext.bezierCurveTo(132.277270, 152.058090, 132.407320, 153.878100, 132.438810, 155.841230);
        patternContext.bezierCurveTo(132.609100, 166.455060, 132.565540, 178.736180, 132.491810, 191.069760);
        patternContext.bezierCurveTo(132.481210, 192.837440, 132.529410, 194.857930, 130.741890, 194.819890);
        patternContext.bezierCurveTo(125.653600, 194.711610, 120.001290, 194.659030, 114.409350, 194.819890);
        patternContext.bezierCurveTo(112.756810, 194.867390, 112.564570, 192.891790, 112.553370, 191.069760);
        patternContext.bezierCurveTo(112.484270, 179.822320, 112.467270, 167.282990, 112.500370, 156.523070);
        patternContext.bezierCurveTo(112.506370, 154.433860, 112.710920, 152.088730, 114.568450, 152.091090);
        patternContext.fill();

        // #path10302-0-8-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(77, 77, 77)';
        patternContext.lineWidth = 0.202701;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(130.870970, 220.388670);
        patternContext.bezierCurveTo(130.884070, 216.168150, 130.952470, 211.828840, 130.870970, 208.034620);
        patternContext.bezierCurveTo(130.837970, 206.497490, 132.657990, 206.395480, 134.621110, 206.370780);
        patternContext.bezierCurveTo(145.234940, 206.237200, 157.516060, 206.271380, 169.849640, 206.329180);
        patternContext.bezierCurveTo(171.617330, 206.337180, 173.637810, 206.299680, 173.599780, 207.701860);
        patternContext.bezierCurveTo(173.491490, 211.693230, 173.438910, 216.127020, 173.599780, 220.513460);
        patternContext.bezierCurveTo(173.647280, 221.809750, 171.671680, 221.960550, 169.849640, 221.969340);
        patternContext.bezierCurveTo(158.602200, 222.023540, 146.062870, 222.036840, 135.302960, 222.010940);
        patternContext.bezierCurveTo(133.213740, 222.005940, 130.868620, 221.845780, 130.870970, 220.388690);
        patternContext.fill();

        // #path10302-0-8-7-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.lineWidth = 0.261849;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(120.607790, 107.890260);
        patternContext.bezierCurveTo(120.629590, 103.669740, 120.743790, 99.330430, 120.607790, 95.536219);
        patternContext.bezierCurveTo(120.552690, 93.999089, 123.589860, 93.897079, 126.865800, 93.872379);
        patternContext.bezierCurveTo(144.577510, 93.738799, 165.071490, 93.772979, 185.653030, 93.830779);
        patternContext.bezierCurveTo(188.602840, 93.838779, 191.974500, 93.801279, 191.911030, 95.203459);
        patternContext.bezierCurveTo(191.730320, 99.194820, 191.642590, 103.628610, 191.911030, 108.015050);
        patternContext.bezierCurveTo(191.990230, 109.311340, 188.693540, 109.462140, 185.653030, 109.470930);
        patternContext.bezierCurveTo(166.883990, 109.525130, 145.959110, 109.538430, 128.003640, 109.512530);
        patternContext.bezierCurveTo(124.517260, 109.507530, 120.603870, 109.347370, 120.607790, 107.890280);
        patternContext.fill();

        // #path10302-6
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.264583;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(58.860909, 248.880050);
        patternContext.bezierCurveTo(67.966569, 248.890350, 77.332659, 249.017160, 85.514479, 248.880050);
        patternContext.bezierCurveTo(87.065479, 248.854050, 89.050889, 250.291260, 89.104189, 251.841560);
        patternContext.bezierCurveTo(89.392369, 260.223380, 89.318649, 269.921870, 89.193889, 279.661790);
        patternContext.bezierCurveTo(89.175989, 281.057740, 87.628049, 282.589970, 86.232379, 282.623300);
        patternContext.bezierCurveTo(77.630399, 282.828710, 68.052219, 282.792920, 58.591639, 282.623300);
        patternContext.bezierCurveTo(57.152869, 282.597500, 55.469599, 281.100660, 55.450639, 279.661790);
        patternContext.bezierCurveTo(55.333629, 270.779600, 55.304869, 260.877210, 55.360939, 252.380020);
        patternContext.bezierCurveTo(55.371839, 250.730150, 57.211009, 248.878190, 58.860909, 248.880050);
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
        patternContext.transform(0.264583, 0.000000, 0.000000, 0.264583, -0.317336, -1.671710);

        // #path7615
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.575850;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(231.130900, 77.315107);
        patternContext.lineTo(260.137130, 126.453890);
        patternContext.bezierCurveTo(261.395060, 148.404890, 261.361400, 170.179050, 246.512990, 189.924850);
        patternContext.bezierCurveTo(235.924800, 205.069610, 223.056600, 219.370110, 191.576950, 226.778930);
        patternContext.lineTo(110.398700, 226.322510);
        patternContext.bezierCurveTo(98.848073, 223.546540, 88.468103, 216.189150, 80.246103, 209.855700);
        patternContext.bezierCurveTo(73.320563, 204.520930, 66.585523, 198.665020, 62.367393, 190.436710);
        patternContext.bezierCurveTo(51.307723, 171.068070, 43.304983, 150.862350, 48.476723, 127.049080);
        patternContext.lineTo(77.482933, 77.910293);
        patternContext.fill();
        patternContext.stroke();

        // #path2943
        patternContext.beginPath();
        patternContext.globalAlpha = 1.0;
        patternContext.fillStyle = 'rgb(128, 128, 128)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.768139;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(200.498470, 21.463758);
        patternContext.bezierCurveTo(217.309550, 29.621865, 230.203280, 35.932420, 237.510070, 63.115488);
        patternContext.bezierCurveTo(236.945090, 86.284495, 228.256520, 105.148480, 200.872330, 114.104900);
        patternContext.bezierCurveTo(157.050690, 114.556260, 147.037290, 113.425500, 120.119770, 113.085800);
        patternContext.bezierCurveTo(92.858073, 103.217380, 77.351203, 87.945090, 76.004963, 66.162925);
        patternContext.bezierCurveTo(78.434073, 42.431904, 91.681883, 27.315960, 110.025710, 19.464286);
        patternContext.bezierCurveTo(139.186350, 19.741480, 156.644970, 20.802852, 200.498470, 21.463758);
        patternContext.fill();
        patternContext.stroke();

        // #path1073
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.955130;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(248.214870, 190.345430);
        patternContext.lineTo(263.200830, 252.484170);
        patternContext.lineTo(241.068820, 320.358480);
        patternContext.lineTo(238.389050, 363.866810);
        patternContext.lineTo(233.922770, 378.198960);
        patternContext.lineTo(189.706570, 379.222680);
        patternContext.lineTo(182.113890, 366.426090);
        patternContext.lineTo(179.880750, 342.880430);
        patternContext.lineTo(140.130840, 342.368570);
        patternContext.lineTo(138.344330, 361.819340);
        patternContext.lineTo(132.984790, 377.175220);
        patternContext.lineTo(90.108493, 377.687080);
        patternContext.lineTo(79.389413, 362.331210);
        patternContext.lineTo(77.156273, 316.775450);
        patternContext.lineTo(59.024773, 249.412990);
        patternContext.lineTo(61.077663, 190.857290);
        patternContext.lineTo(79.836033, 212.355500);
        patternContext.lineTo(108.420240, 224.640210);
        patternContext.lineTo(129.411760, 228.223240);
        patternContext.lineTo(192.386340, 227.199510);
        patternContext.lineTo(215.164380, 219.521580);
        patternContext.lineTo(237.495790, 205.701300);
        patternContext.fill();
        patternContext.stroke();

        // #path404
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.022109;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(201.064470, 116.417940);
        patternContext.bezierCurveTo(223.858610, 106.281080, 236.530010, 95.300650, 232.790200, 82.952623);
        patternContext.lineTo(258.568060, 128.186390);
        patternContext.lineTo(261.329980, 149.481210);
        patternContext.bezierCurveTo(258.431680, 176.725230, 202.920650, 175.315010, 202.920650, 175.315010);
        patternContext.fill();
        patternContext.stroke();

        // #path404-5
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.022109;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(80.960893, 87.184854);
        patternContext.lineTo(74.686913, 82.947592);
        patternContext.lineTo(62.241243, 104.994960);
        patternContext.lineTo(48.476723, 127.049080);
        patternContext.lineTo(66.878553, 135.313430);
        patternContext.fill();
        patternContext.stroke();

        // #path10302
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.179101;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(84.041423, 232.662350);
        patternContext.bezierCurveTo(79.869053, 232.672650, 75.577353, 232.799460, 71.828293, 232.662350);
        patternContext.bezierCurveTo(71.117603, 232.636350, 70.207853, 234.073560, 70.183433, 235.623860);
        patternContext.bezierCurveTo(70.051383, 244.005680, 70.085133, 253.704170, 70.142333, 263.444090);
        patternContext.bezierCurveTo(70.150333, 264.840040, 70.859823, 266.372270, 71.499343, 266.405600);
        patternContext.bezierCurveTo(75.440923, 266.611010, 79.829803, 266.575220, 84.164813, 266.405600);
        patternContext.bezierCurveTo(84.824083, 266.379800, 85.595383, 264.882960, 85.604073, 263.444090);
        patternContext.bezierCurveTo(85.657673, 254.561900, 85.670873, 244.659510, 85.645173, 236.162320);
        patternContext.bezierCurveTo(85.640173, 234.512450, 84.797433, 232.660490, 84.041423, 232.662350);
        patternContext.fill();

        // #path10302-0
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.228866;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(114.528240, 132.226540);
        patternContext.bezierCurveTo(109.227870, 131.301770, 103.768740, 130.405060, 99.020013, 129.481850);
        patternContext.bezierCurveTo(97.096183, 129.107850, 96.650933, 130.877340, 96.277803, 132.804940);
        patternContext.bezierCurveTo(94.260403, 143.226670, 92.163003, 155.327450, 90.086183, 167.485140);
        patternContext.bezierCurveTo(89.788553, 169.227620, 89.388973, 171.208790, 91.155773, 171.482850);
        patternContext.bezierCurveTo(96.185063, 172.262980, 101.760040, 173.196260, 107.238370, 174.329190);
        patternContext.bezierCurveTo(108.857340, 174.663960, 109.390940, 172.752100, 109.719500, 170.959900);
        patternContext.bezierCurveTo(111.747690, 159.896620, 113.949710, 147.552140, 115.792300, 136.951110);
        patternContext.bezierCurveTo(116.150490, 134.892830, 116.357760, 132.547940, 114.528250, 132.226540);
        patternContext.fill();

        // #path10302-0-8
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.228866;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(161.818770, 144.964990);
        patternContext.bezierCurveTo(156.507180, 144.107060, 151.037190, 143.279180, 146.277200, 142.415860);
        patternContext.bezierCurveTo(144.348810, 142.066120, 143.925890, 143.841080, 143.577070, 145.773230);
        patternContext.bezierCurveTo(141.691090, 156.219540, 139.746290, 168.345780, 137.822760, 180.528660);
        patternContext.bezierCurveTo(137.547110, 182.274750, 137.172510, 184.260790, 138.942620, 184.512580);
        patternContext.bezierCurveTo(143.981340, 185.229310, 149.567630, 186.092290, 155.059800, 187.156130);
        patternContext.bezierCurveTo(156.682860, 187.470480, 157.192330, 185.552040, 157.498290, 183.755850);
        patternContext.bezierCurveTo(159.386970, 172.667900, 161.433330, 160.296670, 163.142240, 149.673270);
        patternContext.bezierCurveTo(163.474480, 147.610640, 163.652200, 145.263320, 161.818780, 144.964990);
        patternContext.fill();

        // #path10302-0-8-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(77, 77, 77)';
        patternContext.lineWidth = 0.202701;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(134.726710, 210.525100);
        patternContext.bezierCurveTo(135.296830, 206.343250, 135.828580, 202.036100, 136.433500, 198.289520);
        patternContext.bezierCurveTo(136.678540, 196.771690, 134.890070, 196.419210, 132.949190, 196.123530);
        patternContext.bezierCurveTo(122.455600, 194.524870, 110.287520, 192.862010, 98.064233, 191.215290);
        patternContext.bezierCurveTo(96.312383, 190.979000, 94.316463, 190.662720, 94.160413, 192.056710);
        patternContext.bezierCurveTo(93.716233, 196.024760, 93.155753, 200.423300, 92.390413, 204.745450);
        patternContext.bezierCurveTo(92.164273, 206.022750, 94.100103, 206.445040, 95.903453, 206.705480);
        patternContext.bezierCurveTo(107.035540, 208.313050, 119.452790, 210.058610, 130.113090, 211.519510);
        patternContext.bezierCurveTo(132.182960, 211.803190, 134.527730, 211.968560, 134.726710, 210.525120);
        patternContext.fill();

        // #path10302-0-8-7-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.lineWidth = 0.250360;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(168.245840, 106.148180);
        patternContext.bezierCurveTo(168.288340, 101.927860, 168.248840, 97.587268, 168.428740, 93.795757);
        patternContext.bezierCurveTo(168.501840, 92.259721, 165.727220, 92.108538, 162.733200, 92.030788);
        patternContext.bezierCurveTo(146.545690, 91.610388, 127.812530, 91.312668, 108.999010, 91.037147);
        patternContext.bezierCurveTo(106.302590, 90.997377, 103.221260, 90.905276, 103.258520, 92.308300);
        patternContext.bezierCurveTo(103.364600, 96.302064, 102.767360, 98.442186, 104.729430, 100.624810);
        patternContext.bezierCurveTo(105.561870, 101.550810, 110.183550, 105.278760, 112.962620, 105.336790);
        patternContext.bezierCurveTo(130.117760, 105.694940, 145.048910, 107.385570, 161.461600, 107.650460);
        patternContext.bezierCurveTo(164.648420, 107.701960, 168.227850, 107.605160, 168.245840, 106.148200);
        patternContext.fill();

        // #path10302-6
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.298524;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(232.338830, 247.141070);
        patternContext.bezierCurveTo(220.747170, 247.151370, 208.823980, 247.278180, 198.408390, 247.141070);
        patternContext.bezierCurveTo(196.433940, 247.115070, 193.906480, 248.552280, 193.838630, 250.102580);
        patternContext.bezierCurveTo(193.471770, 258.484400, 193.565620, 268.182890, 193.724440, 277.922810);
        patternContext.bezierCurveTo(193.747240, 279.318760, 195.717780, 280.850990, 197.494490, 280.884320);
        patternContext.bezierCurveTo(208.444950, 281.089730, 220.638140, 281.053940, 232.681610, 280.884320);
        patternContext.bezierCurveTo(234.513190, 280.858520, 236.656020, 279.361680, 236.680160, 277.922810);
        patternContext.bezierCurveTo(236.829110, 269.040620, 236.865730, 259.138230, 236.794350, 250.641040);
        patternContext.bezierCurveTo(236.780450, 248.991170, 234.439180, 247.139210, 232.338830, 247.141070);
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
        patternContext.transform(-0.264583, 0.000000, 0.000000, 0.264583, 81.841700, -1.671710);

        // #path7615
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.381718;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(95.732979, 77.315107);
        patternContext.lineTo(73.433218, 126.453890);
        patternContext.bezierCurveTo(72.466130, 148.404890, 72.492007, 170.179050, 83.907349, 189.924850);
        patternContext.bezierCurveTo(92.047472, 205.069610, 101.940440, 219.370110, 126.141740, 226.778930);
        patternContext.lineTo(188.550940, 226.322510);
        patternContext.bezierCurveTo(197.430980, 223.546540, 205.411010, 216.189150, 211.732020, 209.855700);
        patternContext.bezierCurveTo(217.056320, 204.520930, 222.234170, 198.665020, 225.477040, 190.436710);
        patternContext.bezierCurveTo(233.979620, 171.068070, 240.132060, 150.862350, 236.156080, 127.049080);
        patternContext.lineTo(213.856330, 77.910293);
        patternContext.fill();
        patternContext.stroke();

        // #path404-5
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.022109;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(92.366240, 89.103469);
        patternContext.lineTo(217.334290, 85.445874);
        patternContext.lineTo(226.438240, 104.015280);
        patternContext.lineTo(236.156080, 127.049080);
        patternContext.bezierCurveTo(183.061850, 98.050205, 231.255010, 152.297270, 80.994482, 182.547410);
        patternContext.bezierCurveTo(67.739616, 152.427800, 71.634047, 125.402550, 92.366240, 89.103469);
        patternContext.fill();
        patternContext.stroke();

        // #path2943
        patternContext.beginPath();
        patternContext.globalAlpha = 1.0;
        patternContext.fillStyle = 'rgb(128, 128, 128)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.357921;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(112.380530, 42.408596);
        patternContext.bezierCurveTo(97.487307, 49.009302, 86.064307, 54.107590, 79.495632, 72.755658);
        patternContext.bezierCurveTo(79.901480, 88.183421, 87.505615, 100.179350, 111.675900, 104.277280);
        patternContext.bezierCurveTo(150.410570, 101.568540, 159.266530, 100.125900, 183.061850, 98.050205);
        patternContext.bezierCurveTo(207.199880, 89.589943, 220.968990, 78.329713, 222.246990, 63.696461);
        patternContext.bezierCurveTo(220.195600, 48.021567, 208.546150, 38.840823, 192.362690, 34.859412);
        patternContext.bezierCurveTo(166.584800, 37.047452, 151.147830, 38.955187, 112.380530, 42.408596);
        patternContext.fill();
        patternContext.stroke();

        // #path1073
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.839780;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(116.056400, 264.735130);
        patternContext.lineTo(117.942710, 321.912920);
        patternContext.lineTo(139.185720, 378.893050);
        patternContext.lineTo(180.964820, 377.668240);
        patternContext.lineTo(200.094570, 305.376230);
        patternContext.lineTo(202.150790, 263.218400);
        patternContext.lineTo(188.550940, 226.322510);
        patternContext.bezierCurveTo(167.369300, 230.709730, 146.187670, 231.102380, 125.006030, 227.199510);
        patternContext.fill();
        patternContext.stroke();

        // #path10302
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.224324;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(169.365380, 257.905910);
        patternContext.bezierCurveTo(175.910840, 257.916210, 182.643500, 258.043020, 188.524860, 257.905910);
        patternContext.bezierCurveTo(189.639770, 257.879910, 191.066950, 259.317120, 191.105270, 260.867420);
        patternContext.bezierCurveTo(191.312420, 269.249240, 191.259430, 278.947730, 191.169770, 288.687650);
        patternContext.bezierCurveTo(191.156870, 290.083600, 190.044190, 291.615830, 189.040930, 291.649160);
        patternContext.bezierCurveTo(182.857540, 291.854570, 175.972430, 291.818780, 169.171840, 291.649160);
        patternContext.bezierCurveTo(168.137610, 291.623360, 166.927620, 290.126520, 166.913990, 288.687650);
        patternContext.bezierCurveTo(166.829890, 279.805460, 166.809200, 269.903070, 166.849490, 261.405880);
        patternContext.bezierCurveTo(166.857490, 259.756010, 168.179380, 257.904050, 169.365380, 257.905910);
        patternContext.fill();

        // #path10302-0
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.173157;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(206.268290, 153.458980);
        patternContext.bezierCurveTo(210.183070, 153.469280, 214.208040, 153.523080, 217.727400, 153.458980);
        patternContext.bezierCurveTo(219.153180, 153.432980, 219.247810, 154.864870, 219.270720, 156.409320);
        patternContext.bezierCurveTo(219.394620, 164.759520, 219.362920, 174.421420, 219.309320, 184.124600);
        patternContext.bezierCurveTo(219.301320, 185.515280, 219.336720, 187.104860, 218.036080, 187.074930);
        patternContext.bezierCurveTo(214.333850, 186.989730, 210.221240, 186.948370, 206.152560, 187.074930);
        patternContext.bezierCurveTo(204.950170, 187.112330, 204.810300, 185.558040, 204.802150, 184.124600);
        patternContext.bezierCurveTo(204.751850, 175.275920, 204.739450, 165.410870, 204.763550, 156.945740);
        patternContext.bezierCurveTo(204.767550, 155.302100, 204.916740, 153.457120, 206.268280, 153.458980);
        patternContext.fill();

        // #path10302-0-8-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(77, 77, 77)';
        patternContext.lineWidth = 0.187205;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(196.830900, 211.171870);
        patternContext.bezierCurveTo(196.844000, 207.572000, 196.912400, 203.870820, 196.830900, 200.634560);
        patternContext.bezierCurveTo(196.797900, 199.323480, 198.617770, 199.219600, 200.581040, 199.215400);
        patternContext.lineTo(217.177480, 199.179900);
        patternContext.bezierCurveTo(217.348900, 199.179900, 206.819320, 210.849280, 201.922580, 213.759040);
        patternContext.bezierCurveTo(201.033460, 213.652420, 196.828550, 212.414680, 196.830900, 211.171860);
        patternContext.fill();

        // #path10302-0-8-7-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.lineWidth = 0.173216;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(215.677020, 62.294399);
        patternContext.lineTo(219.496300, 65.321869);
        patternContext.bezierCurveTo(218.342600, 75.914279, 205.667970, 84.790485, 202.314390, 86.250458);
        patternContext.lineTo(195.023030, 82.702352);
        patternContext.bezierCurveTo(198.780380, 81.295368, 214.495960, 72.265157, 215.677020, 62.294399);
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
        patternContext.transform(0.264583, 0.000000, 0.000000, 0.264583, -0.317336, -1.671710);

        // #path7615
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(19, 19, 19)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.575850;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(231.130900, 77.315107);
        patternContext.lineTo(260.137130, 126.453890);
        patternContext.bezierCurveTo(261.395060, 148.404890, 261.361400, 170.179050, 246.512990, 189.924850);
        patternContext.bezierCurveTo(235.924800, 205.069610, 223.056600, 219.370110, 191.576950, 226.778930);
        patternContext.lineTo(110.398700, 226.322510);
        patternContext.bezierCurveTo(98.848073, 223.546540, 88.468103, 216.189150, 80.246103, 209.855700);
        patternContext.bezierCurveTo(73.320563, 204.520930, 66.585523, 198.665020, 62.367393, 190.436710);
        patternContext.bezierCurveTo(51.307723, 171.068070, 43.304983, 150.862350, 48.476723, 127.049080);
        patternContext.lineTo(77.482933, 77.910293);
        patternContext.fill();
        patternContext.stroke();

        // #path2943
        patternContext.beginPath();
        patternContext.globalAlpha = 1.0;
        patternContext.fillStyle = 'rgb(26, 26, 26)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 1.768139;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(199.778230, 23.327016);
        patternContext.bezierCurveTo(216.589310, 32.108964, 229.483040, 38.897992, 236.789830, 66.352208);
        patternContext.bezierCurveTo(236.224850, 89.500249, 227.536280, 108.041810, 200.152090, 115.982030);
        patternContext.bezierCurveTo(156.330450, 114.807220, 146.317050, 113.304870, 119.399530, 111.966290);
        patternContext.bezierCurveTo(92.137833, 101.086210, 76.630963, 85.238479, 75.284723, 63.406357);
        patternContext.bezierCurveTo(77.713833, 39.765478, 90.961643, 25.141146, 109.305470, 17.970193);
        patternContext.bezierCurveTo(138.466110, 19.329508, 155.924730, 21.038751, 199.778230, 23.327016);
        patternContext.fill();
        patternContext.stroke();

        // #path1073
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.strokeStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.955130;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(248.214870, 190.345430);
        patternContext.lineTo(263.200830, 252.484170);
        patternContext.lineTo(241.068820, 320.358480);
        patternContext.lineTo(238.389050, 363.866810);
        patternContext.lineTo(233.922770, 378.198960);
        patternContext.lineTo(189.706570, 379.222680);
        patternContext.lineTo(182.113890, 366.426090);
        patternContext.lineTo(179.880750, 342.880430);
        patternContext.lineTo(140.130840, 342.368570);
        patternContext.lineTo(138.344330, 361.819340);
        patternContext.lineTo(132.984790, 377.175220);
        patternContext.lineTo(90.108493, 377.687080);
        patternContext.lineTo(79.389413, 362.331210);
        patternContext.lineTo(77.156273, 316.775450);
        patternContext.lineTo(59.024773, 249.412990);
        patternContext.lineTo(61.077663, 190.857290);
        patternContext.lineTo(79.836033, 212.355500);
        patternContext.lineTo(108.420240, 224.640210);
        patternContext.lineTo(129.411760, 228.223240);
        patternContext.lineTo(192.386340, 227.199510);
        patternContext.lineTo(215.164380, 219.521580);
        patternContext.lineTo(237.495790, 205.701300);
        patternContext.fill();
        patternContext.stroke();

        // #path7615-3
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.lineWidth = 1.381718;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.miterLimit = 4;
        patternContext.moveTo(88.028533, 98.851423);
        patternContext.bezierCurveTo(70.400593, 130.875910, 58.989803, 129.052620, 85.574483, 210.378820);
        patternContext.bezierCurveTo(80.250183, 205.044050, 63.644103, 187.022600, 60.401233, 178.794290);
        patternContext.bezierCurveTo(51.898653, 159.425650, 46.852173, 153.966030, 50.828153, 130.152760);
        patternContext.lineTo(77.183083, 85.069153);
        patternContext.fill();

        // #path10302
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.177267;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(81.354483, 235.173840);
        patternContext.bezierCurveTo(77.267123, 235.184140, 73.062873, 235.310950, 69.390223, 235.173840);
        patternContext.bezierCurveTo(68.694003, 235.147840, 67.802793, 236.585050, 67.778863, 238.135350);
        patternContext.bezierCurveTo(67.649513, 246.517170, 67.682563, 256.215660, 67.738563, 265.955580);
        patternContext.bezierCurveTo(67.746563, 267.351530, 68.441433, 268.883760, 69.067923, 268.917090);
        patternContext.bezierCurveTo(72.929183, 269.122500, 77.228633, 269.086710, 81.475313, 268.917090);
        patternContext.bezierCurveTo(82.121143, 268.891290, 82.876723, 267.394450, 82.885243, 265.955580);
        patternContext.bezierCurveTo(82.937743, 257.073390, 82.950643, 247.171000, 82.925543, 238.673810);
        patternContext.bezierCurveTo(82.920543, 237.023940, 82.095083, 235.171980, 81.354483, 235.173840);
        patternContext.fill();

        // #path10302-0
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(0, 0, 0)';
        patternContext.lineWidth = 0.133111;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(71.465453, 112.594080);
        patternContext.bezierCurveTo(69.234363, 111.982360, 66.928863, 111.395050, 64.942823, 110.774450);
        patternContext.bezierCurveTo(64.138253, 110.523000, 63.699623, 111.887200, 63.271563, 113.371210);
        patternContext.bezierCurveTo(60.957263, 121.394630, 58.379003, 130.706190, 55.802183, 140.061010);
        patternContext.bezierCurveTo(55.433303, 141.401890, 54.985743, 142.927310, 55.734083, 143.105010);
        patternContext.bezierCurveTo(57.864323, 143.610840, 60.216373, 144.224050, 62.498293, 144.992040);
        patternContext.bezierCurveTo(63.172653, 145.218990, 63.669923, 143.744080, 64.059753, 142.364660);
        patternContext.bezierCurveTo(66.466103, 133.849410, 69.124093, 124.349180, 71.384993, 116.191550);
        patternContext.bezierCurveTo(71.824733, 114.607820, 72.235263, 112.806920, 71.465393, 112.594090);
        patternContext.fill();

        // #path10302-0-8-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(77, 77, 77)';
        patternContext.lineWidth = 0.126965;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(57.303523, 162.548630);
        patternContext.bezierCurveTo(58.524963, 160.425270, 59.748753, 158.223340, 60.901163, 156.346380);
        patternContext.bezierCurveTo(61.368013, 155.586000, 60.342813, 154.901610, 59.200013, 154.226800);
        patternContext.lineTo(49.539283, 148.522270);
        patternContext.bezierCurveTo(49.439383, 148.463570, 51.592153, 158.938120, 53.452653, 162.327730);
        patternContext.bezierCurveTo(54.007263, 162.569470, 56.880583, 163.280950, 57.303523, 162.548650);
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
        patternContext.lineWidth = 0.070004;
        patternContext.moveTo(52.140999, 28.113303);
        patternContext.lineTo(52.140999, 28.113303);
        patternContext.quadraticCurveTo(52.140999, 28.203617, 52.140999, 28.203617);
        patternContext.lineTo(52.381837, 28.203617);
        patternContext.quadraticCurveTo(52.381837, 28.203617, 52.381837, 28.113303);
        patternContext.lineTo(52.381837, 28.113303);
        patternContext.quadraticCurveTo(52.381837, 28.022989, 52.381837, 28.022989);
        patternContext.lineTo(52.140999, 28.022989);
        patternContext.quadraticCurveTo(52.140999, 28.022989, 52.140999, 28.113303);
        patternContext.fill();

        // #rect13-2
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212;
        patternContext.moveTo(9.031005, 25.071089);
        patternContext.lineTo(9.031005, 37.966369);
        patternContext.quadraticCurveTo(9.031005, 37.966369, 13.031005, 37.966369);
        patternContext.lineTo(65.031005, 37.966369);
        patternContext.quadraticCurveTo(69.031005, 37.966369, 69.031005, 37.966369);
        patternContext.lineTo(69.031005, 25.071089);
        patternContext.quadraticCurveTo(69.031005, 25.071089, 65.031005, 25.071089);
        patternContext.lineTo(13.031005, 25.071089);
        patternContext.quadraticCurveTo(9.031005, 25.071089, 9.031005, 25.071089);
        patternContext.fill();

        // #rect13-2-4
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212;
        patternContext.moveTo(9.031005, 45.179443);
        patternContext.lineTo(9.031005, 58.074723);
        patternContext.quadraticCurveTo(9.031005, 58.074723, 13.031005, 58.074723);
        patternContext.lineTo(65.031005, 58.074723);
        patternContext.quadraticCurveTo(69.031005, 58.074723, 69.031005, 58.074723);
        patternContext.lineTo(69.031005, 45.179443);
        patternContext.quadraticCurveTo(69.031005, 45.179443, 65.031005, 45.179443);
        patternContext.lineTo(13.031005, 45.179443);
        patternContext.quadraticCurveTo(9.031005, 45.179443, 9.031005, 45.179443);
        patternContext.fill();

        // #rect13-2-4-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212;
        patternContext.moveTo(9.031005, 64.424721);
        patternContext.lineTo(9.031005, 77.320001);
        patternContext.quadraticCurveTo(9.031005, 77.320001, 13.031005, 77.320001);
        patternContext.lineTo(65.031005, 77.320001);
        patternContext.quadraticCurveTo(69.031005, 77.320001, 69.031005, 77.320001);
        patternContext.lineTo(69.031005, 64.424721);
        patternContext.quadraticCurveTo(69.031005, 64.424721, 65.031005, 64.424721);
        patternContext.lineTo(13.031005, 64.424721);
        patternContext.quadraticCurveTo(9.031005, 64.424721, 9.031005, 64.424721);
        patternContext.fill();

        // #rect002
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.058956;
        patternContext.rect(32.633125, 27.134724, 12.523574, 52.867401);
        patternContext.fill();

        // #rect310
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(128, 128, 128)';
        patternContext.lineWidth = 0.029679;
        patternContext.rect(35.991089, 21.421928, 6.260000, 3.665672);
        patternContext.fill();

        // #rect095
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(102, 102, 102)';
        patternContext.lineWidth = 0.070004;
        patternContext.moveTo(33.485291, 19.926117);
        patternContext.lineTo(33.485291, 21.464729);
        patternContext.quadraticCurveTo(33.485291, 21.464729, 33.585291, 21.464729);
        patternContext.lineTo(44.656889, 21.464729);
        patternContext.quadraticCurveTo(44.756889, 21.464729, 44.756889, 21.464729);
        patternContext.lineTo(44.756889, 19.926117);
        patternContext.quadraticCurveTo(44.756889, 19.926117, 44.656889, 19.926117);
        patternContext.lineTo(33.585291, 19.926117);
        patternContext.quadraticCurveTo(33.485291, 19.926117, 33.485291, 19.926117);
        patternContext.fill();

        // #path828
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(179, 179, 179)';
        patternContext.lineWidth = 0.070004;
        patternContext.moveTo(36.232546, 7.131331);
        patternContext.bezierCurveTo(36.546739, 6.866747, 39.438957, 6.680007, 42.306434, 7.139101);
        patternContext.bezierCurveTo(42.697796, 6.965998, 44.662285, 19.926116, 44.662285, 19.926116);
        patternContext.bezierCurveTo(42.214509, 20.244816, 39.732509, 20.554761, 33.579893, 19.925711);
        patternContext.bezierCurveTo(33.579893, 19.925711, 35.984499, 7.214009, 36.232546, 7.131327);
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
        patternContext.lineWidth = 0.070004;
        patternContext.moveTo(52.141422, 27.907100);
        patternContext.lineTo(52.141422, 27.907100);
        patternContext.quadraticCurveTo(52.141422, 27.997414, 52.141422, 27.997414);
        patternContext.lineTo(52.382260, 27.997414);
        patternContext.quadraticCurveTo(52.382260, 27.997414, 52.382260, 27.907100);
        patternContext.lineTo(52.382260, 27.907100);
        patternContext.quadraticCurveTo(52.382260, 27.816786, 52.382260, 27.816786);
        patternContext.lineTo(52.141422, 27.816786);
        patternContext.quadraticCurveTo(52.141422, 27.816786, 52.141422, 27.907100);
        patternContext.fill();

        // #rect613
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212;
        patternContext.moveTo(9.031423, 4.756549);
        patternContext.lineTo(9.031423, 17.651829);
        patternContext.quadraticCurveTo(9.031423, 17.651829, 13.031423, 17.651829);
        patternContext.lineTo(65.031423, 17.651829);
        patternContext.quadraticCurveTo(69.031423, 17.651829, 69.031423, 17.651829);
        patternContext.lineTo(69.031423, 4.756549);
        patternContext.quadraticCurveTo(69.031423, 4.756549, 65.031423, 4.756549);
        patternContext.lineTo(13.031423, 4.756549);
        patternContext.quadraticCurveTo(9.031423, 4.756549, 9.031423, 4.756549);
        patternContext.fill();

        // #rect613-2
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212;
        patternContext.moveTo(9.031427, 24.864885);
        patternContext.lineTo(9.031427, 37.760165);
        patternContext.quadraticCurveTo(9.031427, 37.760165, 13.031427, 37.760165);
        patternContext.lineTo(65.031427, 37.760165);
        patternContext.quadraticCurveTo(69.031427, 37.760165, 69.031427, 37.760165);
        patternContext.lineTo(69.031427, 24.864885);
        patternContext.quadraticCurveTo(69.031427, 24.864885, 65.031427, 24.864885);
        patternContext.lineTo(13.031427, 24.864885);
        patternContext.quadraticCurveTo(9.031427, 24.864885, 9.031427, 24.864885);
        patternContext.fill();

        // #rect613-2-4
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212;
        patternContext.moveTo(9.031427, 44.973240);
        patternContext.lineTo(9.031427, 57.868520);
        patternContext.quadraticCurveTo(9.031427, 57.868520, 13.031427, 57.868520);
        patternContext.lineTo(65.031427, 57.868520);
        patternContext.quadraticCurveTo(69.031427, 57.868520, 69.031427, 57.868520);
        patternContext.lineTo(69.031427, 44.973240);
        patternContext.quadraticCurveTo(69.031427, 44.973240, 65.031427, 44.973240);
        patternContext.lineTo(13.031427, 44.973240);
        patternContext.quadraticCurveTo(9.031427, 44.973240, 9.031427, 44.973240);
        patternContext.fill();

        // #rect613-2-4-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212;
        patternContext.moveTo(9.031427, 64.218521);
        patternContext.lineTo(9.031427, 77.113801);
        patternContext.quadraticCurveTo(9.031427, 77.113801, 13.031427, 77.113801);
        patternContext.lineTo(65.031427, 77.113801);
        patternContext.quadraticCurveTo(69.031427, 77.113801, 69.031427, 77.113801);
        patternContext.lineTo(69.031427, 64.218521);
        patternContext.quadraticCurveTo(69.031427, 64.218521, 65.031427, 64.218521);
        patternContext.lineTo(13.031427, 64.218521);
        patternContext.quadraticCurveTo(9.031427, 64.218521, 9.031427, 64.218521);
        patternContext.fill();

        // #rect1002
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.072500;
        patternContext.rect(32.633549, 0.010118, 12.523574, 79.948090);
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
        patternContext.lineWidth = 0.070004;
        patternContext.moveTo(52.140999, 27.943006);
        patternContext.lineTo(52.140999, 27.943006);
        patternContext.quadraticCurveTo(52.140999, 28.033320, 52.140999, 28.033320);
        patternContext.lineTo(52.381837, 28.033320);
        patternContext.quadraticCurveTo(52.381837, 28.033320, 52.381837, 27.943006);
        patternContext.lineTo(52.381837, 27.943006);
        patternContext.quadraticCurveTo(52.381837, 27.852692, 52.381837, 27.852692);
        patternContext.lineTo(52.140999, 27.852692);
        patternContext.quadraticCurveTo(52.140999, 27.852692, 52.140999, 27.943006);
        patternContext.fill();

        //     rernContext613
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212;
        patternContext.moveTo(9.031000, 4.792455);
        patternContext.lineTo(9.031000, 17.687735);
        patternContext.quadraticCurveTo(9.031000, 17.687735, 13.031000, 17.687735);
        patternContext.lineTo(65.031000, 17.687735);
        patternContext.quadraticCurveTo(69.031000, 17.687735, 69.031000, 17.687735);
        patternContext.lineTo(69.031000, 4.792455);
        patternContext.quadraticCurveTo(69.031000, 4.792455, 65.031000, 4.792455);
        patternContext.lineTo(13.031000, 4.792455);
        patternContext.quadraticCurveTo(9.031000, 4.792455, 9.031000, 4.792455);
        patternContext.fill();

        //     rernContext613-2
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212;
        patternContext.moveTo(9.031005, 24.900791);
        patternContext.lineTo(9.031005, 37.796071);
        patternContext.quadraticCurveTo(9.031005, 37.796071, 13.031005, 37.796071);
        patternContext.lineTo(65.031005, 37.796071);
        patternContext.quadraticCurveTo(69.031005, 37.796071, 69.031005, 37.796071);
        patternContext.lineTo(69.031005, 24.900791);
        patternContext.quadraticCurveTo(69.031005, 24.900791, 65.031005, 24.900791);
        patternContext.lineTo(13.031005, 24.900791);
        patternContext.quadraticCurveTo(9.031005, 24.900791, 9.031005, 24.900791);
        patternContext.fill();

        //     rernContext613-2-4
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212;
        patternContext.moveTo(9.031005, 45.009144);
        patternContext.lineTo(9.031005, 57.904424);
        patternContext.quadraticCurveTo(9.031005, 57.904424, 13.031005, 57.904424);
        patternContext.lineTo(65.031005, 57.904424);
        patternContext.quadraticCurveTo(69.031005, 57.904424, 69.031005, 57.904424);
        patternContext.lineTo(69.031005, 45.009144);
        patternContext.quadraticCurveTo(69.031005, 45.009144, 65.031005, 45.009144);
        patternContext.lineTo(13.031005, 45.009144);
        patternContext.quadraticCurveTo(9.031005, 45.009144, 9.031005, 45.009144);
        patternContext.fill();

        //     pernContext6153
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(153, 153, 153)';
        patternContext.strokeStyle = 'rgb(153, 153, 153)';
        patternContext.lineWidth = 0.070004;
        patternContext.lineCap = 'butt';
        patternContext.lineJoin = 'miter';
        patternContext.moveTo(34.195951, 77.155711);
        patternContext.lineTo(34.781352, 76.623531);
        patternContext.lineTo(43.040813, 76.612891);
        patternContext.lineTo(43.594281, 77.070567);
        patternContext.lineTo(43.583641, 77.943345);
        patternContext.lineTo(43.040816, 78.550032);
        patternContext.lineTo(34.728137, 78.592602);
        patternContext.lineTo(34.206599, 77.996559);
        patternContext.fill();
        patternContext.stroke();

        //     rernContext613-2-4-7
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.056212;
        patternContext.moveTo(9.031005, 63.725258);
        patternContext.lineTo(9.031005, 76.620538);
        patternContext.quadraticCurveTo(9.031005, 76.620538, 13.031005, 76.620538);
        patternContext.lineTo(65.031005, 76.620538);
        patternContext.quadraticCurveTo(69.031005, 76.620538, 69.031005, 76.620538);
        patternContext.lineTo(69.031005, 63.725258);
        patternContext.quadraticCurveTo(69.031005, 63.725258, 65.031005, 63.725258);
        patternContext.lineTo(13.031005, 63.725258);
        patternContext.quadraticCurveTo(9.031005, 63.725258, 9.031005, 63.725258);
        patternContext.fill();

        //     r002
        patternContext.beginPath();
        patternContext.fillStyle = 'rgb(204, 204, 204)';
        patternContext.lineWidth = 0.070899;
        patternContext.rect(32.633125, 0.046024, 12.524000, 76.455940);
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
                context.fillStyle = '#cccccc';
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

EntityCollision.portals = function(x, y) {
    for (var i = 0; i < portals.length; i++) {
        var portal = portals[i];

        var portalCenterX = portal.x + blockSize / 2;
        var portalCenterY = portal.y + blockSize / 2;

        var distX = Math.abs(x - portalCenterX) - blockSize / 2;
        var distY = Math.abs(y - portalCenterY) - blockSize / 2;

        if (distX <= 0 && distY <= 0) {
            return portal;
        }
    }
    return null;
}

EntityCollision.damage = function(x, y) {
    for (var i = 0; i < damages.length; i++) {
        var damage = damages[i];

        var damageCenterX = damage.x + blockSize / 2;
        var damageCenterY = damage.y + blockSize / 2;

        var distX = Math.abs(x - damageCenterX) - blockSize / 2;
        var distY = Math.abs(y - damageCenterY) - blockSize / 2;

        if (distX <= 0 && distY <= 0) {
            return damage;
        }
    }
    return null;
}

var Player = function(x, y) {
    this.render = 'entity';
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.angle = 0;
    this.rotation = 4;
    this.tmprotation = 0;
    this.footPosition = 0;
    this.speed = 4;
    this.lsdspeed = 10;
    this.damagecounter = 0;

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

    this.damage = function() {
        if (this.damagecounter > 20) {
            getSound("damage").loop(false).volume(100).play();
            console.log(1);
            this.damagecounter = 0;
        }
        this.damagecounter++;
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
        var portal = EntityCollision.portals(this.x, this.y);

        if (portal != null) {
            portalList.get(portal.details)["function"]();
            return;
        }

        //damage
        var damage = EntityCollision.damage(this.x, this.y);

        if (damage != null) {
            this.damage();
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
};

var Entity = function(x, y, type, details) {
    this.render = 'box';
    this.type = type;
    this.details = details;
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
};

var Passage = function(x, y, type, details) {
    this.render = 'box';
    this.type = type;
    this.details = details;
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
};

var Carpet = function(x, y, type, details) {
    this.render = 'box';
    this.type = type;
    this.details = details;
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
}

var canvas = document.querySelector('canvas#main');
var context = canvas.getContext('2d');

var blockSize = 80;
var arcSizeRadius = 35;
var entityInteractRadius = 20;
var playerOverlap = 20;

var colors = { wall: '#666', player: '#111' };

var elements = [];
var entities = [];
var walls = [];
var portals = [];
var damages = [];

var mapProcessor = new MapProcessor();
var loaded = false;

var playerPosition;
var player;

var tmpplayerrotation = 0;
var rotateplayer = false;

var loadingtime = 1;

PatternHelper.createAll();

var camera;;

var loadMap = function(map, spawn = null, rotation = 4, load = false) {
    mapProcessor.selectMap(map);
    mapProcessor.setSpawn(spawn);
    mapProcessor.generate();

    elements = [];
    entities = [];
    walls = [];
    portals = [];
    damages = [];


    for (var i = 0; i < mapProcessor.getCarpetPositions().length; i++) {
        var carpetPosition = mapProcessor.getCarpetPositions()[i];
        var carpet = new Carpet(carpetPosition.x, carpetPosition.y, carpetPosition.type, carpetPosition.details);
        elements.push(carpet);
        if (carpetPosition.type == "V" || carpetPosition.type == "v") {
            portals.push(carpet);
        }
        if (carpetPosition.type == "D") {
            damages.push(carpet);
        }
    }

    for (var i = 0; i < mapProcessor.getEntityPositions().length; i++) {
        var entityPosition = mapProcessor.getEntityPositions()[i];
        var entity = new Entity(entityPosition.x, entityPosition.y, entityPosition.type, entityPosition.details);
        elements.push(entity);
        entities.push(entity);
    }

    for (var i = 0; i < mapProcessor.getWallPositions().length; i++) {
        var wallPosition = mapProcessor.getWallPositions()[i];
        var wall = new Wall(wallPosition.x, wallPosition.y, wallPosition.type, wallPosition.details);
        elements.push(wall);
        walls.push(wall);
    }

    cornerCheck();

    for (var i = 0; i < mapProcessor.getPassagePositions().length; i++) {
        var passagePosition = mapProcessor.getPassagePositions()[i];
        var passage = new Passage(passagePosition.x, passagePosition.y, passagePosition.type, passagePosition.details);
        elements.push(passage);
    }

    playerPosition = mapProcessor.getPlayerPosition();
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
}

loadMap(map1);

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