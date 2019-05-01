function linechart(dataFile,svgNum){
  var svg = d3.select(svgNum),
      margin = {top: 20, right: 80, bottom: 30, left: 50},
      width = svg.attr("width") - margin.left - margin.right,
      height = svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var parseTime = d3.timeParse("%Y-%m-%d");

  var x = d3.scaleTime().range([0, width]),
      y = d3.scaleLinear().range([height, 0]),
      z = d3.scaleOrdinal()
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  var line = d3.line()
      .curve(d3.curveBasis)
      .x(function(d) { return x(d.Date); })
      .y(function(d) { return y(d.value); });



  d3.csv(dataFile, type, function(error, data) {
    if (error) throw error;

    var cities = data.columns.slice(1).map(function(id) {
      return {
        id: id,
        values: data.map(function(d) {
          return {Date: d.Date, value: d[id]};
        })
      };
    });

    x.domain(d3.extent(data, function(d) { return d.Date; }));

    y.domain([
      d3.min(cities, function(c) { return d3.min(c.values, function(d) { return d.value+0.2; }); }),
      d3.max(cities, function(c) { return d3.max(c.values, function(d) { return d.value; }); })
    ]);

    z.domain(cities.map(function(c) { return c.id; }));

    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y))
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("fill", "#000")
        .text("Fraction of Change");

    var city = g.selectAll(".city")
      .data(cities)
      .enter().append("g")
        .attr("class", "city");

    city.append("path")
        .attr("class", "line")
        .attr("d", function(d) { return line(d.values); })
        .style("stroke", function(d) { return z(d.id); });

  var legend_keys = ["Number of Families", "English Tweet Volume", "Arabic Tweet Volume","Positive English Tweets","Negative English Tweets","Positive Arabic Tweets","Negative Arabic Tweets"]

      var legend = g.append("g")
          .attr("font-family", "sans-serif")
          .attr("font-size", 10)
          .attr("text-anchor", "end")
        .selectAll("g")
        .data(legend_keys)   
        .enter().append("g")
          .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

      legend.append("rect")
          .attr("x", 710)
          .attr("width", 19)
          .attr("height", 19)
          .attr("fill", z);

      legend.append("text")
          .attr("x", 700)
          .attr("y", 9.5)
          .attr("dy", "0.32em")
          .text(function(d) { return d; });


  });

  function type(d, _, columns) {
    d.Date = parseTime(d.Date);
    for (var i = 1, n = columns.length, c; i < n; ++i) d[c = columns[i]] = +d[c];
    return d;
  }
}

linechart('ninawalinechart.csv','#svg4')
