patternCreator.carpets.pissoir = function() {
    const patternCanvas = document.createElement('canvas');
    const patternContext = patternCanvas.getContext('2d');

    patternCanvas.width = blockSize;
    patternCanvas.height = blockSize;

    // #path2412
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(228, 228, 228)';
    patternContext.strokeStyle = 'rgb(247, 247, 247)';
    patternContext.lineWidth = 0.075392;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(80.000000, 16.909777);
    patternContext.bezierCurveTo(80.000000, 16.909777, 16.780517, -7.075620, 17.402343, 37.289847);
    patternContext.bezierCurveTo(18.071077, 85.002078, 80.000000, 63.303995, 80.000000, 63.303995);
    patternContext.moveTo(25.880409, 35.323179);
    patternContext.fill();
    patternContext.stroke();

    // #path2412-3
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(193, 193, 193)';
    patternContext.strokeStyle = 'rgba(254, 254, 254, 0)';
    patternContext.lineWidth = 0.061418;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(79.956164, 23.522699);
    patternContext.bezierCurveTo(79.956164, 23.522699, 22.699167, 5.947080, 23.262345, 38.456465);
    patternContext.bezierCurveTo(23.868009, 73.418238, 79.956164, 57.518680, 79.956164, 57.518680);
    patternContext.moveTo(30.940812, 37.015364);
    patternContext.fill();
    patternContext.stroke();

    // #path2412-3-9
    patternContext.beginPath();
    patternContext.fillStyle = 'rgba(227, 216, 164, 0.763274)';
    patternContext.strokeStyle = 'rgba(215, 224, 102, 0)';
    patternContext.lineWidth = 0.030534;
    patternContext.lineCap = 'butt';
    patternContext.lineJoin = 'miter';
    patternContext.moveTo(79.954992, 33.772624);
    patternContext.bezierCurveTo(79.954992, 33.772624, 61.698441, 22.568465, 61.961183, 39.790960);
    patternContext.bezierCurveTo(62.243748, 58.312659, 79.954992, 45.346049, 79.954992, 45.346049);
    patternContext.fill();
    patternContext.stroke();

    // #rect8553
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(228, 228, 228)';
    patternContext.lineWidth = 0.230717;
    patternContext.rect(74.084312, 16.909777, 5.915691, 44.679905);
    patternContext.fill();

    return context.createPattern(patternCanvas, 'repeat');
}