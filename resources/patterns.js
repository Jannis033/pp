var patterns = { carpets: {}, entities: {}, items: {}, obstacles: {}, players: {}, peters: {} };

var patternCreator = { carpets: {}, entities: {}, items: {}, obstacles: {}, players: {}, peters: {} };

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
    createAll: function() {
        this.loadPattern("coffee", "carpets");
        this.loadPattern("heizungA", "carpets");
        this.loadPattern("heizungM", "carpets");
        this.loadPattern("heizungE", "carpets");
        this.loadPattern("logo", "carpets");
        this.loadPattern("pissoir", "carpets");
        this.loadPattern("portal", "carpets");
        this.loadPattern("stairsX", "carpets");
        this.loadPattern("stairsY", "carpets");

        this.loadPattern("fischer", "entities");
        this.loadPattern("glauben", "entities");
        this.loadPattern("goldi", "entities");
        this.loadPattern("hilchenbach", "entities");
        this.loadPattern("mueller", "entities");
        this.loadPattern("mueller1", "entities");
        this.loadPattern("pflanzen", "entities");
        this.loadPattern("reiner", "entities");
        this.loadPattern("reiner1", "entities");
        this.loadPattern("reiner2", "entities");
        this.loadPattern("reiner3", "entities");
        this.loadPattern("schalter", "entities");
        this.loadPattern("schalter1", "entities");

        this.loadPattern("base", "items");
        this.loadPattern("cookie", "items");
        this.loadPattern("desi", "items");
        this.loadPattern("key", "items");
        this.loadPattern("water", "items");

        this.loadPattern("barrier", "obstacles");
        this.loadPattern("table", "obstacles");

        this.loadPattern("peter0", "peters");
        this.loadPattern("peter4", "peters");

        this.loadPattern("player0", "players");
        this.loadPattern("player1", "players");
        this.loadPattern("player2", "players");
        this.loadPattern("player3", "players");
        this.loadPattern("player4", "players");
        this.loadPattern("player5", "players");
        this.loadPattern("player6", "players");
        this.loadPattern("player7", "players");
        /*patterns.stairsY = this.stairsX();
        patterns.stairsY = this.stairsY();
        patterns.cookie = this.cookie();
        patterns.player0 = this.player0();
        patterns.player1 = this.player1();
        patterns.player2 = this.player2();
        patterns.player3 = this.player3();
        patterns.player4 = this.player4();
        patterns.player5 = this.player5();
        patterns.player6 = this.player6();
        patterns.player7 = this.player7();
        patterns.heizungA = this.heizungA();
        patterns.heizungM = this.heizungM();
        patterns.heizungE = this.heizungE();
        patterns.tisch2 = this.tisch2();
        patterns.portal = this.portal();
        patterns.pissoir = this.pissoir();
        patterns.stop = this.stop();
        patterns.en_glauben = this.en_glauben();
        patterns.en_mueller = this.en_mueller();
        patterns.en_hilchenbach = this.en_hilchenbach();
        patterns.logo = this.logo();*/
    }
}