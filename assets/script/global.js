
var global = module.exports;

let _move = false;
let _gameover = false;
let _score = 0;
let _emptyDunk = false;
let _combo = 0;
let _groundIndex = 1;


global.setScore = function (state,score) {
    if(state === true) {
        _score = _score + score;
    } else {
        _score = 0;
    }
};

global.getScore = function () {
    return _score;
};

global.setMoveTag = function (tag) {
    _move = tag;
};

global.getMoveTag = function () {
    return _move;
};

global.setOverTag = function (tag) {
    _gameover = tag;
};

global.getOverTag = function () {
    return _gameover;
};

global.setEmptyDunk = function (empty) {
    return _emptyDunk = empty;
};

global.getEmptyDunk = function () {
    return _emptyDunk;
};

global.setCombo = function (state, combo) {
    if(state === true) {
        _combo = _combo + combo;
    } else {
        _combo = 0;
    }
};

global.getCombo = function () {
    return _combo
};

global.setGroundIndex = function (index) {
    _groundIndex = index;
};

global.getGroundIndex = function () {
    return _groundIndex
};


