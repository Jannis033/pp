var canvas = document.querySelector('canvas#main');
var context = canvas.getContext('2d');

var zoomfactor = config.zoomfactor;

var blockSize = config.dimensions.blockSize * zoomfactor;
var playerOverlap = config.dimensions.playerOverlap * zoomfactor;

var arcSizeRadius = config.collision.arcSizeRadius * zoomfactor;
var arcSizeRadiusEntity = config.collision.arcSizeRadiusEntity * zoomfactor;
var entityCollectRadius = config.collision.entityCollectRadius * zoomfactor;
var entityInteractRadius = config.collision.entityInteractRadius * zoomfactor;
var enemyFollowRadius = config.collision.enemyFollowRadius * zoomfactor;
var enemyFollowRadiusRotate = config.collision.enemyFollowRadiusRotate * zoomfactor;

var elements = [];
var entities = [];
var enemies = [];
var walls = [];
var carpets = [];

var mapProcessor = new MapProcessor();
var loaded = false;

var playerPosition;
var player = null;

var tmpplayerrotation = 0;
var rotateplayer = false;

var loadingtime = config.loadingtime;

patternHelper.createAll();

var camera;

mapProcessor.loadMap(map1, "map1");

function saveProgress() {
    mapProcessor.saveMap();

    var mapsSave = Object.fromEntries(mapProcessor.mapsSave);

    localStorage.setItem('progress', JSON.stringify({ player: { position: { x: player.x, y: player.y }, rotation: player.rotation }, ms: mapsSave }));
}

function loadProgress() {
    var progress = JSON.parse(localStorage.getItem('progress'));

    if (!progress) return
    if (progress.ms == null || progress.player.position == null || progress.player.rotation == null) return;

    mapProcessor.mapsSave = new Map(Object.entries(progress.ms));
    mapProcessor.playerPosition = progress.player.position;
    mapProcessor.loadSavedMap(progress.player.rotation);
}

loadProgress();

var onUpdate = function() {
    camera.update();
    for (var i = 0; i < elements.length; i++) {
        elements[i].update();
    }
    if (keyboard.touch) keyboard.touch = false;
};

var onRender = function() {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    camera.preRender();

    for (var i = 0; i < elements.length; i++) {
        elements[i].render();
    }

    camera.postRender();
};

var keyboard = { up: false, down: false, left: false, right: false, space: false, shift: false, ctrl: false, touchx: 0, touchy: 0, touch: false };
var mouse = { x: 0, y: 0, pressed: false };

var onTick = function() {
    if (loaded) {
        onUpdate();
        onRender();
    }
}

var onResize = function(width, height) {
    context.canvas.width = width;
    context.canvas.height = height;
    camera.resize();
};

var resizeCallback = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    onResize(width, height);
};
window.addEventListener('resize', resizeCallback);
resizeCallback();

var tick = setInterval(function() {
    onTick();
}, 1000 / config.fps);

window.addEventListener("keydown", function(event) {
    if (rotateplayer) {
        return;
    }
    if (event.ctrlKey || event.metaKey || event.altKey) {
        event.preventDefault();
    }
    switch (event.keyCode) {
        case 87:
            keyboard.up = true;
            break;
        case 83:
            keyboard.down = true;
            break;
        case 65:
            keyboard.left = true;
            break;
        case 68:
            keyboard.right = true;
            break;
        case 32:
            keyboard.space = true;
            break;
        case 16:
            if (config.debug) {
                keyboard.shift = true;
            }
            break;
        case 18:
            if (config.debug) {
                getSound("lsd").loop(true).play().volume(10);
                keyboard.ctrl = true;
            }
            break;
    }
});

window.addEventListener("keyup", function(event) {
    if (rotateplayer) {
        return;
    }
    if (event.ctrlKey || event.metaKey || event.altKey) {
        event.preventDefault();
    }
    switch (event.keyCode) {
        case 87:
            keyboard.up = false;
            break;
        case 83:
            keyboard.down = false;
            break;
        case 65:
            keyboard.left = false;
            break;
        case 68:
            keyboard.right = false;
            break;
        case 32:
            if (document.getElementById("deathscreen").classList.contains("show")) {
                player.respawn();
            } else {
                keyboard.space = false;
                removeAllMeetings();
            }
            break;
        case 16:
            keyboard.shift = false;
            break;
        case 18:
            getSound("lsd").pause();
            keyboard.ctrl = false;
            break;
    }
});

window.addEventListener("mousedown", function() {
    if (rotateplayer) {
        return;
    }
    mouse.pressed = true;
});

window.addEventListener("mouseup", function() {
    if (rotateplayer) {
        return;
    }
    mouse.pressed = false;
});

window.addEventListener("mousemove", function(event) {
    if (rotateplayer) {
        return;
    }
    mouse.x = event.x;
    mouse.y = event.y;
});

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);
document.addEventListener('touchend', handleTouchEnd, false);

var xDown = null;
var yDown = null;
var down = false;

function limitNumberWithinRange(num, min, max) {
    const MIN = min || 1;
    const MAX = max || 20;
    const parsed = parseInt(num)
    return Math.min(Math.max(parsed, MIN), MAX)
}

function getTouches(evt) {
    return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    if (rotateplayer) {
        return;
    }
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
    down = true;
};

function handleTouchMove(evt) {
    if (rotateplayer) {
        return;
    }
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    keyboard.touchx = limitNumberWithinRange(-xDiff / 50, -1, 1);
    keyboard.touchy = limitNumberWithinRange(-yDiff / 50, -1, 1);
    down = Math.abs(xDiff) < 10 && Math.abs(yDiff) < 10;
};

function handleTouchEnd() {
    if (rotateplayer) {
        return;
    }
    /* reset values */
    xDown = null;
    yDown = null;
    keyboard.touchx = 0;
    keyboard.touchy = 0;
    keyboard.touch = down;
    if (down) {
        if (document.getElementById("deathscreen").classList.contains("show")) {
            player.respawn();
        } else {
            removeAllMeetings();
        }
    }
    down = false;
}

var sounds = {};

function getSound(name, file = name) {
    if (!sounds[name]) {
        sounds[name] = new Sound(file);
    }
    return sounds[name];
}

var Sound = function(file) {
    this.file = file;
    this.buffer = 0.44;
    this.looped = false;

    this.load = function() {
        var _self = this;
        this.audio = new Audio('audio/' + this.file + '.mp3');
        this.audio.addEventListener('timeupdate', function() {
            if (this.currentTime > this.duration - _self.buffer && _self.looped) {
                this.currentTime = 0
                this.play()
            }
        });
        return this;
    }

    this.play = function() {
        if (!this.audio || this.audio.paused)
            this.audio.play();
        return this;
    }

    this.restart = function() {
        this.audio.currentTime = 0;
        this.audio.play();
        return this;
    }

    this.pause = function() {
        this.audio.pause();
        return this;
    }

    this.stop = function() {
        this.audio.pause();
        this.audio.currentTime = 0;
        return this;
    }

    this.volume = function(volume) {
        if (config.sounds)
            this.audio.volume = (volume / 100);
        return this;
    }

    this.loop = function(loop) {
        this.looped = loop;
        return this;
    }

    this.load();
    if (config.sounds)
        this.volume(20);
    else this.audio.volume = 0;
}

// todo entspannungs sound