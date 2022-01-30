var config = {};

config.fps = 50;
config.zoomfactor = 1;
config.loadingtime = 1; // seconds
config.sounds = false;
config.debug = true; // allow shift and alt

config.colors = { wall: '#666', window: '#777', player: '#111' };

config.collision = { arcSizeRadius: 35, arcSizeRadiusEntity: 35, entityCollectRadius: 20, entityInteractRadius: 80, enemyFollowRadius: 400, enemyFollowRadiusRotate: 100 };

config.dimensions = { blockSize: 80, playerOverlap: 20 };

config.entities = {};

config.entities.player = { speed: 4, lsdspeed: 20, damagecounter: 80, damagevalue: 0.7, damagevalueenemy: 0.015, regeneratecounter: 5, regeneratevalue: 0.15, health: 20 };
config.entities.entity = { speed: 3, collision: true };
config.entities.enemy = { speed: 3, viewangle: 30, collision: true };