var Entities = {
    player: function() {
        context.beginPath();
        context.arc(0, 0, 20, 0, 2 * Math.PI);
        context.fillStyle = '#ffffff';
        context.fill();
        context.closePath();
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

var Wall = function (x, y) {
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;
  
    this.bounds = {x: this.x, y: this.y, width: blockSize, height: blockSize};
  
    this.update = function () {
  
    };
  
    this.render = function () {
      if (this.sleep) return;
  
      context.beginPath();
      context.rect(this.x, this.y, blockSize, blockSize);
      context.fillStyle = '#774F38';
      context.fill();
    };
};

var Camera = function () {
    this.update = function() {
        
    }
}


var MapProcessor = function () {
    this.playerPosition = { x: 0, y: 0 };
    this.wallPositions = [];
  
    this.generate = function () {
      for (var y = 0; y < TextMap.length; y++) {
        var row = map[y];
  
        for (var x = 0; x < row.length; x += 2) {
          var char = row[x];
          var realX = x / 2;
  
          switch (char) {
            case 'W': this.wallPositions.push({ x: realX, y: y }); break;
            case 'P': this.playerPosition = { x: realX, y: y }; break;
          }
        }
      }
    };
  
    this.getPlayerPosition = function () {
      return this.playerPosition;
    };
  
    this.getWallPositions = function () {
      return this.wallPositions;
    };
};

var canvas = document.querySelector('canvas#main');
var context = canvas.getContext('2d');

var blockSize = 150;

var entities = [];
var walls = [];

var mapProcessor = new MapProcessor();
mapProcessor.generate();

var playerPosition = mapProcessor.getPlayerPosition();
var player = new Player(playerPosition.x, playerPosition.y);

entities.push(player);

for (var i = 0; i < mapProcessor.getWallPositions().length; i++) {
  var wallPosition = mapProcessor.getWallPositions()[i];
  var wall = new Wall(wallPosition.x, wallPosition.y);
  entities.push(wall);
  walls.push(wall);
}

var camera = new Camera();

var onResize = function (width, height) {
  context.canvas.width = width;
  context.canvas.height = height;
  camera.resize();
};

var keyboard = { up: false, down: false, left: false, right: false };
var mouse = { x: 0, y: 0, pressed: false };
var blockSize = 150;


