cc.Class({
    extends: cc.Component,

    properties: {
        speed: 10.0
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        this.node.x -= this.speed * dt;
        
        if(this.node.x <= 0 - this.node.getContentSize().width / 2)
        {
            cc.director.getScene().removeChild(this.node, true);
        }
    },
});
