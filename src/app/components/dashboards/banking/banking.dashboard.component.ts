import { Component } from '@angular/core';

interface File {
	name: string;
	image: string;
	date: string;
	amount: string;
	label: string;
}

@Component({
	templateUrl: './banking.dashboard.component.html'
})

export class BankingDashboardComponent {
	selectedDate: number;

	mounths: any[];

	selectedMounths: any;

	selectedWeek: any;

	week: any[];

	days: any[];

	selectedDay: any;

	barData = {
		labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
		datasets: [
			{
				label: 'Income',
				backgroundColor: '#3157DE',
				borderColor: 'rgb(255, 99, 132)',
				barThickness: 12,
				borderRadius: Number.MAX_VALUE,
				data: [65, 59, 80, 81, 56, 55, 40],
			},
			{
				label: 'Expense',
				backgroundColor: '#AFC1FF',
				barThickness: 12,
				borderColor: 'rgb(54, 162, 235)',
				borderRadius: Number.MAX_VALUE,
				data: [28, 48, 40, 19, 86, 27, 90],
			},
		],
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
					padding: 30,
				},
				position: 'bottom',
			},
			tooltip: {
				backgroundColor: '#1F2ED0',
				titleFont: {
					weight: 'bold',
				},
				bodyFont: {
					weight: 'bold',
				},
				displayColors: false,
				padding: {
					left: 40,
					right: 40,
					top: 10,
					bottom: 10,
				},
				callbacks: {
					label: function (tooltipItem) {
						return `$ ${tooltipItem.raw}`;
					},
				},
			},
		},
		scales: {
			x: {
				ticks: {
					font: {
						weight: 500,
					},
				},
				grid: {
					display: false,
					drawBorder: false,
				},
			},
			y: {
				ticks: {
					display: false,
				},
				grid: {
					borderDash: [3, 6],
					color: '#E4EAFF',
					drawBorder: false,
					drawTicks: false,
				},
			},
		},
	};

	constructor() {
		this.days = [
			{ name: 'Sunday' },
			{ name: 'Monday' },
			{ name: 'Tuesday' },
			{ name: 'Wednesday' },
			{ name: 'Thursday' },
			{ name: 'Friday' },
			{ name: 'Saturday' },
		];

		this.week = [{ name: 'Week 1' }, { name: 'Week 2' }];
	}

	files: File[] = [
		{
			name: "29 Jul 2021",
			image: "assets/demo/images/avatar/elwinsharvill.png",
			date: "29 Jul 2021",
			amount: "$920.34",
			label: "Complate"
		},
		{
			name: "Courtney Henry",
			image: "assets/demo/images/avatar/bernardodominic.png",
			date: "29 Jul 2021",
			amount: "$834.12",
			label: "In progress"
		},
		{
			name: "Theresa Webb",
			image: "assets/demo/images/avatar/ionibowcher.png",
			date: "29 Jul 2021",
			amount: "$340.20",
			label: "Failed"
		},
		{
			name: "Theresa Webb",
			image: "assets/demo/images/avatar/bernardodominic.png",
			date: "29 Jul 2021",
			amount: "$920.34",
			label: "Complate"
		}

	];
	cols = [
		{ field: 'name', header: 'Name' },
		{ field: 'date', header: 'Date' },
		{ field: 'amount', header: 'Amount' },
		{ field: 'status', header: 'Status' },
	];


}
