var EntityHelper = {
    beginRotationOffset: function(x, y, angle) {
        context.translate(-(-x + context.canvas.width / 2), -(-y + context.canvas.height / 2));
        context.translate(context.canvas.width / 2, context.canvas.height / 2);

        context.rotate(angle);
    },

    endRotationOffset: function(x, y, angle) {
        context.rotate(-angle);

        context.translate(-context.canvas.width / 2, -context.canvas.height / 2);
        context.translate(+(-x + context.canvas.width / 2), +(-y + context.canvas.height / 2));
    }
};

var EntityDrawer = {
    player: function() {
        context.beginPath();
        context.arc(0, 0, 30, 0, 2 * Math.PI);
        context.fillStyle = colors.player;
        context.fill();
    },
    wall: function(x, y, type) {
        context.beginPath();
        context.rect(x, y, blockSize, blockSize);
        context.fillStyle = colors.wall;
        context.fill();
    }
};

EntityCollision = {};

EntityCollision.arcToWall = function(arcX, arcY, arcRadius, wallX, wallY, wallSize) {
    var distX = Math.abs(arcX - wallX - wallSize / 2);
    var distY = Math.abs(arcY - wallY - wallSize / 2);

    if (distX > (wallSize / 2 + arcRadius)) { return false; }
    if (distY > (wallSize / 2 + arcRadius)) { return false; }

    if (distX <= (wallSize / 2)) { return true; }
    if (distY <= (wallSize / 2)) { return true; }

    var dx = distX - wallSize / 2;
    var dy = distY - wallSize / 2;

    return (dx * dx + dy * dy <= (arcRadius * arcRadius));
};

EntityCollision.arcToWalls = function(arcX, arcY) {
    var resultVector = { x: 0, y: 0 };

    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];

        if (EntityCollision.arcToWall(arcX, arcY, arcSizeRadius, wall.x, wall.y, blockSize)) {

            var wallCenterX = wall.x + blockSize / 2;
            var wallCenterY = wall.y + blockSize / 2;

            var vectorX = arcX - wallCenterX;
            var vectorY = arcY - wallCenterY;

            var length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

            if (length > 0) {
                vectorX /= length;
                vectorY /= length;

                resultVector.x += vectorX;
                resultVector.y += vectorY;
            }
        }
    }

    return resultVector;
};

var Player = function(x, y) {
    this.type = 'entity';
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.angle = 0;
    this.footPosition = 0;
    this.speed = 5;

    this.update = function() {
        var keysCount = 0;
        keysCount += keyboard.up ? 1 : 0;
        keysCount += keyboard.down ? 1 : 0;
        keysCount += keyboard.left ? 1 : 0;
        keysCount += keyboard.right ? 1 : 0;
        keysCount += keyboard.touchx > 0 ? 1 : 0;
        keysCount += keyboard.touchy > 0 ? 1 : 0;

        var currentSpeed = this.speed;

        if (keysCount > 1) {
            currentSpeed /= Math.sqrt(2);
        }

        // keyboard

        if (keyboard.up) this.y -= currentSpeed;
        if (keyboard.down) this.y += currentSpeed;
        if (keyboard.left) this.x -= currentSpeed;
        if (keyboard.right) this.x += currentSpeed;
        if (!keyboard.up && !keyboard.down && !keyboard.left && !keyboard.right) {
            if (keyboard.touchx) this.x += currentSpeed * keyboard.touchx;
            if (keyboard.touchy) this.y += currentSpeed * keyboard.touchy;
        }

        // collision
        var collisionVector = EntityCollision.arcToWalls(this.x, this.y);
        this.x += collisionVector.x * currentSpeed;
        this.y += collisionVector.y * currentSpeed;

        // mouse
        var vectorX = camera.offsetX + context.canvas.width / 2 - mouse.x;
        var vectorY = camera.offsetY + context.canvas.height / 2 - mouse.y;

        var length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

        if (length > 0) {
            vectorX /= length;
            vectorY /= length;

            this.angle = Math.atan2(vectorY, vectorX) + 90 * Math.PI / 180;
        }

        // foot

        if (keyboard.up || keyboard.down || keyboard.left || keyboard.right || keyboard.touchx > 0 || keyboard.touchy > 0) {
            this.footIncrementer += this.speed;
        }

        this.footPosition = Math.sin(this.footIncrementer * Math.PI / 180);
    };

    this.render = function() {

        EntityHelper.beginRotationOffset(this.x, this.y, this.angle);

        EntityDrawer.player();

        EntityHelper.endRotationOffset(this.x, this.y, this.angle);
    };
}

var Wall = function(x, y, walltype) {
    this.type = 'box';
    this.walltype = walltype;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.render = function() {
        if (this.sleep) return;

        EntityDrawer.wall(this.x, this.y, this.walltype);
    };
};

var Camera = function() {
    this.x = 0;
    this.y = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    var frames = 0;

    this.rectangleIntersection = function(r1, r2) {
        return !(r1.x + r1.width < r2.x || r1.y + r1.height < r2.y || r1.x > r2.x + r2.width || r1.y > r2.y + r2.height);
    };

    this.update = function() {
        frames++;
        if (frames >= 5) {
            frames = 0;

            var screen = { x: player.x - this.offsetX - context.canvas.width / 2 - blockSize, y: player.y - this.offsetY - context.canvas.height / 2 - blockSize, width: context.canvas.width + blockSize * 2, height: context.canvas.height + blockSize * 2 };

            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
                var bounds = {};

                if (entity.type === 'entity') {
                    bounds.x = entity.x - arcSizeRadius;
                    bounds.y = entity.y - arcSizeRadius;
                    bounds.width = arcSizeRadius * 2;
                    bounds.height = arcSizeRadius * 2;

                } else if (entity.type === 'box') {
                    bounds.x = entity.x;
                    bounds.y = entity.y;
                    bounds.width = blockSize;
                    bounds.height = blockSize;
                }

                entity.sleep = !this.rectangleIntersection(bounds, screen);
            }
        }
    };

    this.resize = function() {
        // resize
    };

    this.preRender = function() {

        var targetX = -player.x + context.canvas.width / 2;
        var targetY = -player.y + context.canvas.height / 2;

        var vectorX = targetX - this.x;
        var vectorY = targetY - this.y;

        this.offsetX = this.x - targetX;
        this.offsetY = this.y - targetY;

        this.x += vectorX / 10;
        this.y += vectorY / 10;

        context.save();
        context.translate(this.x, this.y);
    };

    this.postRender = function() {
        context.restore();
    };

};

var MapProcessor = function() {
    this.map = null;

    this.playerPosition = { x: 0, y: 0 };
    this.entityPositions = [];
    this.wallPositions = [];

    this.selectMap = function(m) {
        this.map = m.split(/\r?\n/);
    }

    this.generate = function() {
        this.wallPositions = [];
        this.playerPosition = { x: 0, y: 0 };

        if (this.map == null) {
            return;
        }
        for (var y = 0; y < this.map.length; y++) {
            var row = this.map[y];

            for (var x = 0; x < row.length; x += 2) {
                var char = row[x];
                var realX = x / 2;

                switch (char) {
                    case 'W':
                    case 'w':
                    case 'S':
                        this.wallPositions.push({ x: realX, y: y, type: char });
                        break;
                    case 'P':
                        this.playerPosition = { x: realX, y: y };
                        break;
                }
            }
        }
    };

    this.getPlayerPosition = function() {
        return this.playerPosition;
    };

    this.getWallPositions = function() {
        return this.wallPositions;
    };
};

var canvas = document.querySelector('canvas#main');
var context = canvas.getContext('2d');

var blockSize = 80;
var arcSizeRadius = 32;

var colors = { wall: '#555', player: '#111' };

var entities = [];
var walls = [];

var mapProcessor = new MapProcessor();
var loaded = false;

var playerPosition;
var player;

var loadMap = function(map) {
    mapProcessor.selectMap(map);
    mapProcessor.generate();

    playerPosition = mapProcessor.getPlayerPosition();
    player = new Player(playerPosition.x, playerPosition.y);

    entities.push(player);

    for (var i = 0; i < mapProcessor.getWallPositions().length; i++) {
        var wallPosition = mapProcessor.getWallPositions()[i];
        var wall = new Wall(wallPosition.x, wallPosition.y, wallPosition.type);
        entities.push(wall);
        walls.push(wall);
    }

    loaded = true;
}

loadMap(map1);

var onUpdate = function() {
    camera.update();
    for (var i = 0; i < entities.length; i++) {
        entities[i].update();
    }
    if (keyboard.touch) keyboard.touch = false;
};

var onRender = function() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    camera.preRender();

    for (var i = 0; i < entities.length; i++) {
        entities[i].render();
    }

    camera.postRender();
};

var keyboard = { up: false, down: false, left: false, right: false, space: false, touchx: 0, touchy: 0, touch: false };
var mouse = { x: 0, y: 0, pressed: false };


var onTick = function() {
    if (loaded) {
        onUpdate();
        onRender();
    }
}

var camera = new Camera();

var onResize = function(width, height) {
    context.canvas.width = width;
    context.canvas.height = height;
    camera.resize();
};

var resizeCallback = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    onResize(width, height);
};
window.addEventListener('resize', resizeCallback);
resizeCallback();

var tick = setInterval(function() {
    onTick();
}, 35);

window.addEventListener("keydown", function(event) {
    if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        return;
    }
    switch (event.keyCode) {
        case 87:
            keyboard.up = true;
            break;
        case 83:
            keyboard.down = true;
            break;
        case 65:
            keyboard.left = true;
            break;
        case 68:
            keyboard.right = true;
            break;
        case 32:
            keyboard.space = true;
            break;
    }
});

window.addEventListener("keyup", function(event) {
    switch (event.keyCode) {
        case 87:
            keyboard.up = false;
            break;
        case 83:
            keyboard.down = false;
            break;
        case 65:
            keyboard.left = false;
            break;
        case 68:
            keyboard.right = false;
            break;
        case 32:
            keyboard.space = false;
            break;
    }
});

window.addEventListener("mousedown", function() {
    mouse.pressed = true;
});

window.addEventListener("mouseup", function() {
    mouse.pressed = false;
});

window.addEventListener("mousemove", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchEnd, false);

var xDown = null;
var yDown = null;
var down = false;

function limitNumberWithinRange(num, min, max) {
    const MIN = min || 1;
    const MAX = max || 20;
    const parsed = parseInt(num)
    return Math.min(Math.max(parsed, MIN), MAX)
}

function getTouches(evt) {
    return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
    down = true;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    keyboard.touchx = limitNumberWithinRange(-xDiff / 50, -1, 1);
    keyboard.touchy = limitNumberWithinRange(-yDiff / 50, -1, 1);
    down = Math.abs(xDiff) < 10 && Math.abs(yDiff) < 10;

    // if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
    //     if (xDiff > 0) {
    //         /* right swipe */
    //         keyboard.left = true;
    //     } else {
    //         /* left swipe */
    //         keyboard.right = true;
    //     }
    // } else {
    //     if (yDiff > 0) {
    //         /* down swipe */
    //         keyboard.up = true;
    //     } else {
    //         /* up swipe */
    //         keyboard.down = true;
    //     }
    // }
};

function handleTouchEnd() {
    /* reset values */
    xDown = null;
    yDown = null;
    keyboard.touchx = 0;
    keyboard.touchy = 0;
    keyboard.touch = down;
    down = false;
}