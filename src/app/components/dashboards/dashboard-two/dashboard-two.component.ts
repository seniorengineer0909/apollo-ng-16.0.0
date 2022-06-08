import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-two',
    templateUrl: './dashboard-two.component.html',

})
export class DashboardTwoComponent {

    lineData: any;

    lineOptions: any;

    fileChart: any;

    fileChartOptions: any;

    chartPlugins: any;

    constructor() { }


    ngOnInit() {
      this.chartPlugins = [{
        beforeDraw: function (chart) {


        }
      }]


    this.lineData = {
      labels: ['MON', 'TUE', 'WED', 'THU', 'SUN'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: '#0E1ECC',
          borderColor: '#0E1ECC',
          tension: .4,
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          backgroundColor: '#F3229F',
          borderColor: '#F3229F',
          tension: .4
        },
        {
          label: 'Third Dataset',
          data: [10, 16, 25, 30, 50, 60, 70],
          fill: false,
          backgroundColor: '#C79D33',
          borderColor: '#C79D33',
          tension: .4
        }
      ]
    };

    this.lineOptions = {
      plugins: {
        legend: {
          labels: {
            fontColor: '#A0A7B5',
            usePointStyle: true,
            font: {
              weight: 700,
            },
            padding: 30
          },
          position: 'bottom'
        },
        tooltip: {
          backgroundColor: '#1F2ED0',
          titleFont: {
            weight: 'bold'
          },
          bodyFont: {
            weight: 'bold'
          },
          displayColors: false,
          padding: {
            left: 40,
            right: 40,
            top: 10,
            bottom: 10
          },
          callbacks: {
            label: function (tooltipItem) {
              return `$ ${tooltipItem.raw}`
            }
          }
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              weight: 500
            }
          },
          grid: {
            display: false,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            borderDash: [3, 6],
            color: '#E4EAFF',
            drawBorder: false,
            drawTicks: false
          }
        },
        z: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            drawBorder: false
          }
        }
      }
    };

    this.fileChart = {
      labels: ['Computer', 'Tablet', 'Mobile'],
      datasets: [
        {
          data: [200, 200, 50],
          backgroundColor: [
            '#2738E61A',
            '#F3229F26',
            '#3BF4B21A',
          ],
          hoverBackgroundColor: [
            '#2738E61A',
            '#F3229F26',
            '#3BF4B21A',
          ],
          borderColor: ['#293BF1',
            '#F3229F',
            '#3BF4B2',

          ],

          fill: true
        }
      ]
    };

    this.fileChartOptions = {
      cutout: '70%',
      plugins: {

        legend: {
          labels: {
            fontColor: '#A0A7B5',
            usePointStyle: true,
            font: {
              weight: 700,
            },
            padding: 30
          },
          position: 'bottom'
        },
      }
    }
  }
};







