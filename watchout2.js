var settings = {
  n: 30,
  r: 20,
  duration: 2000,
  height: 100 + 'vw',
  width: 100 + 'vw'
};
var score = 0;
var bestScore = 0;
var mouse = {};

var randX = function(){ return .9 * Math.random() * document.documentElement.clientWidth + 'px';}
var randY = function(){ return .9 * Math.random() * document.documentElement.clientHeight + 'px';}


var board = d3.select('div .container').
  style({height: settings.height, width: settings.width});

var asteroids = d3.select('.container').selectAll('div.board')
  .data(d3.range(settings.n))
  .enter().append('div').attr('class', 'asteroid')
  .style({
    'background-color': 'black',
    width: settings.r * 2 + 'px',
    height: settings.r * 2 + 'px',
    left: randX,
    top: randY,
    'z-index': -1

  });

  var move = function(element) {
    element.transition().duration(settings.duration).style({
      top: randY,
      left: randX
    }).each('end', function() { move(d3.select(this)) });
  }

move(asteroids);

d3.select('body').on('mousemove', function() {
  var loc = d3.mouse(this);
  mouse = {x: loc[0], y: loc[1]};
});

var score = 0;
var collisionCount = 0;

var scoreTicker = function() {
  score++;
  bestScore = Math.max(score, bestScore)
  d3.select('.scoreboard .current span').text(score);
  d3.select('.scoreboard .high span').text(bestScore);
};

setInterval(scoreTicker, 100);

var prevCollision = false;
var detectCollisions = function(){
  var collision = false;
  asteroids.each(function() {
    var cx = this.offsetLeft + settings.r;
    var cy = this.offsetTop + settings.r;
    var x = cx - mouse.x;
    var y = cy - mouse.y;
    if(Math.sqrt(x*x + y*y) < settings.r){
      collision = true;
    }
  });

  if(collision){
    score = 0;
    if(prevCollision !== collision){
      collisionCount = collisionCount + 1;
      d3.select('.scoreboard .collisions span').text(collisionCount);
    }
  }
  prevCollision = collision;
}

d3.timer(detectCollisions);
