var meetings = [];

var registerMeeting = function(name) {
    if (meetings.contains(name)) return false;
    meetings.add(name);
    return true;
};

var removeMeeting = function(name) {
    meetings.remove(name);
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