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
    player: function(rotation) {
        context.beginPath();
        context.rect(-blockSize / 2, -blockSize / 2 - playerOverlap, blockSize, blockSize + playerOverlap);
        context.translate(-blockSize / 2, -blockSize / 2 - playerOverlap);
        switch (rotation) {
            case 1:
                context.fillStyle = patterns.player1;
                break;
            case 2:
                context.fillStyle = patterns.player2;
                break;
            case 3:
                context.fillStyle = patterns.player3;
                break;
            case 4:
                /*if (tmpplayerrotation == 20) {
                    tmpplayerrotation = 0;
                }
                if (tmpplayerrotation < 5) {
                    context.fillStyle = patterns.player5;
                } else if (tmpplayerrotation < 10) {
                    context.fillStyle = patterns.player4;
                } else if (tmpplayerrotation < 15) {
                    context.fillStyle = patterns.player3;
                } else {
                    context.fillStyle = patterns.player4;
                }
                tmpplayerrotation += 1;*/
                if (rotateplayer) {
                    if (tmpplayerrotation == 40) {
                        tmpplayerrotation = 0;
                    }

                    if (tmpplayerrotation < 5) {
                        context.fillStyle = patterns.player0;
                    } else if (tmpplayerrotation < 10) {
                        context.fillStyle = patterns.player1;
                    } else if (tmpplayerrotation < 15) {
                        context.fillStyle = patterns.player2;
                    } else if (tmpplayerrotation < 20) {
                        context.fillStyle = patterns.player3;
                    } else if (tmpplayerrotation < 25) {
                        context.fillStyle = patterns.player4;
                    } else if (tmpplayerrotation < 30) {
                        context.fillStyle = patterns.player5;
                    } else if (tmpplayerrotation < 35) {
                        context.fillStyle = patterns.player6;
                    } else {
                        context.fillStyle = patterns.player7;
                    }
                    tmpplayerrotation += 1;
                } else {
                    context.fillStyle = patterns.player4;
                }
                break;
            case 5:
                context.fillStyle = patterns.player5;
                break;
            case 6:
                context.fillStyle = patterns.player6;
                break;
            case 7:
                context.fillStyle = patterns.player7;
                break;
            default:
                context.fillStyle = patterns.player0;
                break;

        }
        context.fill();
        if (rotateplayer) {
            context.font = '42px sans-serif';
            context.fillStyle = "#000";
            context.fillText('loading...', -35, 140);
        }
        context.translate(blockSize / 2, blockSize / 2 + playerOverlap);
    },
    wall: function(x, y, type, details, corners) {
        context.beginPath();

        switch (type) {
            case 'W':
                context.fillStyle = colors.wall;
                switch (details) {
                    case 'i':
                        context.fillStyle = "#00000000";
                        context.rect(x, y, blockSize, blockSize);
                        break;
                    default:
                        context.rect(x + blockSize / 4, y + blockSize / 4, blockSize / 2, blockSize / 2);
                        if (corners.right) {
                            context.rect(x + blockSize / 4 * 3, y + blockSize / 4, blockSize / 4, blockSize / 2);
                        }
                        if (corners.left) {
                            context.rect(x, y + blockSize / 4, blockSize / 4, blockSize / 2);
                        }
                        if (corners.bottom) {
                            context.rect(x + blockSize / 4, y + blockSize / 4 * 3, blockSize / 2, blockSize / 4);
                        }
                        if (corners.top) {
                            context.rect(x + blockSize / 4, y, blockSize / 2, blockSize / 4);
                        }
                        break;
                }
                break;
            case 'O':
                context.rect(x, y, blockSize, blockSize);
                switch (details) {
                    case 't':
                        context.fillStyle = patterns.tisch2;
                        break;
                }
                break;
        }
        context.fill();
    },
    carpet: function(x, y, type, details) {
        context.beginPath();
        context.rect(x, y, blockSize, blockSize);
        switch (type) {
            case 't':
                context.fillStyle = patterns.stairsX;
                break;
            case 'T':
                context.fillStyle = patterns.stairsY;
                break;
            case 'H':
                switch (details) {
                    case 'a':
                        context.fillStyle = patterns.heizungA;
                        break;
                    case 'm':
                        context.fillStyle = patterns.heizungM;
                        break;
                    case 'e':
                        context.fillStyle = patterns.heizungE;
                        break;
                }
                break;
            case 'v':
            case 'V':
                context.fillStyle = '#aa0000';
                break;
            case 'D':
                context.fillStyle = '#0088ff11';
                break;
            case 'C':
                switch (details) {
                    case 't':
                        context.fillStyle = patterns.tisch2;
                        break;
                }
                break;
        }
        context.fill();
    },
    entity: function(x, y, type, details) {
        context.beginPath();
        context.rect(x, y, blockSize, blockSize);
        switch (type) {
            case 'e':
                switch (details) {
                    case 'k':
                        context.fillStyle = patterns.cookie;
                        break;
                }
                break;
        }
        context.fill();
    },
    enemy: function(x, y, type, details) {
        context.beginPath();
        context.rect(x, y, blockSize, blockSize);
        switch (type) {
            case 'E':
                switch (details) {
                    case '1':
                        context.fillStyle = patterns.cookie;
                        break;
                }
                break;
        }
        context.fill();
    }
};

EntityCollision = {};

EntityCollision.arcToWall = function(arcX, arcY, arcRadius, wallX, wallY, wallSize, details, corners) {
    var wallSizeX = (corners.left && corners.right ? wallSize : (corners.left || corners.right ? wallSize / 4 * 3 : wallSize / 2));
    var wallSizeY = (corners.top && corners.bottom ? wallSize : (corners.top || corners.bottom ? wallSize / 4 * 3 : wallSize / 2));

    wallX = (corners.left ? wallX : wallX + wallSize / 4);
    wallY = (corners.top ? wallY : wallY + wallSize / 4);

    var distX = Math.abs(arcX - wallX - wallSizeX / 2);
    var distY = Math.abs(arcY - wallY - wallSizeY / 2);

    if (distX > (wallSizeX / 2 + arcRadius)) { return false; }
    if (distY > (wallSizeY / 2 + arcRadius)) { return false; }

    if (distX <= (wallSizeX / 2)) { return true; }
    if (distY <= (wallSizeY / 2)) { return true; }

    var dx = distX - wallSizeX / 2;
    var dy = distY - wallSizeY / 2;

    return (dx * dx + dy * dy <= (arcRadius * arcRadius));
};

EntityCollision.arcToWalls = function(arcX, arcY) {
    var resultVector = { x: 0, y: 0 };

    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];

        if (EntityCollision.arcToWall(arcX, arcY, arcSizeRadius, wall.x, wall.y, blockSize, wall.details, wall.collCorners)) {
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

EntityCollision.entitiesCollect = function(x, y) {
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];

        if (entity.type == "o") {

            var entityCenterX = entity.x + blockSize / 2;
            var entityCenterY = entity.y + blockSize / 2;

            var distX = Math.abs(x - entityCenterX) - blockSize / 2 - entityCollectRadius;
            var distY = Math.abs(y - entityCenterY) - blockSize / 2 - entityCollectRadius;

            if (distX <= 0 && distY <= 0) {
                return entity;
            }
        }
    }
    return null;
}

EntityCollision.entitiesInteract = function(x, y) {
    for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];

        if (entity.type == "e") {

            var entityCenterX = entity.x + blockSize / 2;
            var entityCenterY = entity.y + blockSize / 2;

            var distX = Math.abs(x - entityCenterX) - blockSize / 2 - entityInteractRadius;
            var distY = Math.abs(y - entityCenterY) - blockSize / 2 - entityInteractRadius;

            if (distX <= 0 && distY <= 0) {
                return entity;
            }
        }
    }
    return null;
}

EntityCollision.enemies = function(x, y) {
    for (var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];

        var enemyCenterX = enemy.x + blockSize / 2;
        var enemyCenterY = enemy.y + blockSize / 2;

        var distX = Math.abs(x - enemyCenterX) - blockSize / 2 - enemyFollowRadius;
        var distY = Math.abs(y - enemyCenterY) - blockSize / 2 - enemyFollowRadius;

        if (distX <= 0 && distY <= 0) {
            return enemy;
        }
    }
    return null;
}

EntityCollision.carpet = function(x, y, type) {
    for (var i = 0; i < carpets.length; i++) {
        var carpet = carpets[i];
        if (carpet.type == type) {
            var carpetCenterX = carpet.x + blockSize / 2;
            var carpetCenterY = carpet.y + blockSize / 2;

            var distX = Math.abs(x - carpetCenterX) - blockSize / 2;
            var distY = Math.abs(y - carpetCenterY) - blockSize / 2;

            if (distX <= 0 && distY <= 0) {
                return carpet;
            }
        }
    }
    return null;
}

var Player = function(x, y) {
    this.render = 'entity';
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.angle = 0;
    this.rotation = 4;
    this.tmprotation = 0;
    this.footPosition = 0;
    this.speed = 4;
    this.lsdspeed = 10;
    this.damagecounter = 80;
    this.damagevalue = 0.7;
    this.regeneratecounter = 5;
    this.regeneratevalue = 0.15;
    this.health = 20;
    this.maxhealth = 20;

    this.teleport = function(x, y) {
        this.x = x * blockSize;
        this.y = y * blockSize;
    }

    this.startRotate = function() {
        this.tmprotation = this.rotation;
        this.rotation = 4;
        rotateplayer = true;
    }

    this.endRotate = function() {
        this.rotation = this.tmprotation;
        rotateplayer = false;
    }

    this.die = function() {
        document.getElementById("deathscreen").classList.add("show");
        this.health = -1;
    }

    this.respawn = function() {
        document.getElementById("deathscreen").classList.remove("show");
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
        this.damagecounter = 80;
        this.regeneratecounter = 5;
        this.setHealth(20);
    }

    this.setHealth = function(health) {
        this.health = health;
        if (this.health > this.maxhealth) {
            this.health = this.maxhealth;
        }
        if (this.health < 0) {
            this.health = 0;
        }
        if (this.health == 0) {
            this.die();
        }
        this.updatehealth();
    }

    this.updatehealth = function() {
        document.getElementById('healthbar').children[0].style.width = (this.health / this.maxhealth * 100 + "%");
        if ((this.health / this.maxhealth) < 0.25) {
            document.getElementById('healthbar').children[0].style.backgroundColor = "#a83500";
        } else if ((this.health / this.maxhealth) < 0.4) {
            document.getElementById('healthbar').children[0].style.backgroundColor = "#c28e00";
        } else if ((this.health / this.maxhealth) < 0.6) {
            document.getElementById('healthbar').children[0].style.backgroundColor = "#348d00";
        } else {
            document.getElementById('healthbar').children[0].style.backgroundColor = "#0b5e00";
        }
    }

    this.damage = function() {
        if (this.health > 0) {
            if (this.damagecounter > 80) {
                getSound("damage").loop(false).volume(100).play();
                this.setHealth(this.health - this.damagevalue);
                this.damagecounter = 0;

            }
            this.damagecounter++;
        }
    }

    this.regenerate = function() {
        if (this.regeneratecounter > 5) {
            this.setHealth(this.health + this.regeneratevalue);
            this.regeneratecounter = 0;
        }
        this.regeneratecounter++;
    }

    this.update = function() {
        var keysCount = 0;
        keysCount += keyboard.up ? 1 : 0;
        keysCount += keyboard.down ? 1 : 0;
        keysCount += keyboard.left ? 1 : 0;
        keysCount += keyboard.right ? 1 : 0;
        keysCount += keyboard.touchx != 0 ? 1 : 0;
        keysCount += keyboard.touchy != 0 ? 1 : 0;

        var currentSpeed = (keyboard.ctrl ? this.lsdspeed : this.speed);

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

        var rot = -1;
        if (keyboard.up && !keyboard.down) {
            rot = 0;
        } else if (keyboard.down && !keyboard.up) {
            rot = 4;
        }
        if (keyboard.left && !keyboard.right) {
            rot < 0 ? rot = 6 : (rot == 0 ? rot = 7 : rot = 5);
        } else if (keyboard.right && !keyboard.left) {
            rot < 0 ? rot = 2 : (rot == 0 ? rot = 1 : rot = 3);
        }
        if (rot < 0) {
            if (keyboard.touchy != 0) {
                rot = (keyboard.touchy < 0 ? 0 : 4);
            }
            if (keyboard.touchx != 0) {
                keyboard.touchx > 0 ? (rot < 0 ? rot = 2 : (rot == 0 ? rot = 1 : rot = 3)) : (rot < 0 ? rot = 6 : (rot == 0 ? rot = 7 : rot = 5));
            }
        }

        if (rot >= 0) {
            this.rotation = rot;
        }

        // collision
        if (!keyboard.shift) {
            var collisionVector = EntityCollision.arcToWalls(this.x, this.y);
            this.x += collisionVector.x * currentSpeed;
            this.y += collisionVector.y * currentSpeed;
        }

        //portal
        if (!keyboard.shift) {
            var portal = EntityCollision.carpet(this.x, this.y, "V");

            if (portal != null) {
                portalList.get(portal.details)["function"]();
                return;
            }
        }

        //damage
        if (!keyboard.shift) {
            var damage = EntityCollision.carpet(this.x, this.y, "D");

            if (damage != null) {
                this.damage();
            } else {
                this.damagecounter = 80;
            }
        }

        //regenrate
        if (!keyboard.shift) {
            var heizung = EntityCollision.carpet(this.x, this.y, "H");

            if (heizung != null) {
                this.regenerate();
            } else {
                this.regeneratecounter = 5;
            }
        }

        //entities collect
        if (!keyboard.shift) {
            var entity = EntityCollision.entitiesCollect(this.x, this.y);

            if (entity != null) {
                removeItemOnce(entities, entity);
                removeItemOnce(elements, entity);
            }
        }

        //entities interact
        if (!keyboard.shift) {
            var entity = EntityCollision.entitiesInteract(this.x, this.y);

            if (entity != null) {

            }
        }

        //enemies
        if (!keyboard.shift) {
            var enemy = EntityCollision.enemies(this.x, this.y);

            if (enemy != null) {
                enemy.follow();
            }
        }

        // mouse
        /*var vectorX = camera.offsetX + context.canvas.width / 2 - mouse.x;
        var vectorY = camera.offsetY + context.canvas.height / 2 - mouse.y;

        var length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

        if (length > 0) {
            vectorX /= length;
            vectorY /= length;

            this.angle = Math.atan2(vectorY, vectorX) + 90 * Math.PI / 180;
        }*/

        // foot

        if (keyboard.up || keyboard.down || keyboard.left || keyboard.right || keyboard.touchx > 0 || keyboard.touchy > 0) {
            this.footIncrementer += this.speed;
        }

        this.footPosition = Math.sin(this.footIncrementer * Math.PI / 180);
    };

    this.render = function() {

        EntityHelper.beginRotationOffset(this.x, this.y, this.angle);

        EntityDrawer.player(this.rotation);

        EntityHelper.endRotationOffset(this.x, this.y, this.angle);
    };

    this.reload = function() {

    }

    this.reloadTeleport = function(oldBlockSize) {
        this.x = (this.x / oldBlockSize * blockSize);
        this.y = (this.y / oldBlockSize * blockSize);
    }
}

var wallAt = function(x, y) {
    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];
        if (wall.x == x && wall.y == y && wall.type == "W" && wall.details != "i") {
            return true;
        }
    }
    return false;
}
var collWallAt = function(x, y) {
    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];
        if (wall.x == x && wall.y == y) {
            return true;
        }
    }
    return false;
}

var cornerCheck = function() {
    for (var i = 0; i < walls.length; i++) {
        walls[i].cornerCheck();
    }
}

var Wall = function(x, y, type, details) {
    this.render = 'box';
    this.type = type;
    this.details = details;
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;
    this.corners = { right: false, left: false, top: false, bottom: false };
    this.collCorners = { right: false, left: false, top: false, bottom: false };

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.cornerCheck = function() {
        if (this.type == "W") {
            this.corners.right = wallAt(this.x + blockSize, this.y);
            this.corners.left = wallAt(this.x - blockSize, this.y);
            this.corners.bottom = wallAt(this.x, this.y + blockSize);
            this.corners.top = wallAt(this.x, this.y - blockSize);
            this.collCorners.right = collWallAt(this.x + blockSize, this.y);
            this.collCorners.left = collWallAt(this.x - blockSize, this.y);
            this.collCorners.bottom = collWallAt(this.x, this.y + blockSize);
            this.collCorners.top = collWallAt(this.x, this.y - blockSize);
        } else if (this.type == "O") { // make it a 'full' wall
            this.collCorners.right = true;
            this.collCorners.left = true;
            this.collCorners.bottom = true;
            this.collCorners.top = true;
        }
    }

    this.render = function() {
        if (this.sleep) return;

        EntityDrawer.wall(this.x, this.y, this.type, this.details, this.corners);
    };

    this.reload = function() {
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
    }
};

var Entity = function(x, y, type, details) {
    this.render = 'box';
    this.type = type;
    this.details = details;
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.render = function() {
        if (this.sleep) return;

        EntityDrawer.entity(this.x, this.y, this.type, this.details);
    };

    this.reload = function() {
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
    }
};

var Enemy = function(x, y, type, details) {
    this.render = 'box';
    this.type = type;
    this.details = details;
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.render = function() {
        if (this.sleep) return;

        EntityDrawer.enemy(this.x, this.y, this.type, this.details);
    };

    this.follow = function() {
        this.x += 3; // todo follow player
        // todo wall collision
    }

    this.reload = function() {
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
    }
};

var Passage = function(x, y, type, details) {
    this.render = 'box';
    this.type = type;
    this.details = details;
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;
    this.corners = { positive: false, negative: false };

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.render = function() {
        if (this.sleep) return;

        EntityDrawer.wall(this.x, this.y, this.type, this.details, this.corners);
    };

    this.reload = function() {
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
    }
};

var Carpet = function(x, y, type, details) {
    this.render = 'box';
    this.type = type;
    this.details = details;
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.render = function() {
        if (this.sleep) return;

        EntityDrawer.carpet(this.x, this.y, this.type, this.details);
    };

    this.reload = function() {
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
    }
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

            for (var i = 0; i < elements.length; i++) {
                var entity = elements[i];
                var bounds = {};

                if (entity.render === 'entity') {
                    bounds.x = entity.x - arcSizeRadius;
                    bounds.y = entity.y - arcSizeRadius;
                    bounds.width = arcSizeRadius * 2;
                    bounds.height = arcSizeRadius * 2;

                } else if (entity.render === 'box') {
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
    this.spawn = null;

    this.wallPositions = [];
    this.carpetPositions = [];
    this.passagePositions = [];
    this.entityPositions = [];
    this.enemyPositions = [];
    this.playerPosition = { x: 0, y: 0 };

    this.selectMap = function(map) {
        this.map = map.split(/\r?\n/);
    }

    this.setSpawn = function(spawn = null) {
        this.spawn = spawn;
    }

    this.setZoom = function(zoom = 1) {
        zoomfactor = zoom;

        player.reloadTeleport(blockSize); // todo fix

        blockSize = 80 * zoomfactor;
        arcSizeRadius = 35 * zoomfactor;
        entityCollectRadius = 20 * zoomfactor;
        entityInteractRadius = 50 * zoomfactor;
        enemyFollowRadius = 400 * zoomfactor;
        playerOverlap = 20 * zoomfactor;

        PatternHelper.createAll();
        this.reloadMap();
    }

    this.generate = function() {
        this.wallPositions = [];
        this.carpetPositions = [];
        this.passagePositions = [];
        this.entityPositions = [];
        this.enemyPositions = [];
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
                    case 'S':
                    case 'O':
                        this.wallPositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
                        break;
                    case 'P':
                        if (this.spawn == null || this.spawn == row[x + 1]) {
                            this.playerPosition = { x: realX, y: y };
                        }
                        break;
                    case 't':
                    case 'T':
                    case 'H':
                    case 'V':
                    case 'D':
                    case 'C':
                        this.carpetPositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
                        break;
                    case 'w':
                        this.passagePositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
                        break;
                    case 'e':
                        this.entityPositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
                        break;
                    case 'E':
                        this.enemyPositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
                        break;
                }
            }
        };

        this.getPlayerPosition = function() {
            return this.playerPosition;
        };
        this.getWallPositions = function() {
            return this.wallPositions;
        };
        this.getCarpetPositions = function() {
            return this.carpetPositions;
        };
        this.getPassagePositions = function() {
            return this.passagePositions;
        };
        this.getEntityPositions = function() {
            return this.entityPositions;
        };
        this.getEnemyPositions = function() {
            return this.enemyPositions;
        };
    };

    this.reloadMap = function() {
        for (var y = 0; y < elements.length; y++) {
            var element = elements[y];
            element.reload();
        }
        cornerCheck();
    };

    this.loadMap = function(map, spawn = null, rotation = 4, load = false) {
        this.selectMap(map);
        this.setSpawn(spawn);
        this.generate();

        elements = [];
        entities = [];
        enemies = [];
        walls = [];
        carpets = [];

        for (var i = 0; i < this.getCarpetPositions().length; i++) {
            var carpetPosition = this.getCarpetPositions()[i];
            var carpet = new Carpet(carpetPosition.x, carpetPosition.y, carpetPosition.type, carpetPosition.details);
            elements.push(carpet);
            carpets.push(carpet);
        }

        for (var i = 0; i < this.getEntityPositions().length; i++) {
            var entityPosition = this.getEntityPositions()[i];
            var entity = new Entity(entityPosition.x, entityPosition.y, entityPosition.type, entityPosition.details);
            elements.push(entity);
            entities.push(entity);
        }

        for (var i = 0; i < this.getEnemyPositions().length; i++) {
            var enemyPosition = this.getEnemyPositions()[i];
            var enemy = new Enemy(enemyPosition.x, enemyPosition.y, enemyPosition.type, enemyPosition.details);
            elements.push(enemy);
            enemies.push(enemy);
        }

        for (var i = 0; i < this.getWallPositions().length; i++) {
            var wallPosition = this.getWallPositions()[i];
            var wall = new Wall(wallPosition.x, wallPosition.y, wallPosition.type, wallPosition.details);
            elements.push(wall);
            walls.push(wall);
        }

        cornerCheck();

        for (var i = 0; i < this.getPassagePositions().length; i++) {
            var passagePosition = this.getPassagePositions()[i];
            var passage = new Passage(passagePosition.x, passagePosition.y, passagePosition.type, passagePosition.details);
            elements.push(passage);
        }

        playerPosition = this.getPlayerPosition();
        player = new Player(playerPosition.x, playerPosition.y);

        player.rotation = rotation;

        elements.push(player);

        loaded = true;

        if (load) {
            player.startRotate();
            setTimeout(function() {
                player.endRotate();
            }, loadingtime * 1000);
        }

        camera = new Camera();
    };
}