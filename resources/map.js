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

var pokefunctions = function() {
    this.f1 = function() {
        if (registerMeeting('f1')) {
            console.log('meeting f1');
        }
    }
    this.f2 = function() {
        console.log("taubsu");
    }
}

var pfnc = new pokefunctions();

var pokelist = new Map();

pokelist.set("1", { name: "Taubsi", function: pfnc.f1 });
pokelist.set("2", { name: "Pikachu", function: pfnc.f2 });

//pokelist.get("1")["function"]();

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

// PORTALS

var portalFunctions = function() {
    this.p1 = function() {
        mapProcessor.loadMap(map1, null, player.rotation, false);
    }
    this.p2 = function() {
        mapProcessor.loadMap(map2, 2, player.rotation, false);
    }
}

var tpfnc = new portalFunctions();

var portalList = new Map();

portalList.set("1", { function: tpfnc.p1 });
portalList.set("2", { function: tpfnc.p2 });