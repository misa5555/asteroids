(function () {
  
  if (typeof Asteroids === "undefined") {
    Asteroids = {};
  }
  
  var Asteroid = Asteroids.Asteroid = function (game) {
    Asteroids.MovingObject.call(this,  {
      color: Asteroid.COLOR,
      radius: Asteroid.RADIUS,
      pos: game.randomPosition(),
      vel: Asteroids.Util.randomVec(-5, 5),
      game: game
    });
  };
  
  Asteroids.Util.inherits(Asteroids.MovingObject, Asteroid);
  
  Asteroid.COLOR = "white";
  Asteroid.RADIUS = 10;
  
  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject instanceof Asteroids.Ship) {
      otherObject.relocate();
    }
  }
  
})();
