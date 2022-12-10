new Chart(document.getElementById("pie-chart"), {
    type: "doughnut",
  data: {
    labels: [["20.3%"], ["17.2%"], ["15.6%"], ["17.2%"], ["7.8%"], ["14.1%"], ["7.8%"]],
    datasets: [{
      backgroundColor: ["#02166a", "#ffb300", "#01809e", "#ff7f00", "#0325ae", "#ce9000", "#10bae2"],
      data: [13,11,10,11,5,9,5]
    }]
  },
  showDatapoints: true,
  options: {
    legend: {
      // position: "left"
      display: false
    },
      layout: {
        padding: {
            left: 50,
            right: 50,
            top: 40,
            bottom: 50
        }
    },
    plugins: {
        datalabels: {
          color: '#000',
          align: 'end',
          anchor: 'end',
          formatter: function(value, context) {
            return context.chart.data.labels[context.dataIndex];
          },
          font: {
            size: 16,
            style: 'bold',
          }
        }
     },
  }
});