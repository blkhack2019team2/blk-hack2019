// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Tech", "Finance", "Health", "Consumer Discretionary", "Consumer Staples", "Real Estate", "Energy", "Materials", "Utilities", "Industrials", "Communication Services"],
    datasets: [{
      data: [15.71, 17, 11.4, 10.68, 8.48, 3.34, 5.94, 4.78, 3.34, 10.45, 8.89],
      backgroundColor: ['#17a673', '#2e59d9', 'rgb(255,71,19)', 'rgb(255,206,0)', 'rgb(252,155,179)', 'rgb(0,139,92)', 'rgb(144,98, 188)', 'rgb(192,11,40)', 'rgb(255,230,127)', 'rgb(155,215,190)', 'rgb(153,0,19)'],
      // hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
