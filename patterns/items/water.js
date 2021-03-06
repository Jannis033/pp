patternCreator.items.water = function() {
    const patternCanvas = document.createElement('canvas');
    const patternContext = patternCanvas.getContext('2d');

    patternCanvas.width = blockSize;
    patternCanvas.height = blockSize;

    // #rect2914
    patternContext.beginPath();
    patternContext.fillStyle = 'rgb(0, 128, 0)';
    patternContext.lineWidth = 0.429416;
    patternContext.moveTo(23.689110, 17.456721);
    patternContext.bezierCurveTo(20.146864, 17.503261, 16.893626, 17.781853, 14.587950, 18.340815);
    patternContext.bezierCurveTo(10.677690, 19.288776, 7.283849, 22.019983, 5.653335, 25.538371);
    patternContext.bezierCurveTo(4.636323, 27.732933, 4.500133, 32.364452, 5.359433, 35.554638);
    patternContext.bezierCurveTo(5.922750, 37.645984, 8.202274, 43.786891, 11.570558, 50.001767);
    patternContext.lineTo(13.275189, 53.153296);
    patternContext.lineTo(13.059661, 57.729780);
    patternContext.bezierCurveTo(12.838503, 63.808619, 12.950985, 64.654748, 14.039333, 65.156171);
    patternContext.bezierCurveTo(14.862143, 65.535245, 23.968788, 66.227664, 26.510567, 66.102673);
    patternContext.bezierCurveTo(27.717524, 66.043293, 31.103273, 65.908620, 34.034454, 65.801039);
    patternContext.bezierCurveTo(40.985735, 65.545900, 48.019700, 64.339051, 48.621781, 63.304769);
    patternContext.bezierCurveTo(48.742470, 63.097444, 48.928266, 63.075480, 49.033244, 61.630197);
    patternContext.bezierCurveTo(49.244206, 58.725706, 48.690377, 58.477511, 55.920343, 46.673406);
    patternContext.bezierCurveTo(60.601115, 39.031287, 63.543478, 34.155485, 64.610040, 32.257487);
    patternContext.bezierCurveTo(65.669121, 30.372799, 67.676067, 28.027912, 69.753321, 26.193642);
    patternContext.bezierCurveTo(73.081685, 24.782916, 77.077627, 22.825656, 77.806231, 21.325929);
    patternContext.bezierCurveTo(79.089649, 18.684213, 65.413917, 16.988408, 65.717070, 19.495333);
    patternContext.bezierCurveTo(65.882106, 20.860106, 65.675450, 23.245840, 65.452559, 25.153536);
    patternContext.bezierCurveTo(64.040710, 26.433636, 62.495125, 27.939779, 60.995047, 29.532394);
    patternContext.bezierCurveTo(55.859916, 34.984317, 54.338744, 38.683411, 51.423645, 38.726974);
    patternContext.bezierCurveTo(50.175787, 38.745594, 49.335597, 38.602310, 49.062633, 38.310929);
    patternContext.bezierCurveTo(48.759016, 37.986866, 48.598099, 33.745604, 48.484627, 30.083657);
    patternContext.bezierCurveTo(48.351065, 25.773585, 48.214334, 24.743655, 47.651904, 23.510162);
    patternContext.bezierCurveTo(46.833391, 21.715028, 45.177189, 20.215452, 43.292360, 19.568144);
    patternContext.bezierCurveTo(39.662390, 18.321505, 32.103213, 17.488598, 25.227196, 17.456721);
    patternContext.bezierCurveTo(24.711493, 17.454221, 24.195145, 17.450421, 23.689110, 17.456721);
    patternContext.moveTo(25.481911, 21.138707);
    patternContext.bezierCurveTo(29.623428, 21.129907, 34.163257, 21.336949, 38.256843, 21.773171);
    patternContext.bezierCurveTo(41.302231, 22.097700, 41.960003, 22.272430, 42.567404, 22.917298);
    patternContext.bezierCurveTo(43.340391, 23.737979, 43.510924, 24.849059, 42.920086, 25.236738);
    patternContext.bezierCurveTo(42.718514, 25.368999, 37.463553, 25.497664, 31.242387, 25.517577);
    patternContext.bezierCurveTo(19.317390, 25.555697, 16.378776, 25.837476, 14.705511, 27.088140);
    patternContext.bezierCurveTo(13.613854, 27.904078, 13.411255, 28.960588, 13.373156, 34.264902);
    patternContext.bezierCurveTo(13.344526, 38.249188, 13.285066, 40.039316, 12.716776, 40.495162);
    patternContext.bezierCurveTo(11.788785, 41.239535, 11.050235, 41.128457, 10.081456, 40.099911);
    patternContext.bezierCurveTo(7.786927, 37.663834, 6.914928, 29.641987, 8.455199, 26.287260);
    patternContext.bezierCurveTo(9.310477, 24.424448, 11.137672, 22.893221, 13.304578, 22.210023);
    patternContext.bezierCurveTo(15.492127, 21.520309, 20.157102, 21.149311, 25.481911, 21.138707);
    patternContext.fill();

    return mainContext.createPattern(patternCanvas, 'repeat');
}