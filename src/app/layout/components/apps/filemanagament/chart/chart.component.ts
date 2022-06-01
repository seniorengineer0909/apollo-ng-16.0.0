import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html'
})

export class ChartComponent implements OnInit {

    @Input() accounts:any;

    fileChart: any;

    fileChartOptions: any;

    chartPlugins: any;

    constructor() { }

    ngOnInit() {

        this.chartPlugins = [{
            beforeDraw: function(chart) {

                let ctx = chart.ctx;
                let width = chart.width;
                let height = chart.height;
                let fontSize = 1.50;
                let oldFill = ctx.fillStyle;

                ctx.restore();
                ctx.font = fontSize + "rem sans-serif";
                ctx.textBaseline = "middle";

                let text = "Free Space";
                let text2 = 50 + "GB / " + 80 + "GB";
                let textX = Math.round((width - ctx.measureText(text).width) / 2);
                let textY = (height + chart.chartArea.top) / 2.25;

                let text2X = Math.round((width - ctx.measureText(text).width) / 2.10);
                let text2Y = (height + chart.chartArea.top) / 1.75;

                ctx.fillStyle = chart.config.data.datasets[0].backgroundColor[0];
                ctx.fillText(text, textX, textY);
                ctx.fillText(text2, text2X, text2Y);
                ctx.fillStyle = oldFill;
                ctx.save();
            }
        }]

        this.fileChart = {

            datasets: [
                {
                    data: [300, 100],
                    backgroundColor: [
                        '#0F8BFD',
                        '#545C6B'
                    ],
                    hoverBackgroundColor: [
                        '#0F8BFD',
                        '#545C6B',
                    ],
                    borderColor: 'transparent',
                    fill: true
                }
            ]
        };

        this.fileChartOptions = {
            cutout: '90%',
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            }
        };
    }

}
