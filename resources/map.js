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

var entityFunctions = function() {
    this.ek = function() {
        console.log("collected cookie!");
    }
    this.e1 = function() {
        if (registerMeeting('e1')) {
            console.log("interacted!");
        }
    }
    this.e2 = function() {
        if (registerMeeting('e2')) {
            console.log("mueller!");
        }
    }
}

var efnc = new entityFunctions();

var entityList = new Map();

entityList.set("k", { name: "Keks", texture: "cookie", collect: efnc.ek });
entityList.set("1", { name: "Glauben", texture: "player4", overlap: true, interact: efnc.e1 });
entityList.set("2", { name: "Müller", texture: "player0", overlap: true, interact: efnc.e2 });



// PORTALS

var portalFunctions = function() {
    this.p1 = function() {
        mapProcessor.loadMap(map1, "map1", null, player.rotation, false, false);
    }
    this.p2 = function() {
        mapProcessor.loadMap(map2, "map2", 2, player.rotation, false, false);
    }
}

var tpfnc = new portalFunctions();

var portalList = new Map();

portalList.set("1", { function: tpfnc.p1 });
portalList.set("2", { function: tpfnc.p2 });