patternCreator.obstacles.barrier = function() {
    const patternCanvas = document.createElement('canvas');
    const patternContext = patternCanvas.getContext('2d');

    patternCanvas.width = blockSize;
    patternCanvas.height = blockSize;

    patternContext.beginPath();
    patternContext.fillStyle = 'rgba(255, 255, 255, 0)';
    patternContext.strokeStyle = 'rgba(180, 35, 35, 0.533186)';
    patternContext.lineWidth = 3;
    patternContext.moveTo(21.366168, 21.509076);
    patternContext.bezierCurveTo(11.145551, 31.792731, 11.183869, 48.410824, 21.451801, 58.647236);
    patternContext.bezierCurveTo(31.719733, 68.883649, 48.337865, 68.870876, 58.590049, 58.618692);
    patternContext.bezierCurveTo(68.842233, 48.366508, 68.855006, 31.748376, 58.618593, 21.480444);
    patternContext.bezierCurveTo(48.382181, 11.212512, 31.764088, 11.174194, 21.480433, 21.394811);
    patternContext.moveTo(21.366168, 21.509076);
    patternContext.lineTo(58.616520, 58.530897);
    patternContext.fill();
    patternContext.stroke();

    return mainContext.createPattern(patternCanvas, 'repeat');
}