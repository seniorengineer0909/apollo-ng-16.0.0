import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/api/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
    templateUrl: './ecommerce.dashboard.component.html'
})
export class EcommerceDashboardComponent implements OnInit {

    knobValue: number;

    selectedWeek: any;

    weeks: any[];

    barData: any;

    barOptions: any;

    pieData: any;

    pieOptions: any;

    products: Product[];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        let documentStyle = getComputedStyle(document.documentElement);
        this.knobValue = 90;

        this.weeks = [{
            label: 'Last Week', 
            value: 0,
            data: [[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]]
        }, 
        {
            label: 'This Week', 
            value: 1,
            data: [[35, 19, 40, 61, 16, 55, 30], [48, 78, 10, 29, 76, 77, 10]]
        }];
        this.selectedWeek = this.weeks[0];
        
        let primaryColor900 = documentStyle.getPropertyValue('--primary-900');
        let primaryColor500 = documentStyle.getPropertyValue('--primary-500');
        let primaryColor200 = documentStyle.getPropertyValue('--primary-200');

        this.barData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'Revenue',
                    backgroundColor: primaryColor500,
                    barThickness: 12,
                    borderRadius: Number.MAX_VALUE,
                    data: this.selectedWeek.data[0]
                },
                {
                    label: 'Profit',
                    backgroundColor: primaryColor200,
                    barThickness: 12,
                    borderRadius: Number.MAX_VALUE,
                    data: this.selectedWeek.data[1]
                }
            ]
        };
    
        this.barOptions = {
            plugins: {
                legend: {
                    labels: {
                        fontColor: '#A0A7B5',
                        usePointStyle: true,
                        font: {
                            weight: 700,
                        },
                        padding: 28
                    },
                    position: 'bottom'
                },
                tooltip: {
                    backgroundColor: primaryColor900,
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

        this.pieData = {
            labels: ['Electronics', 'Fashion', 'Household', 'Others'],
            datasets: [
                {
                    data: [300, 50, 100, 20],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--indigo-500'),
                        documentStyle.getPropertyValue('--purple-500'),
                        documentStyle.getPropertyValue('--teal-500'),
                        documentStyle.getPropertyValue('--pink-500')
                    ],
                    hoverBackgroundColor: [
                        "#64B5F6",
                        "#81C784",
                        "#FFB74D"
                    ]
                }
            ]
        };

        this.pieOptions = {
            plugins: {
                legend: {
                    
                    labels: {
                        color: '#495057'
                    }
                }
            }
        };

        this.productService.getProductsSmall().then(data => this.products = data);
    }

    onWeekChange() {
        console.log(this.selectedWeek);
        let newBarData = {...this.barData};
        newBarData.datasets[0].data = this.selectedWeek.data[0];
        newBarData.datasets[1].data = this.selectedWeek.data[1];
        this.barData = newBarData;
    }

}
