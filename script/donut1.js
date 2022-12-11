const data = {
  labels: ["Etat", "Ingenieurs","Constructeurs"],
  datasets: [{
    datalabels: {
      listeners: {
        click: function(context, event) {
          // Receives `click` events only for labels of the first dataset.
          // The clicked label index is available in `context.dataIndex`.
          console.log('label ' + context.dataIndex + ' has been clicked!');
          console.log('mouse is at position x:', event.x, 'and y:', event.y);

          if (event.native.ctrlKey) {
            console.log('control key is pressed!');
          }
        }
      }
    },
    backgroundColor: ["#02166a", "#ffb300", "#01809e"],
    hoverBorderColor: "#fff",
    borderColor: ["#02166a", "#ffb300", "#01809e"],
    data: [50,25,25],
    hoverBorderWidth: 3,
    borderWidth: [0,0,0],

    offset: [0,0,0]
  }]
}

const options = {
  responsive: true,
  cutoutPercentage: 60,
  layout: {
    padding: 32
  },
  elements: {
    line: {
      fill: false
    },
    point: {
      hoverRadius: 7,
      radius: 5
    }
  },
  plugins: {
    legend: {
      position: "top",
    },
    datalabels: {
      
    }
  },
  tooltips: {
    displayColors: true,
  },
}


const config = {
  type: "doughnut",
  data,
  options
};

const ctx = document.getElementById("pie-chart");
const donut = new Chart(
  ctx,
  config
);

function clickDonutSlice(click){
  const slice = donut.getElementsAtEventForMode(click, 'nearest', { intersect: true}, true);
  const donutSlice = slice[0];
  console.log(donut.config.data.labels[donutSlice.index]);
  donut.config.data.datasets[donutSlice.datasetIndex].offset = [0,0,0];
  donut.config.data.datasets[donutSlice.datasetIndex].offset[donutSlice.index] = 50;
  donut.update();
  showText(donut.config.data.labels[donutSlice.index]);
}

function showText(name) {
  $("#texte1 div").hide();
  $("#"+name).show();
}

ctx.onclick = function(evt){
  clickDonutSlice(evt);
}


$("#texte1 div").hide();