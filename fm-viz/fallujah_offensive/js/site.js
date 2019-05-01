function generateTimeAxis(id,data){

    var margin = {top: 0, right: 0, bottom: 25, left: 0},
        width = $(id).width() - margin.left - margin.right,
        height =  $(id).height() - margin.top - margin.bottom;

    var chart = d3.select(".chart")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleBand()
        .rangeRound([0, width])
        .paddingInner(0.1);


    var y =  d3.scaleLinear()
        .rangeRound([height, 0]);

    var xAxis = d3.axisBottom(x)
        .tickPadding(10);

    var yAxis = d3.axisLeft(y);

    var svg = d3.select(id).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var max = d3.max(data, function(d) { return 30; });  

    x.domain(data.map(function(d) {return d.Date; }));

    y.domain([0, max]);

    svg.append("g")
        .attr("class", "x axis")
        // .style({'fill': 'black'})
        .attr("transform", "translate(0," + height-10 + ")")
        .call(xAxis);

    svg.selectAll(".positiveE")
        .data(data)
        .enter().append("rect")
        .attr("fill", "#011e41")
        .attr("x", function(d) { return x(d.Date); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return 60; })
        .attr("height", function(d) {
            return height;});

    svg.selectAll(".current")
        .data(data)
        .enter().append("rect")
        .attr("fill", "rgba(0, 0, 255, 0.8)")
        .attr("class", "current")
        .attr("x", function(d) { return x(d.Date); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(max); })
        .attr("height", function(d) {
            return height - y(max);})
        .attr("opacity",0)
        .attr("id",function(d,i){return "barSelect1"+i;})
        .on("click",function(d,i){
            d3.select("#barSelect1"+currentWeek).attr("opacity",0);
            currentWeek=i;
            d3.select("#barSelect1"+currentWeek).attr("opacity",0.15);
            transitionMap();

        })
}


//draw tweets map
function generateMap(){
    var marginMap = {top: 10, right: 10, bottom: 10, left: 10},
        widthMap = $('#map1').width() - marginMap.left - marginMap.right,
        heightMap = $('#map1').height() - marginMap.top - marginMap.bottom;

    var projection = d3.geoMercator()
        .center([40,33])
        .scale(2500);


    d3.select('#map1')
        .selectAll('svg')
        .remove();

    var svgMap = d3.select('#map1').append("svg")
        .attr("width", widthMap)
        .attr("height", heightMap);

    var path = d3.geoPath()
        .projection(projection);

    var gMap2 = svgMap.append("g");

    gMap2.selectAll("path")
        .data(SyrAndIrq.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("stroke",'#cccccc')
        .attr("fill",'#aaaaaa')
        .attr("id",function(d){
            return d.properties.ID_1;
        })
        .attr("class","region");


    var gMap = svgMap.append("g");

    gMap.selectAll("path")
        .data(SyrAndIrq.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("stroke",'#aaaaaa')
        .attr("fill",'none')
        .attr("class","country")

   gMap.append("text")
        .attr("x",0)
        .attr("y",300)
        .text("Number of Families Fleed")
        .attr("font-size","12px");

    gMap.append("text")
        .attr("x",0)
        .attr("y",313)
        .text("from Anbar Governorate")
        .attr("font-size","12px");

    gMap.append("rect")
        .attr("x", 0)
        .attr("y", 330)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill","#66b3ff")
        .attr("stroke-width",1);

    var symbolGenerator = d3.symbol()
        .type(d3.symbolStar)
        .size(50);

    var pathData = symbolGenerator();

    svgMap.append("g")
        .selectAll('path')
        .data([0, 0])
        .enter()
        .append('path')
        .attr('d', pathData)
        .attr('transform', 'translate(526,288)')
        .attr('fill', '#ddd')
        .attr('stroke', '#999');

    svgMap.append("g")
        .selectAll('path')
        .data([0, 0])
        .enter()
        .append('path')
        .attr('d', pathData)
        .attr('transform', 'translate(7 ,265)')
        .attr('fill', '#ddd')
        .attr('stroke', '#999');

     gMap.append("text")
        .attr("x",20)
        .attr("y",268)
        .text("Fallujah")
        .attr("font-size","10px");

   
    gMap.append("text")
        .attr("x",18)
        .attr("y",338)
        .text("-1,000 and below")
        .attr("font-size","10px");

    gMap.append("rect")
        .attr("x", 0)
        .attr("y", 350)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill","#99ccff");

    gMap.append("text")
        .attr("x",18)
        .attr("y",358)
        .text("-200 to -999")
        .attr("font-size","10px");

    gMap.append("rect")
        .attr("x", 0)
        .attr("y", 370)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill","#cce6ff");

    gMap.append("text")
        .attr("x",18)
        .attr("y",378)
        .text("-1 to -199")
        .attr("font-size","10px");

    gMap.append("rect")
        .attr("x", 0)
        .attr("y", 390)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill","#ffffff")
        .attr("stroke","#000000");

    gMap.append("text")
        .attr("x",18)
        .attr("y",398)
        .text("0")
        .attr("font-size","10px");

    gMap.append("rect")
        .attr("x", 0)
        .attr("y", 410)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill","#ffcccc");

    gMap.append("text")
        .attr("x",18)
        .attr("y",418)
        .text("1 to 199")
        .attr("font-size","10px");

    gMap.append("rect")
        .attr("x", 0)
        .attr("y", 430)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill","#ff8080");

    gMap.append("text")
        .attr("x",18)
        .attr("y",438)
        .text("200 to 1,000")
        .attr("font-size","10px");

    gMap.append("rect")
        .attr("x", 0)
        .attr("y", 450)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill","#ff3333");

    gMap.append("text")
        .attr("x",18)
        .attr("y",458)
        .text("1,000 to 2,999")
        .attr("font-size","10px");

    gMap.append("rect")
        .attr("x", 0)
        .attr("y", 470)
        .attr("width", 10)
        .attr("height", 10)
        .attr("fill","#cc0000");

    gMap.append("text")
        .attr("x",18)
        .attr("y",478)
        .text("3,000 and above")
        .attr("font-size","10px");

    var mapLabels = svgMap.append("g");

    mapLabels.selectAll('text')
        .data(SyrAndIrq.features)
        .enter()
        .append("text")
        .attr("x", function(d){
            return path.centroid(d)[0]-20;})
        .attr("y", function(d){
            return path.centroid(d)[1];})
        .attr("dy", ".55em")
        .attr("class","maplabel")
        .style("font-size","10px")
        .attr("opacity",1.2)
        .text(function(d){
            return d.properties.NAME_1;
        });





}



function transitionMap(){
    $('#week1').html("<center><h4>Number of Families Who Have Fled from Anbar Governorate</h4></center>");

    var projection = d3.geoMercator()
        .center([mapSettings[currentWeek].lng,mapSettings[currentWeek].lat])
        .scale(mapSettings[currentWeek].scale);

    var path = d3.geoPath()
        .projection(projection);

    d3.selectAll('.country')
        .attr('d', path);

    d3.selectAll('.maplabel')
        .attr("x", function(d,i){
            return path.centroid(d)[0]-15;})
        .attr("y", function(d,i){
            return path.centroid(d)[1];});

    d3.selectAll('.region').attr('d', path);



    map_data = all_map[currentWeek].Cases;




    map_data.forEach(function(element){
        var tooltip = d3.select("body").append("div")   
            .attr("class", "tooltip")               
            .style("opacity", 0);
        d3.select("#"+element.Region.replace(/\s/g, ''))
            .attr("fill",function(d){
                if (mapswitch == 'all'){
                return convertCasesToColorAll(element.Cases);
                }
            })
             .on("mouseover", function(d) { 
                d3.select("#myText").remove();
                var tooltip = d3.select("body").append("div");
                tooltip.attr("class", "tooltip");
                tooltip.style("opacity", 0);   
                tooltip.transition()        
                    .duration(100)      
                    .style("opacity", 0.9);  
                tooltip.html("Date: "+ all_map[currentWeek].Date + "<br/>"  + "Number of Families: "+numberWithCommas(element.Cases))
                    .attr("id", "myText") 
                    .style("left", (d3.event.pageX) + "px")     
                    .style("top", (d3.event.pageY) + "px"); 
                })
                .on("mouseout", function(d) { 
                // d3.select("#myText").attr("opacity", 0);
                tooltip.transition()        
                    .duration(100)
                    .style("opacity", 0);
                
                d3.select("#myText").remove(); 
            });

    });


// bubbles on map

}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// click bubble on the map to show event detail

function convertCasesToColorAll(cases){
    var colors = ["#ffffff","#66b3ff","#99ccff","#cce6ff","#ffcccc","#ff8080","#ff3333","#cc0000"];

    if(cases==0){
        c=0;
    } else if(cases < -1000){
        c=1;
    } else if(cases< -200){
        c=2;
    } else if(cases<0){
        c=3;
    } else if(cases<200){
        c=4;
    } else if (cases<1000) {
        c=5;
    } else if (cases<3000) {
        c=6;
    } else{
        c=7;
    }
    ;
    return colors[c];
}




var currentWeek=0;
// $('#titleBarchar').html("<h4>Bar Graph of <span style='color:#1c9eff'>" + "Total" +' '+ "</span>" + "Tweets in the month " + mapSettings[currentWeek].Date + "</h4>");
generateTimeAxis("#timeaxis1", all_map );

// 
d3.select("#barSelect1"+currentWeek).attr("opacity",0.15);
automap = 'all';
generateMap();
// default title of map
$('#week1').html("<h4>Heat Map of Number of Families Fleed from Anbar Governorate" + " in the two week period of " + mapSettings[currentWeek].Date );
mapswitch = 'all';
transitionMap();


// handle on click event to switch between maps, titles





$(document).keydown(function(e) {
    switch(e.which) {
        case 37:
            d3.select("#barSelect1"+currentWeek).attr("opacity",0);
            currentWeek=currentWeek-1;
            if(currentWeek<0){currentWeek=0;}
            d3.select("#barSelect1"+currentWeek).attr("opacity",0.15);
            transitionMap();
            break;

        case 39:
            d3.select("#barSelect1"+currentWeek).attr("opacity",0);
            currentWeek=currentWeek+1;
            if(currentWeek>all_map.length-1){
                currentWeek=all_map.length-1;
            }
            d3.select("#barSelect1"+currentWeek).attr("opacity",0.15);
            transitionMap();
            break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});


function autoAdvance(){
    d3.select("#barSelect1"+currentWeek).attr("opacity",0);
    currentWeek=currentWeek+1;
    if(currentWeek>all_map.length-1){
        currentWeek=0;
    }
    d3.select("#barSelect1"+currentWeek).attr("opacity",0.15);
    transitionMap();
}



var playTimer;

$(".playPause1").click(function(){
    if($(".playPause1").hasClass("paused")){
        playTimer = setInterval(function(){autoAdvance()}, 2500);
        $(".playPause1").removeClass("paused");
        $(".playPause1").addClass("playing");
    } else {
        clearInterval(playTimer);
        $(".playPause1").removeClass("playing");
        $(".playPause1").addClass("paused");
    }
})

// initiate autoplay on page load
$( document ).ready(function(){
    $(".playPause1").trigger("click");
});









