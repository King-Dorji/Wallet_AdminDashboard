// const body = document.querySelector("body"),
//       sidebar = body.querySelector("nav");
//       sidebarToggle = body.querySelector(".sidebar-toggle");

      
// let getStatus = localStorage.getItem("status");
//  if(getStatus && getStatus ==="close"){
//     sidebar.classList.toggle("close");
//    }

//    sidebarToggle.addEventListener("click", () => {
//     sidebar.classList.toggle("close");
//     if(sidebar.classList.contains("close")){
//         localStorage.setItem("status", "close");
//     }else{
//         localStorage.setItem("status", "open");
//     }
// })

      
const labels = ['06', '07', '08','09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
const data = {
    labels: labels,
    datasets: [
        {
            label: 'none',
            data: [300000, 500000, 599000, 800000, 560000, 550000, 400000, 500000, 590000,550000, 600000, 900000, 600000],
            backgroundColor: "#363062",
            barThickness: 13,
            clip: 20,
            borderSkipped: false,
            borderRadius: 20,
            inflateAmount: 0,
        },
        {
            data: [1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000, 1000000],
            backgroundColor: "#eeeeee",
            barThickness: 13,
            clip: 20,
            borderRadius: 20,
            inflateAmount: 0,
        },
    ]
  };

const configurationOptions = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          borderWidth: 0,
          border: {
            display: false,
          },
          grid: {
                display: false            
            },
        },
        x: {
            borderWidth: 0,
            stacked: true,
            stackWeight: 0.6,
            border: {
                display: false,
            },
            grid: {
                display: false
            }
        }
      },
      padding: 100
    },
};


const ctx = document.getElementById("myCanvas");

const myChart = new Chart(ctx, configurationOptions);

var totalPoints = document.getElementById('totalPoints').innerHTML;
var differenceValue = '1000';
var tierLevelPoints = '17999';
var calculatePointsPercentage = (totalPoints - differenceValue) / (tierLevelPoints - differenceValue) * ('100');
var dataPercentage = calculatePointsPercentage.toFixed(0);

$(function(value){
  $("#tierPointsValue").attr("data-percent", dataPercentage);
  $('.target-chart').easyPieChart({
      animate: 2000,
      lineWidth: 18,
      scaleColor: false,
      lineCap: 'square',
      size: 200,
      trackColor: "#999999",
      barColor: "#b97346" // ADVANTAGE TIER COLOR
      // #8a090d - CHOICE TIER COLOR
      // #b88c3b - PREFERRED TIER COLOR
      // #636466 - ELITE TIER COLOR
      // #000000 - OWNERS CLUB COLOR
  });
});
$('.totalTierPoints').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});