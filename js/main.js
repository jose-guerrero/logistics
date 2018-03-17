window.onload = function(){

  let but01 = document.getElementById('but01');

  let but2018 = document.getElementById('but2018');
  let but2019 = document.getElementById('but2019');
  let but2020 = document.getElementById('but2020');
  let but2021 = document.getElementById('but2021');


  let fam1 = 10;  /// it has to be normal distribution
  let fam2 = 20;  /// it has to be normal distribution
  let fam3 = 50;  /// it has to be normal distribution
  let fam4 = 10;  /// it has to be normal distribution


  var chart = new CanvasJS.Chart("chartContainer", {
  	animationEnabled: true,
  	title:{
  		text: "Numero de Familias Damnificadas"
  	},
/*  	axisY :{
  		valueFormatString: "#0,.",
  		suffix: "k"
  	},*/
  	axisX: {
      valueFormatString: "####",
  		title: "Periodo 2010-2017"
  	},
  	toolTip: {
  		shared: true
  	},
  	data: [{
  		type: "stackedArea",
  		showInLegend: true,
  		toolTipContent: "<span style='color:#4F81BC'>Anho <strong>{x}: </strong></span> {y}",
  		/*name: "Numero de Familias",*/
  		dataPoints: [
  		{ x: 2010, y: 300 },
  		{ x: 2011, y: 400 },
  		{ x: 2012, y: 500 },
  		{ x: 2013, y: 600 },
  		{ x: 2014, y: 150 },
  		{ x: 2015, y: 200 },
  		{ x: 2016, y: 250 },
  		{ x: 2017, y: 400 }
  		]
  	}]
  });
  chart.render();


  but01.onclick = function(){
    instructions.style.opacity = 0;
    maincontainer.style.opacity = 1;
  }

  but2018.onclick = function(){
    console.log(fam1);



  }


}
