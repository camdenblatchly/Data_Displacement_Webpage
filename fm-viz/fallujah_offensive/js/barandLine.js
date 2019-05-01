
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
		text: "Monthly Change in #ISIS Twitter Signals, and The Number of Families That Have Fled from Anbar",
		fontFamily: "Serif",
		fontSize: 20,
		padding: {
			bottom:5
		},
	},

	subtitles:[
		{
			text: "This graph shows the percent change in each signal over the previous month. In this time frame, signals from Anbar are closely correlated, suggesting that they are capturing something around the events that occurred.",
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
					var  temp = "<font color="+ e.entries[i].dataSeries.color+">"+e.entries[i].dataSeries.name + "</font>: <strong>"+  CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###, ##0%") + "</strong> <br/>" ; 
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
			{ x: new Date(2016, 1), y: 0.007517436919996401  },
			{ x: new Date(2016, 2), y: 0.03469714113928535  },
			{ x: new Date(2016, 3), y: -0.044582363171933426  },
			{ x: new Date(2016, 4), y: -0.012514624328970325  },
			{ x: new Date(2016, 5), y: 0.045526090675791275  },
			{ x: new Date(2016, 6), y: -0.03057141922076223  },
			{ x: new Date(2016, 7), y: -0.04747416350523903  },
			{ x: new Date(2016, 8), y: -0.05057128047456816  }
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
			{ x: new Date(2016, 1), y: -0.5393111119939613  },
			{ x: new Date(2016, 2), y: 0.5326836840289755  },
			{ x: new Date(2016, 3), y: -0.1040904743149722  },
			{ x: new Date(2016, 4), y: 1.1050681404257992  },
			{ x: new Date(2016, 5), y: 0.12470539097228439  },
			{ x: new Date(2016, 6), y: -0.4816042865858511  },
			{ x: new Date(2016, 7), y: -0.04845724811953134  },
			{ x: new Date(2016, 8), y: -0.3363088836308884  }
			]	},	{
		type:"area",
		axisYType: "secondary",
		name: "Arabic Tweet Volume",
		color: "rgba(255, 205, 0,"+allAra_transparency+")",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2016, 1), y: -0.8180404354587869  },
			{ x: new Date(2016, 2), y: 0.8137651821862348  },
			{ x: new Date(2016, 3), y: -0.44568452380952384  },
			{ x: new Date(2016, 4), y: 2.2205816554809843  },
			{ x: new Date(2016, 5), y: -0.16824117810502914  },
			{ x: new Date(2016, 6), y: -0.24152330048438286  },
			{ x: new Date(2016, 7), y: 0.12398150187183443  },
			{ x: new Date(2016, 8), y: -0.557014106583072  }
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
			{ x: new Date(2016, 1), y: -0.4499314128943759  },
			{ x: new Date(2016, 2), y: 0.16666666666666674  },
			{ x: new Date(2016, 3), y: -0.20662629141432132  },
			{ x: new Date(2016, 4), y: 2.1499775482712167  },
			{ x: new Date(2016, 5), y: -0.037205987170349286  },
			{ x: new Date(2016, 6), y: -0.5463429079064258  },
			{ x: new Date(2016, 7), y: 0.2454308093994777  },
			{ x: new Date(2016, 8), y: -0.36373165618448633  }
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
			{ x: new Date(2016, 1), y: -0.6255218480378514  },
			{ x: new Date(2016, 2), y: 0.7086584912671869  },
			{ x: new Date(2016, 3), y: -0.07840365376250547  },
			{ x: new Date(2016, 4), y: 1.111622418879056  },
			{ x: new Date(2016, 5), y: 0.1607621814930711  },
			{ x: new Date(2016, 6), y: -0.5135512444037934  },
			{ x: new Date(2016, 7), y: 0.032756061355764476  },
			{ x: new Date(2016, 8), y: -0.4340743579915677  }
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
			{ x: new Date(2016, 1), y: -0.8951410658307211  },
			{ x: new Date(2016, 2), y: 2.1689088191330343  },
			{ x: new Date(2016, 3), y: -0.49245283018867925  },
			{ x: new Date(2016, 4), y: 1.6366171003717471  },
			{ x: new Date(2016, 5), y: 0.07331688403242853  },
			{ x: new Date(2016, 6), y: -0.47651888341543513  },
			{ x: new Date(2016, 7), y: 0.7296110414052697  },
			{ x: new Date(2016, 8), y: -0.5995647442872687  }
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
			{ x: new Date(2016, 1), y: -0.7337673462395066  },
			{ x: new Date(2016, 2), y: 0.23037323037323043  },
			{ x: new Date(2016, 3), y: -0.3938284518828452  },
			{ x: new Date(2016, 4), y: 2.7627264883520275  },
			{ x: new Date(2016, 5), y: -0.32538408621875714  },
			{ x: new Date(2016, 6), y: 0.0016995241332427025  },
			{ x: new Date(2016, 7), y: -0.2035968781812012  },
			{ x: new Date(2016, 8), y: -0.5070302513847464  }
			]
	}]
});

var chartChangeScale = new CanvasJS.Chart("linechartChangeScale", {
	animationEnabled: true,
	zoomEnabled: true,
	theme: "light2",
	title: {
		text: "Monthly Change in #ISIS Twitter Signals, and The Number of Families That Have Fled from Anbar",
		fontFamily: "Serif",
		fontSize: 20,
		padding: {
			bottom:5
		},
	},

	subtitles:[
		{
			text: "This graph shows the percent change in each signal over the previous month. In this time frame, signals from Anbar are closely correlated, suggesting that they are capturing something around the events that occurred.",
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
					var  temp = "<font color="+ e.entries[i].dataSeries.color+">"+e.entries[i].dataSeries.name + "</font>: <strong>"+  CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###, ##0%") + "</strong> <br/>" ; 
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
			{ x: new Date(2016, 1), y: 0.007517436919996401  },
			{ x: new Date(2016, 2), y: 0.03469714113928535  },
			{ x: new Date(2016, 3), y: -0.044582363171933426  },
			{ x: new Date(2016, 4), y: -0.012514624328970325  },
			{ x: new Date(2016, 5), y: 0.045526090675791275  },
			{ x: new Date(2016, 6), y: -0.03057141922076223  },
			{ x: new Date(2016, 7), y: -0.04747416350523903  },
			{ x: new Date(2016, 8), y: -0.05057128047456816  }
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
			{ x: new Date(2016, 1), y: -0.5393111119939613  },
			{ x: new Date(2016, 2), y: 0.5326836840289755  },
			{ x: new Date(2016, 3), y: -0.1040904743149722  },
			{ x: new Date(2016, 4), y: 1.1050681404257992  },
			{ x: new Date(2016, 5), y: 0.12470539097228439  },
			{ x: new Date(2016, 6), y: -0.4816042865858511  },
			{ x: new Date(2016, 7), y: -0.04845724811953134  },
			{ x: new Date(2016, 8), y: -0.3363088836308884  }
			]	},	{
		type:"area",
		axisYType: "secondary",
		name: "Arabic Tweet Volume",
		color: "rgba(255, 205, 0,"+allAra_transparency+")",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2016, 1), y: -0.8180404354587869  },
			{ x: new Date(2016, 2), y: 0.8137651821862348  },
			{ x: new Date(2016, 3), y: -0.44568452380952384  },
			{ x: new Date(2016, 4), y: 2.2205816554809843  },
			{ x: new Date(2016, 5), y: -0.16824117810502914  },
			{ x: new Date(2016, 6), y: -0.24152330048438286  },
			{ x: new Date(2016, 7), y: 0.12398150187183443  },
			{ x: new Date(2016, 8), y: -0.557014106583072  }
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
			{ x: new Date(2016, 1), y: -0.4499314128943759  },
			{ x: new Date(2016, 2), y: 0.16666666666666674  },
			{ x: new Date(2016, 3), y: -0.20662629141432132  },
			{ x: new Date(2016, 4), y: 2.1499775482712167  },
			{ x: new Date(2016, 5), y: -0.037205987170349286  },
			{ x: new Date(2016, 6), y: -0.5463429079064258  },
			{ x: new Date(2016, 7), y: 0.2454308093994777  },
			{ x: new Date(2016, 8), y: -0.36373165618448633  }
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
			{ x: new Date(2016, 1), y: -0.6255218480378514  },
			{ x: new Date(2016, 2), y: 0.7086584912671869  },
			{ x: new Date(2016, 3), y: -0.07840365376250547  },
			{ x: new Date(2016, 4), y: 1.111622418879056  },
			{ x: new Date(2016, 5), y: 0.1607621814930711  },
			{ x: new Date(2016, 6), y: -0.5135512444037934  },
			{ x: new Date(2016, 7), y: 0.032756061355764476  },
			{ x: new Date(2016, 8), y: -0.4340743579915677  }
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
			{ x: new Date(2016, 1), y: -0.8951410658307211  },
			{ x: new Date(2016, 2), y: 2.1689088191330343  },
			{ x: new Date(2016, 3), y: -0.49245283018867925  },
			{ x: new Date(2016, 4), y: 1.6366171003717471  },
			{ x: new Date(2016, 5), y: 0.07331688403242853  },
			{ x: new Date(2016, 6), y: -0.47651888341543513  },
			{ x: new Date(2016, 7), y: 0.7296110414052697  },
			{ x: new Date(2016, 8), y: -0.5995647442872687  }
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
			{ x: new Date(2016, 1), y: -0.7337673462395066  },
			{ x: new Date(2016, 2), y: 0.23037323037323043  },
			{ x: new Date(2016, 3), y: -0.3938284518828452  },
			{ x: new Date(2016, 4), y: 2.7627264883520275  },
			{ x: new Date(2016, 5), y: -0.32538408621875714  },
			{ x: new Date(2016, 6), y: 0.0016995241332427025  },
			{ x: new Date(2016, 7), y: -0.2035968781812012  },
			{ x: new Date(2016, 8), y: -0.5070302513847464  }
			]
	}]
});

var chartscalexy = new CanvasJS.Chart("linecharScalexy", {
	animationEnabled: true,
	zoomEnabled: true,
	theme: "light2",
	title: {
		text: "Change of ISIS Hashtag Tweets and Number of Families Fleed from Anbar Governorate",
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
					var  temp = "<font color="+ e.entries[i].dataSeries.color+">"+e.entries[i].dataSeries.name + "</font>: <strong>"+  CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###, ##0%") + "</strong> <br/>" ; 
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
			{ x: new Date(2015, 11), y: 0.016456867428399358 },
			{ x: new Date(2016, 0), y: 0.006456693580141337  },
			{ x: new Date(2016, 1), y: 0.007517436919996401  },
			{ x: new Date(2016, 2), y: 0.03469714113928535  },
			{ x: new Date(2016, 3), y: -0.044582363171933426  },
			{ x: new Date(2016, 4), y: -0.012514624328970325  },
			{ x: new Date(2016, 5), y: 0.045526090675791275  },
			{ x: new Date(2016, 6), y: -0.03057141922076223  },
			{ x: new Date(2016, 7), y: -0.04747416350523903  },
			{ x: new Date(2016, 8), y: -0.05057128047456816  },
			{ x: new Date(2016, 9), y: -0.07478558696443405  },
			{ x: new Date(2016, 10), y: -0.16061711023355973  }
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
			{ x: new Date(2015, 11), y: -0.18101213510162673 },
			{ x: new Date(2016, 0), y: -0.4226570026147989  },
			{ x: new Date(2016, 1), y: -0.5393111119939613  },
			{ x: new Date(2016, 2), y: 0.5326836840289755  },
			{ x: new Date(2016, 3), y: -0.1040904743149722  },
			{ x: new Date(2016, 4), y: 1.1050681404257992  },
			{ x: new Date(2016, 5), y: 0.12470539097228439  },
			{ x: new Date(2016, 6), y: -0.4816042865858511  },
			{ x: new Date(2016, 7), y: -0.04845724811953134  },
			{ x: new Date(2016, 8), y: -0.3363088836308884  },
			{ x: new Date(2016, 9), y: 0.11456814130610926  },
			{ x: new Date(2016, 10), y: -0.3261122419307938  }
			]	},	{
		type:"area",
		axisYType: "secondary",
		name: "Arabic Tweet Volume",
		color: "rgba(255, 205, 0,"+allAra_transparency+")",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2015, 11), y: 1.0957681849082257 },
			{ x: new Date(2016, 0), y: -0.5046425820054332  },
			{ x: new Date(2016, 1), y: -0.8180404354587869  },
			{ x: new Date(2016, 2), y: 0.8137651821862348  },
			{ x: new Date(2016, 3), y: -0.44568452380952384  },
			{ x: new Date(2016, 4), y: 2.2205816554809843  },
			{ x: new Date(2016, 5), y: -0.16824117810502914  },
			{ x: new Date(2016, 6), y: -0.24152330048438286  },
			{ x: new Date(2016, 7), y: 0.12398150187183443  },
			{ x: new Date(2016, 8), y: -0.557014106583072  },
			{ x: new Date(2016, 9), y: 0.17868199911543559  },
			{ x: new Date(2016, 10), y: -0.5651031894934334  }
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
			{ x: new Date(2015, 11), y: -0.07210031347962387 },
			{ x: new Date(2016, 0), y: -0.5233217088055797  },
			{ x: new Date(2016, 1), y: -0.4499314128943759  },
			{ x: new Date(2016, 2), y: 0.16666666666666674  },
			{ x: new Date(2016, 3), y: -0.20662629141432132  },
			{ x: new Date(2016, 4), y: 2.1499775482712167  },
			{ x: new Date(2016, 5), y: -0.037205987170349286  },
			{ x: new Date(2016, 6), y: -0.5463429079064258  },
			{ x: new Date(2016, 7), y: 0.2454308093994777  },
			{ x: new Date(2016, 8), y: -0.36373165618448633  },
			{ x: new Date(2016, 9), y: 0.14250411861614487  },
			{ x: new Date(2016, 10), y: -0.39473684210526316  }
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
			{ x: new Date(2015, 11), y: -0.2872313343273811 },
			{ x: new Date(2016, 0), y: -0.2666972804734935  },
			{ x: new Date(2016, 1), y: -0.6255218480378514  },
			{ x: new Date(2016, 2), y: 0.7086584912671869  },
			{ x: new Date(2016, 3), y: -0.07840365376250547  },
			{ x: new Date(2016, 4), y: 1.111622418879056  },
			{ x: new Date(2016, 5), y: 0.1607621814930711  },
			{ x: new Date(2016, 6), y: -0.5135512444037934  },
			{ x: new Date(2016, 7), y: 0.032756061355764476  },
			{ x: new Date(2016, 8), y: -0.4340743579915677  },
			{ x: new Date(2016, 9), y: 0.14713850321706734  },
			{ x: new Date(2016, 10), y: -0.33431734317343176  }
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
			{ x: new Date(2015, 11), y: 1.0828185005844047 },
			{ x: new Date(2016, 0), y: -0.4885361552028219  },
			{ x: new Date(2016, 1), y: -0.8951410658307211  },
			{ x: new Date(2016, 2), y: 2.1689088191330343  },
			{ x: new Date(2016, 3), y: -0.49245283018867925  },
			{ x: new Date(2016, 4), y: 1.6366171003717471  },
			{ x: new Date(2016, 5), y: 0.07331688403242853  },
			{ x: new Date(2016, 6), y: -0.47651888341543513  },
			{ x: new Date(2016, 7), y: 0.7296110414052697  },
			{ x: new Date(2016, 8), y: -0.5995647442872687  },
			{ x: new Date(2016, 9), y: 0.33514492753623193  },
			{ x: new Date(2016, 10), y: -0.5624151967435549  }
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
			{ x: new Date(2015, 11), y: 1.1091884409067312 },
			{ x: new Date(2016, 0), y: -0.521125605053737  },
			{ x: new Date(2016, 1), y: -0.7337673462395066  },
			{ x: new Date(2016, 2), y: 0.23037323037323043  },
			{ x: new Date(2016, 3), y: -0.3938284518828452  },
			{ x: new Date(2016, 4), y: 2.7627264883520275  },
			{ x: new Date(2016, 5), y: -0.32538408621875714  },
			{ x: new Date(2016, 6), y: 0.0016995241332427025  },
			{ x: new Date(2016, 7), y: -0.2035968781812012  },
			{ x: new Date(2016, 8), y: -0.5070302513847464  },
			{ x: new Date(2016, 9), y: 0.029386343993085484  },
			{ x: new Date(2016, 10), y: -0.5684298908480269  }
			]
	}]
});

var chartscalexNormy = new CanvasJS.Chart("linechartNormYScaleChangeX", {
	animationEnabled: true,
	zoomEnabled: true,
	theme: "light2",
	title: {
		text: "Monthly Change in #ISIS Twitter Signals, and The Number of Families That Have Fled from Anbar",
		fontFamily: "Serif",
		fontSize: 20,
		padding: {
			bottom:5
		},
	},

	subtitles:[
		{
			text: "This graph shows the percent change in each signal over the previous month. In this time frame, signals from Anbar are closely correlated, suggesting that they are capturing something around the events that occurred.",
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
					var  temp = "<font color="+ e.entries[i].dataSeries.color+">"+e.entries[i].dataSeries.name + "</font>: <strong>"+  CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###, ##0%") + "</strong> <br/>" ; 
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
			{ x: new Date(2015, 11), y: 0.016456867428399358 },
			{ x: new Date(2016, 0), y: 0.006456693580141337  },
			{ x: new Date(2016, 1), y: 0.007517436919996401  },
			{ x: new Date(2016, 2), y: 0.03469714113928535  },
			{ x: new Date(2016, 3), y: -0.044582363171933426  },
			{ x: new Date(2016, 4), y: -0.012514624328970325  },
			{ x: new Date(2016, 5), y: 0.045526090675791275  },
			{ x: new Date(2016, 6), y: -0.03057141922076223  },
			{ x: new Date(2016, 7), y: -0.04747416350523903  },
			{ x: new Date(2016, 8), y: -0.05057128047456816  },
			{ x: new Date(2016, 9), y: -0.07478558696443405  },
			{ x: new Date(2016, 10), y: -0.16061711023355973  }
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
			{ x: new Date(2015, 11), y: -0.18101213510162673 },
			{ x: new Date(2016, 0), y: -0.4226570026147989  },
			{ x: new Date(2016, 1), y: -0.5393111119939613  },
			{ x: new Date(2016, 2), y: 0.5326836840289755  },
			{ x: new Date(2016, 3), y: -0.1040904743149722  },
			{ x: new Date(2016, 4), y: 1.1050681404257992  },
			{ x: new Date(2016, 5), y: 0.12470539097228439  },
			{ x: new Date(2016, 6), y: -0.4816042865858511  },
			{ x: new Date(2016, 7), y: -0.04845724811953134  },
			{ x: new Date(2016, 8), y: -0.3363088836308884  },
			{ x: new Date(2016, 9), y: 0.11456814130610926  },
			{ x: new Date(2016, 10), y: -0.3261122419307938  }
			]	},	{
		type:"area",
		axisYType: "secondary",
		name: "Arabic Tweet Volume",
		color: "rgba(255, 205, 0,"+allAra_transparency+")",
		yValueFormatString: "##.#%",
		showInLegend: true,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2015, 11), y: 1.0957681849082257 },
			{ x: new Date(2016, 0), y: -0.5046425820054332  },
			{ x: new Date(2016, 1), y: -0.8180404354587869  },
			{ x: new Date(2016, 2), y: 0.8137651821862348  },
			{ x: new Date(2016, 3), y: -0.44568452380952384  },
			{ x: new Date(2016, 4), y: 2.2205816554809843  },
			{ x: new Date(2016, 5), y: -0.16824117810502914  },
			{ x: new Date(2016, 6), y: -0.24152330048438286  },
			{ x: new Date(2016, 7), y: 0.12398150187183443  },
			{ x: new Date(2016, 8), y: -0.557014106583072  },
			{ x: new Date(2016, 9), y: 0.17868199911543559  },
			{ x: new Date(2016, 10), y: -0.5651031894934334  }
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
			{ x: new Date(2015, 11), y: -0.07210031347962387 },
			{ x: new Date(2016, 0), y: -0.5233217088055797  },
			{ x: new Date(2016, 1), y: -0.4499314128943759  },
			{ x: new Date(2016, 2), y: 0.16666666666666674  },
			{ x: new Date(2016, 3), y: -0.20662629141432132  },
			{ x: new Date(2016, 4), y: 2.1499775482712167  },
			{ x: new Date(2016, 5), y: -0.037205987170349286  },
			{ x: new Date(2016, 6), y: -0.5463429079064258  },
			{ x: new Date(2016, 7), y: 0.2454308093994777  },
			{ x: new Date(2016, 8), y: -0.36373165618448633  },
			{ x: new Date(2016, 9), y: 0.14250411861614487  },
			{ x: new Date(2016, 10), y: -0.39473684210526316  }
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
			{ x: new Date(2015, 11), y: -0.2872313343273811 },
			{ x: new Date(2016, 0), y: -0.2666972804734935  },
			{ x: new Date(2016, 1), y: -0.6255218480378514  },
			{ x: new Date(2016, 2), y: 0.7086584912671869  },
			{ x: new Date(2016, 3), y: -0.07840365376250547  },
			{ x: new Date(2016, 4), y: 1.111622418879056  },
			{ x: new Date(2016, 5), y: 0.1607621814930711  },
			{ x: new Date(2016, 6), y: -0.5135512444037934  },
			{ x: new Date(2016, 7), y: 0.032756061355764476  },
			{ x: new Date(2016, 8), y: -0.4340743579915677  },
			{ x: new Date(2016, 9), y: 0.14713850321706734  },
			{ x: new Date(2016, 10), y: -0.33431734317343176  }
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
			{ x: new Date(2015, 11), y: 1.0828185005844047 },
			{ x: new Date(2016, 0), y: -0.4885361552028219  },
			{ x: new Date(2016, 1), y: -0.8951410658307211  },
			{ x: new Date(2016, 2), y: 2.1689088191330343  },
			{ x: new Date(2016, 3), y: -0.49245283018867925  },
			{ x: new Date(2016, 4), y: 1.6366171003717471  },
			{ x: new Date(2016, 5), y: 0.07331688403242853  },
			{ x: new Date(2016, 6), y: -0.47651888341543513  },
			{ x: new Date(2016, 7), y: 0.7296110414052697  },
			{ x: new Date(2016, 8), y: -0.5995647442872687  },
			{ x: new Date(2016, 9), y: 0.33514492753623193  },
			{ x: new Date(2016, 10), y: -0.5624151967435549  }
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
			{ x: new Date(2015, 11), y: 1.1091884409067312 },
			{ x: new Date(2016, 0), y: -0.521125605053737  },
			{ x: new Date(2016, 1), y: -0.7337673462395066  },
			{ x: new Date(2016, 2), y: 0.23037323037323043  },
			{ x: new Date(2016, 3), y: -0.3938284518828452  },
			{ x: new Date(2016, 4), y: 2.7627264883520275  },
			{ x: new Date(2016, 5), y: -0.32538408621875714  },
			{ x: new Date(2016, 6), y: 0.0016995241332427025  },
			{ x: new Date(2016, 7), y: -0.2035968781812012  },
			{ x: new Date(2016, 8), y: -0.5070302513847464  },
			{ x: new Date(2016, 9), y: 0.029386343993085484  },
			{ x: new Date(2016, 10), y: -0.5684298908480269  }
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
			text: "Looking at raw numbers of tweets from each signal, rather than percent change, allows us to view overall trends over time. For example, we can see a spike in tweets in May and June, during the offensives themselves.",
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
					CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###, ##0") + "</strong> <br/>" ; 
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
			{ x: new Date(2016, 1), y: 239501 },
			{ x: new Date(2016, 2), y: 247811 },
			{ x: new Date(2016, 3), y: 236763 },
			{ x: new Date(2016, 4), y: 233800 },
			{ x: new Date(2016, 5), y: 244444 },
			{ x: new Date(2016, 6), y: 236971 },
			{ x: new Date(2016, 7), y: 225721 },
			{ x: new Date(2016, 8), y: 214306 }
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
			{ x: new Date(2016, 1), y: 11596 },
			{ x: new Date(2016, 2), y: 17773 },
			{ x: new Date(2016, 3), y: 15923 },
			{ x: new Date(2016, 4), y: 33519 },
			{ x: new Date(2016, 5), y: 37699 },
			{ x: new Date(2016, 6), y: 19543 },
			{ x: new Date(2016, 7), y: 18596 },
			{ x: new Date(2016, 8), y: 12342 }
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
			{ x: new Date(2016, 1), y: 2223 },
			{ x: new Date(2016, 2), y: 4032 },
			{ x: new Date(2016, 3), y: 2235 },
			{ x: new Date(2016, 4), y: 7198 },
			{ x: new Date(2016, 5), y: 5987 },
			{ x: new Date(2016, 6), y: 4541 },
			{ x: new Date(2016, 7), y: 5104 },
			{ x: new Date(2016, 8), y: 2261 }
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
			{ x: new Date(2016, 1), y: 2406 },
			{ x: new Date(2016, 2), y: 2807 },
			{ x: new Date(2016, 3), y: 2227 },
			{ x: new Date(2016, 4), y: 7015 },
			{ x: new Date(2016, 5), y: 6754 },
			{ x: new Date(2016, 6), y: 3064 },
			{ x: new Date(2016, 7), y: 3816 },
			{ x: new Date(2016, 8), y: 2428 }
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
			{ x: new Date(2016, 1), y: 5382 },
			{ x: new Date(2016, 2), y: 9196 },
			{ x: new Date(2016, 3), y: 8475 },
			{ x: new Date(2016, 4), y: 17896 },
			{ x: new Date(2016, 5), y: 20773 },
			{ x: new Date(2016, 6), y: 10105 },
			{ x: new Date(2016, 7), y: 10436 },
			{ x: new Date(2016, 8), y: 5906 }
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
			{ x: new Date(2016, 1), y: 669 },
			{ x: new Date(2016, 2), y: 2120 },
			{ x: new Date(2016, 3), y: 1076 },
			{ x: new Date(2016, 4), y: 2837 },
			{ x: new Date(2016, 5), y: 3045 },
			{ x: new Date(2016, 6), y: 1594 },
			{ x: new Date(2016, 7), y: 2757 },
			{ x: new Date(2016, 8), y: 1104 }
			]
	},

	{
		type:"column",
		axisYType: "secondary",
		name: "Negative Arabic Tweets",
		color: "rgba(228, 26, 28,"+negAra_transparency+")",
		// axisYIndex: 1,
		showInLegend: true,
		visible: false,
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2016, 1), y: 1554 },
			{ x: new Date(2016, 2), y: 1912 },
			{ x: new Date(2016, 3), y: 1159 },
			{ x: new Date(2016, 4), y: 4361 },
			{ x: new Date(2016, 5), y: 2942 },
			{ x: new Date(2016, 6), y: 2947 },
			{ x: new Date(2016, 7), y: 2347 },
			{ x: new Date(2016, 8), y: 1157 }
			]
	}]
});

var chartEngTweet = new CanvasJS.Chart("barchart_eng", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Number of English #ISIS Tweets, by the Number of Families That Have Fled Anbar",
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
					CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###, ##0") + "</strong> <br/>" ; 
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
			{ x: new Date(2016, 1), y: 239501 },
			{ x: new Date(2016, 2), y: 247811 },
			{ x: new Date(2016, 3), y: 236763 },
			{ x: new Date(2016, 4), y: 233800 },
			{ x: new Date(2016, 5), y: 244444 },
			{ x: new Date(2016, 6), y: 236971 },
			{ x: new Date(2016, 7), y: 225721 },
			{ x: new Date(2016, 8), y: 214306 }
			]
	},
	{
		type:"column",
		axisYType: "secondary",
		name: "English Tweet Volume",
		color: "rgba(0, 179, 0,"+allEng_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2016, 1), y: 11596 },
			{ x: new Date(2016, 2), y: 17773 },
			{ x: new Date(2016, 3), y: 15923 },
			{ x: new Date(2016, 4), y: 33519 },
			{ x: new Date(2016, 5), y: 37699 },
			{ x: new Date(2016, 6), y: 19543 },
			{ x: new Date(2016, 7), y: 18596 },
			{ x: new Date(2016, 8), y: 12342 }
			]
	},

	{
		type:"column",
		axisYType: "secondary",
		name: "Positive English Tweets",
		color: "rgba(255, 127, 0,"+posEng_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2016, 1), y: 2406 },
			{ x: new Date(2016, 2), y: 2807 },
			{ x: new Date(2016, 3), y: 2227 },
			{ x: new Date(2016, 4), y: 7015 },
			{ x: new Date(2016, 5), y: 6754 },
			{ x: new Date(2016, 6), y: 3064 },
			{ x: new Date(2016, 7), y: 3816 },
			{ x: new Date(2016, 8), y: 2428 }
			]
	},

	{
		type:"column",
		axisYType: "secondary",
		name: "Negative English Tweets",
		color: "rgba(100, 0, 255,"+negEng_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2016, 1), y: 5382 },
			{ x: new Date(2016, 2), y: 9196 },
			{ x: new Date(2016, 3), y: 8475 },
			{ x: new Date(2016, 4), y: 17896 },
			{ x: new Date(2016, 5), y: 20773 },
			{ x: new Date(2016, 6), y: 10105 },
			{ x: new Date(2016, 7), y: 10436 },
			{ x: new Date(2016, 8), y: 5906 }
			]
		}
		]
});

var chartArabicTweet = new CanvasJS.Chart("barchart_arabic", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Number of Arabic #ISIS Tweets, by the Number of Families That Have Fled Anbar",
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
					CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###, ##0") + "</strong> <br/>" ; 
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
			{ x: new Date(2016, 1), y: 239501 },
			{ x: new Date(2016, 2), y: 247811 },
			{ x: new Date(2016, 3), y: 236763 },
			{ x: new Date(2016, 4), y: 233800 },
			{ x: new Date(2016, 5), y: 244444 },
			{ x: new Date(2016, 6), y: 236971 },
			{ x: new Date(2016, 7), y: 225721 },
			{ x: new Date(2016, 8), y: 214306 }
			]
	},
	{
		type:"column",
		axisYType: "secondary",
		name: "Arabic Tweet Volume",
		color: "rgba(255, 205, 0,"+allAra_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2016, 1), y: 2223 },
			{ x: new Date(2016, 2), y: 4032 },
			{ x: new Date(2016, 3), y: 2235 },
			{ x: new Date(2016, 4), y: 7198 },
			{ x: new Date(2016, 5), y: 5987 },
			{ x: new Date(2016, 6), y: 4541 },
			{ x: new Date(2016, 7), y: 5104 },
			{ x: new Date(2016, 8), y: 2261 }
			]
	},
	
		{
		type:"column",
		axisYType: "secondary",
		name: "Positive Arabic Tweets",
		color: "rgba(255, 0, 230,"+posAra_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2016, 1), y: 669 },
			{ x: new Date(2016, 2), y: 2120 },
			{ x: new Date(2016, 3), y: 1076 },
			{ x: new Date(2016, 4), y: 2837 },
			{ x: new Date(2016, 5), y: 3045 },
			{ x: new Date(2016, 6), y: 1594 },
			{ x: new Date(2016, 7), y: 2757 },
			{ x: new Date(2016, 8), y: 1104 }
			]
	},

	{
		type:"column",
		axisYType: "secondary",
		name: "Negative Arabic Tweets",
		color: "rgba(228, 26, 28,"+negAra_transparency+")",
		markerSize: 0,
		dataPoints: [		
			{ x: new Date(2016, 1), y: 1554 },
			{ x: new Date(2016, 2), y: 1912 },
			{ x: new Date(2016, 3), y: 1159 },
			{ x: new Date(2016, 4), y: 4361 },
			{ x: new Date(2016, 5), y: 2942 },
			{ x: new Date(2016, 6), y: 2947 },
			{ x: new Date(2016, 7), y: 2347 },
			{ x: new Date(2016, 8), y: 1157 }
			]
	}]
});

var chartchangeXScale_movement = new CanvasJS.Chart("changebarchartNumofFam", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Monthly Movements from Anbar Governorate between Dec. 2015 and Nov. 2016",
		fontFamily: "Serif",
		maxWidth: 400,
		fontSize: 20,
		padding: {
			bottom:5
		},
	},

	subtitles:[
		{
			text: "This chart displays movement away from the Anbar governorate around the time of the siege. Many civilians had been trapped within Fallujah prior to its liberation at the end of May. They were also given very little warning to flee prior to the offensive. In June, the number of families who had fled increased drastically as people fled the battle and arrived at other destination around iraq.",
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
			{ x: new Date(2015, 11), y: 3824 },
			{ x: new Date(2016, 0), y: 1525 },
			{ x: new Date(2016, 1), y: 1787 },
			{ x: new Date(2016, 2), y: 8310 },
			{ x: new Date(2016, 3), y: -11048 },
			{ x: new Date(2016, 4), y: -2963 },
			{ x: new Date(2016, 5), y: 10644 },
			{ x: new Date(2016, 6), y: -7473 },
			{ x: new Date(2016, 7), y: -11250 },
			{ x: new Date(2016, 8), y: -11415 },
			{ x: new Date(2016, 9), y: -16027 },
			{ x: new Date(2016, 10), y: -31847 }
			]
	}]
});


var chart2 = new CanvasJS.Chart("barchartNumofFam", {
	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Monthly Movements from Anbar Governorate between Feb. 2016 and Sep. 2016",
		maxWidth: 400,
		fontFamily: "Serif",
		fontSize: 20,
		padding: {
			bottom:5
		},
	},

	subtitles:[
		{
			text: "This chart displays movement away from the Anbar governorate around the time of the siege. Many civilians had been trapped within Fallujah prior to its liberation at the end of May. They were also given very little warning to flee prior to the offensive. In June, the number of families who had fled increased drastically as people fled the battle and arrived at other destination around iraq.",
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
					var  temp = e.entries[i].dataSeries.name + ": <strong>"+  CanvasJS.formatNumber(e.entries[i].dataPoint.y,"###, ##0") + "</strong> <br/>" ; 
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
			{ x: new Date(2016, 1), y: 1787 },
			{ x: new Date(2016, 2), y: 8310 },
			{ x: new Date(2016, 3), y: -11048 },
			{ x: new Date(2016, 4), y: -2963 },
			{ x: new Date(2016, 5), y: 10644 },
			{ x: new Date(2016, 6), y: -7473 },
			{ x: new Date(2016, 7), y: -11250 },
			{ x: new Date(2016, 8), y: -11415 }
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

}
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

