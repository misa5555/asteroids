(function () {
  
  if (typeof Asteroids === "undefined") {
    Asteroids = {};
  }
  
  
  
  var Bullet = Asteroids.Bullet = function (game, vel) {
    Asteroids.MovingObject.call(this,  {
      color: Bullet.COLOR,
      radius: Bullet.RADIUS,
      pos: game.ship.pos,
      vel: vel,
      game: game
      
    });
    this.isWrappable = false;
    game.bullets.push(this);
  };
  
  Bullet.COLOR = "red";
  Bullet.RADIUS = 2;
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Bullet);
    
  Bullet.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.remove(otherObject);
    }
  }
  
})();
