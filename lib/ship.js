(function(){
  if (typeof Asteroids === "undefined" ){
    Asteroids = {};
  }
 
  
  var Ship = Asteroids.Ship = function(game){
    Asteroids.MovingObject.call(this, {
      radius: Ship.RADIUS,
      color: Ship.COLOR,
      pos: game.randomPosition(),
      vel: [0, 0],
      game: game
    });
    this.angle = 0;
    this.impulse = 0;
  };
  
  
  Ship.RADIUS = 10;
  Ship.COLOR = "blue";
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Ship);
 
  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
    this.game.lives -= 1;
  };
  
  Ship.prototype.rotate = function (impulse) {
    this.angle += impulse * 10;
  }
  
  Ship.prototype.power = function (impulse) {    
    this.vel[0] += Math.cos(Asteroids.Util.toRadians(this.angle)) * impulse * 2;
    this.vel[1] += Math.sin(Asteroids.Util.toRadians(this.angle)) * impulse * 2;
    console.log(this.vel);
  };
  
  Ship.prototype.fireBullet = function () {
    
    var bulletVetocity = [ Math.cos(Asteroids.Util.toRadians(this.angle)) * 10,
    
    Math.sin(Asteroids.Util.toRadians(this.angle)) * 10 ];
    
    bullet = new Asteroids.Bullet(this.game, bulletVetocity);
  }
  
  Ship.prototype.draw = function () {
    ctx.save();
    ctx.translate(this.pos[0], this.pos[1]);
    ctx.rotate(Asteroids.Util.toRadians(this.angle));
    ctx.beginPath();
    // ctx.arc(0, 0, 50, 0, 2*Math.PI);
    ctx.moveTo(0, - this.radius);
    ctx.lineTo(this.radius * (Math.sqrt(3) / 2), this.radius / 2)
    ctx.lineTo(-this.radius * (Math.sqrt(3) / 2), this.radius / 2);
    ctx.fill();
    ctx.restore();
  };
  
})();
