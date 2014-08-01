// start slingin' some d3 here.

var dataset = [1, 2, 3, 4, 5];

d3.select(".container").selectAll("svg")
  .data(dataset)
  .enter()
  .append("svg")
  .attr("class", "enemies");
  //.style("width", "50px")
  // .style("height", "50px");
