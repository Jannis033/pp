patternCreator.carpets.stairsX = function() {
    const patternCanvas = document.createElement('canvas');
    const patternContext = patternCanvas.getContext('2d');

    patternCanvas.width = blockSize;
    patternCanvas.height = blockSize;

    patternContext.fillStyle = '#999';
    patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
    patternContext.fillStyle = '#888';
    patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height / 4);
    patternContext.fillRect(0, 2 * patternCanvas.height / 4, patternCanvas.width, patternCanvas.height / 4);

    return mainContext.createPattern(patternCanvas, 'repeat');
}