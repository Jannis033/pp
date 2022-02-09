var canvas = document.querySelector('canvas#main');
var context = canvas.getContext('2d');

var patterns = { carpets: {}, entities: {}, items: {}, obstacles: {}, players: {}, peters: {} };
var patternCreator = { carpets: {}, entities: {}, items: {}, obstacles: {}, players: {}, peters: {} };