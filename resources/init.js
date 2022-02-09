var mainCanvas = document.querySelector('canvas#main');
var mainContext = mainCanvas.getContext('2d');

var patterns = { carpets: {}, entities: {}, items: {}, obstacles: {}, players: {}, peters: {} };
var patternCreator = { carpets: {}, entities: {}, items: {}, obstacles: {}, players: {}, peters: {} };