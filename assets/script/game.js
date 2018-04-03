const global = require('global');

cc.Class({
    extends: cc.Component,

    properties: {
        ball : cc.Sprite,
    },

    onLoad: function(){
        this.physicsManager = cc.director.getPhysicsManager();
        this.physicsManager.enabled = true;
        this.hasOver = false
        this.ground_top_r = cc.find("ground_top_r");
        this.ground_bottom_r = cc.find("ground_bottom_r");
        this.ground_top_l = cc.find("ground_top_l");
        this.ground_bottom_l = cc.find("ground_bottom_l");
        this.bgIndex = 0;
        this.groundIndex = 0;
        this.count_touch = 0;
        this.first_touch = cc.p(0,0);
        this.w = cc.director.getWinSize().width;
        this.isLeft = true;

        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;

        var self = this;
        this.node.on('touchstart', function (touch, event ) {
            if(global.getOverTag() === false) {
                console.log("start");
                self.first_touch = touch.getLocation();
                self.count_touch = 0;
            }
        });

        this.node.on('touchend', function (touch, event ) {
            if(global.getOverTag() === false) {
                console.log("end");
                var distance = self.distanceJump(self.first_touch,touch.getLocation());
                var ratio = self.ratioJump(self.first_touch,touch.getLocation());
                self.jumpBall(distance,ratio);
            }
        });
    },

    distanceJump: function (p1,p2) {
        return cc.pDistance(p1,p2);
    },

    angelJump : function (p1,p2) {
        return Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    },

    ratioJump: function (p1,p2) {
        return this.distanceJump(p1,p2)/(p2.x - p1.x);
    },
    
    jumpBall : function (distance,ratio) {

        if(global.getMoveTag() === false) {
            this.ball.node.getComponent(cc.RigidBody).gravityScale = 9.8;
            global.setMoveTag(false);
        }
        var speed = distance;
        this.ball.node.getComponent(cc.RigidBody).linearVelocity = new cc.v2(6*speed,6*speed*ratio);

        self.count_touch = 0;
    }
});
