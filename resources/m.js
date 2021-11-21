var TextMap = [
    'W W W W W W W W W W W W W W W W W W W W',
    'W       W                             W',
    'W   E   W           E           E     W',
    'W   E   W                             W',
    'W       W           E     W W W W W W W',
    'W     W W                             W',
    'W                   E                 W',
    'W         E E                   E     W',
    'W                                     W',
    'W W W W W W W W W W W W W W           W',
    'W                         W           W',
    'W     E     E             W     E     W',
    'W                   E     W           W',
    'W W W W W W W             W           W',
    'W                         W     E     W',
    'W               W W W W W W           W',
    'W   P                     W           W',
    'W                   E                 W',
    'W         W W W                   E   W',
    'W           W       E                 W',
    'W W W W W W W W W W W W W W W W W W W W W'
];

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
    human: function(footPosition) {

        // left foot
        context.beginPath();
        context.rect(20, -20 + (footPosition * 35), 25, 40);
        context.fillStyle = '#D95B43';
        context.fill();

        // right foot
        context.beginPath();
        context.rect(-40, -20 + (footPosition * -35), 25, 40);
        context.fillStyle = '#D95B43';
        context.fill();

        // left hand
        context.rotate(30 * Math.PI / 180);
        context.beginPath();
        context.rect(40, -10, 20, 80);
        context.fillStyle = '#C02942';
        context.fill();
        context.rotate(-30 * Math.PI / 180);

        // right hand
        context.rotate(-50 * Math.PI / 180);
        context.beginPath();
        context.rect(-55, -20, 20, 45);
        context.fillStyle = '#C02942';
        context.fill();
        context.rotate(50 * Math.PI / 180);

        // torso
        context.beginPath();
        context.rect(-60, -30, 120, 60);
        context.fillStyle = '#53777A';
        context.fill();

        // gun
        context.beginPath();
        context.rect(-12.5, 30, 25, 70);
        context.fillStyle = 'gray';
        context.fill();

        // head
        context.beginPath();
        context.arc(0, 0, 40, 0, 2 * Math.PI);
        context.fillStyle = '#F1D4AF';
        context.fill();

        // hair
        context.rotate(-180 * Math.PI / 180);
        context.beginPath();
        context.arc(0, 0, 37, 0, 180 * Math.PI / 180);
        context.fillStyle = '#4d2600';
        context.fill();
        context.rotate(180 * Math.PI / 180);
    },

    deadHuman: function() {

        // left foot
        context.beginPath();
        context.rect(30, 20, 25, 40);
        context.fillStyle = '#D95B43';
        context.fill();

        // right foot
        context.beginPath();
        context.rect(-25, -30 - 35, 25, 40);
        context.fillStyle = '#D95B43';
        context.fill();

        // left hand
        context.rotate(25 * Math.PI / 180);
        context.beginPath();
        context.rect(40, -5, 20, 80);
        context.fillStyle = '#C02942';
        context.fill();
        context.rotate(-25 * Math.PI / 180);

        // right hand
        context.rotate(-60 * Math.PI / 180);
        context.beginPath();
        context.rect(-40, 20, 20, 45);
        context.fillStyle = '#C02942';
        context.fill();
        context.rotate(60 * Math.PI / 180);

        // torso
        context.beginPath();
        context.rect(-60, -30, 120, 60);
        context.fillStyle = '#53777A';
        context.fill();

        // gun
        // context.beginPath();
        // context.rect(-12.5, 40, 25, 70);
        // context.fillStyle = 'gray';
        // context.fill();

        // head
        context.beginPath();
        context.arc(20, 10, 35, 0, 2 * Math.PI);
        context.fillStyle = '#F1D4AF';
        context.fill();

        // hair
        context.rotate(-170 * Math.PI / 180);
        context.beginPath();
        context.arc(0, 0, 32, 0, 180 * Math.PI / 180);
        context.fillStyle = '#4d2600';
        context.fill();
        context.rotate(170 * Math.PI / 180);
    },
    undead: function(footPosition) {

        // left foot
        context.beginPath();
        context.rect(20, -20 + (footPosition * 35), 25, 40);
        context.fillStyle = '#79BD9A';
        context.fill();

        // right foot
        context.beginPath();
        context.rect(-40, -20 + (footPosition * -35), 25, 40);
        context.fillStyle = '#79BD9A';
        context.fill();

        // left hand
        context.beginPath();
        context.rect(-50, -10, 20, 90);
        context.fillStyle = '#3B8686';
        context.fill();

        // right hand
        context.beginPath();
        context.rect(30, -10, 20, 85);
        context.fillStyle = '#3B8686';
        context.fill();

        // torso
        context.beginPath();
        context.rect(-60, -30, 120, 60);
        context.fillStyle = '#0B486B';
        context.fill();

        // head
        context.beginPath();
        context.arc(0, 0, 40, 0, 2 * Math.PI);
        context.fillStyle = '#CFF09E';
        context.fill();

        // hair
        context.rotate(-180 * Math.PI / 180);
        context.beginPath();
        context.arc(0, 0, 37, 0, 180 * Math.PI / 180);
        context.fillStyle = '#4d2600';
        context.fill();
        context.rotate(180 * Math.PI / 180);
    },

    deadUndead: function() {

        // left foot
        context.beginPath();
        context.rect(52, -30, 25, 40);
        context.fillStyle = '#79BD9A';
        context.fill();

        // right foot
        context.beginPath();
        context.rect(26, -40, 25, 40);
        context.fillStyle = '#79BD9A';
        context.fill();

        // left hand
        context.beginPath();
        context.rect(-25, 35, 20, 90);
        context.fillStyle = '#3B8686';
        context.fill();

        // right hand
        context.beginPath();
        context.rect(35, -40, 20, 85);
        context.fillStyle = '#3B8686';
        context.fill();

        // torso
        context.beginPath();
        context.rect(-42, -20, 120, 60);
        context.fillStyle = '#0B486B';
        context.fill();

        // head
        context.beginPath();
        context.arc(10, 5, 35, 0, 2 * Math.PI);
        context.fillStyle = '#CFF09E';
        context.fill();

        // hair
        context.rotate(-170 * Math.PI / 180);
        context.beginPath();
        context.arc(0, 0, 25, 0, 180 * Math.PI / 180);
        context.fillStyle = '#4d2600';
        context.fill();
        context.rotate(170 * Math.PI / 180);
    },

    healthBar: function(health, centerX, centerY) {
        context.beginPath();
        context.rect(centerX - 50, centerY + 60, 100, 5);
        context.strokeStyle = 'black';
        context.stroke();

        var color;

        if (health <= 35) color = 'red';
        else if (health <= 75) color = 'orange';
        else color = 'lime';

        context.beginPath();
        context.rect(centerX - 50, centerY + 60, health, 5);
        context.fillStyle = color;
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

var Enemy = function(x, y) {
    this.boundingType = 'arc';
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.angle = 0;
    this.footPosition = 0;
    this.footIncrementer = 0;
    this.speed = 3;
    this.sleep = true;
    this.pushAlongVelocity = { x: 0, y: 0 };
    this.pushBulletVelocity = { x: 0, y: 0 };
    this.canBePushedByBullet = true;
    this.health = 100;
    this.dead = false;

    this.pushAlong = function(vectorX, vectorY) {
        this.pushAlongVelocity.x = vectorX * 10;
        this.pushAlongVelocity.y = vectorY * 10;
    };

    this.pushByBullet = function(bullet) {

        if (this.canBePushedByBullet) {
            this.pushBulletVelocity.x = bullet.vectorX * 15;
            this.pushBulletVelocity.y = bullet.vectorY * 15;
            this.canBePushedByBullet = false;

            this.health -= 25;
            this.health = this.health < 0 ? 0 : this.health;

            if (this.health == 0) {
                // debug
                this.dead = true;
            }
        }

    };

    this.rectangleIntersection = function(r1, r2) {
        return !(r1.x + r1.width < r2.x || r1.y + r1.height < r2.y || r1.x > r2.x + r2.width || r1.y > r2.y + r2.height);
    };

    this.lastVectorX = 0;
    this.lastVectorY = 0;

    this.update = function() {

        if (this.sleep || this.dead) return;

        var vectorX = player.x - this.x;
        var vectorY = player.y - this.y;

        if (player.dead) {
            vectorX = this.lastVectorX;
            vectorY = this.lastVectorY;
        } else {
            this.lastVectorX = vectorX;
            this.lastVectorY = vectorY;
        }

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

                if (length < 100) {
                    player.takeDamage(this);
                }
            }
        }

        // enemy collision
        if (Math.random() <= 0.1) {
            for (var i = 0; i < enemies.length; i++) {
                var enemy = enemies[i];

                if (enemy != this) {
                    var vectorX = enemy.x - this.x;
                    var vectorY = enemy.y - this.y;

                    var length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

                    if (length != 0 && length < 100) {

                        vectorX /= length;
                        vectorY /= length;

                        enemy.pushAlong(vectorX, vectorY);
                    }

                }
            }
        }

        // push along velocity
        this.pushAlongVelocity.x *= 0.9;
        this.pushAlongVelocity.y *= 0.9;

        this.x += this.pushAlongVelocity.x;
        this.y += this.pushAlongVelocity.y;

        // bullet collision

        var bounds = { x: this.x - arcSizeRadius, y: this.y - arcSizeRadius, width: arcSizeRadius * 2, height: arcSizeRadius * 2 };
        for (var i = 0; i < bulletManager.bullets.length; i++) {
            var bullet = bulletManager.bullets[i];

            if (this.rectangleIntersection(bounds, bullet.bounds)) {
                bullet.markToDelete = true;
                this.pushByBullet(bullet);
            }

        }

        // push bullet velocity
        this.pushBulletVelocity.x *= 0.9;
        this.pushBulletVelocity.y *= 0.9;

        this.x += this.pushBulletVelocity.x;
        this.y += this.pushBulletVelocity.y;

        if (Math.abs(this.pushBulletVelocity.x) < 0.5 && Math.abs(this.pushBulletVelocity.y) < 0.5) {
            this.canBePushedByBullet = true;
            this.pushBulletVelocity.x = 0;
            this.pushBulletVelocity.y = 0;
        }

    };

    this.render = function() {

        if (this.sleep) return;

        EntityHelper.beginRotationOffset(this.x, this.y, this.angle);

        if (!this.dead) {
            EntityDrawer.undead(this.footPosition);
        } else {
            EntityDrawer.deadUndead();
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

var MapProcessor = function() {

    this.playerPosition = { x: 0, y: 0 };
    this.enemyPositions = [];
    this.wallPositions = [];

    this.generate = function() {
        for (var y = 0; y < TextMap.length; y++) {
            var row = TextMap[y];

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

    this.getEnemyPositions = function() {
        return this.enemyPositions;
    };

    this.getWallPositions = function() {
        return this.wallPositions;
    };

};

var Bullet = function(i) {

    this.vectorX = Math.cos(player.angle + 90 * Math.PI / 180 + i * 5 * Math.PI / 180);
    this.vectorY = Math.sin(player.angle + 90 * Math.PI / 180 + i * 5 * Math.PI / 180);
    this.x = player.x + this.vectorX * arcSizeRadius * 1.5;
    this.y = player.y + this.vectorY * arcSizeRadius * 1.5;
    this.radius = 5;
    this.bounds = { x: this.x - this.radius, y: this.y - this.radius, width: this.radius * 2, height: this.radius * 2 };

    this.frames = 0;
    this.markToDelete = false;

    this.rectangleIntersection = function(r1, r2) {
        return !(r1.x + r1.width < r2.x || r1.y + r1.height < r2.y || r1.x > r2.x + r2.width || r1.y > r2.y + r2.height);
    };

    this.update = function() {
        this.x += this.vectorX * 25;
        this.y += this.vectorY * 25;

        this.bounds.x = this.x - this.radius;
        this.bounds.y = this.y - this.radius;

        this.frames++;

        if (this.frames > 15) {
            this.markToDelete = true;
        }

        for (var i = 0; i < walls.length; i++) {
            var wall = walls[i];

            if (this.rectangleIntersection(wall.bounds, this.bounds)) {
                this.markToDelete = true;
            }
        }

    };

    this.render = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = '#F8CA00';
        context.fill();
    };

};

var BulletManager = function() {

    this.canSpawn = true;
    this.frames = 0;
    this.bullets = [];
    this.indexesToDelete = [];

    this.update = function() {

        if (this.canSpawn && !player.dead) {

            if (mouse.pressed) {

                for (var i = -3; i <= 3; i++) {
                    var bullet = new Bullet(i);
                    this.bullets.push(bullet);
                }

                this.canSpawn = false;
            }

        } else {
            this.frames++;

            if (this.frames >= 60) {
                this.frames = 0;
                this.canSpawn = true;
            }
        }

        this.indexesToDelete = [];
        for (var i = 0; i < this.bullets.length; i++) {
            this.bullets[i].update();

            if (this.bullets[i].markToDelete) {
                this.indexesToDelete.push(i);
            }
        }

        for (var i = 0; i < this.indexesToDelete.length; i++) {
            this.bullets.splice(this.indexesToDelete[i], 1);
        }
    };

    this.render = function() {
        for (var i = 0; i < this.bullets.length; i++) {
            this.bullets[i].render();
        }
    };

};

// SETUP

var canvas = document.querySelector('canvas#main');
var context = canvas.getContext('2d');
var keyboard = { up: false, down: false, left: false, right: false };
var mouse = { x: 0, y: 0, pressed: false };

var gameover = document.querySelector('div.gameover');

var entities = [];
var walls = [];
var enemies = [];

var blockSize = 150;
var arcSizeRadius = 60;

var mapProcessor = new MapProcessor();
mapProcessor.generate();

var playerPosition = mapProcessor.getPlayerPosition();
var player = new Player(playerPosition.x, playerPosition.y);

for (var i = 0; i < mapProcessor.getEnemyPositions().length; i++) {
    var enemyPosition = mapProcessor.getEnemyPositions()[i];
    var enemy = new Enemy(enemyPosition.x, enemyPosition.y);
    entities.push(enemy);
    enemies.push(enemy);
}

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
