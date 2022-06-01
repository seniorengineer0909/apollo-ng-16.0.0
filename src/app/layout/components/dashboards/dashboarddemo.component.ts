import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Product} from 'src/app/api/product';
import {ProductService} from 'src/app/service/productservice';
import {BreadcrumbService} from 'src/app/service/app.breadcrumb.service';
import {ConfigService} from 'src/app/service/app.config.service';
import {AppConfig} from 'src/app/api/appconfig';
import {Subscription} from 'rxjs';
@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['../../../assets/demo/badges.scss']
})
export class DashboardDemoComponent implements OnInit {

    cols: any[];

    items: MenuItem[];

    ordersChart: any;

    ordersChartOptions: any;

    orderWeek: any;

    selectedOrderWeek: any;

    products: Product[];

    productsThisWeek: Product[];

    productsLastWeek: Product[];

    revenueChart: any;

    config: AppConfig;

    subscription: Subscription;

    constructor(private productService: ProductService, private breadcrumbService: BreadcrumbService, public configService: ConfigService) {
        this.breadcrumbService.setItems([
            {label: 'Dashboard', routerLink: ['/']}
        ]);

        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
            this.updateChartOptions();
        });
    }

    ngOnInit() {
        this.productService.getProducts().then(data => this.products = data);
        this.productService.getProducts().then(data => this.productsThisWeek = data);
        this.productService.getProductsMixed().then(data => this.productsLastWeek = data);

        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];

        this.items = [{
            label: 'Shipments',
            items: [
                { label: 'Tracker', icon: 'pi pi-compass' },
                { label: 'Map', icon: 'pi pi-map-marker' },
                { label: 'Manage', icon: 'pi pi-pencil' }
            ]
        }
        ];

        this.ordersChart = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'New',
                data: [2, 7, 20, 9, 16, 9, 5],
                backgroundColor: [
                    'rgba(100, 181, 246, 0.2)',
                ],
                borderColor: [
                    '#64B5F6',
                ],
                borderWidth: 3,
                fill: true,
                tension: .4
            }]
        };

        this.ordersChartOptions = {
            plugins: {
                legend: {
                    display: true,
                }
            },
            hover: {
                mode: 'index'
            },
            scales: {
                y: {
                    ticks: {
                        min: 0,
                        max: 20
                    }
                }
            }
        };

        this.orderWeek = [
            {name: 'This Week', code: '0'},
            {name: 'Last Week', code: '1'}
        ];

        this.revenueChart = {
            labels: ['Direct', 'Promoted', 'Affiliate'],
            datasets: [{
                data: [40, 35, 25],
                backgroundColor: ['#64B5F6', '#7986CB', '#4DB6AC']
            }]
        };

        this.updateChartOptions();
    }

    changeDataset(event) {
        const dataSet = [
            [2, 7, 20, 9, 16, 9, 5],
            [2, 4, 9, 20, 16, 12, 20],
            [2, 17, 7, 15, 4, 20, 8],
            [2, 2, 20, 4, 17, 16, 20]
        ];

        this.ordersChart.datasets[0].data = dataSet[parseInt(event.currentTarget.getAttribute('data-index'))];
        this.ordersChart.datasets[0].label = event.currentTarget.getAttribute('data-label');
        this.ordersChart.datasets[0].borderColor = event.currentTarget.getAttribute('data-stroke');
        this.ordersChart.datasets[0].backgroundColor = event.currentTarget.getAttribute('data-fill');

    }

    recentSales(event) {
        if (event.value.code === '0') {
            this.products = this.productsThisWeek;
        } else {
            this.products = this.productsLastWeek;
        }
    }

    updateChartOptions() {
        if (this.config.dark)
            this.applyDarkTheme();
        else
            this.applyLightTheme();

    }

    applyDarkTheme() {
        this.ordersChartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color:  'rgba(160, 167, 181, .3)',
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color:  'rgba(160, 167, 181, .3)',
                    }
                },
            }
        };
    }

    applyLightTheme() {
            this.ordersChartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color:  '#ebedef',
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color:  '#ebedef',
                    }
                },
            }
        };
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
