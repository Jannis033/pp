patternCreator.peters.peter7 = function() {
    const patternCanvas = document.createElement('canvas');
    const ctx = patternCanvas.getContext('2d');

    patternCanvas.width = blockSize;
    patternCanvas.height = blockSize + playerOverlap;



    return context.createPattern(patternCanvas, 'repeat');
}