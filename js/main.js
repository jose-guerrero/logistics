window.onload = function(){

  let but01 = document.getElementById('but01');
  let butsim = document.getElementById('simular');
  let operate1 = document.getElementById('operate1');

  let fam1 = 500;  /// it has to be normal distribution
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

  butsim.onclick = function(){
    console.log(fam1);
    result1.style.opacity = 1;
  }

  operate1.onclick = function(){
    let value1 = document.getElementById('first_value').value;
    let tab = document.getElementById('table');
    // Create table body.

    let tBody = document.createElement('tbody');
    tab.appendChild(tBody);

    showresults1.style.opacity = 1;
/*
    console.log(fam1+ " necesitan " + fam1 +"Kg");
    console.log("Costo de la compra "  +10*fam1 +"soles");
*/
    let tr = document.createElement('tr');
    tBody.appendChild(tr);

    for (let i = 0; i<6; i++)
    {
      let td = document.createElement('td');

      if (i==0)
      {
        td.innerHTML = fam1 + " familias";
      }

      if (i==1)
      {
        td.innerHTML = 10*value1 + " Kg";
      }
      if (i==2)
      {
        td.innerHTML = 5*value1 + " soles";
      }
      if (i==3)
      {
      //  td.innerHTML = (((value1 - fam1)<0)?(fam1 - value1):0) + (((value1 - fam1)==1)?"familia":" familias");

      td.innerHTML = (value1-fam1) + (((value1 - fam1)==1)?"familia":" familias");
      }
      if (i==4)
      {
      //  td.innerHTML = (((value1 - fam1)<0)?(fam1 - value1):0) + (((value1 - fam1)==1)?"familia":" familias");

      td.innerHTML = 10*(value1-fam1) + "soles";
      }

      if (i==5)
      {

      td.innerHTML = 15*(value1-fam1) + "puntos";
      }

      tr.appendChild(td);
    }

    tab.appendChild(tr);

  }

}
