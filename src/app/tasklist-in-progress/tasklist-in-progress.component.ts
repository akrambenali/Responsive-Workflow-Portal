import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from './task';
import { TaskService } from './task.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { Console } from '@angular/core/src/console';
import * as _ from 'lodash';

@Component(
  {
    selector: 'app-tasklist-in-progress',
    templateUrl: './tasklist-in-progress.component.html',
    styleUrls: ['./tasklist-in-progress.component.scss'],
    providers: [TaskService, DecimalPipe]
  })

export class TasklistInProgressComponent {
  tasks$: Observable<Task[]>;
  alltasks$: Observable<any[]>;
  total$: Observable<number>;
  list = [];
  public icon = 'keyboard_arrow_up';

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: TaskService) {
    this.tasks$ = service.tasks$;
    // this.tasks$.subscribe(val1 => console.log(val1));
    this.total$ = service.total$;
    // console.log(this.total$.subscribe(val => console.log(val)));
    this.alltasks$ = service.Alltasks$;
    this.alltasks$.subscribe(list => console.log(list));

  }



  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
    if (direction === 'asc') {
      this.icon = 'keyboard_arrow_down';
    } else {
      this.icon = 'keyboard_arrow_up';
    }

  }



}


