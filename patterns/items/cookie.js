patternCreator.items.cookie = function() {
    const patternCanvas = document.createElement('canvas');
    const patternContext = patternCanvas.getContext('2d');

    patternCanvas.width = blockSize;
    patternCanvas.height = blockSize;


    // #path1150
    patternContext.beginPath();
    patternContext.globalAlpha = 1.0;
    patternContext.fillStyle = 'rgb(174, 124, 59)';
    patternContext.lineWidth = 0.068794 * zoomfactor;
    patternContext.arc(39.842613 * zoomfactor, 40.399857 * zoomfactor, 35.484756 * zoomfactor, 0.000000, 6.28318531, 1);
    patternContext.fill();

    // #path1150-8
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(117, 83, 40)';
    patternContext.lineWidth = 0.009266 * zoomfactor;
    patternContext.arc(30.212559 * zoomfactor, 25.022020 * zoomfactor, 4.779509 * zoomfactor, 0.000000, 6.28318531, 1);
    patternContext.fill();

    // #path1150-8-6
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(117, 83, 40)';
    patternContext.lineWidth = 0.007800 * zoomfactor;
    patternContext.arc(12.767544 * zoomfactor, 36.114227 * zoomfactor, 4.023223 * zoomfactor, 0.000000, 6.28318531, 1);
    patternContext.fill();

    // #path1150-8-6-91
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(117, 83, 40)';
    patternContext.lineWidth = 0.006920 * zoomfactor;
    patternContext.arc(67.724388 * zoomfactor, 49.424877 * zoomfactor, 3.569451 * zoomfactor, 0.000000, 6.28318531, 1);
    patternContext.fill();

    // #path1150-8-6-9
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(117, 83, 40)';
    patternContext.lineWidth = 0.005356 * zoomfactor;
    patternContext.arc(36.666210 * zoomfactor, 71.609291 * zoomfactor, 2.762745 * zoomfactor, 0.000000, 6.28318531, 1);
    patternContext.fill();

    // #path1150-8-5
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(117, 83, 40)';
    patternContext.lineWidth = 0.005747 * zoomfactor;
    patternContext.arc(48.918049 * zoomfactor, 38.383087 * zoomfactor, 2.964421 * zoomfactor, 0.000000, 6.28318531, 1);
    patternContext.fill();

    // #path1150-8-7
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(117, 83, 40)';
    patternContext.lineWidth = 0.006725 * zoomfactor;
    patternContext.arc(48.615543 * zoomfactor, 14.988617 * zoomfactor, 3.468613 * zoomfactor, 0.000000, 6.28318531, 1);
    patternContext.fill();

    // #path1150-8-62
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(117, 83, 40)';
    patternContext.lineWidth = 0.007995 * zoomfactor;
    patternContext.arc(57.136368 * zoomfactor, 30.366447 * zoomfactor, 4.124062 * zoomfactor, 0.000000, 6.28318531, 1);
    patternContext.fill();

    // #path1150-8-70
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(117, 83, 40)';
    patternContext.lineWidth = 0.010048 * zoomfactor;
    patternContext.arc(49.321411 * zoomfactor, 59.054932 * zoomfactor, 5.182863 * zoomfactor, 0.000000, 6.28318531, 1);
    patternContext.fill();

    // #path1150-8-3
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(117, 83, 40)';
    patternContext.lineWidth = 0.008191 * zoomfactor;
    patternContext.arc(26.985737 * zoomfactor, 55.576004 * zoomfactor, 4.224899 * zoomfactor, 0.000000, 6.28318531, 1);
    patternContext.fill();

    // #path1150-8-9
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(117, 83, 40)';
    patternContext.lineWidth = 0.006725 * zoomfactor;
    patternContext.arc(35.506565 * zoomfactor, 41.408230 * zoomfactor, 3.468613 * zoomfactor, 0.000000, 6.28318531, 1);
    patternContext.fill();

    return mainContext.createPattern(patternCanvas, 'repeat');
}