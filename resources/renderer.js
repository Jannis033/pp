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
        patterns.player1 = this.player4();
        patterns.player2 = this.player4();
        patterns.player3 = this.player4();
        patterns.player4 = this.player4();
        patterns.player5 = this.player4();
        patterns.player6 = this.player4();
        patterns.player7 = this.player4();
    },
    stairsX: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize;

        patternContext.fillStyle = '#333';
        patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
        patternContext.fillStyle = '#444';
        patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height / 4);
        patternContext.fillRect(0, 2 * patternCanvas.height / 4, patternCanvas.width, patternCanvas.height / 4);

        return context.createPattern(patternCanvas, 'repeat');
    },
    stairsY: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize;

        patternContext.fillStyle = '#333';
        patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
        patternContext.fillStyle = '#444';
        patternContext.fillRect(0, 0, patternCanvas.width / 4, patternCanvas.height);
        patternContext.fillRect(2 * patternCanvas.width / 4, 0, patternCanvas.width / 4, patternCanvas.height);

        return context.createPattern(patternCanvas, 'repeat');
    },
    cookie: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize + playerOverlap;

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

        patternContext.beginPath();
        patternContext.fillStyle = '#dddddd';
        patternContext.arc(patternCanvas.width / 2, patternCanvas.height / 2, 30, 0, 2 * Math.PI);

        patternContext.fill();

        return context.createPattern(patternCanvas, 'repeat');
    },
    player2: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize + playerOverlap;

        patternContext.beginPath();
        patternContext.fillStyle = '#bbbbbb';
        patternContext.arc(patternCanvas.width / 2, patternCanvas.height / 2, 30, 0, 2 * Math.PI);

        patternContext.fill();

        return context.createPattern(patternCanvas, 'repeat');
    },
    player3: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize + playerOverlap;

        patternContext.beginPath();
        patternContext.fillStyle = '#999999';
        patternContext.arc(patternCanvas.width / 2, patternCanvas.height / 2, 30, 0, 2 * Math.PI);

        patternContext.fill();

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

        patternContext.beginPath();
        patternContext.fillStyle = '#555555';
        patternContext.arc(patternCanvas.width / 2, patternCanvas.height / 2, 30, 0, 2 * Math.PI);

        patternContext.fill();

        return context.createPattern(patternCanvas, 'repeat');
    },
    player6: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize + playerOverlap;

        patternContext.beginPath();
        patternContext.fillStyle = '#333333';
        patternContext.arc(patternCanvas.width / 2, patternCanvas.height / 2, 30, 0, 2 * Math.PI);

        patternContext.fill();

        return context.createPattern(patternCanvas, 'repeat');
    },
    player7: function() {
        const patternCanvas = document.createElement('canvas');
        const patternContext = patternCanvas.getContext('2d');

        patternCanvas.width = blockSize;
        patternCanvas.height = blockSize + playerOverlap;

        patternContext.beginPath();
        patternContext.fillStyle = '#111111';
        patternContext.arc(patternCanvas.width / 2, patternCanvas.height / 2, 30, 0, 2 * Math.PI);

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
                context.fillStyle = patterns.player4;
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
            case 'h':
                context.rect(x, y + blockSize / 4, blockSize, blockSize / 2);
                if (corners.positive) {
                    context.rect(x + blockSize, y + blockSize / 4, blockSize / 4, blockSize / 2);
                }
                if (corners.negative) {
                    context.rect(x - blockSize / 4, y + blockSize / 4, blockSize / 4, blockSize / 2);
                }
                break;
            case 'v':
                context.rect(x + blockSize / 4, y, blockSize / 2, blockSize);
                if (corners.positive) {
                    context.rect(x + blockSize / 4, y + blockSize, blockSize / 2, blockSize / 4);
                }
                if (corners.negative) {
                    context.rect(x + blockSize / 4, y - blockSize / 4, blockSize / 2, blockSize / 4);
                }
                break;
            case 'x':
                context.rect(x + blockSize / 4, y + blockSize / 4, blockSize / 2, blockSize / 2);
                //context.rect(x - blockSize / 4, y + blockSize / 4, blockSize, blockSize / 2);
                break;
            case 'a':
                context.rect(x + blockSize / 4, y + blockSize / 4, blockSize / 2, blockSize);
                context.rect(x + blockSize / 4, y + blockSize /4, blockSize / 2, blockSize / 2);
                break;
            case 'b':
                context.rect(x, y + blockSize / 4, blockSize, blockSize / 2);
                context.rect(x + blockSize / 4, y + blockSize / 2, blockSize / 2, blockSize / 2);
                break;
            case 'c':
                context.rect(x + blockSize / 2, y + blockSize / 4, blockSize / 2, blockSize / 2);
                context.rect(x + blockSize / 4, y, blockSize / 2, blockSize);
                break;
            case 'd':
                context.rect(x, y + blockSize / 4, blockSize / 2, blockSize / 2);
                context.rect(x + blockSize / 4, y, blockSize / 2, blockSize);
                break;
            default:
                context.rect(x, y, blockSize, blockSize);
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

EntityCollision.arcToWall = function(arcX, arcY, arcRadius, wallX, wallY, wallSize, details) {
    var wallSizeX = (details == "v" || details == "x" ? wallSize / 2 : wallSize);
    var wallSizeY = (details == "h" || details == "x" ? wallSize / 2 : wallSize);
    wallX = (details == "v" || details == "x" ? wallX + wallSize / 4 : wallX);
    wallY = (details == "h" || details == "x" ? wallY + wallSize / 4 : wallY);

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

        if (EntityCollision.arcToWall(arcX, arcY, arcSizeRadius, wall.x, wall.y, blockSize, wall.details)) {
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

var Player = function(x, y) {
    this.render = 'entity';
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.angle = 0;
    this.rotation = 4;
    this.footPosition = 0;
    this.speed = 8;

    this.update = function() {
        var keysCount = 0;
        keysCount += keyboard.up ? 1 : 0;
        keysCount += keyboard.down ? 1 : 0;
        keysCount += keyboard.left ? 1 : 0;
        keysCount += keyboard.right ? 1 : 0;
        keysCount += keyboard.touchx != 0 ? 1 : 0;
        keysCount += keyboard.touchy != 0 ? 1 : 0;

        var currentSpeed = this.speed;

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

var cornerAt = function(x, y) {
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
    this.corners = { positive: false, negative: false };

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.cornerCheck = function() {
        if (this.details == "h") {
            if (cornerAt(this.x + blockSize, this.y)) {
                this.corners.positive = true;
            }
            if (cornerAt(this.x - blockSize, this.y)) {
                this.corners.negative = true;
            }
        } else if (this.details == "v") {
            if (cornerAt(this.x, this.y + blockSize)) {
                this.corners.positive = true;
            }
            if (cornerAt(this.x, this.y - blockSize)) {
                this.corners.negative = true;
            }
        }
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

var Carpet = function(x, y, type) {
    this.render = 'box';
    this.type = type;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.render = function() {
        if (this.sleep) return;

        EntityDrawer.carpet(this.x, this.y, this.type);
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

    this.wallPositions = [];
    this.carpetPositions = [];
    this.portalPositions = [];
    this.passagePositions = [];
    this.entityPositions = [];
    this.playerPosition = { x: 0, y: 0 };

    this.selectMap = function(m) {
        this.map = m.split(/\r?\n/);
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
                        this.playerPosition = { x: realX, y: y };
                        break;
                    case 't':
                    case 'T':
                        this.carpetPositions.push({ x: realX, y: y, type: char });
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
var playerOverlap = 20;

const stretch = blockSize / 100;

var colors = { wall: '#555', player: '#111' };

var elements = [];
var entities = [];
var walls = [];

var mapProcessor = new MapProcessor();
var loaded = false;

var playerPosition;
var player;

PatternHelper.createAll();

var loadMap = function(map) {
    mapProcessor.selectMap(map);
    mapProcessor.generate();

    for (var i = 0; i < mapProcessor.getCarpetPositions().length; i++) {
        var carpetPosition = mapProcessor.getCarpetPositions()[i];
        var carpet = new Carpet(carpetPosition.x, carpetPosition.y, carpetPosition.type);
        elements.push(carpet);
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

    elements.push(player);

    loaded = true;
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

var keyboard = { up: false, down: false, left: false, right: false, space: false, shift: false, touchx: 0, touchy: 0, touch: false };
var mouse = { x: 0, y: 0, pressed: false };


var onTick = function() {
    if (loaded) {
        onUpdate();
        onRender();
    }
}

var camera = new Camera();

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
}, 35);

window.addEventListener("keydown", function(event) {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        return;
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
    }
});

window.addEventListener("keyup", function(event) {
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
    }
});

window.addEventListener("mousedown", function() {
    mouse.pressed = true;
});

window.addEventListener("mouseup", function() {
    mouse.pressed = false;
});

window.addEventListener("mousemove", function(event) {
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
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
    down = true;
};

function handleTouchMove(evt) {
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
    /* reset values */
    xDown = null;
    yDown = null;
    keyboard.touchx = 0;
    keyboard.touchy = 0;
    keyboard.touch = down;
    down = false;
}
