"use strict";

var game = game || {};

game.frame = function(parameters){
    var that = {};
    var context = parameters.context;
    var entity = parameters.entity;
    var score = parameters.score;
    var box = parameters.box;

    that.update = function() {
        context.clearRect(0, 0, 1280, 1024);
        entity.update();
        entity.draw();
        box.draw();

        if(box.getX() <= entity.getX() && entity.getX() < box.getX()+50 &&
           box.getY() <= entity.getY() && entity.getY() < box.getY()+50) {

           entity = game.entityFactory({context:context}).createInvader();
           score = game.score({element: $('div').children('span').eq(1), value: 0});

           }

        score.increment();
        score.report();

        //$('div').children('span').eq(1).html(score++);
    }

    return that;
};