import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from './task';
import { TaskService } from './task.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';


@Component(
  {
    selector: 'app-tasklist-in-progress',
    templateUrl: './tasklist-in-progress.component.html',
    styleUrls: ['./tasklist-in-progress.component.scss'],
    providers: [TaskService, DecimalPipe]
  })

export class TasklistInProgressComponent {
  tasks$: Observable<Task[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: TaskService) {
    this.tasks$ = service.tasks$;
    this.total$ = service.total$;
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


