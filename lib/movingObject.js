(function(){
  if (typeof Asteroids === "undefined" ){
    Asteroids = {};
  }
  
  var MovingObject = Asteroids.MovingObject = function(args) {
    this.pos = args.pos;
    this.vel = args.vel;
    this.radius = args.radius;
    this.color = args.color;
    this.game = args.game;
  };
  MovingObject.prototype.isWrappable = true;
  
  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fill();
  };
  
  MovingObject.prototype.move = function() {
      this.pos = [ this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];
      
      if (this.game.isOutOfBounds(this.pos)){
        if (this.isWrappable){
          this.pos = this.game.wrap(this.pos);
        }
      }
  };
  
  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var dist = Asteroids.Util.distance(this, otherObject);
    return (this.radius + otherObject.radius) > dist;
  };
  
  MovingObject.prototype.collideWith = function (otherObject) {
    
  }
})();
