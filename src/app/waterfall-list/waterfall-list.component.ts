import { Component, OnInit } from '@angular/core';

export interface Steps {
  position: number;
  step: string;
  opentasks: number;
  closedtasks: number;
  avg: number;
  max: number ;
}

const STEPS: Steps[] = [
  { position: 1, step: 'step1', opentasks: 10, closedtasks: 30, avg: 2, max: 10 },
  { position: 2, step: 'step2', opentasks: 4, closedtasks: 10, avg: 4, max: 15 },
  { position: 3, step: 'step3', opentasks: 20, closedtasks: 5, avg: 6, max: 20 },
  { position: 4, step: 'step4', opentasks: 5, closedtasks: 10, avg: 10, max: 5 },
  { position: 5, step: 'step5', opentasks: 12, closedtasks: 12, avg: 1, max: 7 },
  { position: 6, step: 'step6', opentasks: 0, closedtasks: 0, avg: 3, max: 2 }
];
@Component({
  selector: 'app-waterfall-list',
  templateUrl: './waterfall-list.component.html',
  styleUrls: ['./waterfall-list.component.scss']
})
export class WaterfallListComponent implements OnInit {


  steps = STEPS;
  constructor() { }

  ngOnInit() {



  }


}
