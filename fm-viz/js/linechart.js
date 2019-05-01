var allEng_transparency = 0.5;
var posEng_transparency = 0.5;
var negEng_transparency = 0.5;
var allAra_transparency = 0.5;
var posAra_transparency = 0.5;
var negAra_transparency = 0.5;
var iom_transparency = 0.5;
var death_transparency = 0.5;

window.onload = function () {

var chart = new CanvasJS.Chart("line_chart", {
  animationEnabled: true,
  backgroundColor: "rgba(255,255,255,0)",
   title: {
    text: "",
    fontFamily: "tahoma",
    fontSize: 18,
  },
  axisX: {
    valueFormatString: "MMM/YY" ,
    labelFontSize: 10,
    // minimum: new Date(2014,9),
    // maximum: new Date(2017,5),
  },
  axisY: {
    valueFormatString: "#%",
    gridThickness: 0.1,
    labelFontSize: 10,
    tickLength: 10
  },
  legend: {
    verticalAlign: "top",
    horizontalAlign: "right",
    // dockInsidePlotArea: true
     cursor: "pointer",
            itemclick: function (e) {
                //console.log("legend click: " + e.dataPointIndex);
                //console.log(e);
                if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                } else {
                    e.dataSeries.visible = true;
                }

                e.chart.render();
            }
  },
  toolTip: {
    shared: true,
    fontFamily: "tahoma",
    fontSize: 11,
    contentFormatter: function (e) {

        // var content =  CanvasJS.formatDate(e.entries[0].dataPoint.x, "MMM YYYY") + "</br>------------------</br>";
        var content = e.entries[0].dataPoint.label + "</br>------------------</br>";
        for (var i = 0; i < e.entries.length; i++) {
          content += '<span style="color:' + e.entries[i].dataSeries.color +'">' + e.entries[i].dataSeries.name +" : " + "<strong>" + e.entries[i].dataPoint.y + "</strong>" +'</span>' ;
          content += "<br/>";
        }
        return content;
      }
    // content: "{x}<hr/>{name} : {y}"
    // contentFormatter: function (e) {

    //  var content = "";
    //       for (var i = 0; i < e.entries.length; i++){
    //         content = CanvasJS.formatDate(e.entries[i].dataPoint.x, "MMMM/YYYY") + "<hr/> {e.entries[i].name} : {e.entries[i].dataPoint.y}";       
    //       }       
    //       return content;
    //     }
  },
  data: [

   {
    name: "English Volume",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(0, 179, 0,"+allEng_transparency+")",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014,09), y: 0.0,label:"Sep/2014"},
{ x: new Date(2014,10), y: 0.63,label:"Oct/2014"},
{ x: new Date(2014,11), y: -0.92,label:"Nov/2014"},
{ x: new Date(2014,12), y: 2.46,label:"Dec/2014"},
{ x: new Date(2015,01), y: -0.2,label:"Jan/2015"},
{ x: new Date(2015,02), y: 0.0,label:"Feb/2015"},
{ x: new Date(2015,03), y: 0.0,label:"Mar/2015"},
{ x: new Date(2015,04), y: 0.72,label:"Apr/2015"},
{ x: new Date(2015,05), y: 0.28,label:"May/2015"},
{ x: new Date(2015,06), y: 0.01,label:"Jun/2015"},
{ x: new Date(2015,07), y: 0.13,label:"Jul/2015"},
{ x: new Date(2015,08), y: -0.19,label:"Aug/2015"},
{ x: new Date(2015,09), y: -0.04,label:"Sep/2015"},
{ x: new Date(2015,10), y: 0.43,label:"Oct/2015"},
{ x: new Date(2015,11), y: 2.77,label:"Nov/2015"},
{ x: new Date(2015,12), y: -0.37,label:"Dec/2015"},
{ x: new Date(2016,01), y: -0.46,label:"Jan/2016"},
{ x: new Date(2016,02), y: -0.65,label:"Feb/2016"},
{ x: new Date(2016,03), y: 1.67,label:"Mar/2016"},
{ x: new Date(2016,04), y: -0.29,label:"Apr/2016"},
{ x: new Date(2016,05), y: 0.03,label:"May/2016"},
{ x: new Date(2016,06), y: 0.28,label:"Jun/2016"},
{ x: new Date(2016,07), y: 0.1,label:"Jul/2016"},
{ x: new Date(2016,08), y: -0.06,label:"Aug/2016"},
{ x: new Date(2016,09), y: -0.25,label:"Sep/2016"},
{ x: new Date(2016,10), y: 0.34,label:"Oct/2016"},
{ x: new Date(2016,11), y: -0.28,label:"Nov/2016"},
{ x: new Date(2016,12), y: 0.1,label:"Dec/2016"},
{ x: new Date(2017,01), y: 0.1,label:"Jan/2017"},
{ x: new Date(2017,02), y: -0.11,label:"Feb/2017"},
{ x: new Date(2017,03), y: -0.03,label:"Mar/2017"},
{ x: new Date(2017,04), y: 0.14,label:"Apr/2017"},
{ x: new Date(2017,05), y: -0.77,label:"May/2017"},

    ]
  },
  
  
  {
    name: "Arabic Volume",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(255, 205, 0,"+allAra_transparency+")",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014,09), y: 0.0,label:"Sep/2014"},
{ x: new Date(2014,10), y: 0.0,label:"Oct/2014"},
{ x: new Date(2014,11), y: 0.0,label:"Nov/2014"},
{ x: new Date(2014,12), y: 0.0,label:"Dec/2014"},
{ x: new Date(2015,01), y: 0.8,label:"Jan/2015"},
{ x: new Date(2015,02), y: 0.0,label:"Feb/2015"},
{ x: new Date(2015,03), y: 0.0,label:"Mar/2015"},
{ x: new Date(2015,04), y: 0.41,label:"Apr/2015"},
{ x: new Date(2015,05), y: -0.33,label:"May/2015"},
{ x: new Date(2015,06), y: 0.18,label:"Jun/2015"},
{ x: new Date(2015,07), y: 0.1,label:"Jul/2015"},
{ x: new Date(2015,08), y: 0.15,label:"Aug/2015"},
{ x: new Date(2015,09), y: -0.26,label:"Sep/2015"},
{ x: new Date(2015,10), y: 0.09,label:"Oct/2015"},
{ x: new Date(2015,11), y: -0.1,label:"Nov/2015"},
{ x: new Date(2015,12), y: -0.24,label:"Dec/2015"},
{ x: new Date(2016,01), y: -0.26,label:"Jan/2016"},
{ x: new Date(2016,02), y: -0.23,label:"Feb/2016"},
{ x: new Date(2016,03), y: 0.51,label:"Mar/2016"},
{ x: new Date(2016,04), y: -0.27,label:"Apr/2016"},
{ x: new Date(2016,05), y: 1.53,label:"May/2016"},
{ x: new Date(2016,06), y: -0.21,label:"Jun/2016"},
{ x: new Date(2016,07), y: -0.31,label:"Jul/2016"},
{ x: new Date(2016,08), y: -0.29,label:"Aug/2016"},
{ x: new Date(2016,09), y: -0.18,label:"Sep/2016"},
{ x: new Date(2016,10), y: 0.55,label:"Oct/2016"},
{ x: new Date(2016,11), y: -0.44,label:"Nov/2016"},
{ x: new Date(2016,12), y: 0.31,label:"Dec/2016"},
{ x: new Date(2017,01), y: 0.62,label:"Jan/2017"},
{ x: new Date(2017,02), y: -0.55,label:"Feb/2017"},
{ x: new Date(2017,03), y: -0.13,label:"Mar/2017"},
{ x: new Date(2017,04), y: -0.19,label:"Apr/2017"},
{ x: new Date(2017,05), y: -0.59,label:"May/2017"},

    ]
  },
  {
    name: "Positive English",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(255, 127, 0,"+posEng_transparency+")",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014,09), y: 0.0,label:"Sep/2014"},
{ x: new Date(2014,10), y: 0.74,label:"Oct/2014"},
{ x: new Date(2014,11), y: -0.92,label:"Nov/2014"},
{ x: new Date(2014,12), y: 1.89,label:"Dec/2014"},
{ x: new Date(2015,01), y: -0.23,label:"Jan/2015"},
{ x: new Date(2015,02), y: 0.0,label:"Feb/2015"},
{ x: new Date(2015,03), y: 0.0,label:"Mar/2015"},
{ x: new Date(2015,04), y: 0.62,label:"Apr/2015"},
{ x: new Date(2015,05), y: 0.34,label:"May/2015"},
{ x: new Date(2015,06), y: 0.04,label:"Jun/2015"},
{ x: new Date(2015,07), y: 0.1,label:"Jul/2015"},
{ x: new Date(2015,08), y: -0.13,label:"Aug/2015"},
{ x: new Date(2015,09), y: -0.07,label:"Sep/2015"},
{ x: new Date(2015,10), y: 0.19,label:"Oct/2015"},
{ x: new Date(2015,11), y: 3.02,label:"Nov/2015"},
{ x: new Date(2015,12), y: -0.34,label:"Dec/2015"},
{ x: new Date(2016,01), y: -0.52,label:"Jan/2016"},
{ x: new Date(2016,02), y: -0.65,label:"Feb/2016"},
{ x: new Date(2016,03), y: 1.76,label:"Mar/2016"},
{ x: new Date(2016,04), y: -0.39,label:"Apr/2016"},
{ x: new Date(2016,05), y: -0.02,label:"May/2016"},
{ x: new Date(2016,06), y: 0.46,label:"Jun/2016"},
{ x: new Date(2016,07), y: 0.08,label:"Jul/2016"},
{ x: new Date(2016,08), y: 0.03,label:"Aug/2016"},
{ x: new Date(2016,09), y: -0.34,label:"Sep/2016"},
{ x: new Date(2016,10), y: 0.3,label:"Oct/2016"},
{ x: new Date(2016,11), y: -0.18,label:"Nov/2016"},
{ x: new Date(2016,12), y: 0.01,label:"Dec/2016"},
{ x: new Date(2017,01), y: 0.19,label:"Jan/2017"},
{ x: new Date(2017,02), y: -0.18,label:"Feb/2017"},
{ x: new Date(2017,03), y: 0.07,label:"Mar/2017"},
{ x: new Date(2017,04), y: 0.24,label:"Apr/2017"},
{ x: new Date(2017,05), y: -0.8,label:"May/2017"},


    ]
  },
{
    name: "Negative English",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(100, 0, 255,"+negEng_transparency+")",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014,09), y: 0.0,label:"Sep/2014"},
{ x: new Date(2014,10), y: 0.63,label:"Oct/2014"},
{ x: new Date(2014,11), y: -0.92,label:"Nov/2014"},
{ x: new Date(2014,12), y: 2.65,label:"Dec/2014"},
{ x: new Date(2015,01), y: -0.2,label:"Jan/2015"},
{ x: new Date(2015,02), y: 0.0,label:"Feb/2015"},
{ x: new Date(2015,03), y: 0.0,label:"Mar/2015"},
{ x: new Date(2015,04), y: 0.64,label:"Apr/2015"},
{ x: new Date(2015,05), y: 0.22,label:"May/2015"},
{ x: new Date(2015,06), y: 0.14,label:"Jun/2015"},
{ x: new Date(2015,07), y: 0.07,label:"Jul/2015"},
{ x: new Date(2015,08), y: -0.23,label:"Aug/2015"},
{ x: new Date(2015,09), y: 0.05,label:"Sep/2015"},
{ x: new Date(2015,10), y: 0.51,label:"Oct/2015"},
{ x: new Date(2015,11), y: 2.54,label:"Nov/2015"},
{ x: new Date(2015,12), y: -0.4,label:"Dec/2015"},
{ x: new Date(2016,01), y: -0.44,label:"Jan/2016"},
{ x: new Date(2016,02), y: -0.65,label:"Feb/2016"},
{ x: new Date(2016,03), y: 1.74,label:"Mar/2016"},
{ x: new Date(2016,04), y: -0.31,label:"Apr/2016"},
{ x: new Date(2016,05), y: -0.02,label:"May/2016"},
{ x: new Date(2016,06), y: 0.38,label:"Jun/2016"},
{ x: new Date(2016,07), y: 0.19,label:"Jul/2016"},
{ x: new Date(2016,08), y: -0.14,label:"Aug/2016"},
{ x: new Date(2016,09), y: -0.21,label:"Sep/2016"},
{ x: new Date(2016,10), y: 0.3,label:"Oct/2016"},
{ x: new Date(2016,11), y: -0.34,label:"Nov/2016"},
{ x: new Date(2016,12), y: 0.14,label:"Dec/2016"},
{ x: new Date(2017,01), y: 0.08,label:"Jan/2017"},
{ x: new Date(2017,02), y: -0.08,label:"Feb/2017"},
{ x: new Date(2017,03), y: -0.12,label:"Mar/2017"},
{ x: new Date(2017,04), y: 0.28,label:"Apr/2017"},
{ x: new Date(2017,05), y: -0.79,label:"May/2017"},

    ]
  },
  {
    name: "Positive Arabic",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(255, 0, 230,"+posAra_transparency+")",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014,09), y: 0.0,label:"Sep/2014"},
{ x: new Date(2014,10), y: 0.0,label:"Oct/2014"},
{ x: new Date(2014,11), y: 0.0,label:"Nov/2014"},
{ x: new Date(2014,12), y: 0.0,label:"Dec/2014"},
{ x: new Date(2015,01), y: 1.33,label:"Jan/2015"},
{ x: new Date(2015,02), y: 0.0,label:"Feb/2015"},
{ x: new Date(2015,03), y: 0.0,label:"Mar/2015"},
{ x: new Date(2015,04), y: 0.17,label:"Apr/2015"},
{ x: new Date(2015,05), y: -0.1,label:"May/2015"},
{ x: new Date(2015,06), y: 0.63,label:"Jun/2015"},
{ x: new Date(2015,07), y: -0.08,label:"Jul/2015"},
{ x: new Date(2015,08), y: -0.15,label:"Aug/2015"},
{ x: new Date(2015,09), y: -0.42,label:"Sep/2015"},
{ x: new Date(2015,10), y: 1.76,label:"Oct/2015"},
{ x: new Date(2015,11), y: -0.34,label:"Nov/2015"},
{ x: new Date(2015,12), y: -0.37,label:"Dec/2015"},
{ x: new Date(2016,01), y: 0.18,label:"Jan/2016"},
{ x: new Date(2016,02), y: -0.64,label:"Feb/2016"},
{ x: new Date(2016,03), y: 0.64,label:"Mar/2016"},
{ x: new Date(2016,04), y: 1.49,label:"Apr/2016"},
{ x: new Date(2016,05), y: 1.89,label:"May/2016"},
{ x: new Date(2016,06), y: -0.51,label:"Jun/2016"},
{ x: new Date(2016,07), y: -0.61,label:"Jul/2016"},
{ x: new Date(2016,08), y: -0.22,label:"Aug/2016"},
{ x: new Date(2016,09), y: 0.8,label:"Sep/2016"},
{ x: new Date(2016,10), y: 0.15,label:"Oct/2016"},
{ x: new Date(2016,11), y: -0.68,label:"Nov/2016"},
{ x: new Date(2016,12), y: -0.3,label:"Dec/2016"},
{ x: new Date(2017,01), y: 1.25,label:"Jan/2017"},
{ x: new Date(2017,02), y: -0.34,label:"Feb/2017"},
{ x: new Date(2017,03), y: -0.17,label:"Mar/2017"},
{ x: new Date(2017,04), y: -0.35,label:"Apr/2017"},
{ x: new Date(2017,05), y: -0.63,label:"May/2017"},

    ]
  },
  {
    name: "Negative Arabic",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(228, 26, 28,"+negAra_transparency+")",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014,09), y: 0.0,label:"Sep/2014"},
{ x: new Date(2014,10), y: 0.0,label:"Oct/2014"},
{ x: new Date(2014,11), y: 0.0,label:"Nov/2014"},
{ x: new Date(2014,12), y: 0.0,label:"Dec/2014"},
{ x: new Date(2015,01), y: 0.89,label:"Jan/2015"},
{ x: new Date(2015,02), y: 0.0,label:"Feb/2015"},
{ x: new Date(2015,03), y: 0.0,label:"Mar/2015"},
{ x: new Date(2015,04), y: -0.03,label:"Apr/2015"},
{ x: new Date(2015,05), y: 0.16,label:"May/2015"},
{ x: new Date(2015,06), y: 0.4,label:"Jun/2015"},
{ x: new Date(2015,07), y: 0.26,label:"Jul/2015"},
{ x: new Date(2015,08), y: 0.98,label:"Aug/2015"},
{ x: new Date(2015,09), y: -0.38,label:"Sep/2015"},
{ x: new Date(2015,10), y: -0.2,label:"Oct/2015"},
{ x: new Date(2015,11), y: -0.32,label:"Nov/2015"},
{ x: new Date(2015,12), y: -0.03,label:"Dec/2015"},
{ x: new Date(2016,01), y: -0.42,label:"Jan/2016"},
{ x: new Date(2016,02), y: 0.96,label:"Feb/2016"},
{ x: new Date(2016,03), y: 0.44,label:"Mar/2016"},
{ x: new Date(2016,04), y: -0.82,label:"Apr/2016"},
{ x: new Date(2016,05), y: 1.21,label:"May/2016"},
{ x: new Date(2016,06), y: 0.15,label:"Jun/2016"},
{ x: new Date(2016,07), y: -0.17,label:"Jul/2016"},
{ x: new Date(2016,08), y: -0.24,label:"Aug/2016"},
{ x: new Date(2016,09), y: -0.4,label:"Sep/2016"},
{ x: new Date(2016,10), y: 0.9,label:"Oct/2016"},
{ x: new Date(2016,11), y: -0.33,label:"Nov/2016"},
{ x: new Date(2016,12), y: -0.16,label:"Dec/2016"},
{ x: new Date(2017,01), y: 0.2,label:"Jan/2017"},
{ x: new Date(2017,02), y: -0.19,label:"Feb/2017"},
{ x: new Date(2017,03), y: -0.29,label:"Mar/2017"},
{ x: new Date(2017,04), y: 0.24,label:"Apr/2017"},
{ x: new Date(2017,05), y: -0.68,label:"May/2017"},

    ]
  },
 
  

  {
    name: "Displaced Family Count",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(0, 100, 255, 1)",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014,09), y: 0.0,label:"Sep/2014"},
{ x: new Date(2014,10), y: 0.1,label:"Oct/2014"},
{ x: new Date(2014,11), y: 0.06,label:"Nov/2014"},
{ x: new Date(2014,12), y: 0.05,label:"Dec/2014"},
{ x: new Date(2015,01), y: 0.15,label:"Jan/2015"},
{ x: new Date(2015,02), y: 0.05,label:"Feb/2015"},
{ x: new Date(2015,03), y: 0.04,label:"Mar/2015"},
{ x: new Date(2015,04), y: 0.08,label:"Apr/2015"},
{ x: new Date(2015,05), y: 0.05,label:"May/2015"},
{ x: new Date(2015,06), y: 0.02,label:"Jun/2015"},
{ x: new Date(2015,07), y: 0.02,label:"Jul/2015"},
{ x: new Date(2015,08), y: 0.01,label:"Aug/2015"},
{ x: new Date(2015,09), y: 0.01,label:"Sep/2015"},
{ x: new Date(2015,10), y: -0.01,label:"Oct/2015"},
{ x: new Date(2015,11), y: 0.0,label:"Nov/2015"},
{ x: new Date(2015,12), y: 0.02,label:"Dec/2015"},
{ x: new Date(2016,01), y: 0.02,label:"Jan/2016"},
{ x: new Date(2016,02), y: 0.01,label:"Feb/2016"},
{ x: new Date(2016,03), y: 0.01,label:"Mar/2016"},
{ x: new Date(2016,04), y: -0.02,label:"Apr/2016"},
{ x: new Date(2016,05), y: -0.0,label:"May/2016"},
{ x: new Date(2016,06), y: 0.01,label:"Jun/2016"},
{ x: new Date(2016,07), y: 0.01,label:"Jul/2016"},
{ x: new Date(2016,08), y: -0.01,label:"Aug/2016"},
{ x: new Date(2016,09), y: -0.02,label:"Sep/2016"},
{ x: new Date(2016,10), y: -0.04,label:"Oct/2016"},
{ x: new Date(2016,11), y: -0.02,label:"Nov/2016"},
{ x: new Date(2016,12), y: -0.02,label:"Dec/2016"},
{ x: new Date(2017,01), y: 0.0,label:"Jan/2017"},
{ x: new Date(2017,02), y: 0.0,label:"Feb/2017"},
{ x: new Date(2017,03), y: 0.01,label:"Mar/2017"},
{ x: new Date(2017,04), y: 0.0,label:"Apr/2017"},
{ x: new Date(2017,05), y: -0.01,label:"May/2017"},

    ]
  },


  {
    name: "Death Count",
    showInLegend: true,
    legendMarkerType: "square",
    type: "area",
    color: "rgba(0, 0, 0,"+death_transparency+")",
    markerSize: 0,
    dataPoints: [
{ x: new Date(2014,09), y: 0.0,label:"Sep/2014"},
{ x: new Date(2014,10), y: 0.08,label:"Oct/2014"},
{ x: new Date(2014,11), y: -0.16,label:"Nov/2014"},
{ x: new Date(2014,12), y: 0.04,label:"Dec/2014"},
{ x: new Date(2015,01), y: 0.0,label:"Jan/2015"},
{ x: new Date(2015,02), y: 0.0,label:"Feb/2015"},
{ x: new Date(2015,03), y: 0.0,label:"Mar/2015"},
{ x: new Date(2015,04), y: 0.99,label:"Apr/2015"},
{ x: new Date(2015,05), y: -0.46,label:"May/2015"},
{ x: new Date(2015,06), y: 0.27,label:"Jun/2015"},
{ x: new Date(2015,07), y: 0.26,label:"Jul/2015"},
{ x: new Date(2015,08), y: 0.06,label:"Aug/2015"},
{ x: new Date(2015,09), y: -0.23,label:"Sep/2015"},
{ x: new Date(2015,10), y: -0.1,label:"Oct/2015"},
{ x: new Date(2015,11), y: -0.2,label:"Nov/2015"},
{ x: new Date(2015,12), y: 0.05,label:"Dec/2015"},
{ x: new Date(2016,01), y: 0.29,label:"Jan/2016"},
{ x: new Date(2016,02), y: -0.1,label:"Feb/2016"},
{ x: new Date(2016,03), y: 0.11,label:"Mar/2016"},
{ x: new Date(2016,04), y: -0.18,label:"Apr/2016"},
{ x: new Date(2016,05), y: 0.08,label:"May/2016"},
{ x: new Date(2016,06), y: 0.04,label:"Jun/2016"},
{ x: new Date(2016,07), y: -0.04,label:"Jul/2016"},
{ x: new Date(2016,08), y: 0.14,label:"Aug/2016"},
{ x: new Date(2016,09), y: -0.38,label:"Sep/2016"},
{ x: new Date(2016,10), y: 1.15,label:"Oct/2016"},
{ x: new Date(2016,11), y: -0.17,label:"Nov/2016"},
{ x: new Date(2016,12), y: -0.39,label:"Dec/2016"},
{ x: new Date(2017,01), y: 0.08,label:"Jan/2017"},
{ x: new Date(2017,02), y: -0.15,label:"Feb/2017"},
{ x: new Date(2017,03), y: 0.0,label:"Mar/2017"},
{ x: new Date(2017,04), y: 0.0,label:"Apr/2017"},
{ x: new Date(2017,05), y: 0.0,label:"May/2017"},

    ]
  }]
});
chart.render();

}
