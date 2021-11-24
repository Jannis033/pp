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
    player: function(footPosition) {
        // head
        context.beginPath();
        context.arc(0, 0, 40, 0, 2 * Math.PI);
        context.fillStyle = '#F1D4AF';
        context.fill();
    },
    entity: function(footPosition) {
        // head
        context.beginPath();
        context.arc(0, 0, 40, 0, 2 * Math.PI);
        context.fillStyle = '#F1D4AF';
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
    this.boundingType = 'arc';
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.angle = 0;
    this.footPosition = 0;
    this.footIncrementer = 0;
    this.speed = 5;
    this.sleep = true;

    this.update = function() {

        if (this.sleep) return;

        var keysCount = 0;
        keysCount += keyboard.up ? 1 : 0;
        keysCount += keyboard.down ? 1 : 0;
        keysCount += keyboard.left ? 1 : 0;
        keysCount += keyboard.right ? 1 : 0;

        var currentSpeed = this.speed;

        if (keysCount > 1) {
            currentSpeed /= Math.sqrt(2);
        }

        // keyboard

        if (keyboard.up) this.y -= currentSpeed;
        if (keyboard.down) this.y += currentSpeed;
        if (keyboard.left) this.x -= currentSpeed;
        if (keyboard.right) this.x += currentSpeed;

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

        if (keyboard.up || keyboard.down || keyboard.left || keyboard.right) {
            this.footIncrementer += this.speed;
        }

        this.footPosition = Math.sin(this.footIncrementer * Math.PI / 180);
    };

    this.render = function() {

        if (this.sleep) return;

        EntityHelper.beginRotationOffset(this.x, this.y, this.angle);

        EntityDrawer.player(this.footPosition);

        EntityHelper.endRotationOffset(this.x, this.y, this.angle);
    };
};

var Entity = function(x, y) {
    this.boundingType = 'arc';
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.angle = 0;
    this.footPosition = 0;
    this.footIncrementer = 0;
    this.speed = 3;
    this.sleep = true;
    this.pushAlongVelocity = { x: 0, y: 0 };

    this.pushAlong = function(vectorX, vectorY) {
        this.pushAlongVelocity.x = vectorX * 10;
        this.pushAlongVelocity.y = vectorY * 10;
    };

    this.rectangleIntersection = function(r1, r2) {
        return !(r1.x + r1.width < r2.x || r1.y + r1.height < r2.y || r1.x > r2.x + r2.width || r1.y > r2.y + r2.height);
    };

    this.lastVectorX = 0;
    this.lastVectorY = 0;

    this.update = function() {

        if (this.sleep) return;

        var vectorX = player.x - this.x;
        var vectorY = player.y - this.y;

        this.lastVectorX = vectorX;
        this.lastVectorY = vectorY;

        var length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

        if (length > 0) {
            vectorX /= length;
            vectorY /= length;

            if (length < 800) {
                this.angle = Math.atan2(vectorY, vectorX) - 90 * Math.PI / 180;
                this.x += vectorX * this.speed;
                this.y += vectorY * this.speed;

                // collision
                var collisionVector = EntityCollision.arcToWalls(this.x, this.y);
                this.x += collisionVector.x * this.speed;
                this.y += collisionVector.y * this.speed;

                this.footIncrementer += this.speed;
                this.footPosition = Math.sin(this.footIncrementer * Math.PI / 180);
            }
        }

        // entity collision
        if (Math.random() <= 0.1) {
            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];

                if (entity != this) {
                    var vectorX = entities.x - this.x;
                    var vectorY = entities.y - this.y;

                    var length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

                    if (length != 0 && length < 100) {

                        vectorX /= length;
                        vectorY /= length;

                        entity.pushAlong(vectorX, vectorY);
                    }

                }
            }
        }

        // push along velocity
        this.pushAlongVelocity.x *= 0.9;
        this.pushAlongVelocity.y *= 0.9;

        this.x += this.pushAlongVelocity.x;
        this.y += this.pushAlongVelocity.y;
    };

    this.render = function() {

        if (this.sleep) return;

        EntityHelper.beginRotationOffset(this.x, this.y, this.angle);

        EntityDrawer.entity(this.footPosition);

        EntityHelper.endRotationOffset(this.x, this.y, this.angle);
    };
};

var Wall = function(x, y) {
    this.boundingType = 'box';
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.render = function() {

        if (this.sleep) return;

        context.beginPath();
        context.rect(this.x, this.y, blockSize, blockSize);
        context.fillStyle = '#774F38';
        context.fill();
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
        if (frames >= 15) {
            frames = 0;

            var screen = { x: player.x - this.offsetX - context.canvas.width / 2 - blockSize, y: player.y - this.offsetY - context.canvas.height / 2 - blockSize, width: context.canvas.width + blockSize * 2, height: context.canvas.height + blockSize * 2 };

            for (var i = 0; i < allentities.length; i++) {
                var entity = allentities[i];
                var bounds = {};

                if (entity.boundingType === 'arc') {
                    bounds.x = entity.x - arcSizeRadius;
                    bounds.y = entity.y - arcSizeRadius;
                    bounds.width = arcSizeRadius * 2;
                    bounds.height = arcSizeRadius * 2;

                } else if (entity.boundingType === 'box') {
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
    var map = null;

    this.playerPosition = { x: 0, y: 0 };
    this.entityPositions = [];
    this.wallPositions = [];

    this.selectMap = function(m) {
        map = m;
    }

    this.generate = function() {
        this.wallPositions = [];
        this.entityPositions = [];
        this.playerPosition = { x: 0, y: 0 };

        if (map == null) {
            return;
        }
        for (var y = 0; y < map.length; y++) {
            var row = map[y];

            for (var x = 0; x < row.length; x += 2) {
                var char = row[x];
                var realX = x / 2;

                switch (char) {
                    case 'W':
                        this.wallPositions.push({ x: realX, y: y });
                        break;
                    case 'E':
                        this.entityPositions.push({ x: realX, y: y });
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

    this.getEntityPositions = function() {
        return this.entityPositions;
    };

    this.getWallPositions = function() {
        return this.wallPositions;
    };

};


// SETUP

var canvas = document.querySelector('canvas#main');
var context = canvas.getContext('2d');
var keyboard = { up: false, down: false, left: false, right: false };
var mouse = { x: 0, y: 0, pressed: false };

var gameover = document.querySelector('div.gameover');

var allentities = [];
var walls = [];
var entities = [];

var blockSize = 150;
var arcSizeRadius = 50;

var mapProcessor = new MapProcessor();
mapProcessor.selectMap(map1);
mapProcessor.generate();

var playerPosition = mapProcessor.getPlayerPosition();
var player = new Player(playerPosition.x, playerPosition.y);

for (var i = 0; i < mapProcessor.getEntityPositions().length; i++) {
    var entityPosition = mapProcessor.getEntityPositions()[i];
    var entity = new Entity(entityPosition.x, entityPosition.y);
    allentities.push(entity);
    entities.push(entity);
}

allentities.push(player);

for (var i = 0; i < mapProcessor.getWallPositions().length; i++) {
    var wallPosition = mapProcessor.getWallPositions()[i];
    var wall = new Wall(wallPosition.x, wallPosition.y);
    allentities.push(wall);
    walls.push(wall);
}

var camera = new Camera();

var onResize = function(width, height) {
    context.canvas.width = width;
    context.canvas.height = height;
    camera.resize();
};

var onUpdate = function() {
    camera.update();
    for (var i = 0; i < allentities.length; i++) {
        allentities[i].update();
    }
};

var onRender = function() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    camera.preRender();

    for (var i = 0; i < allentities.length; i++) {
        allentities[i].render();
    }

    camera.postRender();
};

// HANDLERS

// resize begin

var resizeCallback = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    onResize(width, height);
};
window.addEventListener('resize', resizeCallback);
resizeCallback();

// resize end

// tick begin

var tickCallback = function() {
    onUpdate();
    onRender();
    requestAnimationFrame(tickCallback);
};
requestAnimationFrame(tickCallback);

// tick end

// keyboard begin

document.addEventListener('keydown', function(event) {
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
    }
});

document.addEventListener('keyup', function(event) {
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
    }
});

// keyboard end

// mouse begin

document.addEventListener('mousemove', function(event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

document.addEventListener('mousedown', function(event) {
    mouse.pressed = true;
});

document.addEventListener('mouseup', function(event) {
    mouse.pressed = false;
});

// mouse end