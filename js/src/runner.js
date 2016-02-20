"use strict";

var game = game || {};

game.runner = function(parameters){
    var that = {};
    var document = parameters.document;
    var window = parameters.window;
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var entity = game.entityFactory({context:context}).createInvader();
    var box = game.entityFactory({context:context}).createBox();
    var score = game.score({element: $('div').children('span').eq(1), value: 0});
    var frame = game.frame({context:context, entity:entity, box:box, score: score});

    that.go = game.loop({window: window, update: frame.update}).run;
    $(document.body).on('keydown', game.keyPressEventHandler({entity:entity}).handle);
    return that;
};