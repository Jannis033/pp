let map1 = [
    'W W W W W W W W W W W W W W W W W W W W',
    'W       W                             W',
    'W       W           E                 W',
    'W       W                             W',
    'W       W                 W W W W W W W',
    'W     W W                             W',
    'W                   E                 W',
    'W                                     W',
    'W                                     W',
    'W W W W W W W W W W W W W W           W',
    'W                         W           W',
    'W     P                   W           W',
    'W                         W           W',
    'W W W W W W W             W           W',
    'W                         W           W',
    'W               W W W W W W           W',
    'W                         W           W',
    'W                                     W',
    'W         W W W                       W',
    'W           W                         W',
    'W W W W W W W W W W W W W W W W W W W W'
];

var pokefunctions = function() {
    this.f1 = function() {
        console.log("taubsu");
    }
}

var pfnc = new pokefunctions();

var pokelist = new Map();

pokelist.set("1", { name: "Taubsi", function: pfnc.f1 });
pokelist.set("2", { name: "Pikachu", function: pfnc.f2 });

pokelist.get("1")["function"](); // run taubsi function example
