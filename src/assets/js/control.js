var inport=0
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(window).on('resize scroll', function() {
if ($('#hero').isInViewport()) {
  if(inport==0){
    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
    const obj = document.getElementById("value");
    animateValue(obj, 29, 60,2000);
    inport=1
  }
   $('.rheader').addClass("headerfade")
   if($('#first').isInViewport()){
    $('.box').addClass('boxfade')
   }
} 
else {
    // do something else
}
});

  $(document).ready(function(){
    
   const myChart = new Chart(document.getElementById("chart").getContext('2d'), {
  type: 'line',
  data: {
    labels: ["sunday", "monday", "tuesday",
    "wednesday", "thursday", "friday", "saturday"],
    datasets: [{
      label: 'Last week',
      
      backgroundColor: 'rgba(161, 198, 247, 1)',
      borderColor: 'rgb(47, 128, 237)',
      data: [3000, 4000, 2000, 5000, 8000, 6000, 2000],
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
      backgroundColor: 'rgba(161, 198, 247, 1)',
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
  })
