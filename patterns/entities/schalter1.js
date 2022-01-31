patternCreator.entities.schalter1 = function() {
    const patternCanvas = document.createElement('canvas');
    const patternContext = patternCanvas.getContext('2d');

    patternCanvas.width = blockSize;
    patternCanvas.height = blockSize;

    // #rect846
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(128, 128, 128)';
    patternContext.lineWidth = 0.070004;
    patternContext.rect(4.229860, 4.906638, 71.400032, 70.554070);
    patternContext.fill();

    // #rect892
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(26, 26, 26)';
    patternContext.lineWidth = 0.080395;
    patternContext.rect(38.842720, 38.439125, 23.727213, 3.150704);
    patternContext.fill();

    // #path938
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(128, 0, 0)';
    patternContext.lineWidth = 0.078311;
    patternContext.arc(60.994579, 39.845280, 4.637148, 0.000000, 6.28318531, 1);
    patternContext.fill();

    // #rect1060
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(102, 102, 102)';
    patternContext.lineWidth = 0.043134;
    patternContext.rect(38.032604, 32.992908, 1.220501, 13.704746);
    patternContext.fill();

    // #rect1150
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(102, 102, 102)';
    patternContext.strokeStyle = 'rgba(180, 35, 35, 0.533186)';
    patternContext.lineWidth = 0.070004;
    patternContext.rect(-8.290525, 129.095320, 0.676778, 0.338389);
    patternContext.fill();
    patternContext.stroke();

    return context.createPattern(patternCanvas, 'repeat');
}