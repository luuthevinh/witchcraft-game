cc.Class({
    extends: cc.Component,

    properties: {
        ground:
        {
            default: null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function () {
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.ground);
    
        this.createGround(0, cc.view.getFrameSize().height * 0.2);
    },

    // called every frame
    update: function (dt) {
        if(this.lastGround === undefined) 
            return;
        
        var right = this.lastGround.x + this.lastGround.getContentSize().width / 2;
        
        if(right <= cc.view.getFrameSize().width )
        {
            this.createGround(right, cc.view.getFrameSize().height * 0.2);
        }
    },
    
    createGround: function(x, y) {
        var node = cc.instantiate(this.ground);
        node.setPosition(x + node.getContentSize().width / 2, y);
        
        cc.director.getScene().addChild(node);
        
        this.lastGround = node;
    }
});
