patternCreator.carpets.stairsY = function() {
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
}