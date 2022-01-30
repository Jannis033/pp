patternCreator.carpets.portal = function() {
    const patternCanvas = document.createElement('canvas');
    const patternContext = patternCanvas.getContext('2d');

    patternCanvas.width = blockSize;
    patternCanvas.height = blockSize;

    patternContext.arc(blockSize / 2, blockSize / 2, blockSize / 2, 0, 2 * Math.PI);
    patternContext.fillStyle = "#888";
    patternContext.fill();

    return context.createPattern(patternCanvas, 'repeat');
}