import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-card',
    templateUrl: './dashboard-card.component.html',

})
export class DashboardCardComponent implements OnInit {

    lineData: any;

    lineOptions: any;

    cards = [
      {
         title:"Visits",
         type:"Total Visit Today",
         size:"43%",
         lineData : {
          labels: ['MON'],
          datasets: [
            {
              label: 'Second Dataset',
              data: [50, 50, 50, 50, 50, 50],
              fill: true,
              backgroundColor: '#2738E61A',
              borderColor: '#2738E61A',
              tension: 0.1,

            },

          ]
        }
      }, {
          title:"Sales",
          type:"Total Sales Today",
          size:"21%",
          lineData : {
            labels: ['MON', 'TUE', 'WED', 'THU', 'SUN'],
            datasets: [
              {
                label: 'First Dataset',
                data: [10, 25, 48, 35, 54, 70],
                fill: true,
                backgroundColor: '#2738E61A',
                borderColor: '#2738E61A',
                tension: .4,
                categoryPercentage: 1.0,
                          barPercentage: 1.0
              },

            ]
          }
       }, {
          title:"Orders",
          type:"Total Order Today",
          size:"63%",
          lineData : {
            labels: ['MON', 'TUE', 'WED', 'THU', 'SUN'],
            datasets: [
              {
                label: 'First Dataset',
                data: [10, 25, 48, 35, 54, 70],
                fill: true,
                backgroundColor: '#2738E61A',
                borderColor: '#2738E61A',
                tension: .4,
                categoryPercentage: 1.0,
                          barPercentage: 1.0
              },

            ]
          }
       }, {
          title:"Comments",
          type:"Total Visit Today",
          size:"93%",
          lineData : {
            labels: ['MON', 'TUE', 'WED', 'THU', 'SUN'],
            datasets: [
              {
                label: 'First Dataset',
                data: [10, 25, 48, 35, 54, 70],
                fill: true,
                backgroundColor: '#2738E61A',
                borderColor: '#2738E61A',
                tension: .4,
                categoryPercentage: 1.0,
                barPercentage: 1.0
              },

            ]
          }
       }
];

    constructor() { }

    ngOnInit() {


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
            backgroundColor: '#F3229F26',
            titleFont: {
              weight: 'bold'
            },
            bodyFont: {
              weight: 'bold'
            },
            displayColors: false,
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
    }

}
