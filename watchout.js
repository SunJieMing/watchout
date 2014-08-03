// // start slingin' some d3 here.

// //var dataset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
// // var dataset = [];
// // for(var i = 0; i < 100; i++){
// //   dataset.push(20);
// // };
// var dataset = [10, 20, 30, 40, 50];
// var playerdata = [1];

// var setPosition = function(data) {
//   return data * Math.random()*50;
// };

// var asteroids = d3.select(".container").selectAll("image")
// .data(dataset)
// .enter()
// .append("svg:image")
// .attr("xlink:href", "asteroid.png")
// .attr("class", "enemies")
// .attr("x", setPosition)
// .attr("y", setPosition)
// .attr("height", "30px")
// .attr("width", "30px");


// var drag = d3.behavior.drag()
// .on("drag", function(d){
//   d3.select(this)
//   .attr("transform", "translate(" +d3.event.x + "," + d3.event.y + ")")
//   ;
// });

// var player = d3.select(".container").selectAll("#player")
// .data(playerdata)
// .enter()
// .append("circle")
// .attr("id", "player")
// .attr("fill", "#222")
// .attr("r", "20")
// .call(drag);

// var position = function(d){
//   d3.selectAll(".enemies").each(function(d,i) {
//     var testPlayer = collide(d3.select(this));
//     console.log(testPlayer(d3.select('.container').selectAll('#player')));
//   })

//   return function(t){}
// }


// function collide(d, i) {
//   var endX = this.attr("x", setPosition);
//   var endY = this.attr("y", setPosition);
//   var r = 31,
//   nx1 = this.attr("x") - r,
//   nx2 = this.attr("x") + r,
//   ny1 = this.attr("y") - r,
//   ny2 = this.attr("y") + r;
//   return function(t) {
//     var xP = player.attr('x');
//     var yP = player.attr('y');
//     nx2 = parseFloat(nx2);
//     ny2 = parseFloat(ny2);

//     if(xP > nx1 && xP < nx2 && yP > ny1 && yP < ny2){
//       console.log('hit!');
//       return true;
//     }
//     return "test";

//   };
// }
// // current = current + (destination - current) * t;

// var move = function() {
//   d3.select(".container").selectAll("image")
//   .data(dataset)
//   .transition()
//   .duration(3000)
//   .tween("checkPosition", collide)
//   // .attr("x", setPosition)
//   // .attr("y", setPosition)
//   ;
// };

// // d3.select(".container").selectAll("image")
// // .data(dataset)
// // .tween("position", position(d));

// //move.on('tick')

// setInterval(move, 3000);



var settings = {
  n: 30,
  r: 20,

};
var score = 0;

var asteroids = board.selectAll('div.board')
  .data(d3.range(settings.n))
  .enter().append('div').attr('class', 'asteroid')
  .style({
    top: randY,
    left: randX,
    width: settings.r * 2 + 'px',
    height: settings.r * 2 + 'px'
  });

  var move = function(element) {
    element.transition().duration(settings.duration)style({
      top: randY,
      left: randX
    }).each('end', function() { move(d3.select(this)) });
  }

move();

board.on('mousemove', function() {
  var loc = d3.mouse(this);
  mouse = {x: loc[0], y: loc[1]};
});

var scoreTicker = function() {
  score = score + 1;
  bestScore = Math.max(score, bestScore)
  d3.select('scoreboard .current span').text(score);
  d3.select('scoreboard .high span').text(bestScore);
};

setInterval(scoreTicker, 100);





