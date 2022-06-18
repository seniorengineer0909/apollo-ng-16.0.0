import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Product } from 'src/app/api/product';
import { ProductService } from 'src/app/service/product.service';

interface List {
    id: number;
    name: string;
    image: string;
    price: string;
    tracking: string;
    country: string;
    date: string;
    label:string;
}

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
                    data: [300, 50, 100, 41],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--indigo-500'),
                        documentStyle.getPropertyValue('--purple-500'),
                        documentStyle.getPropertyValue('--teal-500'),
                        documentStyle.getPropertyValue('--yellow-500')
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

    lists: List[] = [
        {
            id: 1,
            name: "Apple Watch 2",
            image: "assets/images/kisspng-apple-watch-series-2-apple-watch-series-3-apple-wa-applewatch-5b1dde444cea99 1.png",
            price: "$325",
            tracking: "#249234",
            country: "England",
            date: "09/13/2015",
            label: "Complate"
        },
        {
            id: 2,
            name: "Apple Watch 4",
            image: "assets/images/pngwing 1 (1).png",
            price: "$156",
            tracking: "#241235",
            country: "Germany",
            date: "09/02/2011",
            label: "Shipped"
        },
        {
            id: 3,
            name: "Apple Watch 2",
            image: "assets/images/kisspng-apple-watch-series-2-apple-watch-series-3-apple-wa-applewatch-5b1dde444cea99 1.png",
            price: "$325",
            tracking: "#423552",
            country: "Italy",
            date: "09/13/2012",
            label: "Processing"
        },
        {
            id: 4,
            name: "Apple Watch 1",
            image: "assets/images/kisspng-apple-watch-series-2-apple-watch-series-3-apple-wa-applewatch-5b1dde444cea99 1.png",
            price: "$654",
            tracking: "#123563",
            country: "Holland",
            date: "09/13/2015",
            label: "View"
        },
        {
            id: 5,
            name: "Apple Watch 3",
            image: "assets/images/pngwing 1 (1).png",
            price: "$412",
            tracking: "#943563",
            country: "Amsterdam",
            date: "09/05/2014",
            label: "Closed"
        }
    ];
    

    

    
}
