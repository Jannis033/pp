var Player = function(x, y) {
    this.boundingType = 'arc';
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.angle = 0;
    this.footPosition = 0;
    this.footIncrementer = 0;
    this.speed = 5;
    this.sleep = true;
    this.canTakeDamage = true;
    this.damageVelocity = { x: 0, y: 0 };
    this.health = 100;
    this.dead = false;

    this.takeDamage = function(enemy) {
        if (this.canTakeDamage) {
            var vectorX = this.x - enemy.x;
            var vectorY = this.y - enemy.y;

            var length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

            if (length > 0) {
                this.damageVelocity.x = vectorX / length * 20;
                this.damageVelocity.y = vectorY / length * 20;
                this.canTakeDamage = false;

                this.health -= 25;
                this.health = this.health < 0 ? 0 : this.health;

                if (this.health == 0) {
                    this.dead = true;

                    setTimeout(function() {
                        gameover.style.display = 'block';
                    }, 1000);
                }
            }

        }
    };

    this.update = function() {

        if (this.sleep || this.dead) return;

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

        if (Math.abs(this.damageVelocity.x) != 0 < Math.abs(this.damageVelocity.y) != 0) {

            this.damageVelocity.x *= 0.9;
            this.damageVelocity.y *= 0.9;

            this.x += this.damageVelocity.x;
            this.y += this.damageVelocity.y;

            if (Math.abs(this.damageVelocity.x) < 0.5 && Math.abs(this.damageVelocity.y) < 0.5) {
                this.damageVelocity = { x: 0, y: 0 };
                this.canTakeDamage = true;
            }

        } else {
            if (keyboard.up) this.y -= currentSpeed;
            if (keyboard.down) this.y += currentSpeed;
            if (keyboard.left) this.x -= currentSpeed;
            if (keyboard.right) this.x += currentSpeed;
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

        if (keyboard.up || keyboard.down || keyboard.left || keyboard.right) {
            this.footIncrementer += this.speed;
        }

        this.footPosition = Math.sin(this.footIncrementer * Math.PI / 180);
    };

    this.render = function() {

        if (this.sleep) return;

        EntityHelper.beginRotationOffset(this.x, this.y, this.angle);

        if (!this.dead) {
            EntityDrawer.human(this.footPosition);
        } else {
            EntityDrawer.deadHuman();
        }

        EntityHelper.endRotationOffset(this.x, this.y, this.angle);

        EntityDrawer.healthBar(this.health, this.x, this.y);
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

            for (var i = 0; i < entities.length; i++) {
                var entity = entities[i];
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

let map = map1;

var MapProcessor = function() {
    this.playerPosition = { x: 0, y: 0 };
    this.wallPositions = [];

    this.generate = function() {
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
                        this.enemyPositions.push({ x: realX, y: y });
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

// SETUP

var canvas = document.querySelector('canvas#main');
var context = canvas.getContext('2d');
var keyboard = { up: false, down: false, left: false, right: false };
var mouse = { x: 0, y: 0, pressed: false };

var entities = [];
var walls = [];
//var enemies = [];

var blockSize = 150;
var arcSizeRadius = 60;

var mapProcessor = new MapProcessor();
mapProcessor.generate();

var playerPosition = mapProcessor.getPlayerPosition();
var player = new Player(playerPosition.x, playerPosition.y);

/*for (var i = 0; i < mapProcessor.getEnemyPositions().length; i++) {
    var enemyPosition = mapProcessor.getEnemyPositions()[i];
    var enemy = new Enemy(enemyPosition.x, enemyPosition.y);
    entities.push(enemy);
    enemies.push(enemy);
}*/

entities.push(player);

for (var i = 0; i < mapProcessor.getWallPositions().length; i++) {
    var wallPosition = mapProcessor.getWallPositions()[i];
    var wall = new Wall(wallPosition.x, wallPosition.y);
    entities.push(wall);
    walls.push(wall);
}

var camera = new Camera();

var onResize = function(width, height) {
    context.canvas.width = width;
    context.canvas.height = height;
    camera.resize();
};

var bulletManager = new BulletManager();

var onUpdate = function() {
    camera.update();
    bulletManager.update();
    for (var i = 0; i < entities.length; i++) {
        entities[i].update();
    }
};

var onRender = function() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    camera.preRender();

    bulletManager.render();

    for (var i = 0; i < entities.length; i++) {
        entities[i].render();
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