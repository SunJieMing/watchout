// start slingin' some d3 here.

var dataset = [1, 2, 3, 4, 5];

d3.select(".container").selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("class", "enemies")
  .attr("cx", "50")
  .attr("cy", "50")
  .attr("r", "50");
  //.style("width", "50px")
  // .style("height", "50px");
