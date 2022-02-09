// replace pattern to make svg's zoomable
// ([0-9]+\.[0-9]+)
// $1 * zoomfactor

// ([0-9]+\.[0-9|e|-]+)(,|\))
// $1 * zoomfactor$2

var patternHelper = {
    loadPattern: function(pattern, category = null) {
        var path = "patterns/" + (category != null ? category + "/" : "") + pattern + ".js";

        // Adding the script tag to the head as suggested before
        var head = document.head;
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = path;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        script.onreadystatechange = this.createPattern.bind(null, pattern, category);
        script.onload = this.createPattern.bind(null, pattern, category);

        // Fire the loading
        head.appendChild(script);
    },
    createPattern: function(pattern, category = null) {
        if (category != null) {
            patterns[category][pattern] = patternCreator[category][pattern]();
        } else {
            patterns[pattern] = patternCreator[pattern]();
        }

    },
    // this\.loadPattern\("(.*)", "(.*)"\);
    // patterns.$2.$1 = patternCreator.$2.$1();
    createAll: function() {
        patterns.carpets.coffee = patternCreator.carpets.coffee();
        patterns.carpets.heizungA = patternCreator.carpets.heizungA();
        patterns.carpets.heizungM = patternCreator.carpets.heizungM();
        patterns.carpets.heizungE = patternCreator.carpets.heizungE();
        patterns.carpets.logo = patternCreator.carpets.logo();
        patterns.carpets.pissoir = patternCreator.carpets.pissoir();
        patterns.carpets.portal = patternCreator.carpets.portal();
        patterns.carpets.stairsX = patternCreator.carpets.stairsX();
        patterns.carpets.stairsY = patternCreator.carpets.stairsY();

        patterns.entities.emily = patternCreator.entities.emily();
        patterns.entities.fischer = patternCreator.entities.fischer();
        patterns.entities.glauben = patternCreator.entities.glauben();
        patterns.entities.goldi = patternCreator.entities.goldi();
        patterns.entities.hilchenbach = patternCreator.entities.hilchenbach();
        patterns.entities.hilchenbach_old = patternCreator.entities.hilchenbach_old();
        patterns.entities.mueller = patternCreator.entities.mueller();
        patterns.entities.mueller1 = patternCreator.entities.mueller1();
        patterns.entities.pflanzen = patternCreator.entities.pflanzen();
        patterns.entities.reiner = patternCreator.entities.reiner();
        patterns.entities.reiner1 = patternCreator.entities.reiner1();
        patterns.entities.reiner2 = patternCreator.entities.reiner2();
        patterns.entities.reiner3 = patternCreator.entities.reiner3();
        patterns.entities.schalter = patternCreator.entities.schalter();
        patterns.entities.schalter1 = patternCreator.entities.schalter1();

        patterns.items.base = patternCreator.items.base();
        patterns.items.cookie = patternCreator.items.cookie();
        patterns.items.desi = patternCreator.items.desi();
        patterns.items.key = patternCreator.items.key();
        patterns.items.water = patternCreator.items.water();

        patterns.obstacles.barrier = patternCreator.obstacles.barrier();

        patterns.obstacles.table = patternCreator.obstacles.table();

        patterns.peters.peter0 = patternCreator.peters.peter0();
        patterns.peters.peter1 = patternCreator.peters.peter1();
        patterns.peters.peter2 = patternCreator.peters.peter2();
        patterns.peters.peter3 = patternCreator.peters.peter3();
        patterns.peters.peter4 = patternCreator.peters.peter4();
        patterns.peters.peter5 = patternCreator.peters.peter5();
        patterns.peters.peter6 = patternCreator.peters.peter6();
        patterns.peters.peter7 = patternCreator.peters.peter7();

        patterns.players.player0 = patternCreator.players.player0();
        patterns.players.player1 = patternCreator.players.player1();
        patterns.players.player2 = patternCreator.players.player2();
        patterns.players.player3 = patternCreator.players.player3();
        patterns.players.player4 = patternCreator.players.player4();
        patterns.players.player5 = patternCreator.players.player5();
        patterns.players.player6 = patternCreator.players.player6();
        patterns.players.player7 = patternCreator.players.player7();

    }
}