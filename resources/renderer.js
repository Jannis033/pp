var Entities = {
    player: function() {
        context.beginPath();
        context.arc(0, 0, 20, 0, 2 * Math.PI);
        context.fillStyle = '#ffffff';
        context.fill();
    }
};

var Player = function(x, y) {
    this.type = 'entity';
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.angle = 0;
    this.footPosition = 0;
    this.speed = 5;
    this.freeze = false;

    this.update = function() {

    }
}

var canvas = document.querySelector('canvas#main');
var context = canvas.getContext('2d');
var keyboard = { up: false, down: false, left: false, right: false };
var mouse = { x: 0, y: 0, pressed: false };
var blockSize = 150;