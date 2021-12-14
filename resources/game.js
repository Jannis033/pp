var canvas = document.querySelector('canvas#main');
var context = canvas.getContext('2d');

var zoomfactor = 1;

var blockSize = 80 * zoomfactor;
var arcSizeRadius = 35 * zoomfactor;
var entityInteractRadius = 20 * zoomfactor;
var playerOverlap = 20 * zoomfactor;

var colors = { wall: '#666', player: '#111' };

var elements = [];
var entities = [];
var walls = [];
var carpets = [];

var mapProcessor = new MapProcessor();
var loaded = false;

var playerPosition;
var player;

var tmpplayerrotation = 0;
var rotateplayer = false;

var loadingtime = 1;

PatternHelper.createAll();

var camera;;

mapProcessor.loadMap(map1);

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
}, 16.5);

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
            keyboard.shift = true;
            break;
        case 18:
            getSound("lsd").loop(true).play().volume(10);
            keyboard.ctrl = true;
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
            keyboard.space = false;
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

    // if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
    //     if (xDiff > 0) {
    //         /* right swipe */
    //         keyboard.left = true;
    //     } else {
    //         /* left swipe */
    //         keyboard.right = true;
    //     }
    // } else {
    //     if (yDiff > 0) {
    //         /* down swipe */
    //         keyboard.up = true;
    //     } else {
    //         /* up swipe */
    //         keyboard.down = true;
    //     }
    // }
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
        this.audio.volume = (volume / 100);
        return this;
    }

    this.loop = function(loop) {
        this.looped = loop;
        return this;
    }

    this.load();
    this.volume(20);
}

// todo entspannungs sound