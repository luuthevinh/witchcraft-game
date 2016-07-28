cc.Class({
    extends: cc.Component,

    properties: {
        gravity: -10,
        velocity: new cc.Vec2(0, 0),
        jumpForce: 8
    },

    // use this for initialization
    onLoad: function () {
        var self = this;
        
        // collision manager
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = false;
        
        // event keyboard
        //cc.eventManager.addListener({
        //    event: cc.EventListener.KEYBOARD,
        //    onKeyPressed: this.onKeyPressed.bind(this),
        //    onKeyReleased: this.onKeyReleased.bind(this),
        //}, this.node);
        
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            self.jump();
        }, this);
        
        this.status = "jump";
    },
    
    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        
        this.node.x += this.velocity.x;
        
        if(this.status == "grounded")
        {
            return;
        }
        
        this.velocity.y += this.gravity * dt;
        this.node.y += this.velocity.y;
    },
    
    onCollisionEnter: function(other, self) {
        
        this.velocity.y = 0;
        this.status = "grounded";
        
        // set position
        this.node.y = other.node.y + (other.node.getBoundingBox().height / 2 + this.node.getBoundingBox().height / 2);
        
        var anim = this.getComponent(cc.Animation);
        anim.play('witch-run');
    },
    
    jump: function() {
        
        this.velocity.y = this.jumpForce;
        this.status = "jump";
        
        var anim = this.getComponent(cc.Animation);
        anim.play('witch-jump');
    }
});
