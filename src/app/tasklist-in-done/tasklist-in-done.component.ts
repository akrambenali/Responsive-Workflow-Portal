import { DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

import { Task } from './task';
import { TaskService } from './task.service';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';


@Component(
  {
    selector: 'app-tasklist-in-done',
    templateUrl: './tasklist-in-done.component.html',
    styleUrls: ['./tasklist-in-done.component.scss'],
    providers: [TaskService, DecimalPipe]
  })

export class TasklistInDoneComponent {
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


