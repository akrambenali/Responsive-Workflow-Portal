import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waterfall-report',
  templateUrl: './waterfall-report.component.html',
  styleUrls: ['./waterfall-report.component.scss']
})
export class WaterfallReportComponent implements OnInit {

categories = [
'IT',
'FINANCE',
'MKT',
'HR',
'PROCURMENT'
];
Process = [
'Daris',
'Avance sur Salaire',
'Ordre Mission',
'Activation SIM'
];
  constructor() { }

  ngOnInit() {
  }

}
