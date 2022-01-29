// collision: wall, collect entities (cookie, ...), interact with entities, enemy follow, carpets (portals, heizung, ...), check for adjacent walls
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

    var tmpWalls = walls.filter(wall => !wall.hidden && wall.details != "l");
    for (var i = 0; i < tmpWalls.length; i++) {
        var wall = tmpWalls[i];

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


EntityCollision.arcToWallsEntity = function(arcX, arcY) {
    var resultVector = { x: 0, y: 0 };

    var tmpWalls = walls.filter(wall => !wall.hidden);
    for (var i = 0; i < tmpWalls.length; i++) {
        var wall = tmpWalls[i];

        if (EntityCollision.arcToWall(arcX, arcY, arcSizeRadius, wall.x, wall.y, blockSize, wall.details, wall.collCornersEntity)) {
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

EntityCollision.arcToEntity = function(arcX, arcY, arcRadius, entityX, entityY, entitySize, details) {
    var wallAt = { right: EntityCollision.collWallAt(entityX + blockSize, entityY), left: EntityCollision.collWallAt(entityX - blockSize, entityY), top: EntityCollision.collWallAt(entityX, entityY - blockSize), bottom: EntityCollision.collWallAt(entityX, entityY + blockSize) };
    var entitySizeX = (wallAt.left && wallAt.right ? entitySize * 1.5 : (wallAt.left || wallAt.right ? entitySize : entitySize));
    var entitySizeY = (wallAt.top && wallAt.bottom ? entitySize * 1.5 : (wallAt.top || wallAt.bottom ? entitySize : entitySize));

    entityX = (wallAt.left ? entityX - blockSize / 4 : entityX);
    entityY = (wallAt.top ? entityY - blockSize / 4 : entityY);

    var distX = Math.abs(arcX - entityX - entitySizeX / 2);
    var distY = Math.abs(arcY - entityY - entitySizeY / 2);

    if (distX > (entitySizeX / 2 + arcRadius)) { return false; }
    if (distY > (entitySizeY / 2 + arcRadius)) { return false; }

    if (distX <= (entitySizeX / 2)) { return true; }
    if (distY <= (entitySizeY / 2)) { return true; }

    var dx = distX - entitySizeX / 2;
    var dy = distY - entitySizeY / 2;

    return (dx * dx + dy * dy <= (arcRadius * arcRadius));
};

EntityCollision.arcToEntities = function(arcX, arcY) {
    var collTmp = [];
    collTmp.push(...entities.filter(entity => entity.collision), ...enemies.filter(enemy => enemy.collision));

    var resultVector = { x: 0, y: 0 };

    for (var i = 0; i < collTmp.length; i++) {
        var entity = collTmp[i];

        if (EntityCollision.arcToEntity(arcX, arcY, arcSizeRadiusEntity, entity.x, entity.y, blockSize, entity.details)) {
            var entityCenterX = entity.x + blockSize / 2;
            var entityCenterY = entity.y + blockSize / 2;

            var vectorX = arcX - entityCenterX;
            var vectorY = arcY - entityCenterY;

            var length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

            if (length > 0) {
                vectorX /= length;
                vectorY /= length;

                resultVector.x += vectorX * 1.2;
                resultVector.y += vectorY * 1.2;
            }
        }
    }

    return resultVector;
}

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

EntityCollision.enemieInside = function(x, y) {
    for (var i = 0; i < enemies.length; i++) {
        var enemy = enemies[i];

        var enemyCenterX = enemy.x + blockSize / 2;
        var enemyCenterY = enemy.y + blockSize / 2;

        var distX = Math.abs(x - enemyCenterX) - blockSize / 2;
        var distY = Math.abs(y - enemyCenterY) - blockSize / 2;

        if (distX <= 0 && distY <= 0 && Math.sqrt((x - enemy.x - blockSize / 2) * (x - enemy.x - blockSize / 2) + (y - enemy.y - blockSize / 2) * (y - enemy.y - blockSize / 2)) > 4) {
            return true;
        }
    }
    return false;
}

EntityCollision.getViewarea = function(rotation, angle) { // get start end end angle (currently only end angle is used)
    return ({ start: rotation + angle > 360 ? rotation + angle - 360 : rotation + angle, end: rotation - angle < 0 ? rotation - angle + 360 : rotation - angle });
}

EntityCollision.getRotationVector = function(rotation) { // vector with length 1 in rotation direction
    var vectorX = Math.tan(rotation / 180 * Math.PI) * ((rotation > 90 && rotation < 180) || (rotation < 270 && rotation > 180) ? -1 : 1);
    var vectorY = 1 / Math.sqrt(vectorX * vectorX + 1) * (rotation > 270 || rotation < 90 ? 1 : -1);
    vectorX = vectorX / Math.sqrt(vectorX * vectorX + 1);

    return ({ x: vectorX, y: vectorY });
}

EntityCollision.getViewareaPolygon = function(entity) { // with wall detection
    var viewArea = this.getViewarea(entity.rotation, entity.viewAngle);
    var points = [];
    points.push({ x: entity.x + blockSize / 2, y: entity.y + blockSize / 2 });

    for (i = 0; i < entity.viewAngle * 2; i++) {
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

            // outer edges
            var wt1 = { x: (wall.x + blockSize / 4), y: (wall.y) };
            var wt2 = { x: (wall.x + blockSize / 4 * 3), y: (wall.y) };
            var wt3 = { x: (wall.x + blockSize), y: (wall.y + blockSize / 4) };
            var wt4 = { x: (wall.x + blockSize), y: (wall.y + blockSize / 4 * 3) };
            var wt5 = { x: (wall.x + blockSize / 4 * 3), y: (wall.y + blockSize) };
            var wt6 = { x: (wall.x + blockSize / 4), y: (wall.y + blockSize) };
            var wt7 = { x: (wall.x), y: (wall.y + blockSize / 4 * 3) };
            var wt8 = { x: (wall.x), y: (wall.y + blockSize / 4) };

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
        return wall.type == "W" && wall.details != "i" && wall.details != "l" && wall.details != "g" && !wall.hidden && xmax >= wxmin && xmin <= wxmax && ymax >= wymin && ymin <= wymax;
    });
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
        if (wall.x == x && wall.y == y && wall.type == "W" && wall.details != "i" && wall.details != "l" && !wall.hidden) {
            return true;
        }
    }
    return false;
}

EntityCollision.solidWallAt = function(x, y) {
    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];
        if (wall.x == x && wall.y == y && wall.type == "W" && wall.details != "i" && wall.details != "l" && wall.details != "g" && !wall.hidden) {
            return true;
        }
    }
    return false;
}

EntityCollision.collWallAt = function(x, y) {
    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];
        if (wall.x == x && wall.y == y && !wall.hidden && wall.details != "l") {
            return true;
        }
    }
    return false;
}

EntityCollision.collWallEntityAt = function(x, y) {
    for (var i = 0; i < walls.length; i++) {
        var wall = walls[i];
        if (wall.x == x && wall.y == y && !wall.hidden) {
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

EntityCollision.posVector = function(pos1, pos2) {
    var resultVector = { x: 0, y: 0 };

    var vectorX = pos2.x - pos1.x;
    var vectorY = pos2.y - pos1.y;

    var length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);

    if (length > 0) {
        vectorX /= length;
        vectorY /= length;

        resultVector.x += vectorX;
        resultVector.y += vectorY;
    }

    return resultVector;
}