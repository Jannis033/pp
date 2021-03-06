// [copied] moves the camera -> results in a central position of the player
var EntityHelper = {
    beginRotationOffset: function(x, y, angle) {
        mainContext.translate(-(-x + mainContext.canvas.width / 2), -(-y + mainContext.canvas.height / 2));
        mainContext.translate(mainContext.canvas.width / 2, mainContext.canvas.height / 2);

        mainContext.rotate(angle);
    },

    endRotationOffset: function(x, y, angle) {
        mainContext.rotate(-angle);

        mainContext.translate(-mainContext.canvas.width / 2, -mainContext.canvas.height / 2);
        mainContext.translate(+(-x + mainContext.canvas.width / 2), +(-y + mainContext.canvas.height / 2));
    }
};

// draw elements every tick
var EntityDrawer = {
    player: function(rotation) {
        mainContext.beginPath();
        mainContext.rect(-blockSize / 2, -blockSize / 2 - playerOverlap, blockSize, blockSize + playerOverlap);
        mainContext.translate(-blockSize / 2, -blockSize / 2 - playerOverlap);
        switch (rotation) {
            case 1:
                mainContext.fillStyle = patterns.peters.peter1;
                break;
            case 2:
                mainContext.fillStyle = patterns.peters.peter2;
                break;
            case 3:
                mainContext.fillStyle = patterns.peters.peter3;
                break;
            case 4:
                /*if (tmpplayerrotation == 20) {
                    tmpplayerrotation = 0;
                }
                if (tmpplayerrotation < 5) {
                    mainContext.fillStyle = patterns.players.player5;
                } else if (tmpplayerrotation < 10) {
                    mainContext.fillStyle = patterns.players.player4;
                } else if (tmpplayerrotation < 15) {
                    mainContext.fillStyle = patterns.players.player3;
                } else {
                    mainContext.fillStyle = patterns.players.player4;
                }
                tmpplayerrotation += 1;*/
                if (rotateplayer) {
                    if (tmpplayerrotation == 40) {
                        tmpplayerrotation = 0;
                    }

                    if (tmpplayerrotation < 5) {
                        mainContext.fillStyle = patterns.players.player0;
                    } else if (tmpplayerrotation < 10) {
                        mainContext.fillStyle = patterns.players.player1;
                    } else if (tmpplayerrotation < 15) {
                        mainContext.fillStyle = patterns.players.player2;
                    } else if (tmpplayerrotation < 20) {
                        mainContext.fillStyle = patterns.players.player3;
                    } else if (tmpplayerrotation < 25) {
                        mainContext.fillStyle = patterns.players.player4;
                    } else if (tmpplayerrotation < 30) {
                        mainContext.fillStyle = patterns.players.player5;
                    } else if (tmpplayerrotation < 35) {
                        mainContext.fillStyle = patterns.players.player6;
                    } else {
                        mainContext.fillStyle = patterns.players.player7;
                    }
                    tmpplayerrotation += 1;
                } else {
                    mainContext.fillStyle = patterns.peters.peter4;
                }
                break;
            case 5:
                mainContext.fillStyle = patterns.peters.peter5;
                break;
            case 6:
                mainContext.fillStyle = patterns.peters.peter6;
                break;
            case 7:
                mainContext.fillStyle = patterns.peters.peter7;
                break;
            default:
                mainContext.fillStyle = patterns.peters.peter0;
                break;

        }
        mainContext.fill();
        if (rotateplayer) {
            mainContext.font = '42px sans-serif';
            mainContext.fillStyle = "#000";
            mainContext.fillText('loading...', -35, 140);
        }
        mainContext.translate(blockSize / 2, blockSize / 2 + playerOverlap);
    },
    wall: function(x, y, type, details, corners) {
        var rotation = 0;

        switch (type) {
            case 'B':
                mainContext.beginPath();
                mainContext.fillStyle = patterns.obstacles.barrier;
                mainContext.rect(x, y, blockSize, blockSize);
                mainContext.fill();
                break;
            case 'W':
                mainContext.beginPath();
                mainContext.fillStyle = config.colors.wall;
                switch (details) {
                    case 'f':
                        mainContext.rect(x, y, blockSize, blockSize);
                    case 'i':
                        mainContext.fillStyle = "#00000000";
                        mainContext.rect(x, y, blockSize, blockSize);
                        break;
                    case 'l':
                        mainContext.fillStyle = "#00000000";
                        break;
                    case 'g':
                        mainContext.fillStyle = config.colors.window;
                        if (corners.left && corners.right && corners.top && corners.bottom) {

                        } else if (corners.left && corners.right && corners.top) {

                        } else if (corners.left && corners.right && corners.bottom) {

                        } else if (corners.top && corners.right && corners.bottom) {

                        } else if (corners.top && corners.left && corners.bottom) {

                        } else if (corners.left && corners.top) {

                        } else if (corners.right && corners.top) {

                        } else if (corners.left && corners.bottom) {

                        } else if (corners.right && corners.bottom) {

                        } else if (corners.left && corners.right) {
                            mainContext.rect(x, y + blockSize / 4 + 5, blockSize, blockSize / 8);
                            mainContext.rect(x, y + blockSize / 8 * 5 - 5, blockSize, blockSize / 8);
                        } else if (corners.top && corners.bottom) {
                            mainContext.rect(x + blockSize / 4 + 5, y, blockSize / 8, blockSize);
                            mainContext.rect(x + blockSize / 8 * 5 - 5, y, blockSize / 8, blockSize);
                        } else if (corners.top) {
                            mainContext.rect(x + blockSize / 4 + 5, y, blockSize / 8, blockSize / 4 * 3);
                            mainContext.rect(x + blockSize / 8 * 5 - 5, y, blockSize / 8, blockSize / 4 * 3);
                            mainContext.rect(x + blockSize / 4, y + blockSize / 8 * 5, blockSize / 2, blockSize / 8);
                        } else if (corners.bottom) {
                            mainContext.rect(x + blockSize / 4 + 5, y + blockSize / 4, blockSize / 8, blockSize / 4 * 3);
                            mainContext.rect(x + blockSize / 8 * 5 - 5, y + blockSize / 4, blockSize / 8, blockSize / 4 * 3);
                            mainContext.rect(x + blockSize / 4, y + blockSize / 4, blockSize / 2, blockSize / 8);
                        } else if (corners.left) {
                            mainContext.rect(x, y + blockSize / 4 + 5, blockSize / 4 * 3, blockSize / 8);
                            mainContext.rect(x, y + blockSize / 8 * 5 - 5, blockSize / 4 * 3, blockSize / 8);
                            mainContext.rect(x + blockSize / 8 * 5, y + blockSize / 4, blockSize / 8, blockSize / 2);
                        } else if (corners.right) {
                            mainContext.rect(x + blockSize / 4, y + blockSize / 4 + 5, blockSize / 4 * 3, blockSize / 8);
                            mainContext.rect(x + blockSize / 4, y + blockSize / 8 * 5 - 5, blockSize / 4 * 3, blockSize / 8);
                            mainContext.rect(x + blockSize / 4, y + blockSize / 4, blockSize / 8, blockSize / 2);
                        }
                        break;
                    default:
                        mainContext.rect(x + blockSize / 4, y + blockSize / 4, blockSize / 2, blockSize / 2);
                        if (corners.right) {
                            mainContext.rect(x + blockSize / 4 * 3, y + blockSize / 4, blockSize / 4, blockSize / 2);
                        }
                        if (corners.left) {
                            mainContext.rect(x, y + blockSize / 4, blockSize / 4, blockSize / 2);
                        }
                        if (corners.bottom) {
                            mainContext.rect(x + blockSize / 4, y + blockSize / 4 * 3, blockSize / 2, blockSize / 4);
                        }
                        if (corners.top) {
                            mainContext.rect(x + blockSize / 4, y, blockSize / 2, blockSize / 4);
                        }
                        break;
                }
                mainContext.fill();
                break;
            case 'O':
                switch (details) {
                    case 't':
                        mainContext.fillStyle = patterns.obstacles.table;
                        break;
                    case 'T':
                        mainContext.fillStyle = patterns.obstacles.table;
                        rotation = 90;
                        break;
                }
                mainContext.save();
                mainContext.translate(x + blockSize / 2, y + blockSize / 2);
                mainContext.rotate(rotation / 180 * Math.PI);
                mainContext.translate(-blockSize / 2, -blockSize / 2);
                mainContext.beginPath();
                mainContext.rect(0, 0, blockSize, blockSize);
                mainContext.fill();
                mainContext.restore();
                break;
        }
    },
    carpet: function(x, y, type, details) {
        var rotation = 0;

        switch (type) {
            case 't':
                switch (details) {
                    case 't':
                        mainContext.fillStyle = patterns.carpets.stairsX;
                        break;
                    case 'T':
                        mainContext.fillStyle = patterns.carpets.stairsY;
                        break;
                    case 'L':
                        mainContext.fillStyle = patterns.carpets.logo;
                        break;
                }
                break;
            case 'H':
                switch (details) {
                    case 'a':
                        mainContext.fillStyle = patterns.carpets.heizungA;
                        break;
                    case 'm':
                        mainContext.fillStyle = patterns.carpets.heizungM;
                        break;
                    case 'e':
                        mainContext.fillStyle = patterns.carpets.heizungE;
                        break;
                }
                break;
            case 'v':
            case 'V':
                switch (details) {
                    case '3':
                        mainContext.fillStyle = patterns.carpets.pissoir;
                        rotation = 90;
                        break;
                    default:
                        mainContext.fillStyle = patterns.carpets.portal;
                        break;
                }
                break;
            case 'D':
                mainContext.fillStyle = '#0088ff11';
                break;
            case 'C':
                switch (details) {
                    case 't':
                        mainContext.fillStyle = patterns.carpets.table;
                        break;
                    case 'T':
                        mainContext.fillStyle = patterns.carpets.table;
                        rotation = 90;
                        break;
                    case 'p':
                        mainContext.fillStyle = patterns.carpets.pissoir;
                        rotation = 90;
                        break;
                    case 'P':
                        mainContext.fillStyle = patterns.carpets.pissoir;
                        break;
                    case 'c':
                        mainContext.fillStyle = patterns.carpets.coffee;
                        break;
                }
                break;
        }

        mainContext.save();
        mainContext.translate(x + blockSize / 2, y + blockSize / 2);
        mainContext.rotate(rotation / 180 * Math.PI);
        mainContext.translate(-blockSize / 2, -blockSize / 2);
        mainContext.beginPath();
        mainContext.rect(0, 0, blockSize, blockSize);
        mainContext.fill();
        mainContext.restore();
    },
    entity: function(x, y, type, details) {
        mainContext.beginPath();
        mainContext.save();
        if (entityList.get(details).overlap) {
            mainContext.translate(x, y - playerOverlap);
            mainContext.rect(0, 0, blockSize, blockSize + playerOverlap);
        } else {
            if (type == "e" && details == "7") {
                mainContext.translate(x - blockSize / 2, y - blockSize / 2);
                mainContext.scale(2, 2);
                mainContext.rect(0, 0, blockSize * 2, blockSize * 2);
            } else {
                mainContext.rect(x, y, blockSize, blockSize);
            }
        }
        if (type == "e") { // e
            if (entityList.get(details).mode.active) {
                mainContext.fillStyle = patterns["entities"][entityList.get(details).texture1];
            } else {
                mainContext.fillStyle = patterns["entities"][entityList.get(details).texture];
            }
        } else { // c
            mainContext.fillStyle = patterns["items"][entityList.get(details).texture];
        }
        mainContext.fill();
        mainContext.restore();
    },
    enemy: function(x, y, type, details, entity) {
        switch (type) {
            case 'E':
                if (!entity.peaceful()) {
                    var polygon = EntityCollision.getViewareaPolygon(entity);
                    // the polygon
                    mainContext.beginPath();
                    mainContext.moveTo(polygon[0].x, polygon[0].y);
                    for (i = 1; i < polygon.length; i++) {
                        mainContext.lineTo(polygon[i].x, polygon[i].y);
                    }
                    mainContext.closePath();

                    // the outline
                    //mainContext.lineWidth = 10;
                    //mainContext.strokeStyle = '#666666';
                    //mainContext.stroke();

                    // the fill color
                    if (entity.following) {
                        mainContext.fillStyle = "#FF220044";
                    } else {
                        mainContext.fillStyle = "#FFCC0044";
                    }
                    mainContext.fill();
                }

                if (!entityList.get("E" + details).rotate) {
                    mainContext.fillStyle = patterns["entities"][entityList.get("E" + details).texture];
                } else {
                    /*if (entity.rotation > 45 && entity.rotation < 135) {
                        mainContext.fillStyle = patterns["entities"][entityList.get("E" + details).texture + "1"];
                    } else if (entity.rotation >= 135 && entity.rotation <= 225) {
                        mainContext.fillStyle = patterns["entities"][entityList.get("E" + details).texture + "2"];
                    } else if (entity.rotation > 225 && entity.rotation < 315) {
                        mainContext.fillStyle = patterns["entities"][entityList.get("E" + details).texture + "3"];
                    } else {
                        mainContext.fillStyle = patterns["entities"][entityList.get("E" + details).texture];
                    }*/
                    if (entity.rotation > 0 && entity.rotation < 180) {
                        mainContext.fillStyle = patterns["entities"][entityList.get("E" + details).texture + "1"];
                    } else {
                        mainContext.fillStyle = patterns["entities"][entityList.get("E" + details).texture];
                    }
                }

                mainContext.translate(x, y - playerOverlap);
                mainContext.fillRect(0, 0, blockSize, blockSize + playerOverlap);
                if (!entity.peaceful()) {
                    mainContext.beginPath();
                    mainContext.arc(blockSize / 2, blockSize / 2 + playerOverlap, enemyFollowRadiusRotate + blockSize / 2, 0, 2 * Math.PI);
                    if (entity.rotating) {
                        mainContext.strokeStyle = "#FF220066";
                    } else {
                        mainContext.strokeStyle = "#FFCC0044";
                    }
                    mainContext.stroke();
                }
                mainContext.translate(-x, -y + playerOverlap);
                break;
        }

        //mainContext.restore();
    }
};

var Player = function(x, y) {
    this.renderType = 'entity';
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.angle = 0;
    this.rotation = 4;
    this.tmprotation = 0;
    this.footPosition = 0;
    this.speed = config.entities.player.speed;
    this.lsdspeed = config.entities.player.lsdspeed;
    this.damagecounter = config.entities.player.damagecounter;
    this.damagevalue = config.entities.player.damagevalue;
    this.damagevalueenemy = config.entities.player.damagevalueenemy;
    this.regeneratecounter = config.entities.player.regeneratecounter;
    this.regeneratevalue = config.entities.player.regeneratevalue;
    this.health = config.entities.player.health;
    this.maxhealth = config.entities.player.health;
    this.locked = false;

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

    this.inventory = {
        items: {},

        updateInventory: function(item) {
            document.getElementById("inv_" + item).innerHTML = (this.countInventoryAll(item) == -2 ? '' : this.countInventory(item));
            if (this.countInventoryAll(item) != 0) {
                document.getElementById("inv_" + item).parentElement.classList.add("show");
            } else {
                document.getElementById("inv_" + item).parentElement.classList.remove("show");
            }
        },

        hasInventory: function(item) {
            return this.countInventoryAll(item) != 0;
        },

        setInventory: function(item, count) {
            this.items[item] = count;
            this.updateInventory(item);
        },

        setInventorySingle: function(item) {
            this.items[item] = -2;
            this.updateInventory(item);
        },

        setInventoryTask: function(item) {
            if (!this.hasInventory(item)) {
                this.setInventory(item, -1);
                this.updateInventory(item);
            }
        },

        countInventory: function(item) {
            if (this.items.hasOwnProperty(item)) {
                return (this.items[item] == -2 ? 1 : (this.items[item] < 0 ? 0 : this.items[item]));
            } else {
                return 0;
            }
        },

        countInventoryAll: function(item) {
            if (this.items.hasOwnProperty(item)) {
                return this.items[item];
            } else {
                return 0;
            }
        },

        addInventory: function(item, count = 1) {
            if (this.items.hasOwnProperty(item)) {
                if (this.items[item] == -2) this.items[item] = count;
                if (this.items[item] < 0) this.items[item] = 0;
                this.items[item] = this.items[item] + count;
                if (this.items[item] < 0) this.items[item] = 0;
            } else {
                this.items[item] = count;
            }
            this.updateInventory(item);
        },

        removeInventory: function(item, count = 1) {
            if (this.items.hasOwnProperty(item)) {
                this.items[item] = this.items[item] - count;
                if (this.items[item] < 0) this.items[item] = 0;
            } else {
                this.items[item] = 0;
            }
            this.updateInventory(item);
        },

        clearInventory: function(item) {
            this.items[item] = 0;
            this.updateInventory(item);
        }
    };

    this.die = function() {
        document.getElementById("deathscreen").classList.add("show");
        this.health = -1;
    }

    this.respawn = function() {
        document.getElementById("deathscreen").classList.remove("show");
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
        this.damagecounter = config.entities.player.damagecounter;
        this.regeneratecounter = config.entities.player.regeneratecounter;
        this.setHealth(config.entities.player.health);
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
            if (this.damagecounter > config.entities.player.damagecounter) {
                getSound("damage").loop(false).volume(100).play();
                this.setHealth(this.health - this.damagevalue);
                this.damagecounter = 0;
            }
            this.damagecounter++;
        }
    }

    this.regenerate = function() {
        if (this.regeneratecounter > config.entities.player.regeneratecounter) {
            this.setHealth(this.health + this.regeneratevalue);
            this.regeneratecounter = 0;
        }
        this.regeneratecounter++;
    }

    this.update = function() {
        if (this.locked) return;

        var keysCount = 0;
        keysCount += keyboard.up ? 1 : 0;
        keysCount += keyboard.down ? 1 : 0;
        keysCount += keyboard.left ? 1 : 0;
        keysCount += keyboard.right ? 1 : 0;
        keysCount += keyboard.touchx != 0 ? 1 : 0;
        keysCount += keyboard.touchy != 0 ? 1 : 0;

        var currentSpeed = (keyboard.ctrl ? this.lsdspeed : this.speed) * zoomfactor;

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
            var collisionVectorWalls = EntityCollision.arcToWalls(this.x, this.y);
            this.x += collisionVectorWalls.x * currentSpeed;
            this.y += collisionVectorWalls.y * currentSpeed;

            var collisionVectorEntites = EntityCollision.arcToEntities(this.x, this.y);
            this.x += collisionVectorEntites.x * currentSpeed;
            this.y += collisionVectorEntites.y * currentSpeed;
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
                this.damagecounter = config.entities.player.damagecounter;
            }
        }

        //regenrate
        if (!keyboard.shift) {
            var heizung = EntityCollision.carpet(this.x, this.y, "H");

            if (heizung != null) {
                this.regenerate();
            } else {
                this.regeneratecounter = config.entities.player.regeneratecounter;
            }
        }

        //entities collect
        if (!keyboard.shift) {
            var entity = EntityCollision.entitiesCollect(this.x, this.y);

            if (entity != null) {
                removeItemOnce(entities, entity);
                removeItemOnce(elements, entity);
                entityList.get(entity.details).collect(entity);
            }
        }

        var tmpHideEntityText = false;

        //entities interact
        if (!keyboard.shift) {
            var entity = EntityCollision.entitiesInteract(this.x, this.y);

            if (entity != null) {
                if (keyboard.space || keyboard.touch) {
                    entityList.get(entity.details).interact(entity);
                    document.getElementById("interactInfo").classList.remove("show");
                } else if (entityList.get(entity.details).mode.give && !entityList.get(entity.details).mode.end) {
                    entityList.get(entity.details).interact(entity, true);
                    document.getElementById("interactInfo").classList.remove("show");
                } else if (!entityList.get(entity.details).mode.end) {
                    if (!document.getElementById("entityText").classList.contains("show")) {
                        document.getElementById("interactInfo").classList.add("show");
                    }
                }
            } else {
                document.getElementById("interactInfo").classList.remove("show");
                tmpHideEntityText = true;
            }
        }

        //enemies
        if (!keyboard.shift) {
            var tmpenall = EntityCollision.enemies(this.x, this.y, true);

            for (i = 0; i < tmpenall.length; i++) {
                var enemy = tmpenall[i];

                if (enemy != null) {
                    if (!enemy.peaceful()) {
                        enemy.rotate();
                    }
                }
            }
        }

        if (!keyboard.shift) {
            var tmpen = EntityCollision.enemies(this.x, this.y);

            for (i = 0; i < tmpen.length; i++) {
                var enemy = tmpen[i];

                if (enemy != null) {
                    if (!enemy.peaceful()) {
                        this.setHealth(this.health - this.damagevalueenemy);
                        enemy.follow();
                        tmpHideEntityText = false;
                    }
                }
            }
        }

        if (tmpHideEntityText) {
            hideEntityText();
        }

        if (!keyboard.shift) {
            if (EntityCollision.enemieInside(this.x, this.y)) {
                this.die();
            }
        }

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

    this.reloadTeleport = function(newBlockSize) {
        this.x = (this.x / blockSize * newBlockSize);
        this.y = (this.y / blockSize * newBlockSize);
    }
}

var Wall = function(x, y, type, details) {
    this.renderType = 'box';
    this.type = type;
    this.details = details;
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.sleep = true;
    this.hidden = false;
    this.corners = { right: false, left: false, top: false, bottom: false };
    this.solidCorners = { right: false, left: false, top: false, bottom: false };
    this.collCorners = { right: false, left: false, top: false, bottom: false };
    this.collCornersEntity = { right: false, left: false, top: false, bottom: false };

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.cornerCheck = function() {
        if (this.type == "W" || this.type == "B") {
            this.corners.right = EntityCollision.wallAt(this.x + blockSize, this.y);
            this.corners.left = EntityCollision.wallAt(this.x - blockSize, this.y);
            this.corners.bottom = EntityCollision.wallAt(this.x, this.y + blockSize);
            this.corners.top = EntityCollision.wallAt(this.x, this.y - blockSize);
            this.solidCorners.right = EntityCollision.solidWallAt(this.x + blockSize, this.y);
            this.solidCorners.left = EntityCollision.solidWallAt(this.x - blockSize, this.y);
            this.solidCorners.bottom = EntityCollision.solidWallAt(this.x, this.y + blockSize);
            this.solidCorners.top = EntityCollision.solidWallAt(this.x, this.y - blockSize);
            this.collCorners.right = EntityCollision.collWallAt(this.x + blockSize, this.y);
            this.collCorners.left = EntityCollision.collWallAt(this.x - blockSize, this.y);
            this.collCorners.bottom = EntityCollision.collWallAt(this.x, this.y + blockSize);
            this.collCorners.top = EntityCollision.collWallAt(this.x, this.y - blockSize);
            this.collCornersEntity.right = EntityCollision.collWallEntityAt(this.x + blockSize, this.y);
            this.collCornersEntity.left = EntityCollision.collWallEntityAt(this.x - blockSize, this.y);
            this.collCornersEntity.bottom = EntityCollision.collWallEntityAt(this.x, this.y + blockSize);
            this.collCornersEntity.top = EntityCollision.collWallEntityAt(this.x, this.y - blockSize);
        } else if (this.type == "O") { // make it a 'full' wall
            this.collCorners.right = true;
            this.collCorners.left = true;
            this.collCorners.bottom = true;
            this.collCorners.top = true;
        }
    }

    this.render = function() {
        if (this.sleep || this.hidden) return;

        EntityDrawer.wall(this.x, this.y, this.type, this.details, this.corners);
    };

    this.reload = function() {
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
    }
};

var Entity = function(x, y, type, details) {
    this.renderType = 'box';
    this.type = type;
    this.details = details;
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.speed = config.entities.entity.speed;
    this.sleep = true;
    this.movePos = [];
    this.collision = (type == "e" && config.entities.entity.collision);

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.render = function() {
        if (this.sleep) return;

        if (this.movePos.length > 0) {
            if (this.movePos[0].hasOwnProperty("pos")) {
                var pos = this.movePos[0].pos;
                var posVector = EntityCollision.posVector({ x: this.x, y: this.y }, pos);
                this.x += posVector.x * this.speed * zoomfactor;
                this.y += posVector.y * this.speed * zoomfactor;
                this.wallCollision();
                if (Math.abs(pos.x - this.x) < 5 && Math.abs(pos.y - this.y)) {
                    this.movePos.shift();
                }
            }
        }

        EntityDrawer.entity(this.x, this.y, this.type, this.details);
    };

    this.moveAbs = function(pos) {
        this.movePos.push({ pos: pos });
    }

    this.moveRel = function(x, y) {
        this.movePos.push({
            pos: { x: (this.x + x * blockSize), y: (this.y + y * blockSize) }
        });
    }

    this.wallCollision = function() {
        var collisionVector = EntityCollision.arcToWalls(this.x + blockSize / 2, this.y + blockSize / 2);
        this.x += collisionVector.x * this.speed * zoomfactor;
        this.y += collisionVector.y * this.speed * zoomfactor;
    }

    this.reload = function() {
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
    }
};

var Enemy = function(x, y, type, details) {
    this.renderType = 'box';
    this.type = type;
    this.details = details;
    this.realX = x;
    this.realY = y;
    this.x = x * blockSize;
    this.y = y * blockSize;
    this.speed = config.entities.enemy.speed;
    this.sleep = true;
    this.viewAngle = config.entities.enemy.viewangle;
    this.rotation = entityList.get("E" + details).rotation;
    this.following = false;
    this.rotating = false;
    this.movePos = [];
    this.collision = config.entities.enemy.collision;

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.render = function() {
        if (this.sleep) return;

        if (this.movePos.length > 0) {
            if (this.movePos[0].hasOwnProperty("pos")) {
                var pos = this.movePos[0].pos;
                var posVector = EntityCollision.posVector({ x: this.x, y: this.y }, pos);
                this.x += posVector.x * this.speed * zoomfactor;
                this.y += posVector.y * this.speed * zoomfactor;
                this.wallCollision();
                if (Math.abs(pos.x - this.x) < 5 && Math.abs(pos.y - this.y)) {
                    this.movePos.shift();
                }
            }
        }

        EntityDrawer.enemy(this.x, this.y, this.type, this.details, this);
        this.following = false;
        this.rotating = false;
    };

    this.peaceful = function() {
        if (this.details == "1" && player.inventory.countInventory("desi") >= 5) return true;
        return false;
    }

    this.follow = function() {
        var playerVector = EntityCollision.playerVector(this.x + blockSize / 2, this.y + blockSize / 2);
        this.x += playerVector.x * this.speed * zoomfactor;
        this.y += playerVector.y * this.speed * zoomfactor;
        this.wallCollision();
        this.rotate();
        entityList.get("E" + this.details).follow(this);
        this.following = true;
    }

    this.rotate = function() {
        var playerVector = EntityCollision.playerVector(this.x + blockSize / 2, this.y + blockSize / 2);
        //degrees = (degrees + 360) % 360;
        this.rotation = (Math.atan2(playerVector.x, playerVector.y) / Math.PI * 180 + 360) % 360;
        this.rotating = true;
    }

    this.moveAbs = function(pos) {
        this.movePos.push({ pos: pos });
    }

    this.moveRel = function(x, y) {
        this.movePos.push({
            pos: { x: (this.x + x * blockSize), y: (this.y + y * blockSize) }
        });
    }

    this.wallCollision = function() {
        var collisionVector = EntityCollision.arcToWallsEntity(this.x + blockSize / 2, this.y + blockSize / 2);
        this.x += collisionVector.x * this.speed * zoomfactor;
        this.y += collisionVector.y * this.speed * zoomfactor;
    }

    this.reload = function() {
        this.x = this.realX * blockSize;
        this.y = this.realY * blockSize;
    }
};

var Passage = function(x, y, type, details) {
    this.renderType = 'box';
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
    this.renderType = 'box';
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
        if (frames >= 10) {
            frames = 0;

            var screen = { x: player.x - this.offsetX - mainContext.canvas.width / 2 - blockSize * 5, y: player.y - this.offsetY - mainContext.canvas.height / 2 - blockSize * 5, width: mainContext.canvas.width + blockSize * 8, height: mainContext.canvas.height + blockSize * 8 };

            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                var bounds = {};

                if (element.renderType === 'entity') {
                    bounds.x = element.x - arcSizeRadius;
                    bounds.y = element.y - arcSizeRadius;
                    bounds.width = arcSizeRadius * 2 + blockSize;
                    bounds.height = arcSizeRadius * 2 + blockSize;
                } else if (element.renderType === 'box') {
                    bounds.x = element.x;
                    bounds.y = element.y;
                    bounds.width = blockSize;
                    bounds.height = blockSize;
                }

                element.sleep = !this.rectangleIntersection(bounds, screen);
            }
        }
    };

    this.resize = function() {
        // resize
    };

    this.preRender = function() {
        var targetX = -player.x + mainContext.canvas.width / 2;
        var targetY = -player.y + mainContext.canvas.height / 2;

        var vectorX = targetX - this.x;
        var vectorY = targetY - this.y;

        this.offsetX = this.x - targetX;
        this.offsetY = this.y - targetY;

        this.x += vectorX / 10;
        this.y += vectorY / 10;

        mainContext.save();
        mainContext.translate(this.x, this.y);
    };

    this.postRender = function() {
        mainContext.restore();
    };

};

var MapProcessor = function() {
    this.map = null;
    this.spawn = null;

    this.mapName = null;
    this.mapsSave = new Map();

    this.wallPositions = [];
    this.carpetPositions = [];
    this.passagePositions = [];
    this.entityPositions = [];
    this.enemyPositions = [];
    this.playerPosition = { x: 0, y: 0 };

    this.selectMap = function(map, mapName) {
        this.mapName = mapName;
        this.map = map.split(/\r?\n/);
    }

    this.setSpawn = function(spawn = null) {
        this.spawn = spawn;
    }

    this.setZoom = function(zoom = 1) {
        zoomfactor = zoom;

        player.reloadTeleport(config.dimensions.blockSize * zoomfactor); // todo fix

        blockSize = config.dimensions.blockSize * zoomfactor;
        playerOverlap = config.dimensions.playerOverlap * zoomfactor;

        arcSizeRadius = config.collision.arcSizeRadius * zoomfactor;
        arcSizeRadiusEntity = config.collision.arcSizeRadiusEntity * zoomfactor;
        entityCollectRadius = config.collision.entityCollectRadius * zoomfactor;
        entityInteractRadius = config.collision.entityInteractRadius * zoomfactor;
        enemyFollowRadius = config.collision.enemyFollowRadius * zoomfactor;
        enemyFollowRadiusRotate = config.collision.enemyFollowRadiusRotate * zoomfactor;

        //patternHelper.createAll(); // todo not load files again
        this.reloadMap();
    }

    this.generateSpawn = function() {
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
                    case 'P':
                        if ((this.spawn == null && row[x + 1] == " ") || this.spawn == row[x + 1]) {
                            this.playerPosition = { x: realX + 0.5, y: y + 0.5 };
                        }
                        break;
                }
            }
        };
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
                    case 'B':
                    case 'S':
                    case 'O':
                        this.wallPositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
                        break;
                    case 't':
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
                    case 'c':
                        this.entityPositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
                        break;
                    case 'E':
                        this.enemyPositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
                        break;
                }
            }
        };
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

    this.reloadMap = function() {
        for (var y = 0; y < elements.length; y++) {
            var element = elements[y];
            element.reload();
        }
        EntityCollision.cornerCheck();
    };

    this.saveMap = function() {
        if (this.mapName == null || this.map == null) return;
        var tmpElements = elements;
        removeItemAll(tmpElements, player);
        this.mapsSave.set(this.mapName, { elements: tmpElements, entities: entities, enemies: enemies, walls: walls, carpets: carpets });
    }

    this.loadSavedMap = function(rotation = 4, load = false) {
        if (this.mapsSave.has(this.mapName)) {
            var m = this.mapsSave.get(this.mapName);
            elements = m.elements;
            entities = m.entities;
            enemies = m.enemies;
            walls = m.walls;
            carpets = m.carpets;

            this.generateSpawn();

            playerPosition = this.getPlayerPosition();

            if (player == null) {
                player = new Player(playerPosition.x, playerPosition.y);
            } else {
                player.teleport(playerPosition.x, playerPosition.y);
            }

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
        }
    }

    this.loadMap = function(map, mapName, spawn = null, rotation = 4, reset = false, load = false) {
        this.saveMap();
        this.selectMap(map, mapName);
        this.setSpawn(spawn);

        if (this.mapsSave.has(mapName) && !reset) {
            var m = this.mapsSave.get(mapName);
            elements = m.elements;
            entities = m.entities;
            enemies = m.enemies;
            walls = m.walls;
            carpets = m.carpets;
        } else {
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

            for (var i = 0; i < this.getWallPositions().length; i++) {
                var wallPosition = this.getWallPositions()[i];
                var wall = new Wall(wallPosition.x, wallPosition.y, wallPosition.type, wallPosition.details);
                elements.push(wall);
                walls.push(wall);
            }

            EntityCollision.cornerCheck();

            for (var i = 0; i < this.getEnemyPositions().length; i++) {
                var enemyPosition = this.getEnemyPositions()[i];
                var enemy = new Enemy(enemyPosition.x, enemyPosition.y, enemyPosition.type, enemyPosition.details);
                elements.push(enemy);
                enemies.push(enemy);
            }

            for (var i = 0; i < this.getPassagePositions().length; i++) {
                var passagePosition = this.getPassagePositions()[i];
                var passage = new Passage(passagePosition.x, passagePosition.y, passagePosition.type, passagePosition.details);
                elements.push(passage);
            }
        }
        this.generateSpawn();

        playerPosition = this.getPlayerPosition();

        if (player == null) {
            player = new Player(playerPosition.x, playerPosition.y);
        } else {
            player.teleport(playerPosition.x, playerPosition.y);
        }

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
    }
}