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
    this.e1 = function(entity) {
        var entityNum = 1;
        var entityData = entityList.get(entityNum.toString());
        if (registerMeeting('e' + entityNum)) {
            if (player.inventory.countInventory(entityData.task.item) < entityData.task.count) {
                showEntityText(entityData.text.t1);
                player.inventory.setInventoryTask(entityData.task.item);
            } else {
                if (entityData.mode.give) {
                    showEntityText(entityData.text.t2);
                    player.inventory.removeInventory(entityData.task.item, entityData.task.count);
                    entity.moveRel(-3, 2);
                } else {
                    showEntityText(entityData.text.t1 + " [Space]");
                    entityData.mode.give = true;
                }
            }
        }
    }
    this.e2 = function(entity) {
        var entityNum = 2;
        var entityData = entityList.get(entityNum.toString());
        if (registerMeeting('e' + entityNum)) {
            showEntityText(entityData.text.t1);
        }
    }
    this.e3 = function(entity) {
        var entityNum = 3;
        var entityData = entityList.get(entityNum.toString());
        if (registerMeeting('e' + entityNum)) {
            showEntityText(entityData.text.t1);
        }
    }
}

var efnc = new entityFunctions();

var entityList = new Map();

entityList.set("k", { name: "Keks", texture: "cookie", collect: efnc.ek });
entityList.set("w", { name: "Wolle", texture: "wool", collect: efnc.ew });
entityList.set("1", { name: "Hilchenbach", texture: "player4", overlap: true, interact: efnc.e1, text: { t1: "Gib mir 5 Kekse!", t2: "Danke!" }, mode: { give: false }, task: { item: "cookie", count: 5 } });
entityList.set("2", { name: "Müller", texture: "player0", overlap: true, interact: efnc.e2, text: { t1: "Ich bin Frau Müller" } });
entityList.set("3", { name: "Glauben", texture: "player2", overlap: true, interact: efnc.e3, text: { t1: "Ich bin Herr Glauben" } });



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