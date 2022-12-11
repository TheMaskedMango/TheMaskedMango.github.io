const data1 = {
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

const data2 = {
  labels: ["a", "b","c"],
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
    data: [15,70,15],
    hoverBorderWidth: 3,
    borderWidth: [0,0,0],

    offset: [0,0,0]
  }]
}

const data3 = {
  labels: ["d", "e","f"],
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
    data: [33,33,33],
    hoverBorderWidth: 3,
    borderWidth: [0,0,0],

    offset: [0,0,0]
  }]
}

var data= data1;

var options = {
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


var config = {
  type: "doughnut",
  data,
  options
};

const ctx = document.getElementById("pie-chart");
var donut = new Chart(
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

var current_donut = "Sécurité"

function showText(name) {
  $("#texte div").hide();
  $("#"+current_donut+'_'+name).show();
}

ctx.onclick = function(evt){
  clickDonutSlice(evt);
}

donut.config.data.datasets[0].offset[0] = 50;
$("#texte div").hide();
$("#Sécurité_Etat").show();

$("h4").click(function(){
  $("h4").removeClass("active");
  $("h4").css('background-color', 'darkslateblue');
  $(this).addClass("active");
  $(this).css('background-color', 'indianred');
  changeDonut($(this)[0].innerHTML);

  donut.destroy();
  donut = new Chart(
    ctx,
    config
  );
});

function changeDonut(name){
  if (name==="Sécurité") {
    current_donut = "Sécurité"
    $("#texte div").hide();
    $("#Sécurité_Etat").show();
    data=data1
  }else if(name==="Économie"){
    current_donut = "Économie"
    $("#texte div").hide();
    $("#Économie_a").show();
    data=data2
  }else{
    current_donut = "Écologie"
    $("#texte div").hide();
    $("#Écologie_d").show();
    data=data3
  }
  donut.config.data.datasets[0].offset = [0,0,0];
  donut.config.data.datasets[0].offset[0] = 50;
  config = {
    type: "doughnut",
    data,
    options
  };
}