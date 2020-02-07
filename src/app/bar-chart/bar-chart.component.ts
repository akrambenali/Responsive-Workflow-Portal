import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {

  userList = [
    'Mohamed Akram BENALI',
    'Yasmine Feriel OLDACHE',
    'Riad-faïçel MESSEDAA',
    'Hicham GHERBI',
    'Toufik ZERROUG',
    'Mohammed Lamine MEBAREK'
  ];
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
     yAxes: [{
       ticks: {
         beginAtZero: true
       }
     }]
    },
  };
  public barChartLabels = [
    'Mohamed Akram BENALI',
    'Yasmine Feriel OLDACHE',
    'Riad-faïçel MESSEDAA',
    'Hicham GHERBI',
    'Toufik ZERROUG',
    'Mohammed Lamine MEBAREK'
  ];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
   // { data: [10, 11, 15, 8, 6, 20], label: 'Open task' },
    { data: [10, 11, 15, 8, 6, 20], label: 'Open task' },
    { data: [10, 6, 10, 15, 12, 27], label: 'Closed task' }
  ];


 /*  public barChartOptions2 = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
  };
  public barChartLabels2 = [
    'janvier',
    'fervier',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'aout',
    'septemre',
    'octobre',
    'novembre',
    'decembre'

  ];

  public barChartType2 = 'bar';
  public barChartLegend2 = true;
  public barChartData2 = [
    // { data: [10, 11, 15, 8, 6, 20], label: 'Open task' },
    // { data: [1, 11, 2, 8, 9, 20], label: 'Open task' },
    // { data: [10, 54, 10, 15, 2, 27], label: 'Closed task' }
  ];

  public randomize(): void {
    // Only Change 3 values
    const data = [
         Math.round(Math.random() * 100),
         11,
         Math.round(Math.random() * 100),
         8,
         Math.round(Math.random() * 100),
         20,
         10,
         13,
         8,
         9,
         Math.round(Math.random() * 100),
         Math.round(Math.random() * 100)
        ];
    const label = 'Open task';
    this.barChartData2[0].data = data;
    this.barChartData2[0].label = label;
  }

  public randomizeDisplay(): void {
    this.barChartType2 = this.barChartType2 === 'bar' ? 'line' : 'bar';
  } */

  filterDay() {
   const Data = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday ',
    'Friday '
   ];

   this.barChartLabels = Data;

  }
  filterWeek() {
    const Data = [
      'W1',
      'W2',
      'W3',
      'W4',
      'W5',
      'W6',
      'W7'
    ];

    this.barChartLabels = Data;

  }

  filterMonth() {
    const Data = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];

    this.barChartLabels = Data;

  }

  filterByUser() {
    const Data = [

      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10)
    ];
    const Data2 = [

      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10),
      Math.round(Math.random() * 10)
    ];
    this.barChartData[0].data = Data;
    this.barChartData[1].data = Data2;
  }


  ngOnInit() {
  }
}
