const global = require('global');

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    onLoad () {
        this.node.getComponent(cc.RigidBody).gravityScale = 4
    },

    onBeginContact: function (contact, selfCollider, otherCollider) {
        switch (otherCollider.tag) {
            case 0:
               // global.setOverTag(true);
            break;
        }
    },
});
