
var allEng_transparency = 0.5;
var posEng_transparency = 0.5;
var negEng_transparency = 0.5;
var allAra_transparency = 0.5;
var posAra_transparency = 0.5;
var negAra_transparency = 0.5;
var iom_transparency = 0.5;
var death_transparency = 0.5;

function myFunctionButton(){
	var scaleyplt = document.getElementById("linechartChangeScale");
	var normxyplt = document.getElementById("linechartNormScale");
	var scalexplt = document.getElementById("linechartNormYScaleChangeX");
	var scalexyplt = document.getElementById("linecharScalexy");

	
	if (normxyplt.style.display == "block"){
		scaleyplt.style.display = "block";
		normxyplt.style.display = "none";
		scalexplt.style.display = "none";
		scalexyplt.style.display = "none";
	}
	else if (scaleyplt.style.display == "block"){
		normxyplt.style.display = "block";
		scaleyplt.style.display = "none";
		scalexplt.style.display = "none";
		scalexyplt.style.display = "none";
	}
	else if (scalexplt.style.display == "block"){
		scalexyplt.style.display = "block";
		scaleyplt.style.display = "none";
		normxyplt.style.display = "none";
		scalexplt.style.display = "none";
	}
	else{
		scalexplt.style.display = "block";
		scaleyplt.style.display = "none";
		normxyplt.style.display = "none";
		scalexyplt.style.display = "none";

	}
	
}


function myFunctionButton1(){
	var scaleyplt = document.getElementById("linechartChangeScale");
	var normxyplt = document.getElementById("linechartNormScale");
	var scalexplt = document.getElementById("linechartNormYScaleChangeX");
	var scalexyplt = document.getElementById("linecharScalexy");
	
	if (normxyplt.style.display == "block"){
		normxyplt.style.display = "none";
		scalexyplt.style.display = "none";
		scaleyplt.style.display = "none";
		scalexplt.style.display = "block";
	}
	else if (scaleyplt.style.display == "block"){
		normxyplt.style.display = "none";
		scalexplt.style.display = "none";
		scaleyplt.style.display = "none";
		scalexyplt.style.display = "block";
	}
	else if (scalexyplt.style.display == "block"){
		normxyplt.style.display = "none";
		scalexplt.style.display = "none";
		scalexyplt.style.display = "none";
		scaleyplt.style.display = "block";
	}
	else{
		scaleyplt.style.display = "none";
		scalexplt.style.display = "none";
		scalexyplt.style.display = "none";
		normxyplt.style.display = "block";

	}
	
}

function btn_movement_function(){
	var small_move = document.getElementById("barchartNumofFam");
	var big_move = document.getElementById("changebarchartNumofFam");
	if (small_move.style.display == "block"){
		small_move.style.display = "none";
		big_move.style.display = "block";
	}
	else{
		small_move.style.display = "block";
		big_move.style.display = "none";
	}
}

window.onload = function () {	

var chartNormScale = new CanvasJS.Chart("linechartNormScale", {
	animationEnabled: true,
	zoomEnabled: true,
	theme: "light2",
	title: {
		text: "Monthly Change in #ISIS Twitter Signals, and The Number of Families That Have Fled from Ninawa",
		fontFamily: "Serif",
		fontSize: 20,
		padding: {
			bottom:5
		},
	},

	subtitles:[
		{
			text: "This graph shows the percent change in each signal over the previous month. In this time frame, signals from Anbar are closely correlated, suggesting that they are capturing something around the events that occurred. The most notable difference is in May of 2015. While overall volume decreased as attention shifted away from Mosul, the Arabic negative sentiment signal increases as Iraqi forces were re-directed from Mosul to Ramadi.",
			fontFamily: "arial",
			fontSize: 14,
			horizontalAlign: "left",
			padding: {
				bottom:30
			},

		},

	],

	axisX: {
		valueFormatString: "MMM YYYY",
		interval:1,
		intervalType: "month",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},

	axisY2: {
		title: "Fraction of Change",
		fontFamily: "Serif",
		minimum:-1.5,
		labelFormatter: function (e) {
				return CanvasJS.formatNumber(e.value, "###,##0%");
			}

	},
	toolTip: {
		shared: true,
		fontFamily: "Serif",
		ValueFormatString: "###,##0%",
		fontSize: 10,
		contentFormatter: function(e){
			var str = '';
			str = str.concat(CanvasJS.formatDate(e.entries[0].dataPoint.x,'MMM. YYYY'))+"<br/>"
			for (var i = 0; i < e.entries.length; i++){
				if (e.entries[i].dataSeries.visible) {
					var  temp = "<font color="+ e.entries[i].dataSeries.color+">"+e.entries[i].dataSeries.name + "</font>: <strong>"+  CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###,##0%") + "</strong> <br/>" ; 
            		str = str.concat(temp);
				}
			}
			return (str);
		}
	},
	legend: {
		cursor: "pointer",
		itemmouseover: function(e) {
			e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness * 2;
			e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize + 2;
			e.chart.render();
		},
		itemmouseout: function(e) {
			e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness / 2;
			e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize - 2;
			e.chart.render();
		},
		horizontalAlign: "left", // left, center ,right 
     	verticalAlign: "center",
		dockInsidePlotArea: false,
		fontFamily: "Serif",
		fontSize: 12,
		itemclick: toogleDataSeries
	},
	data: [{
		type:"area",
		axisYType: "secondary",
		name: "Number of Families",
		color: "rgba(0, 100, 255, 1)",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.07259509442510859 },
			{ x: new Date(2014, 10), y: 0.006918577115574198  },
			{ x: new Date(2014, 11), y: 0.05600437305739003  },
			{ x: new Date(2015, 0), y: -0.026092766254559474  },
			{ x: new Date(2015, 1), y: 0.021754850033682827 },
			{ x: new Date(2015, 2), y: 0.01981575461369567 },
			{ x: new Date(2015, 3), y: 0.04091957840793836 },
			{ x: new Date(2015, 4), y: -0.0009230874425919522}
			]
	},
	{
		type:"area",
		axisYType: "secondary",
		name: "English Tweet Volume",
		yValueFormatString: "##.#%",
		showInLegend: true,
		color: "rgba(0, 179, 0,"+allEng_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.3350469091376429 },
			{ x: new Date(2014, 10), y: -0.4170196380438968  },
			{ x: new Date(2014, 11), y: 0.4511228533685601  },
			{ x: new Date(2015, 0), y: -0.020596267637687755},
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.42988 },
			{ x: new Date(2015, 3), y: 0.024251069900142586 },
			{ x: new Date(2015, 4), y: -0.31814564265817746}
			]	},	{
		type:"area",
		axisYType: "secondary",
		name: "Arabic Tweet Volume",
		color: "rgba(255, 205, 0,"+allAra_transparency+")",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 0  },
			{ x: new Date(2015, 0), y: -0.6750861079219288  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.5388 },
			{ x: new Date(2015, 3), y: -0.16091954022988508 },
			{ x: new Date(2015, 4), y: -0.10502283105022836}
			]	
		},
	{
		type:"area",
		axisYType: "secondary",
		name: "Positive English Tweets",
		yValueFormatString: "##.#%",
		color: "rgba(255, 127, 0,"+posEng_transparency+")",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.14160659114315144 },
			{ x: new Date(2014, 10), y: -0.38430311231393777  },
			{ x: new Date(2014, 11), y: 0.5633699633699634  },
			{ x: new Date(2015, 0), y: -0.5398313027179007  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.04582 },
			{ x: new Date(2015, 3), y: -0.08751334044823911 },
			{ x: new Date(2015, 4), y: -0.30175438596491233}
			]	
		},
		{
		type:"area",
		axisYType: "secondary",
		name: "Negative English Tweets",
		yValueFormatString: "##.#%",
		color: "rgba(100, 0, 255,"+negEng_transparency+")",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.7706422018348624 },
			{ x: new Date(2014, 10), y: -0.6047882794354118  },
			{ x: new Date(2014, 11), y: 1.1405967450271248},
			{ x: new Date(2015, 0), y: 0.033017875920084094  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.45623 },
			{ x: new Date(2015, 3), y: 0.09060277049794085 },
			{ x: new Date(2015, 4), y: -0.5238585650532097}
			]	
		},
		{
		type:"area",
		axisYType: "secondary",
		name: "Positive Arabic Tweets",
		color: "rgba(255, 0, 230,"+posAra_transparency+")",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 0  },
			{ x: new Date(2015, 0), y: -0.5839493136219641  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.581218 },
			{ x: new Date(2015, 3), y: -0.21818181818181814 },
			{ x: new Date(2015, 4), y: -0.4108527131782945}
			]
	},

	{
		type:"area",
		axisYType: "secondary",
		name: "Negative Arabic Tweets",
		showInLegend: true,
		yValueFormatString: "##.#%",
		color: "rgba(228, 26, 28,"+negAra_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 0  },
			{ x: new Date(2015, 0), y: -0.7836477987421384  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.44186 },
			{ x: new Date(2015, 3), y: -0.0625 },
			{ x: new Date(2015, 4), y: 0.33333333333333326}
			]
	}]
});

var chartChangeScale = new CanvasJS.Chart("linechartChangeScale", {
	animationEnabled: true,
	zoomEnabled: true,
	theme: "light2",
	title: {
		text: "Monthly Change in #ISIS Twitter Signals, and The Number of Families That Have Fled from Ninawa",
		fontFamily: "Serif",
		fontSize: 20,
		padding: {
			bottom:5
		},
	},

	subtitles:[
		{
			text: "This graph shows the percent change in each signal over the previous month. In this time frame, signals from Anbar are closely correlated, suggesting that they are capturing something around the events that occurred. The most notable difference is in May of 2015. While overall volume decreased as attention shifted away from Mosul, the Arabic negative sentiment signal increases as Iraqi forces were re-directed from Mosul to Ramadi.",
			fontFamily: "arial",
			fontSize: 14,
			horizontalAlign: "left",
			padding: {
				bottom:30
			},

		},

	],

	axisX: {
		valueFormatString: "MMM YYYY",
		interval:1,
		intervalType: "month",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},

	axisY2: {
		title: "Fraction of Change",
		fontFamily: "Serif",
		maximum:1,
		minimum:-1,
		
		labelFormatter: function (e) {
				return CanvasJS.formatNumber(e.value, "#0%");
			}

	},
	toolTip: {
		shared: true,
		fontFamily: "Serif",
		ValueFormatString: "###,##0%",
		fontSize: 10,
		contentFormatter: function(e){
			var str = '';
			str = str.concat(CanvasJS.formatDate(e.entries[0].dataPoint.x,'MMM. YYYY'))+"<br/>"
			for (var i = 0; i < e.entries.length; i++){
				if (e.entries[i].dataSeries.visible) {
					var  temp = "<font color="+ e.entries[i].dataSeries.color+">"+e.entries[i].dataSeries.name + "</font>: <strong>"+  CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###,##0%") + "</strong> <br/>" ; 
            		str = str.concat(temp);
				}
			}
			return (str);
		}
	},
	legend: {
		cursor: "pointer",
		itemmouseover: function(e) {
			e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness * 2;
			e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize + 2;
			e.chart.render();
		},
		itemmouseout: function(e) {
			e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness / 2;
			e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize - 2;
			e.chart.render();
		},

		horizontalAlign: "left", // left, center ,right 
     	verticalAlign: "center",
		dockInsidePlotArea: false,
		fontFamily: "Serif",
		fontSize: 12,
		itemclick: toogleDataSeries
	},
	data: [{
		type:"area",
		axisYType: "secondary",
		name: "Number of Families",
		color: "rgba(0, 100, 255, 1)",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.07259509442510859 },
			{ x: new Date(2014, 10), y: 0.006918577115574198  },
			{ x: new Date(2014, 11), y: 0.05600437305739003  },
			{ x: new Date(2015, 0), y: -0.026092766254559474  },
			{ x: new Date(2015, 1), y: 0.021754850033682827 },
			{ x: new Date(2015, 2), y: 0.01981575461369567 },
			{ x: new Date(2015, 3), y: 0.04091957840793836 },
			{ x: new Date(2015, 4), y: -0.0009230874425919522}
			]
	},
	{
		type:"area",
		axisYType: "secondary",
		name: "English Tweet Volume",
		yValueFormatString: "##.#%",
		showInLegend: true,
		color: "rgba(0, 179, 0,"+allEng_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.3350469091376429 },
			{ x: new Date(2014, 10), y: -0.4170196380438968  },
			{ x: new Date(2014, 11), y: 0.4511228533685601  },
			{ x: new Date(2015, 0), y: -0.020596267637687755},
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.42988 },
			{ x: new Date(2015, 3), y: 0.024251069900142586 },
			{ x: new Date(2015, 4), y: -0.31814564265817746}
			]	},	{
		type:"area",
		axisYType: "secondary",
		name: "Arabic Tweet Volume",
		color: "rgba(255, 205, 0,"+allAra_transparency+")",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 0  },
			{ x: new Date(2015, 0), y: -0.6750861079219288  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.5388 },
			{ x: new Date(2015, 3), y: -0.16091954022988508 },
			{ x: new Date(2015, 4), y: -0.10502283105022836}
			]	
		},
	{
		type:"area",
		axisYType: "secondary",
		name: "Positive English Tweets",
		yValueFormatString: "##.#%",
		color: "rgba(255, 127, 0,"+posEng_transparency+")",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.14160659114315144 },
			{ x: new Date(2014, 10), y: -0.38430311231393777  },
			{ x: new Date(2014, 11), y: 0.5633699633699634  },
			{ x: new Date(2015, 0), y: -0.5398313027179007  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.04582 },
			{ x: new Date(2015, 3), y: -0.08751334044823911 },
			{ x: new Date(2015, 4), y: -0.30175438596491233}
			]	
		},
		{
		type:"area",
		axisYType: "secondary",
		name: "Negative English Tweets",
		yValueFormatString: "##.#%",
		color: "rgba(100, 0, 255,"+negEng_transparency+")",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.7706422018348624 },
			{ x: new Date(2014, 10), y: -0.6047882794354118  },
			{ x: new Date(2014, 11), y: 1.1405967450271248},
			{ x: new Date(2015, 0), y: 0.033017875920084094  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.45623 },
			{ x: new Date(2015, 3), y: 0.09060277049794085 },
			{ x: new Date(2015, 4), y: -0.5238585650532097}
			]	
		},
		{
		type:"area",
		axisYType: "secondary",
		name: "Positive Arabic Tweets",
		color: "rgba(255, 0, 230,"+posAra_transparency+")",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 0  },
			{ x: new Date(2015, 0), y: -0.5839493136219641  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.581218 },
			{ x: new Date(2015, 3), y: -0.21818181818181814 },
			{ x: new Date(2015, 4), y: -0.4108527131782945}
			]
	},

	{
		type:"area",
		axisYType: "secondary",
		name: "Negative Arabic Tweets",
		showInLegend: true,
		yValueFormatString: "##.#%",
		color: "rgba(228, 26, 28,"+negAra_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 0  },
			{ x: new Date(2015, 0), y: -0.7836477987421384  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.44186 },
			{ x: new Date(2015, 3), y: -0.0625 },
			{ x: new Date(2015, 4), y: 0.33333333333333326}
			]
	}]
});

var chartscalexy = new CanvasJS.Chart("linecharScalexy", {
	animationEnabled: true,
	zoomEnabled: true,
	theme: "light2",
	title: {
		text: "Change of ISIS Hashtag Tweets and Number of Families Fleed from Ninawa Governorate",
		fontFamily: "Serif",
		fontSize: 20,
		padding: {
			bottom:30
		},
	},

	axisX: {
		valueFormatString: "MMM YYYY",
		interval:1,
		intervalType: "month",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},

	axisY2: {
		title: "Fraction of Change",
		fontFamily: "Serif",
		maximum:1,
		minimum:-1,
		labelFormatter: function (e) {
				return CanvasJS.formatNumber(e.value, "###,##0%");
			}

	},
	toolTip: {
		shared: true,
		fontFamily: "Serif",
		ValueFormatString: "###,##0%",
		fontSize: 10,
		contentFormatter: function(e){
			var str = '';
			str = str.concat(CanvasJS.formatDate(e.entries[0].dataPoint.x,'MMM. YYYY'))+"<br/>"
			for (var i = 0; i < e.entries.length; i++){
				if (e.entries[i].dataSeries.visible) {
					var  temp = "<font color="+ e.entries[i].dataSeries.color+">"+e.entries[i].dataSeries.name + "</font>: <strong>"+  CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###,##0%") + "</strong> <br/>" ; 
            		str = str.concat(temp);
				}
			}
			return (str);
		}
	},
	legend: {
		cursor: "pointer",
		itemmouseover: function(e) {
			e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness * 2;
			e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize + 2;
			e.chart.render();
		},
		itemmouseout: function(e) {
			e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness / 2;
			e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize - 2;
			e.chart.render();
		},

		horizontalAlign: "left", // left, center ,right 
     	verticalAlign: "center",
		dockInsidePlotArea: false,
		fontFamily: "Serif",
		fontSize: 12,
		itemclick: toogleDataSeries
	},
	data: [{
		type:"area",
		axisYType: "secondary",
		name: "Number of Families",
		color: "rgba(0, 100, 255, 1)",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.07259509442510859 },
			{ x: new Date(2014, 10), y: 0.006918577115574198  },
			{ x: new Date(2014, 11), y: 0.05600437305739003  },
			{ x: new Date(2015, 0), y: -0.026092766254559474  },
			{ x: new Date(2015, 1), y: 0.021754850033682827 },
			{ x: new Date(2015, 2), y: 0.01981575461369567 },
			{ x: new Date(2015, 3), y: 0.04091957840793836 },
			{ x: new Date(2015, 4), y: -0.0009230874425919522},
			{ x: new Date(2015, 5), y: -0.009359173244513408},
			{ x: new Date(2015, 6), y: -0.008117677538213575},
			]
	},
	{
		type:"area",
		axisYType: "secondary",
		name: "English Tweet Volume",
		yValueFormatString: "##.#%",
		showInLegend: true,
		color: "rgba(0, 179, 0,"+allEng_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.3350469091376429 },
			{ x: new Date(2014, 10), y: -0.4170196380438968  },
			{ x: new Date(2014, 11), y: 0.4511228533685601  },
			{ x: new Date(2015, 0), y: -0.020596267637687755},
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.42988 },
			{ x: new Date(2015, 3), y: 0.024251069900142586 },
			{ x: new Date(2015, 4), y: -0.31814564265817746},
			{ x: new Date(2015, 5), y: 0.22001750802451125},
			{ x: new Date(2015, 6), y: -0.04424778761061943},
			]	},	{
		type:"area",
		axisYType: "secondary",
		name: "Arabic Tweet Volume",
		color: "rgba(255, 205, 0,"+allAra_transparency+")",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 0  },
			{ x: new Date(2015, 0), y: -0.6750861079219288  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.5388 },
			{ x: new Date(2015, 3), y: -0.16091954022988508 },
			{ x: new Date(2015, 4), y: -0.10502283105022836},
			{ x: new Date(2015, 5), y: 0.03571428571428581},
			{ x: new Date(2015, 6), y: -0.18226600985221675},
			]	
		},
	{
		type:"area",
		axisYType: "secondary",
		name: "Positive English Tweets",
		yValueFormatString: "##.#%",
		color: "rgba(255, 127, 0,"+posEng_transparency+")",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.14160659114315144 },
			{ x: new Date(2014, 10), y: -0.38430311231393777  },
			{ x: new Date(2014, 11), y: 0.5633699633699634  },
			{ x: new Date(2015, 0), y: -0.5398313027179007  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.04582 },
			{ x: new Date(2015, 3), y: -0.08751334044823911 },
			{ x: new Date(2015, 4), y: -0.30175438596491233},
			{ x: new Date(2015, 5), y: 0.5611390284757118},
			{ x: new Date(2015, 6), y: -0.20064377682403434},
			]	
		},
		{
		type:"area",
		axisYType: "secondary",
		name: "Negative English Tweets",
		yValueFormatString: "##.#%",
		color: "rgba(100, 0, 255,"+negEng_transparency+")",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.7706422018348624 },
			{ x: new Date(2014, 10), y: -0.6047882794354118  },
			{ x: new Date(2014, 11), y: 1.1405967450271248},
			{ x: new Date(2015, 0), y: 0.033017875920084094  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.45623 },
			{ x: new Date(2015, 3), y: 0.09060277049794085 },
			{ x: new Date(2015, 4), y: -0.5238585650532097},
			{ x: new Date(2015, 5), y: 0.501802451333814},
			{ x: new Date(2015, 6), y: -0.02064330292846861},	
			]	
		},
		{
		type:"area",
		axisYType: "secondary",
		name: "Positive Arabic Tweets",
		color: "rgba(255, 0, 230,"+posAra_transparency+")",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 0  },
			{ x: new Date(2015, 0), y: -0.5839493136219641  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.581218 },
			{ x: new Date(2015, 3), y: -0.21818181818181814 },
			{ x: new Date(2015, 4), y: -0.4108527131782945},
			{ x: new Date(2015, 5), y: 0.5526315789473684},
			{ x: new Date(2015, 6), y: -0.38983050847457623},
			]
	},

	{
		type:"area",
		axisYType: "secondary",
		name: "Negative Arabic Tweets",
		showInLegend: true,
		yValueFormatString: "##.#%",
		color: "rgba(228, 26, 28,"+negAra_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 0  },
			{ x: new Date(2015, 0), y: -0.7836477987421384  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.44186 },
			{ x: new Date(2015, 3), y: -0.0625 },
			{ x: new Date(2015, 4), y: 0.33333333333333326},
			{ x: new Date(2015, 5), y: -0.29166666666666663},
			{ x: new Date(2015, 6), y: 0.10588235294117654},
			]
	}]
});

var chartscalexNormy = new CanvasJS.Chart("linechartNormYScaleChangeX", {
	animationEnabled: true,
	zoomEnabled: true,
	theme: "light2",
	title: {
		text: "Monthly Change in #ISIS Twitter Signals, and The Number of Families That Have Fled from Ninawa",
		fontFamily: "Serif",
		fontSize: 20,
		padding: {
			bottom:5
		},
	},

	subtitles:[
		{
			text: "This graph shows the percent change in each signal over the previous month. In this time frame, signals from Anbar are closely correlated, suggesting that they are capturing something around the events that occurred. The most notable difference is in May of 2015. While overall volume decreased as attention shifted away from Mosul, the Arabic negative sentiment signal increases as Iraqi forces were re-directed from Mosul to Ramadi.",
			fontFamily: "arial",
			fontSize: 14,
			horizontalAlign: "left",
			padding: {
				bottom:30
			},

		},

	],

	axisX: {
		valueFormatString: "MMM YYYY",
		interval:1,
		intervalType: "month",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},

	axisY2: {
		title: "Fraction of Change",
		fontFamily: "Serif",
		minimum:-1.5,
		
		labelFormatter: function (e) {
				return CanvasJS.formatNumber(e.value, "###0%");
			}

	},
	toolTip: {
		shared: true,
		fontFamily: "Serif",
		ValueFormatString: "###,##0%",
		fontSize: 10,
		contentFormatter: function(e){
			var str = '';
			str = str.concat(CanvasJS.formatDate(e.entries[0].dataPoint.x,'MMM. YYYY'))+"<br/>"
			for (var i = 0; i < e.entries.length; i++){
				if (e.entries[i].dataSeries.visible) {
					var  temp = "<font color="+ e.entries[i].dataSeries.color+">"+e.entries[i].dataSeries.name + "</font>: <strong>"+  CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###,##0%") + "</strong> <br/>" ; 
            		str = str.concat(temp);
				}
			}
			return (str);
		}
	},
	legend: {
		cursor: "pointer",
		itemmouseover: function(e) {
			e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness * 2;
			e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize + 2;
			e.chart.render();
		},
		itemmouseout: function(e) {
			e.dataSeries.lineThickness = e.chart.data[e.dataSeriesIndex].lineThickness / 2;
			e.dataSeries.markerSize = e.chart.data[e.dataSeriesIndex].markerSize - 2;
			e.chart.render();
		},

		horizontalAlign: "left", // left, center ,right 
     	verticalAlign: "center",
		dockInsidePlotArea: false,
		fontFamily: "Serif",
		fontSize: 12,
		itemclick: toogleDataSeries
	},
	data: [{
		type:"area",
		axisYType: "secondary",
		name: "Number of Families",
		color: "rgba(0, 100, 255, 1)",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.07259509442510859 },
			{ x: new Date(2014, 10), y: 0.006918577115574198  },
			{ x: new Date(2014, 11), y: 0.05600437305739003  },
			{ x: new Date(2015, 0), y: -0.026092766254559474  },
			{ x: new Date(2015, 1), y: 0.021754850033682827 },
			{ x: new Date(2015, 2), y: 0.01981575461369567 },
			{ x: new Date(2015, 3), y: 0.04091957840793836 },
			{ x: new Date(2015, 4), y: -0.0009230874425919522},
			{ x: new Date(2015, 5), y: -0.009359173244513408},
			{ x: new Date(2015, 6), y: -0.008117677538213575},
			]
	},
	{
		type:"area",
		axisYType: "secondary",
		name: "English Tweet Volume",
		yValueFormatString: "##.#%",
		showInLegend: true,
		color: "rgba(0, 179, 0,"+allEng_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.3350469091376429 },
			{ x: new Date(2014, 10), y: -0.4170196380438968  },
			{ x: new Date(2014, 11), y: 0.4511228533685601  },
			{ x: new Date(2015, 0), y: -0.020596267637687755},
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.42988 },
			{ x: new Date(2015, 3), y: 0.024251069900142586 },
			{ x: new Date(2015, 4), y: -0.31814564265817746},
			{ x: new Date(2015, 5), y: 0.22001750802451125},
			{ x: new Date(2015, 6), y: -0.04424778761061943},
			]	},	{
		type:"area",
		axisYType: "secondary",
		name: "Arabic Tweet Volume",
		color: "rgba(255, 205, 0,"+allAra_transparency+")",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 0  },
			{ x: new Date(2015, 0), y: -0.6750861079219288  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.5388 },
			{ x: new Date(2015, 3), y: -0.16091954022988508 },
			{ x: new Date(2015, 4), y: -0.10502283105022836},
			{ x: new Date(2015, 5), y: 0.03571428571428581},
			{ x: new Date(2015, 6), y: -0.18226600985221675},
			]	
		},
	{
		type:"area",
		axisYType: "secondary",
		name: "Positive English Tweets",
		yValueFormatString: "##.#%",
		color: "rgba(255, 127, 0,"+posEng_transparency+")",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.14160659114315144 },
			{ x: new Date(2014, 10), y: -0.38430311231393777  },
			{ x: new Date(2014, 11), y: 0.5633699633699634  },
			{ x: new Date(2015, 0), y: -0.5398313027179007  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.04582 },
			{ x: new Date(2015, 3), y: -0.08751334044823911 },
			{ x: new Date(2015, 4), y: -0.30175438596491233},
			{ x: new Date(2015, 5), y: 0.5611390284757118},
			{ x: new Date(2015, 6), y: -0.20064377682403434},
			]	
		},
		{
		type:"area",
		axisYType: "secondary",
		name: "Negative English Tweets",
		yValueFormatString: "##.#%",
		color: "rgba(100, 0, 255,"+negEng_transparency+")",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0.7706422018348624 },
			{ x: new Date(2014, 10), y: -0.6047882794354118  },
			{ x: new Date(2014, 11), y: 1.1405967450271248},
			{ x: new Date(2015, 0), y: 0.033017875920084094  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.45623 },
			{ x: new Date(2015, 3), y: 0.09060277049794085 },
			{ x: new Date(2015, 4), y: -0.5238585650532097},
			{ x: new Date(2015, 5), y: 0.501802451333814},
			{ x: new Date(2015, 6), y: -0.02064330292846861},	
			]	
		},
		{
		type:"area",
		axisYType: "secondary",
		name: "Positive Arabic Tweets",
		color: "rgba(255, 0, 230,"+posAra_transparency+")",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 0  },
			{ x: new Date(2015, 0), y: -0.5839493136219641  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.581218 },
			{ x: new Date(2015, 3), y: -0.21818181818181814 },
			{ x: new Date(2015, 4), y: -0.4108527131782945},
			{ x: new Date(2015, 5), y: 0.5526315789473684},
			{ x: new Date(2015, 6), y: -0.38983050847457623},
			]
	},

	{
		type:"area",
		axisYType: "secondary",
		name: "Negative Arabic Tweets",
		showInLegend: true,
		yValueFormatString: "##.#%",
		color: "rgba(228, 26, 28,"+negAra_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 0  },
			{ x: new Date(2015, 0), y: -0.7836477987421384  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: -0.44186 },
			{ x: new Date(2015, 3), y: -0.0625 },
			{ x: new Date(2015, 4), y: 0.33333333333333326},
			{ x: new Date(2015, 5), y: -0.29166666666666663},
			{ x: new Date(2015, 6), y: 0.10588235294117654},
			]
	}]
});
var chart1 = new CanvasJS.Chart("barchart", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Number of #ISIS Tweets In Each Signal, and The Number of Families That Have Fled from Ninawa",
		fontFamily: "Serif",
		fontSize: 20,
		padding: {
			bottom:5
		},
	},

	subtitles:[
		{
			text: "Looking at raw numbers of tweets from each signal, rather than percent change, allows us to view overall trends over time. For example, we can see a spike December and January, and again in March through May.",
			fontFamily: "arial",
			fontSize: 14,
			horizontalAlign: "left",
			padding: {
				bottom:30
			},

		},

	],

	axisX: {
		valueFormatString: "MMM YYYY",
		fontFamily: "Serif",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		},
		labelFontSize:10,
		interval:1,
		intervalType: "month"
	},
	axisY:{
		title: "Number of Families",
		lineColor: "rgba(0, 100, 255, 1)",
		titleFontColor: "rgba(0, 100, 255, 1)",
		labelFontColor: "rgba(0, 100, 255, 1)",
		fontFamily: "Serif",
		titleFontSize: 15,
		gridThickness: 0,
		labelFontSize:10,

	},
	axisY2: [{
		title: "Number of Tweets",
		fontFamily: "Serif",
		titleFontSize: 15,
		gridThickness: 0.5,
		labelFontSize:10,
	}
	],
	toolTip: {
		shared: true,
		fontFamily: "Serif",
		fontSize: 10,
		contentFormatter: function(e){
			var str = '';
			str = str.concat(CanvasJS.formatDate(e.entries[0].dataPoint.x,'MMM. YYYY'))+"<br/>"
			for (var i = 0; i < e.entries.length; i++){
				if (e.entries[i].dataSeries.visible) {
					var  temp = "<font color="+ e.entries[i].dataSeries.color+">"+e.entries[i].dataSeries.name + ": <strong>"+  
					CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###,##0") + "</strong> <br/>" ; 
            		str = str.concat(temp);
				}
			}
			return (str);
		}
	},
	legend: {
		cursor: "pointer",
		verticalAlign: "center",
		horizontalAlign: "left",
		dockInsidePlotArea: false,
		fontFamily: "Serif",
		fontSize: 12,
		itemclick: toogleDataSeries1
	},
	data: [{
		type:"column",
		color: "rgba(0, 100, 255, 1)",
		name: "Number of Families",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 156246 },
			{ x: new Date(2014, 10), y: 157327},
			{ x: new Date(2014, 11), y: 166138  },
			{ x: new Date(2015, 0), y: 161803  },
			{ x: new Date(2015, 1), y: 165323 },
			{ x: new Date(2015, 2), y: 168599 },
			{ x: new Date(2015, 3), y: 174633 },
			{ x: new Date(2015, 4), y: 175336}
			]
	},
	{
		type:"column",
		axisYType: "secondary",
		name: "English Tweet Volume",
		color: "rgba(0, 179, 0,"+allEng_transparency+")",
		visible: true,
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 10388 },
			{ x: new Date(2014, 10), y: 6056  },
			{ x: new Date(2014, 11), y: 8788  },
			{ x: new Date(2015, 0), y: 8607  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: 4907 },
			{ x: new Date(2015, 3), y: 5026 },
			{ x: new Date(2015, 4), y: 3427}
			]
	},
	{
		type:"column",
		axisYType: "secondary",
		name: "Arabic Tweet Volume",
		color: "rgba(255, 205, 0,"+allAra_transparency+")",
		// axisYIndex: 1,
		showInLegend: true,
		visible: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 1742  },
			{ x: new Date(2015, 0), y: 566  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: 261 },
			{ x: new Date(2015, 3), y: 219 },
			{ x: new Date(2015, 4), y: 203}
			]
	},
	{
		type:"column",
		axisYType: "secondary",
		name: "Positive English Tweets",
		color: "rgba(255, 127, 0,"+posEng_transparency+")",
		visible: false,
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 2217 },
			{ x: new Date(2014, 10), y: 1365  },
			{ x: new Date(2014, 11), y: 2134  },
			{ x: new Date(2015, 0), y: 982  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: 937 },
			{ x: new Date(2015, 3), y: 855 },
			{ x: new Date(2015, 4), y: 932}
			]
	},

	{
		type:"column",
		axisYType: "secondary",
		name: "Negative English Tweets",
		color: "rgba(100, 0, 255,"+negEng_transparency+")",
		visible: false,
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 5597 },
			{ x: new Date(2014, 10), y: 2212  },
			{ x: new Date(2014, 11), y: 4755  },
			{ x: new Date(2015, 0), y: 4912  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: 2671 },
			{ x: new Date(2015, 3), y: 2913 },
			{ x: new Date(2015, 4), y: 2083}
			]
		},
		{
		type:"column",
		axisYType: "secondary",
		name: "Positive Arabic Tweets",
		color: "rgba(255, 0, 230,"+posAra_transparency+")",
		// axisYIndex: 1,
		showInLegend: true,
		visible: false,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 947  },
			{ x: new Date(2015, 0), y: 394  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: 165 },
			{ x: new Date(2015, 3), y: 129 },
			{ x: new Date(2015, 4), y: 118}
			]
	},

	{
		type:"column",
		axisYType: "secondary",
		name: "Negative Arabic Tweets",
		color: "#4d1300",
		// axisYIndex: 1,
		showInLegend: true,
		visible: false,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 795  },
			{ x: new Date(2015, 0), y: 172  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: 96 },
			{ x: new Date(2015, 3), y: 90 },
			{ x: new Date(2015, 4), y: 85}
			]
	}]
});

var chartEngTweet = new CanvasJS.Chart("barchart_eng", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Number of English #ISIS Tweets, by the Number of Families That Have Fled Ninawa",
		fontFamily: "Serif",
		fontSize: 20,
		padding: {
			bottom:30
		},
	},
	
	axisX: {
		valueFormatString: "MMM YYYY",
		fontFamily: "Serif",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		},
		labelFontSize:10,
		interval:1,
		intervalType: "month"
	},
	axisY:{
		title: "Number of Families",
		lineColor: "rgba(0, 100, 255, 1)",
		titleFontColor: "rgba(0, 100, 255, 1)",
		labelFontColor: "rgba(0, 100, 255, 1)",
		fontFamily: "Serif",
		titleFontSize: 15,
		gridThickness: 0,
		labelFontSize:10,

	},
	axisY2: [{
		title: "Number of Tweets",
		fontFamily: "Serif",
		titleFontSize: 15,
		gridThickness: 0.5,
		labelFontSize:10,

	}],
	toolTip: {
		shared: true,
		fontFamily: "Serif",
		fontSize: 10,
		contentFormatter: function(e){
			var str = '';
			str = str.concat(CanvasJS.formatDate(e.entries[0].dataPoint.x,'MMM. YYYY'))+"<br/>"
			for (var i = 0; i < e.entries.length; i++){
				if (e.entries[i].dataSeries.visible) {
					var  temp = "<font color="+ e.entries[i].dataSeries.color+">"+e.entries[i].dataSeries.name + ": <strong>"+  
					CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###,##0") + "</strong> <br/>" ; 
            		str = str.concat(temp);
				}
			}
			return (str);
		}
	},
	legend: {
		display: false
	},
	data: [{
		type:"column",
		color: "rgba(0, 100, 255, 1)",
		name: "Number of Families",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 156246 },
			{ x: new Date(2014, 10), y: 157327},
			{ x: new Date(2014, 11), y: 166138  },
			{ x: new Date(2015, 0), y: 161803  },
			{ x: new Date(2015, 1), y: 165323 },
			{ x: new Date(2015, 2), y: 168599 },
			{ x: new Date(2015, 3), y: 174633 },
			{ x: new Date(2015, 4), y: 175336}
			]
	},
	{
		type:"column",
		axisYType: "secondary",
		name: "English Tweet Volume",
		color: "rgba(0, 179, 0,"+allEng_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 10388 },
			{ x: new Date(2014, 10), y: 6056  },
			{ x: new Date(2014, 11), y: 8788  },
			{ x: new Date(2015, 0), y: 8607  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: 4907 },
			{ x: new Date(2015, 3), y: 5026 },
			{ x: new Date(2015, 4), y: 3427}
			]
	},

	{
		type:"column",
		axisYType: "secondary",
		name: "Positive English Tweets",
		color: "rgba(255, 127, 0,"+posEng_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 2217 },
			{ x: new Date(2014, 10), y: 1365  },
			{ x: new Date(2014, 11), y: 2134  },
			{ x: new Date(2015, 0), y: 982  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: 937 },
			{ x: new Date(2015, 3), y: 855 },
			{ x: new Date(2015, 4), y: 932}
			]
	},

	{
		type:"column",
		axisYType: "secondary",
		name: "Negative English Tweets",
		color: "rgba(100, 0, 255,"+negEng_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 5597 },
			{ x: new Date(2014, 10), y: 2212  },
			{ x: new Date(2014, 11), y: 4755  },
			{ x: new Date(2015, 0), y: 4912  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: 2671 },
			{ x: new Date(2015, 3), y: 2913 },
			{ x: new Date(2015, 4), y: 2083}
			]
		}
		]
});

var chartArabicTweet = new CanvasJS.Chart("barchart_arabic", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Number of Arabic #ISIS Tweets, by the Number of Families That Have Fled Ninawa",
		fontFamily: "Serif",
		fontSize: 20,
		padding: {
			bottom:30
		},
	},
	
	axisX: {
		valueFormatString: "MMM YYYY",
		fontFamily: "Serif",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		},
		labelFontSize:10,
		interval:1,
		intervalType: "month"
	},
	axisY:{
		title: "Number of Families",
		lineColor: "rgba(0, 100, 255, 1)",
		titleFontColor: "rgba(0, 100, 255, 1)",
		labelFontColor: "rgba(0, 100, 255, 1)",
		fontFamily: "Serif",
		titleFontSize: 15,
		gridThickness: 0,
		labelFontSize:10,

	},
	axisY2: [{
		title: "Number of Tweets",
		fontFamily: "Serif",
		titleFontSize: 15,
		gridThickness: 0.5,
		labelFontSize:10,

	}
	
	],
	toolTip: {
		shared: true,
		fontFamily: "Serif",
		fontSize: 10,
		contentFormatter: function(e){
			var str = '';
			str = str.concat(CanvasJS.formatDate(e.entries[0].dataPoint.x,'MMM. YYYY'))+"<br/>"
			for (var i = 0; i < e.entries.length; i++){
				if (e.entries[i].dataSeries.visible) {
					var  temp = "<font color="+ e.entries[i].dataSeries.color+">"+e.entries[i].dataSeries.name + ": <strong>"+  
					CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###,##0") + "</strong> <br/>" ; 
            		str = str.concat(temp);
				}
			}
			return (str);
		}
	},
	legend: {
		display: false
	},
	data: [{
		type:"column",
		color: "rgba(0, 100, 255, 1)",
		name: "Number of Families",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 156246 },
			{ x: new Date(2014, 10), y: 157327},
			{ x: new Date(2014, 11), y: 166138  },
			{ x: new Date(2015, 0), y: 161803  },
			{ x: new Date(2015, 1), y: 165323 },
			{ x: new Date(2015, 2), y: 168599 },
			{ x: new Date(2015, 3), y: 174633 },
			{ x: new Date(2015, 4), y: 175336}
			]
	},
	{
		type:"column",
		axisYType: "secondary",
		name: "Arabic Tweet Volume",
		color: "rgba(255, 205, 0,"+allAra_transparency+")",
		// axisYIndex: 1,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 1742  },
			{ x: new Date(2015, 0), y: 566  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: 261 },
			{ x: new Date(2015, 3), y: 219 },
			{ x: new Date(2015, 4), y: 203}
			]
	},
	
		{
		type:"column",
		axisYType: "secondary",
		name: "Positive Arabic Tweets",
		color: "rgba(255, 0, 230,"+posAra_transparency+")",
		// axisYIndex: 1,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 947  },
			{ x: new Date(2015, 0), y: 394  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: 165 },
			{ x: new Date(2015, 3), y: 129 },
			{ x: new Date(2015, 4), y: 118}
			]
	},

	{
		type:"column",
		axisYType: "secondary",
		name: "Negative Arabic Tweets",
		color: "#4d1300",
		// axisYIndex: 1,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2014, 9), y: 0 },
			{ x: new Date(2014, 10), y: 0  },
			{ x: new Date(2014, 11), y: 795  },
			{ x: new Date(2015, 0), y: 172  },
			{ x: new Date(2015, 1), y: 0 },
			{ x: new Date(2015, 2), y: 96 },
			{ x: new Date(2015, 3), y: 90 },
			{ x: new Date(2015, 4), y: 85}
			]
	}]
});

var chartchangeXScale_movement = new CanvasJS.Chart("changebarchartNumofFam", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Monthly Movements from Ninawa Governorate between Sep. 2014 and Jul. 2015",
		fontFamily: "Serif",
		maxWidth: 400,
		fontSize: 20,
		padding: {
			bottom:5
		},
	},

	subtitles:[
		{
			text: "This chart displays movement away from the Ninawa governorate around the time of the siege. We can see a decrease in movement during in January during the battle itself, when it was less safe to move, with a steady increase again after the fighting ceased.",
			fontFamily: "arial",
			fontSize: 14,
			horizontalAlign: "left",
			padding: {
				bottom:30
			},

		},

	],

	axisX: {
		valueFormatString: "MMM YYYY",
		interval:1,
		intervalType: "month",
		labelFontSize:10,
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},

	axisY: {
		title: "Number of Families",
		fontFamily: "Serif",
		titleFontSize: 18,
		lineColor: "rgba(0, 100, 255, 1)",
		titleFontColor: "rgba(0, 100, 255, 1)",
		labelFontColor: "rgba(0, 100, 255, 1)",
		labelFontSize:10
	},
	toolTip: {
		shared: true,
		fontFamily: "Serif",
		// backgroundColor: "rgba(255,255,0,.5)",
		ValueFormatString: "##.#%",
		fontSize: 10,
		contentFormatter: function(e){
			var str = '';
			str = str.concat(CanvasJS.formatDate(e.entries[0].dataPoint.x,'MMM. YYYY'))+"<br/>"
			for (var i = 0; i < e.entries.length; i++){
				if (e.entries[i].dataSeries.visible) {
					var  temp = e.entries[i].dataSeries.name + ": <strong>"+  CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###,##0") + "</strong> <br/>" ; 
            		str = str.concat(temp);
				}
			}
			return (str);
		}
	},

	data: [{
		color: "rgba(0, 100, 255, 1)",
		type:"column",
		name: "Number of New Movements",
		
		dataPoints: [		
			{ x: new Date(2014, 8), y: 6698 },
			{ x: new Date(2014, 9), y: 10575 },
			{ x: new Date(2014, 10), y: 1081  },
			{ x: new Date(2014, 11), y: 8811  },
			{ x: new Date(2015, 0), y: -4335  },
			{ x: new Date(2015, 1), y: 3520 },
			{ x: new Date(2015, 2), y: 3276 },
			{ x: new Date(2015, 3), y: 6899 },
			{ x: new Date(2015, 4), y: -162},
			{ x: new Date(2015, 5), y: -1641},
			{ x: new Date(2015, 6), y: -1410}
			]
	}]
});


var chart2 = new CanvasJS.Chart("barchartNumofFam", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Monthly Movements from Ninawa Governorate between Oct. 2014 and May 2015",
		maxWidth: 400,
		fontFamily: "Serif",
		fontSize: 20,
		padding: {
			bottom:5
		},
	},

	subtitles:[
		{
			text: "This chart displays movement away from the Ninawa governorate around the time of the siege. We can see a decrease in movement during in January during the battle itself, when it was less safe to move, with a steady increase again after the fighting ceased.",
			fontFamily: "arial",
			fontSize: 14,
			horizontalAlign: "left",
			padding: {
				bottom:30
			},

		},

	],

	axisX: {
		valueFormatString: "MMM YYYY",
		interval:1,
		intervalType: "month",
		labelFontSize:10,
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},

	axisY: {
		title: "Number of Families",
		fontFamily: "Serif",
		titleFontSize: 18,
		lineColor: "rgba(0, 100, 255, 1)",
		titleFontColor: "rgba(0, 100, 255, 1)",
		labelFontColor: "rgba(0, 100, 255, 1)",
		labelFontSize:10
	},
	toolTip: {
		shared: true,
		fontFamily: "Serif",
		// backgroundColor: "rgba(255,255,0,.5)",
		ValueFormatString: "##.#%",
		fontSize: 10,
		contentFormatter: function(e){
			var str = '';
			str = str.concat(CanvasJS.formatDate(e.entries[0].dataPoint.x,'MMM. YYYY'))+"<br/>"
			for (var i = 0; i < e.entries.length; i++){
				if (e.entries[i].dataSeries.visible) {
					var  temp = e.entries[i].dataSeries.name + ": <strong>"+  CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###,##0") + "</strong> <br/>" ; 
            		str = str.concat(temp);
				}
			}
			return (str);
		}
	},

	data: [{
		color: "rgba(0, 100, 255, 1)",
		type:"column",
		name: "Number of New Movements",
		
		dataPoints: [		
			{ x: new Date(2014, 9), y: 10575 },
			{ x: new Date(2014, 10), y: 1081  },
			{ x: new Date(2014, 11), y: 8811  },
			{ x: new Date(2015, 0), y: -4335  },
			{ x: new Date(2015, 1), y: 3520 },
			{ x: new Date(2015, 2), y: 3276 },
			{ x: new Date(2015, 3), y: 6899 },
			{ x: new Date(2015, 4), y: -162},

			]
	}]
});


chartChangeScale.render();
chartNormScale.render();
chartscalexy.render();
chartscalexNormy.render();
chart1.render();
chart2.render();
chartArabicTweet.render();
chartEngTweet.render();
chartchangeXScale_movement.render();


function toogleDataSeries1(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
		if (e.dataSeries.name=="Number of Families"){
			chart1.axisY[0].set("titleFontSize", 0);
		}
	} else{
		e.dataSeries.visible = true;
		if (e.dataSeries.name=="Number of Families"){
			chart1.axisY[0].set("titleFontSize", 15);
		}
	}

	chart1.render();

}

function toogleDataSeries(e){
	if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;

	} else{
		e.dataSeries.visible = true;
	}
	chartChangeScale.render();
	chartNormScale.render();
	chartscalexy.render();
	chartscalexNormy.render();


}
}
