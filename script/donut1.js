const data1 = {
  labels: ["Constructeurs","Pietons", "Ingenieurs"],
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
    backgroundColor: ["#20ff20", "#ff9090", "#ff2020"],
    hoverBorderColor: "#fff",
    borderColor: ["#ffffff", "#ffffff", "#ffffff"],
    data: [50,20,30],
    hoverBorderWidth: 3,
    borderWidth: [0,0,0],

    offset: [0,0,0,0]
  }]
}

const data2 = {
  labels: ["Constructeurs","Assureurs","Etat","Usagers","Conducteurs"],
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
    backgroundColor: ["#20ff20", "#60ff60", "#a0ffa0", "#ff6060", "#ff4040"],
    hoverBorderColor: "#fff",
    borderColor: ["#ffffff","#ffffff","#ffffff","#ffffff","#ffffff"],
    data: [40,10,20,20,10],
    hoverBorderWidth: 3,
    borderWidth: [0,0,0,0,0],

    offset: [0,0,0,0,0]
  }]
}

const data3 = {
  labels: ["Constructeurs", "Etat","Ecologistes"],
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
    backgroundColor: ["#20ff20", "#80ff80", "#ff2020"],
    hoverBorderColor: "#fff",
    borderColor: ["#02166a", "#ffb300", "#01809e"],
    data: [50,10,40],
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
  donut.config.data.datasets[donutSlice.datasetIndex].offset = [0,0,0,0,0];
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
    $("#Sécurité_Constructeurs").show();
    data=data1
  }else if(name==="Économie"){
    current_donut = "Économie"
    $("#texte div").hide();
    $("#Économie_Constructeurs").show();
    data=data2
  }else{
    current_donut = "Écologie"
    $("#texte div").hide();
    $("#Écologie_Constructeurs").show();
    data=data3
  }
  donut.config.data.datasets[0].offset = [0,0,0,0,0];
  donut.config.data.datasets[0].offset[0] = 50;
  config = {
    type: "doughnut",
    data,
    options
  };
}