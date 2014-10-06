(function(){
  if (typeof Asteroids === "undefined" ){
    Asteroids = {};
  }
  
  var Util = Asteroids.Util = {};
  
  //Asteroids.Util.inherits
  Util.inherits = function(parent, child) {
    var Surrogate = function (){};
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
  };
  
  Util.randomVec = function (min, max) {
    return [ min + Math.random() * max, min + Math.random() * max];
  };
  
  Util.distance = function(obj1, obj2){
    return Math.sqrt(Math.pow( (obj1.pos[0] - obj2.pos[0]), 2 ) + 
           Math.pow( (obj1.pos[1] - obj2.pos[1]), 2));
  };
  
  Util.toDegrees = function(radians) {
    return radians * (180 / Math.PI);
  };
  
  Util.toRadians = function(degrees) {
    return degrees * (Math.PI / 180);
  };
  
})();


