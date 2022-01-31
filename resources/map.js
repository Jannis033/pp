// ENTITY INTERACTIONS

var meetings = [];

var registerMeeting = function(name) {
    if (meetings.includes(name)) return false;
    meetings.push(name);
    return true;
};

var removeMeeting = function(name) {
    removeItemOnce(meetings, name);
};

var removeAllMeetings = function() {
    meetings.length = 0; // clear array, should be more performant than the use of meetings = [];
};

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] === value) {
            arr.splice(i, 1);
        } else {
            ++i;
        }
    }
    return arr;
}

function showBarrier(name) {
    var tmpwalls = walls.filter(wall => wall.type == "B");
    for (var i = 0; i < tmpwalls.length; i++) {
        var wall = tmpwalls[i];
        if (wall.details == name.toString()) {
            wall.hidden = false;
        }
    }
    EntityCollision.cornerCheck();
}

function hideBarrier(name) {
    var tmpwalls = walls.filter(wall => wall.type == "B");
    for (var i = 0; i < tmpwalls.length; i++) {
        var wall = tmpwalls[i];
        if (wall.details == name.toString()) {
            wall.hidden = true;
        }
    }
    EntityCollision.cornerCheck();
}

function hideEntityText() {
    document.getElementById("entityText").classList.remove("show");
    document.getElementById("entityText").innerHTML = "";
}

function showEntityText(text) {
    document.getElementById("entityText").classList.add("show");
    document.getElementById("entityText").innerHTML = text;
}

var entityFunctions = function() {
    this.ek = function(entity) {
        player.inventory.addInventory("cookie");
    }
    this.ew = function(entity) {
        player.inventory.addInventory("wool");
    }
    this.ed = function(entity) {
        player.inventory.addInventory("desi");
    }
    this.eb = function(entity) {
        player.inventory.setInventorySingle("base");
    }
    this.eg = function(entity) {
        player.inventory.setInventorySingle("water");
    }
    this.es = function(entity) {
        player.inventory.setInventorySingle("key");
    }
    this.ec = function(entity) {
        player.inventory.setInventorySingle("coffee");
    }
    this.e1 = function(entity, infoOnly = false) {
        var entityNum = 1;
        var entityData = entityList.get(entityNum.toString());
        if ((infoOnly || registerMeeting('e' + entityNum)) && !entityData.mode.end) {
            if (!entityData.mode.enabled) {
                showEntityText(entityData.text.t0);
            } else {
                if (player.inventory.countInventory(entityData.task.item) < entityData.task.count) {
                    showEntityText(entityData.text.t1);
                    if (!infoOnly) {
                        player.inventory.setInventoryTask(entityData.task.item);
                    }
                } else {
                    if (entityData.mode.give && !infoOnly) {
                        showEntityText(entityData.text.t2);
                        if (!infoOnly) {
                            player.inventory.removeInventory(entityData.task.item, entityData.task.count);
                            entity.moveRel(-3, 2);
                            entityData.mode.thank = true;
                            entityData.mode.end = true;
                        }
                    } else {
                        showEntityText(entityData.text.t1 + " [Space]");
                        if (!infoOnly) {
                            entityData.mode.give = true;
                        }
                    }
                }
            }
        }
    }
    this.e2 = function(entity, infoOnly = false) {
        var entityNum = 2;
        var entityData = entityList.get(entityNum.toString());
        if ((infoOnly || registerMeeting('e' + entityNum)) && !entityData.mode.end) {
            if (!entityData.mode.enabled) {
                showEntityText(entityData.text.t0);
            } else {
                if (player.inventory.countInventory(entityData.task.item) < entityData.task.count) {
                    showEntityText(entityData.text.t1);
                    //player.inventory.setInventoryTask(entityData.task.item);
                } else {
                    if (entityData.mode.thank && !infoOnly) {
                        showEntityText(entityData.text.t3);
                        if (!infoOnly) {
                            hideBarrier(3);
                            entityData.mode.end = true;
                        }
                    } else if (entityData.mode.give && !infoOnly || entityData.mode.thank && infoOnly) {
                        showEntityText(entityData.text.t2 + " [Space]");
                        if (!infoOnly) {
                            player.inventory.removeInventory(entityData.task.item, entityData.task.count);
                            entityData.mode.thank = true;
                        }
                    } else {
                        showEntityText(entityData.text.t1 + " [Space]");
                        if (!infoOnly) {
                            entityData.mode.give = true;
                        }
                    }
                }
            }
        }
    }
    this.e3 = function(entity, infoOnly = false) {
        var entityNum = 3;
        var entityData = entityList.get(entityNum.toString());
        if (registerMeeting('e' + entityNum) && !entityData.mode.end) {
            showEntityText(entityData.text.t1);
        }
    }
    this.e4 = function(entity, infoOnly = false) {
        var entityNum = 4;
        var entityData = entityList.get(entityNum.toString());
        if (registerMeeting('e' + entityNum) && !entityData.mode.end) {
            showEntityText(entityData.text.t1);
        }
    }
    this.e5 = function(entity, infoOnly = false) {
        var entityNum = 5;
        var entityData = entityList.get(entityNum.toString());
        if (registerMeeting('e' + entityNum) && !entityData.mode.end) {
            showEntityText(entityData.text.t1);
        }
    }
    this.e6 = function(entity, infoOnly = false) {
        var entityNum = 6;
        var entityData = entityList.get(entityNum.toString());
        if (registerMeeting('e' + entityNum) && !entityData.mode.end) {
            if (!entityData.mode.active) {
                showEntityText(entityData.text.t1);
                hideBarrier(1);
                entityData.mode.active = true;
                entityData.mode.end = true;
            }
        }
    }
    this.E1 = function(enemy, infoOnly = false) {
        var enemyNum = 1;
        var enemyData = entityList.get("E" + enemyNum.toString());
        showEntityText(enemyData.text.t1);
    }
}

var efnc = new entityFunctions();

var entityList = new Map();

entityList.set("k", { name: "Keks", texture: "cookie", collect: efnc.ek });
entityList.set("d", { name: "Desi", texture: "desi", collect: efnc.ed });
entityList.set("b", { name: "Base", texture: "base", collect: efnc.eb });
entityList.set("g", { name: "Gießkanne", texture: "water", collect: efnc.eg });
entityList.set("s", { name: "Schlüssel", texture: "key", collect: efnc.es });
entityList.set("1", { name: "Hilchenbach", texture: "hilchenbach", overlap: true, interact: efnc.e1, mode: { enabled: true, give: false, thank: false, end: false }, task: { item: "cookie", count: 5 }, text: { t1: "Gib mir 5 Kekse!", t2: "Danke!" } });
entityList.set("2", { name: "Goldi", texture: "goldi", overlap: true, interact: efnc.e2, mode: { enabled: false, give: false, thank: false, end: false }, task: { item: "key", count: 1 }, text: { t0: "Hallo", t1: "Hilfe wo ist mein Schlüssel?!", t2: "Ich danke dir treuer Freund. Gehab dich wohl!", t3: "Zum Dank öffne ich dir damit alle Türen, statte doch mal unserem Schulleiter einen Besuch ab." } });
entityList.set("3", { name: "Glauben", texture: "glauben", overlap: true, interact: efnc.e3, mode: { enabled: true, end: false }, text: { t1: "Ich bin Herr Glauben" } });
entityList.set("4", { name: "Reiner", texture: "reiner", overlap: true, interact: efnc.e4, mode: { enabled: true, end: false }, text: { t1: "Ich bin der Reiner" } });
entityList.set("5", { name: "Fischer", texture: "fischer", overlap: true, interact: efnc.e5, mode: { enabled: true, end: false }, text: { t1: "Ich brauche Kaffee!" } });
entityList.set("6", { name: "Schalter", texture: "schalter", texture1: "schalter1", overlap: false, interact: efnc.e6, mode: { enabled: true, active: false, end: false }, text: { t1: "Die Barrieren wurden entfernt!" } });
entityList.set("E1", { name: "Müller", texture: "mueller", overlap: true, follow: efnc.E1, rotation: 270, text: { t1: "Sammel 5 Desinfektionsmittel und du bist immun!", t2: "Besser ist das!" }, task: { item: "desi", count: 5 } });



// PORTALS

var portalFunctions = function() {
    this.V1 = function() {
        mapProcessor.loadMap(map1, "map1", 3, player.rotation, false, false);
    }
    this.V2 = function() {
        mapProcessor.loadMap(map2, "map2", null, player.rotation, false, false);
    }
    this.V3 = function() {
        mapProcessor.loadMap(map3, "map3", null, player.rotation, false, false);
    }
    this.V4 = function() {
        mapProcessor.loadMap(map1, "map1", 2, player.rotation, false, false);
    }
}

var tpfnc = new portalFunctions();

var portalList = new Map();

portalList.set("1", { function: tpfnc.V1 });
portalList.set("2", { function: tpfnc.V2 });
portalList.set("3", { function: tpfnc.V3 });
portalList.set("4", { function: tpfnc.V4 });