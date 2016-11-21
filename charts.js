//Globals
Chart.defaults.global.defaultFontFamily = "'Roboto', Helvetica, Arial, sans-serif";
Chart.defaults.global.maintainAspectRatio = false;
Chart.defaults.global.responsive = true;
Chart.defaults.bar.scaleShowVerticalLines = false;
//Line Chart Data Sets
var monthlyData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Traffic',
        data: [500, 1000, 750, 1750, 2000, 1500, 1700, 1350, 1500, 2500, 1750, 2500],
        backgroundColor: 'rgba(119,112,182,0.4)',
        lineTension: 0,
        pointBorderColor: 'rgba(119,112,182,1)',
        pointRadius: 5,
        pointHitRadius: 10,
        pointBorderWidth: 2,
        pointBackgroundColor: '#fff',
        borderColor: 'rgba(119,112,182,1)'
    }]
};
//Line Chart
var ctx3 = document.getElementById("chart1").getContext('2d');
var myLineChart = new Chart(ctx3, {
    type: 'line',
    data: monthlyData,
    options: {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 2500,
                    min: 500,
                    stepSize: 500
                },
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }]
        },
        animation: {
            animateScale: true
        }
    }
});
// Bar Chart Data Sets
var dailytraffic = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: "My First dataset",
        backgroundColor: ['rgba(115,112,182, 1)', 'rgba(115,112,182, 1)', 'rgba(115,112,182, 1)', 'rgba(115,112,182, 1)', 'rgba(115,112,182, 1)', 'rgba(115,112,182, 1)', 'rgba(115,112,182, 1)'],
        borderColor: ['rgba(115,112,182, 1)', 'rgba(115,112,182, 1)', 'rgba(115,112,182, 1)', 'rgba(115,112,182, 1)', 'rgba(115,112,182, 1)', 'rgba(115,112,182, 1)', 'rgba(115,112,182, 1)'],
        borderWidth: 1,
        data: [50, 75, 150, 60, 210, 190, 75],
    }]
};
//Bar Chart
var ctx3 = document.getElementById("chart2").getContext('2d');
var myBarChart = new Chart(ctx3, {
    type: 'bar',
    data: dailytraffic,
    options: {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    max: 250,
                    min: 0,
                    stepSize: 50
                },
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }],
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    color: '#cdcdcd'
                }
            }]
        },
        animation: {
            animateScale: true
        }
    }
});
// Pie Chart Data Sets
var mobileusers = {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [{
        data: [300, 50, 100],
        indexLabelOrientation: "vertical",
        backgroundColor: ["#7370b6", "#66B366", "#66B2B2"],
        hoverBackgroundColor: ["#aba9d3", "#a3d1a3", "#a3d0d0"]
    }]
};
// Pie Chart
var ctx3 = document.getElementById("chart3").getContext('2d');
var myPieChart = new Chart(ctx3, {
    type: 'doughnut',
    data: mobileusers,
    options: {
        responsive: true,
        animation: {
            animateScale: true
        }
    }
});