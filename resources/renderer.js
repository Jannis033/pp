// [copied] moves the camera -> results in a central position of the player
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

// draw elements every tick
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
        var rotation = 0;

        switch (type) {
            case 'W':
                context.beginPath();
                context.fillStyle = colors.wall;
                switch (details) {
                    case 'i':
                        context.fillStyle = "#00000000";
                        context.rect(x, y, blockSize, blockSize);
                        break;
                    case 'g':
                        context.fillStyle = colors.window;
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
                            context.rect(x, y + blockSize / 4 + 5, blockSize, blockSize / 8);
                            context.rect(x, y + blockSize / 8 * 5 - 5, blockSize, blockSize / 8);
                        } else if (corners.top && corners.bottom) {
                            context.rect(x + blockSize / 4 + 5, y, blockSize / 8, blockSize);
                            context.rect(x + blockSize / 8 * 5 - 5, y, blockSize / 8, blockSize);
                        } else if (corners.top) {
                            context.rect(x + blockSize / 4 + 5, y, blockSize / 8, blockSize / 4 * 3);
                            context.rect(x + blockSize / 8 * 5 - 5, y, blockSize / 8, blockSize / 4 * 3);
                            context.rect(x + blockSize / 4, y + blockSize / 8 * 5, blockSize / 2, blockSize / 8);
                        } else if (corners.bottom) {
                            context.rect(x + blockSize / 4 + 5, y + blockSize / 4, blockSize / 8, blockSize / 4 * 3);
                            context.rect(x + blockSize / 8 * 5 - 5, y + blockSize / 4, blockSize / 8, blockSize / 4 * 3);
                            context.rect(x + blockSize / 4, y + blockSize / 4, blockSize / 2, blockSize / 8);
                        } else if (corners.left) {
                            context.rect(x, y + blockSize / 4 + 5, blockSize / 4 * 3, blockSize / 8);
                            context.rect(x, y + blockSize / 8 * 5 - 5, blockSize / 4 * 3, blockSize / 8);
                            context.rect(x + blockSize / 8 * 5, y + blockSize / 4, blockSize / 8, blockSize / 2);
                        } else if (corners.right) {
                            context.rect(x + blockSize / 4, y + blockSize / 4 + 5, blockSize / 4 * 3, blockSize / 8);
                            context.rect(x + blockSize / 4, y + blockSize / 8 * 5 - 5, blockSize / 4 * 3, blockSize / 8);
                            context.rect(x + blockSize / 4, y + blockSize / 4, blockSize / 8, blockSize / 2);
                        }
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
                context.fill();
                break;
            case 'O':
                switch (details) {
                    case 't':
                        context.fillStyle = patterns.tisch2;
                        break;
                    case 'T':
                        context.fillStyle = patterns.tisch2;
                        rotation = 90;
                        break;
                }
                context.save();
                context.translate(x + blockSize / 2, y + blockSize / 2);
                context.rotate(rotation / 180 * Math.PI);
                context.translate(-blockSize / 2, -blockSize / 2);
                context.beginPath();
                context.rect(0, 0, blockSize, blockSize);
                context.fill();
                context.restore();
                break;
        }
    },
    carpet: function(x, y, type, details) {
        var rotation = 0;

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
                    case 'T':
                        context.fillStyle = patterns.tisch2;
                        rotation = 90;
                        break;
                }
                break;
        }

        context.save();
        context.translate(x + blockSize / 2, y + blockSize / 2);
        context.rotate(rotation / 180 * Math.PI);
        context.translate(-blockSize / 2, -blockSize / 2);
        context.beginPath();
        context.rect(0, 0, blockSize, blockSize);
        context.fill();
        context.restore();
    },
    entity: function(x, y, type, details) {
        context.beginPath();
        context.save();
        if (entityList.get(details).overlap) {
            context.translate(x, y - playerOverlap);
            context.rect(0, 0, blockSize, blockSize + playerOverlap);
        } else {
            context.rect(x, y, blockSize, blockSize);
        }
        context.fillStyle = patterns[entityList.get(details).texture];
        context.fill();
        context.restore();
    },
    enemy: function(x, y, type, details, entity) {
        switch (type) {
            case 'E':
                var polygon = EntityCollision.getViewareaPolygon(entity);
                // the polygon
                context.beginPath();
                context.moveTo(polygon[0].x, polygon[0].y);
                for (i = 1; i < polygon.length; i++) {
                    context.lineTo(polygon[i].x, polygon[i].y);
                }
                context.closePath();

                // the outline
                //context.lineWidth = 10;
                //context.strokeStyle = '#666666';
                //context.stroke();

                // the fill color
                if (entity.following) {
                    context.fillStyle = "#FF220044";
                } else {
                    context.fillStyle = "#FFCC0044";
                }
                context.fill();

                switch (details) {
                    case '1':
                        context.fillStyle = patterns.player4;
                        break;
                }
                context.translate(x, y - playerOverlap);
                context.fillRect(0, 0, blockSize, blockSize + playerOverlap);
                context.beginPath();
                context.arc(blockSize / 2, blockSize / 2 + playerOverlap, enemyFollowRadiusRotate + blockSize / 2, 0, 2 * Math.PI);
                if (entity.rotating) {
                    context.strokeStyle = "#FF220066";
                } else {
                    context.strokeStyle = "#FFCC0044";
                }
                context.stroke();
                context.translate(-x, -y + playerOverlap);

                break;
        }

        //context.restore();
    }
};

EntityCollision = {};

// collision: wall, collect entities (cookie, ...), interact with entities, enemy follow, carpets (portals, heizung, ...), check for adjacent walls
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

        if (entity.type == "c") {

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

EntityCollision.enemies = function(x, y, all = false) {
    var tmpen = [];
    for (var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];

        var enemyCenterX = enemy.x + blockSize / 2;
        var enemyCenterY = enemy.y + blockSize / 2;

        var distX = Math.abs(x - enemyCenterX) - blockSize / 2 - (!all ? enemyFollowRadius : enemyFollowRadiusRotate);
        var distY = Math.abs(y - enemyCenterY) - blockSize / 2 - (!all ? enemyFollowRadius : enemyFollowRadiusRotate);

        if (distX <= 0 && distY <= 0 && Math.sqrt((x - enemy.x - blockSize / 2) * (x - enemy.x - blockSize / 2) + (y - enemy.y - blockSize / 2) * (y - enemy.y - blockSize / 2)) > 4) {
            if (!all) {
                if (!this.viewAreaCollision(enemy, { x: x, y: y })) continue;
            }
            tmpen.push(enemy);
        }
    }
    return tmpen;
}

EntityCollision.getViewarea = function(rotation, angle) { // get start end end angle
    return ({ start: rotation + angle > 360 ? rotation + angle - 360 : rotation + angle, end: rotation - angle < 0 ? rotation - angle + 360 : rotation - angle });
}

EntityCollision.getRotationVector = function(rotation) { // vector with length 1 in rotation direction
    var vectorX = Math.tan(rotation / 180 * Math.PI) * ((rotation > 90 && rotation < 180) || (rotation < 270 && rotation > 180) ? -1 : 1);
    var vectorY = 1 / Math.sqrt(vectorX * vectorX + 1) * (rotation > 270 || rotation < 90 ? 1 : -1);
    vectorX = vectorX / Math.sqrt(vectorX * vectorX + 1);

    return ({ x: vectorX, y: vectorY });
}

EntityCollision.getViewareaPolygon2 = function(entity) { // todo wall detection
    var viewArea = this.getViewarea(entity.rotation, entity.viewAngle);

    var vector1 = this.getRotationVector(viewArea.start);
    var vector2 = this.getRotationVector(viewArea.end);
    var x1 = vector1.x * enemyFollowRadius + entity.x + blockSize / 2;
    var y1 = vector1.y * enemyFollowRadius + entity.y + blockSize / 2;
    var x2 = vector2.x * enemyFollowRadius + entity.x + blockSize / 2;
    var y2 = vector2.y * enemyFollowRadius + entity.y + blockSize / 2;

    return [{ x: entity.x + blockSize / 2, y: entity.y + blockSize / 2 }, { x: x1, y: y1 }, { x: x2, y: y2 }];
}

EntityCollision.getViewareaPolygon = function(entity) { // with wall detection
    var viewArea = this.getViewarea(entity.rotation, entity.viewAngle);
    var points = [];
    points.push({ x: entity.x + blockSize / 2, y: entity.y + blockSize / 2 });

    for (i = 0; i < 60; i++) {
        var vector = this.getRotationVector((viewArea.end + i) > 360 ? (viewArea.end + i - 360) : (viewArea.end + i));
        var x = vector.x * enemyFollowRadius + entity.x + blockSize / 2;
        var y = vector.y * enemyFollowRadius + entity.y + blockSize / 2;

        var tmpwalls = this.getWallsBetween({ x: (entity.x + blockSize / 2), y: (entity.y + blockSize / 2) }, { x: x, y: y });
        if (tmpwalls.length > 0) {
            var wall = tmpwalls[0];
            if (tmpwalls.length > 1) {
                var minr = Math.sqrt(((entity.x + blockSize / 2) - tmpwalls[0].x) * ((entity.x + blockSize / 2) - tmpwalls[0].x) + ((entity.y + blockSize / 2) - tmpwalls[0].y) * ((entity.y + blockSize / 2) - tmpwalls[0].y));
                for (j = 1; j < tmpwalls.length; j++) {
                    var r = Math.sqrt(((entity.x + blockSize / 2) - tmpwalls[j].x) * ((entity.x + blockSize / 2) - tmpwalls[j].x) + ((entity.y + blockSize / 2) - tmpwalls[j].y) * ((entity.y + blockSize / 2) - tmpwalls[j].y));
                    if (r < minr) {
                        wall = tmpwalls[j];
                        minr = r;
                    }
                }
            }

            // min and max x and y coordinates of wall
            var wxmin = (wall.x + (wall.corners.left ? 0 : (blockSize / 4)));
            var wxmax = (wall.x + (wall.corners.right ? blockSize : (blockSize / 4 * 3)));
            var wymin = (wall.y + (wall.corners.top ? 0 : (blockSize / 4)));
            var wymax = (wall.y + (wall.corners.bottom ? blockSize : (blockSize / 4 * 3)));

            // inner corners
            var wc1 = { x: (wall.x + blockSize / 4), y: (wall.y + blockSize / 4) };
            var wc2 = { x: (wall.x + blockSize / 4 * 3), y: (wall.y + blockSize / 4) };
            var wc3 = { x: (wall.x + blockSize / 4 * 3), y: (wall.y + blockSize / 4 * 3) };
            var wc4 = { x: (wall.x + blockSize / 4), y: (wall.y + blockSize / 4 * 3) };

            // edges of normal wall
            //var w1 = { x: wxmin, y: wymin };
            //var w2 = { x: wxmax, y: wymin };
            //var w3 = { x: wxmax, y: wymax };
            //var w4 = { x: wxmin, y: wymax };

            // outer edges
            var wt1 = { x: (wall.x + blockSize / 4), y: (wall.y) };
            var wt2 = { x: (wall.x + blockSize / 4 * 3), y: (wall.y) };
            var wt3 = { x: (wall.x + blockSize), y: (wall.y + blockSize / 4) };
            var wt4 = { x: (wall.x + blockSize), y: (wall.y + blockSize / 4 * 3) };
            var wt5 = { x: (wall.x + blockSize / 4 * 3), y: (wall.y + blockSize) };
            var wt6 = { x: (wall.x + blockSize / 4), y: (wall.y + blockSize) };
            var wt7 = { x: (wall.x), y: (wall.y + blockSize / 4 * 3) };
            var wt8 = { x: (wall.x), y: (wall.y + blockSize / 4) };

            // points to check for intersect
            /*var p1 = { x: wall.x + blockSize / 2, y: wall.y + blockSize / 2 };
            var p2 = { x: wall.x + blockSize / 2, y: wall.y + blockSize / 2 };
            var p3 = { x: wall.x + blockSize / 2, y: wall.y + blockSize / 2 };
            var p4 = { x: wall.x + blockSize / 2, y: wall.y + blockSize / 2 };
            var p5 = { x: wall.x + blockSize / 2, y: wall.y + blockSize / 2 };
            var p6 = { x: wall.x + blockSize / 2, y: wall.y + blockSize / 2 };
            var p7 = { x: wall.x + blockSize / 2, y: wall.y + blockSize / 2 };*/

            var p = [];

            if ((entity.x + blockSize / 2) < wxmin) { // 1, 8, 7
                if ((entity.y + blockSize / 2) < wymin) { // 1
                    if (wall.corners.top) {
                        if (!wall.solidCorners.top) {
                            p.push(wt2);
                        }
                        p.push(wt1);
                    } else {
                        if (wall.corners.right) {
                            p.push(wt3);
                        }
                        p.push(wc2);
                    }
                    p.push(wc1);
                    if (wall.corners.left) {
                        p.push(wt8);
                        if (!wall.solidCorners.left) {
                            p.push(wt7);
                        }
                    } else {
                        p.push(wc4);
                        if (wall.corners.bottom) {
                            p.push(wt6);
                        }
                    }
                } else if ((entity.y + blockSize / 2) > wymax) { // 7
                    if (wall.corners.left) {
                        if (!wall.solidCorners.left) {
                            p.push(wt8);
                        }
                        p.push(wt7);
                    } else {
                        if (wall.corners.top) {
                            p.push(wt1);
                        }
                        p.push(wc1);
                    }
                    p.push(wc4);
                    if (wall.corners.bottom) {
                        p.push(wt6);
                        if (!wall.solidCorners.bottom) {
                            p.push(wt5);
                        }
                    } else {
                        p.push(wc3);
                        if (wall.corners.right) {
                            p.push(wt4);
                        }
                    }
                } else { // 8
                    if (wall.corners.top) {
                        p.push(wt1, wc1);
                    }
                    if (wall.corners.left) {
                        p.push(wt8, wt7);
                    } else {
                        p.push(wc1, wc4);
                    }
                    if (wall.corners.right) {
                        p.push(wc4, wt6);
                    }
                }
            } else if ((entity.x + blockSize / 2) > wxmax) { // 3, 4, 5
                if ((entity.y + blockSize / 2) < wymin) { // 3
                    if (wall.corners.right) {
                        if (!wall.solidCorners.right) {
                            p.push(wt4);
                        }
                        p.push(wt3);
                    } else {
                        if (wall.corners.bottom) {
                            p.push(wt5);
                        }
                        p.push(wc3);
                    }
                    p.push(wc2);
                    if (wall.corners.top) {
                        p.push(wt2);
                        if (!wall.solidCorners.top) {
                            p.push(wt1);
                        }
                    } else {
                        p.push(wc1);
                        if (wall.corners.left) {
                            p.push(wt8);
                        }
                    }

                } else if ((entity.y + blockSize / 2) > wymax) { // 5
                    if (wall.corners.bottom) {
                        if (!wall.solidCorners.bottom) {
                            p.push(wt6);
                        }
                        p.push(wt5);
                    } else {
                        if (wall.corners.left) {
                            p.push(wt7);
                        }
                        p.push(wc4);
                    }
                    p.push(wc3);
                    if (wall.corners.right) {
                        p.push(wt4);
                        if (!wall.solidCorners.right) {
                            p.push(wt3);
                        }
                    } else {
                        p.push(wc2);
                        if (wall.corners.top) {
                            p.push(wt2);
                        }
                    }
                } else { // 4
                    if (wall.corners.bottom) {
                        p.push(wt5, wc3);
                    }
                    if (wall.corners.right) {
                        p.push(wt4, wt3);
                    } else {
                        p.push(wc3, wc2);
                    }
                    if (wall.corners.top) {
                        p.push(wc2, wt2);
                    }
                }
            } else { // 2, 6
                if ((entity.y + blockSize / 2) < wymin) { // 2
                    if (wall.corners.right) {
                        p.push(wt3, wc2);
                    }
                    if (wall.corners.top) {
                        p.push(wt2, wt1);
                    } else {
                        p.push(wc2, wc1);
                    }
                    if (wall.corners.left) {
                        p.push(wc1, wt8);
                    }
                } else if ((entity.y + blockSize / 2) > wymax) { // 6
                    if (wall.corners.left) {
                        p.push(wt7, wc4);
                    }
                    if (wall.corners.bottom) {
                        p.push(wt6, wt5);
                    } else {
                        p.push(wc4, wc3);
                    }
                    if (wall.corners.right) {
                        p.push(wc3, wt4);
                    }
                } else { // inside ??
                }
            }

            var pu = [...new Set(p)]; // remove duplicates

            var point = false;
            var j = 0;
            while (point == false && j < (pu.length - 1)) {
                point = this.line_intersect({ x: entity.x + blockSize / 2, y: entity.y + blockSize / 2 }, { x: x, y: y }, pu[j], pu[j + 1]);
                j++;
            }
            if (point != false) {
                points.push(point);
            } else {
                //points.push({ x: x, y: y }); // no wall intersect (?)
            }

            /* if (entity.x < wxmin) { // 1, 8, 7
                if (entity.y < wymin) { // 1
                    p1 = w4;
                    p2 = w2;
                    if (wall.corners.top) {
                        p2 = w1;
                    }
                    if (wall.corners.left) {
                        p1 = w1;
                    }
                } else if (entity.y > wymax) { // 7
                    p1 = w3;
                    p2 = w1;
                    if (wall.corners.bottom) {
                        p1 = w4;
                    }
                    if (wall.corners.left) {
                        p2 = w4;
                    }
                } else { // 8
                    p1 = w4;
                    p2 = w1;
                }
            } else if (entity.x > wxmax) { // 3, 4, 5
                if (entity.y < wymin) { // 3
                    p1 = w1;
                    p2 = w3;
                    if (wall.corners.top) {
                        p1 = w2;
                    }
                    if (wall.corners.right) {
                        p2 = w2;
                    }
                } else if (entity.y > wymax) { // 5
                    p1 = w2;
                    p2 = w4;
                    if (wall.corners.bottom) {
                        p2 = w3;
                    }
                    if (wall.corners.right) {
                        p2 = w3;
                    }
                } else { // 4
                    p1 = w2;
                    p2 = w3;
                }
            } else { // 2, 6
                if (entity.y < wymin) { // 2
                    p1 = w1;
                    p2 = w2;
                } else if (entity.y > wymax) { // 6
                    p1 = w3;
                    p2 = w4;
                } else { // inside ??
                }
            }

            points.push(p1);
            points.push(p2);
*/
        } else {
            points.push({ x: x, y: y });
        }
    }

    return points;
}

EntityCollision.viewAreaCollision = function(entity, player) {
    //console.log(viewArea.start + " " + viewArea.end + " . " + vector1.x + " " + vector1.y + " . " + x1 + " " + y1 + " . " + x2 + " " + y2 + " . " + (entity.x + blockSize / 2) + " " + (entity.y + blockSize / 2) + " . " + player.x + " " + player.y);

    var polygon = this.getViewareaPolygon(entity);
    //return this.intpoint_inside_trigon({ x: player.x, y: player.y }, { x: entity.x + blockSize / 2, y: entity.y + blockSize / 2 }, { x: x1, y: y1 }, { x: x2, y: y2 }) && this.isWallBetween({ x: player.x, y: player.y }, { x: entity.x + blockSize / 2, y: entity.y + blockSize / 2 });
    return this.pointInPolygon({ x: player.x, y: player.y }, polygon);
}

// copied , unused
EntityCollision.intpoint_inside_trigon = function(s, a, b, c) {
    as_x = s.x - a.x;
    as_y = s.y - a.y;

    s_ab = (b.x - a.x) * as_y - (b.y - a.y) * as_x > 0;

    if (((c.x - a.x) * as_y - (c.y - a.y) * as_x > 0) == s_ab) return false;

    if (((c.x - b.x) * (s.y - b.y) - (c.y - b.y) * (s.x - b.x) > 0) != s_ab) return false;

    return true;
}

// copied , unused
EntityCollision.ray_casting = function(point, polygon) {
    var n = polygon.length,
        is_in = false,
        x = point.x,
        y = point.y,
        x1, x2, y1, y2;

    for (var i = 0; i < n - 1; i++) {
        x1 = polygon[i].x;
        x2 = polygon[i + 1].x;
        y1 = polygon[i].y;
        y2 = polygon[i + 1].y;

        if (y < y1 != y < y2 && x < (x2 - x1) * (y - y1) / (y2 - y1) + x1) {
            is_in = !is_in;
        }
    }

    return is_in;
}

// copied , currently used!!! working so far
// https://www.algorithms-and-technologies.com/point_in_polygon/javascript
/**
 * Performs the even-odd-rule Algorithm (a raycasting algorithm) to find out whether a point is in a given polygon.
 * This runs in O(n) where n is the number of edges of the polygon.
 *
 * @param {Array} polygon an array representation of the polygon where polygon[i][0] is the x Value of the i-th point and polygon[i][1] is the y Value.
 * @param {Array} point   an array representation of the point where point[0] is its x Value and point[1] is its y Value
 * @return {boolean} whether the point is in the polygon (not on the edge, just turn < into <= and > into >= for that)
 */
EntityCollision.pointInPolygon = function(point, polygon) {
    //A point is in a polygon if a line from the point to infinity crosses the polygon an odd number of times
    let odd = false;
    //For each edge (In this case for each point of the polygon and the previous one)
    for (let i = 0, j = polygon.length - 1; i < polygon.length; i++) {
        //If a line from the point into infinity crosses this edge
        if (((polygon[i].y > point.y) !== (polygon[j].y > point.y)) // One point needs to be above, one below our y coordinate
            // ...and the edge doesn't cross our Y corrdinate before our x coordinate (but between our x coordinate and infinity)
            &&
            (point.x < ((polygon[j].x - polygon[i].x) * (point.y - polygon[i].y) / (polygon[j].y - polygon[i].y) + polygon[i].x))) {
            // Invert odd
            odd = !odd;
        }
        j = i;

    }
    //If the number of crossings was odd, the point is in the polygon
    return odd;
};

EntityCollision.getWallsInArea = function(pos1, pos2) {
    var xmin = Math.min(pos1.x, pos2.x);
    var xmax = Math.max(pos1.x, pos2.x);
    var ymin = Math.min(pos1.y, pos2.y);
    var ymax = Math.max(pos1.y, pos2.y);

    return walls.filter(function(wall) {
        var wxmin = (wall.x + (wall.corners.left ? 0 : (blockSize / 4)));
        var wxmax = (wall.x + (wall.corners.right ? blockSize : (blockSize / 4 * 3)));
        var wymin = (wall.y + (wall.corners.top ? 0 : (blockSize / 4)));
        var wymax = (wall.y + (wall.corners.bottom ? blockSize : (blockSize / 4 * 3)));
        //return wxmin >= xmin && wxmax <= xmax && wymin >= ymin && wymax <= ymax; 
        return wall.type == "W" && wall.details != "i" && wall.details != "g" && xmax >= wxmin && xmin <= wxmax && ymax >= wymin && ymin <= wymax;
    });
}

// unused
EntityCollision.isWallBetween = function(pos1, pos2) {
    //var tmpwalls = this.getWallsInArea(pos1, pos2);
    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];

        var wxmin = (wall.x + (wall.corners.left ? 0 : (blockSize / 4)));
        var wxmax = (wall.x + (wall.corners.right ? blockSize : (blockSize / 4 * 3)));
        var wymin = (wall.y + (wall.corners.top ? 0 : (blockSize / 4)));
        var wymax = (wall.y + (wall.corners.bottom ? blockSize : (blockSize / 4 * 3)));

        if (this.intersects(pos1.x, pos1.y, pos2.x, pos2.y, wxmin, wymin, wxmax, wymin) || this.intersects(pos1.x, pos1.y, pos2.x, pos2.y, wxmin, wymin, wxmin, wymax) || this.intersects(pos1.x, pos1.y, pos2.x, pos2.y, wxmax, wymin, wxmax, wymax) || this.intersects(pos1.x, pos1.y, pos2.x, pos2.y, wxmin, wymax, wxmax, wymax)) return true;
    }
    return false;
}

EntityCollision.getWallsBetween = function(pos1, pos2) {
    var tmpwalls = this.getWallsInArea(pos1, pos2);
    var tmp = [];
    for (var i = 0; i < tmpwalls.length; i++) {
        var wall = tmpwalls[i];

        var wxmin = (wall.x + (wall.corners.left ? 0 : (blockSize / 4)));
        var wxmax = (wall.x + (wall.corners.right ? blockSize : (blockSize / 4 * 3)));
        var wymin = (wall.y + (wall.corners.top ? 0 : (blockSize / 4)));
        var wymax = (wall.y + (wall.corners.bottom ? blockSize : (blockSize / 4 * 3)));

        if (this.intersects(pos1.x, pos1.y, pos2.x, pos2.y, wxmin, wymin, wxmax, wymin) || this.intersects(pos1.x, pos1.y, pos2.x, pos2.y, wxmin, wymin, wxmin, wymax) || this.intersects(pos1.x, pos1.y, pos2.x, pos2.y, wxmax, wymin, wxmax, wymax) || this.intersects(pos1.x, pos1.y, pos2.x, pos2.y, wxmin, wymax, wxmax, wymax)) tmp.push(wall);
    }
    return tmp;
}

// copied: returns true if the line from (a,b)->(c,d) intersects with (p,q)->(r,s)
EntityCollision.intersects = function(a, b, c, d, p, q, r, s) {
    var det, gamma, lambda;
    det = (c - a) * (s - q) - (r - p) * (d - b);
    if (det === 0) {
        return false;
    } else {
        lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
        gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
        return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
    }
};

// copied
// line intercept math by Paul Bourke http://paulbourke.net/geometry/pointlineplane/
// Determine the intersection point of two line segments
// Return FALSE if the lines don't intersect
EntityCollision.line_intersect = function(p1, p2, p3, p4) {

    // Check if none of the lines are of length 0
    if ((p1.x === p2.x && p1.y === p2.y) || (p3.x === p4.x && p3.y === p4.y)) {
        return false;
    }

    var denominator = ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y));

    // Lines are parallel
    if (denominator === 0) {
        return false;
    }

    var ua = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) / denominator;
    var ub = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) / denominator;

    // is the intersection along the segments
    if (ua < 0 || ua > 1 || ub < 0 || ub > 1) {
        return false;
    }

    // Return a object with the x and y coordinates of the intersection
    var x = p1.x + ua * (p2.x - p1.x);
    var y = p1.y + ua * (p2.y - p1.y);

    return { x: x, y: y };
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

EntityCollision.wallAt = function(x, y) {
    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];
        if (wall.x == x && wall.y == y && wall.type == "W" && wall.details != "i") {
            return true;
        }
    }
    return false;
}

EntityCollision.solidWallAt = function(x, y) {
    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];
        if (wall.x == x && wall.y == y && wall.type == "W" && wall.details != "i" && wall.details != "g") {
            return true;
        }
    }
    return false;
}

EntityCollision.collWallAt = function(x, y) {
    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];
        if (wall.x == x && wall.y == y) {
            return true;
        }
    }
    return false;
}

EntityCollision.cornerCheck = function() {
    for (var i = 0; i < walls.length; i++) {
        walls[i].cornerCheck();
    }
}

EntityCollision.playerVector = function(x, y) {
    var resultVector = { x: 0, y: 0 };

    var playerCenterX = player.x;
    var playerCenterY = player.y;

    var vectorX = playerCenterX - x;
    var vectorY = playerCenterY - y;

    var length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

    if (length > 0) {
        vectorX /= length;
        vectorY /= length;

        resultVector.x += vectorX;
        resultVector.y += vectorY;
    }

    return resultVector;
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
                entityList.get(entity.details).collect();
            }
        }

        //entities interact
        if (!keyboard.shift) {
            var entity = EntityCollision.entitiesInteract(this.x, this.y);

            if (entity != null) {
                if (keyboard.space) {
                    entityList.get(entity.details).interact();
                    document.getElementById("interactInfo").classList.remove("show");
                } else {
                    document.getElementById("interactInfo").classList.add("show");
                }
            } else {
                document.getElementById("interactInfo").classList.remove("show");
            }
        }
        //enemies
        if (!keyboard.shift) {
            var tmpenall = EntityCollision.enemies(this.x, this.y, true);

            for (i = 0; i < tmpenall.length; i++) {
                var enemy = tmpenall[i];

                if (enemy != null) {
                    enemy.rotate();
                }
            }
        }

        if (!keyboard.shift) {
            var tmpen = EntityCollision.enemies(this.x, this.y);

            for (i = 0; i < tmpen.length; i++) {
                var enemy = tmpen[i];

                if (enemy != null) {
                    enemy.follow();
                }
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
    this.solidCorners = { right: false, left: false, top: false, bottom: false };
    this.collCorners = { right: false, left: false, top: false, bottom: false };

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.cornerCheck = function() {
        if (this.type == "W") {
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
    this.speed = 3;
    this.sleep = true;
    this.viewAngle = 30;
    this.rotation = 0;
    this.rotateFollow = true;
    this.following = false;
    this.rotating = false;

    this.bounds = { x: this.x, y: this.y, width: blockSize, height: blockSize };

    this.update = function() {

    };

    this.render = function() {
        if (this.sleep) return;

        EntityDrawer.enemy(this.x, this.y, this.type, this.details, this);
        this.following = false;
        this.rotating = false;
    };
    this.follow = function() {
        var collisionVector = EntityCollision.playerVector(this.x + blockSize / 2, this.y + blockSize / 2);
        this.x += collisionVector.x * this.speed;
        this.y += collisionVector.y * this.speed;
        this.wallCollision();
        this.rotate();
        this.following = true;
    }
    this.rotate = function() {
        var collisionVector = EntityCollision.playerVector(this.x + blockSize / 2, this.y + blockSize / 2);
        //degrees = (degrees + 360) % 360;
        this.rotation = (Math.atan2(collisionVector.x, collisionVector.y) / Math.PI * 180 + 360) % 360;
        this.rotating = true;
    }

    this.wallCollision = function() {
        var collisionVector = EntityCollision.arcToWalls(this.x + blockSize / 2, this.y + blockSize / 2);
        this.x += collisionVector.x * this.speed;
        this.y += collisionVector.y * this.speed;
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

        player.reloadTeleport(blockSize); // todo fix

        blockSize = 80 * zoomfactor;
        arcSizeRadius = 35 * zoomfactor;
        entityCollectRadius = 20 * zoomfactor;
        entityInteractRadius = 80 * zoomfactor;
        enemyFollowRadius = 400 * zoomfactor;
        enemyFollowRadiusRotate = 100 * zoomfactor;
        playerOverlap = 20 * zoomfactor;

        PatternHelper.createAll();
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
                        if (this.spawn == null || this.spawn == row[x + 1]) {
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
                    case 'S':
                    case 'O':
                        this.wallPositions.push({ x: realX, y: y, type: char, details: row[x + 1] });
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
        removeItemAll(elements, player);
        this.mapsSave.set(this.mapName, { elements: elements, entities: entities, enemies: enemies, walls: walls, carpets: carpets })
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
    }
}