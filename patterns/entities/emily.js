patternCreator.entities.emily = function() {
    const patternCanvas = document.createElement('canvas');
    const patternContext = patternCanvas.getContext('2d');

    patternCanvas.width = blockSize;
    patternCanvas.height = blockSize + playerOverlap;



    return mainContext.createPattern(patternCanvas, 'repeat');
}