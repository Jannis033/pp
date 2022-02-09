patternCreator.entities.fischer = function() {
    const patternCanvas = document.createElement('canvas');
    const ctx = patternCanvas.getContext('2d');

    patternCanvas.width = blockSize;
    patternCanvas.height = blockSize;





    return mainContext.createPattern(patternCanvas, 'repeat');
}