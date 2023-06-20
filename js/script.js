google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["LifeTravel", 11],
    ["Viajes Falabella", 2],
    ["Despegar", 2],
    ["Booking", 2],
    ["LATAM", 7],
  ]);

  var options = {
    title: "Distribución porcentual de descargas por aplicaciones de viaje",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}

(function(){
  const sliders=[...document.querySelectorAll('.testimony__body')];
  const buttonNext = document.querySelector('#next');
  const buttonBefore = document.querySelector('#before');
  let value;

  buttonNext.addEventListener('click',()=>{
      changePosition(1);
  });

  buttonBefore.addEventListener('click',()=>{
      changePosition(-1);
  });

  const changePosition = (add)=>{
      const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
      value = Number(currentTestimony);
      value+=add;
      
      sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
      if(value === sliders.length+1 || value === 0){
          value = value === 0 ? sliders.length  : 1;
      }
      sliders[value-1].classList.add('testimony__body--show');
      
  }

})();