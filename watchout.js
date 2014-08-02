// start slingin' some d3 here.

//var dataset = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
// var dataset = [];
// for(var i = 0; i < 100; i++){
//   dataset.push(20);
// };
var dataset = [1, 2, 3, 4, 5];
var playerdata = [1];

var setPosition = function(data) {
  return data * Math.random()*50;
};

// var changePostion = function(data) {

// }

d3.select(".container").selectAll("image")
.data(dataset)
.enter()
.append("svg:image")
.attr("xlink:href", "asteroid.png")
.attr("class", "enemies")
.attr("x", setPosition)
.attr("y", setPosition)
.attr("height", "30px")
.attr("width", "30px");
// .attr("r", "15");

// var drag = d3.behavior.drag();
// var dragging = function() {

// };

var drag = d3.behavior.drag()
.on("drag", function(d){
  d3.select(this)
  .attr("transform", "translate(" +d3.event.x + "," + d3.event.y + ")");
});

d3.select(".container").selectAll("#player")
.data(playerdata)
.enter()
.append("circle")
.attr("id", "player")
.attr("fill", "#222")
.attr("r", "20")
.call(drag);
// .call(d3.behavior.on("click", "dragging"));


// var checkCollision = function() {
//   var $(".enemies").
// }


var move = function() {
  d3.select(".container").selectAll("image")
  .data(dataset)
  .transition()
  .duration(3000)
  .attr("x", setPosition)
  .attr("y", setPosition);
};

var collision = function(){
  d3.select(".container").selectAll("image")
  .data(dataset)
  .call(function() {
    console.log(this);
    for(var i = 0; i < this[0].length; i++) {
      console.log(this[0][i].attr("x"));
    }
  });
};

setInterval(collision, 500);
setInterval(move, 3000);

// d3.selectAll("div").call(drag);






















