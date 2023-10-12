

const myChart = new Chart(document.getElementById("chart").getContext('2d'), {
  type: 'line',
  data: {
    labels: ["sunday", "monday", "tuesday",
    "wednesday", "thursday", "friday", "saturday"],
    datasets: [{
      label: 'Last week',
      
      backgroundColor: '#8f3bd4',
      borderColor: 'gold',
      data: [3000, 4000, 2000, 5000, 8000, 9000, 2000],
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  },
});

//Bar Chart
const myBarChart = new Chart(document.getElementById("barchart").getContext('2d'), {
  type: 'bar',
  data: {
    labels: ["rice", "yam", "tomato", "potato",
    "beans", "maize", "oil"],
    datasets: [{
      label: 'food Items',
      backgroundColor: '#6100b0',
      borderColor: 'rgb(47, 128, 237)',
      data: [300, 400, 200, 500, 800, 900, 200],
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
        }
      }]
    }
  },
});