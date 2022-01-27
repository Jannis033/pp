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

function hideEntityText() {
    document.getElementById("entityText").classList.remove("show");
    document.getElementById("entityText").innerHTML = "";
}

function showEntityText(text) {
    document.getElementById("entityText").classList.add("show");
    document.getElementById("entityText").innerHTML = text;
}

var entityFunctions = function() {
    this.ek = function() {
        player.addInventory("cookie");
    }
    this.e1 = function() {
        if (registerMeeting('e1')) {
            if (player.countInventory(entityList.get("1").task.item) < entityList.get("1").task.count) {
                showEntityText(entityList.get("1").text.t1);
            } else {
                if (entityList.get("1").mode.give) {
                    showEntityText(entityList.get("1").text.t2);
                    player.removeInventory(entityList.get("1").task.item, entityList.get("1").task.count);
                    // todo: handle task success
                } else {
                    showEntityText(entityList.get("1").text.t1 + " [Space]");
                    entityList.get("1").mode.give = true;
                }
            }
        }
    }
    this.e2 = function() {
        if (registerMeeting('e2')) {
            console.log("mueller!");
        }
    }
    this.e3 = function() {
        if (registerMeeting('e3')) {
            console.log("glauben!");
        }
    }
}

var efnc = new entityFunctions();

var entityList = new Map();

entityList.set("k", { name: "Keks", texture: "cookie", collect: efnc.ek });
entityList.set("1", { name: "Hilchenbach", texture: "player4", overlap: true, interact: efnc.e1, text: { t1: "Gib mir 5 Kekse!", t2: "Danke!" }, mode: { give: false }, task: { item: "cookie", count: 5 } });
entityList.set("2", { name: "Müller", texture: "player0", overlap: true, interact: efnc.e2 });
entityList.set("3", { name: "Glauben", texture: "player2", overlap: true, interact: efnc.e3 });



// PORTALS

var portalFunctions = function() {
    this.p1 = function() {
        mapProcessor.loadMap(map1, "map1", null, player.rotation, false, false);
    }
    this.p2 = function() {
        mapProcessor.loadMap(map2, "map2", 2, player.rotation, false, false);
    }
    this.p3 = function() {
        mapProcessor.loadMap(map3, "map3", null, player.rotation, false, false);
    }
    this.p4 = function() {
        mapProcessor.loadMap(map1, "map1", 2, player.rotation, false, false);
    }
}

var tpfnc = new portalFunctions();

var portalList = new Map();

portalList.set("1", { function: tpfnc.p1 });
portalList.set("2", { function: tpfnc.p2 });
portalList.set("3", { function: tpfnc.p3 });
portalList.set("4", { function: tpfnc.p4 });