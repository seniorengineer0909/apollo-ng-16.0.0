import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-banking',
    templateUrl: './dashboard-banking.component.html',

})
export class DashboardBankingComponent implements OnInit {

    selectedDate: number;

    mounths: any[];

    selectedMounths: any;

    selectedWeek: any;

    week: any[];


  barData = {
    labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
    datasets: [
        {
            label: 'Income',
            backgroundColor: '#3157DE',
            borderColor: 'rgb(255, 99, 132)',
            barThickness: 12,
            borderRadius: Number.MAX_VALUE,
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'Expense',
            backgroundColor: '#AFC1FF',
            barThickness: 12,
            borderColor: 'rgb(54, 162, 235)',
            borderRadius: Number.MAX_VALUE,
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};

barOptions = {

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
                label: function(tooltipItem) {
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
        }
    }
};


    constructor() { }

    ngOnInit() {
    }

}
