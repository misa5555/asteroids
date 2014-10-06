(function(){
  if (typeof Asteroids === "undefined" ){
    Asteroids = {};
  }
  
  var GameView = Asteroids.GameView = function(game, ctx){
    this.game = game;
    this.ctx = ctx;
  };
  
  GameView.prototype.start = function () {
    this.bindKeyHandlers();
    // this.game.addAsteroids();
    var gameLoop = setInterval(function () {
      if (!this.game.isOver()){
        this.game.moveObjects();
        this.game.draw(this.ctx);
      }
      else if(this.game.isWon()){
        alert("You won!");
        clearInterval(gameLoop);
      }
      else if(this.game.isLost()){
        alert("You lost");
        clearInterval(gameLoop);
      }
    }, 20);
  };
  
  GameView.prototype.bindKeyHandlers = function() {
    var game = this.game
    key('up', function(){ game.ship.power(1)});
    // key('down', function(){ game.ship.power([0, 1])});
    key('right', function(){ game.ship.rotate(1)});
    key('left', function(){ game.ship.rotate(-1)});
    key('space', function() { game.ship.fireBullet()});
  };
  
})();
