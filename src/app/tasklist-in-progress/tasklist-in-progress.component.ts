import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from './task';
import { TaskService } from './task.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { Console } from '@angular/core/src/console';


@Component(
  {
    selector: 'app-tasklist-in-progress',
    templateUrl: './tasklist-in-progress.component.html',
    styleUrls: ['./tasklist-in-progress.component.scss'],
    providers: [TaskService, DecimalPipe]
  })

export class TasklistInProgressComponent {
  tasks$: Observable<Task[]>;
  alltasks$: Observable<Task[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: TaskService) {
    this.tasks$ = service.tasks$;
  //  console.log(this.tasks$.subscribe(val1 => console.log(val1)));
    this.total$ = service.total$;
   // console.log(this.total$.subscribe(val => console.log(val)));
   // this.alltasks$ = this.service.Alltasks$;
   // console.log(this.alltasks$.subscribe(val3 => console.log( 'helloe' + val3)));
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
  }
}


