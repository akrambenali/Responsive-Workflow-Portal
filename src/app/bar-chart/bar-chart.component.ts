import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class MyBarChartComponent implements OnInit {
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

  ngOnInit() {
  }
}
