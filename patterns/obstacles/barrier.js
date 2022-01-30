patternCreator.obstacles.barrier = function() {
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