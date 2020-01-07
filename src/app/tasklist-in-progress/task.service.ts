import { Injectable, PipeTransform } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

import { Task } from './task';
import { TASKS } from './tasks';
import { DecimalPipe } from '@angular/common';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { SortDirection } from './sortable.directive';

interface SearchResult {
  tasks: Task[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
}

function compare(v1, v2) {
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}

function sort(tasks: Task[], column: string, direction: string): Task[] {
  if (direction === '') {
    return tasks;
  } else {
    return [...tasks].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}



function matches(task: Task, term: string) {
  return task.initator.toLowerCase().includes(term.toLowerCase())
    || task.process.toLowerCase().includes(term.toLowerCase())
    || task.initDate.toLowerCase().includes(term.toLowerCase());
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  // tslint:disable-next-line:variable-name
  private _loading$ = new BehaviorSubject<boolean>(true);
  // tslint:disable-next-line:variable-name
  private _search$ = new Subject<void>();
  // tslint:disable-next-line:variable-name
  private _tasks$ = new BehaviorSubject<Task[]>([]);
  // tslint:disable-next-line:variable-name
  private _total$ = new BehaviorSubject<number>(0);
  // tslint:disable-next-line:variable-name
  private _Alltasks$ = new BehaviorSubject<Task[]>([]);
  // tslint:disable-next-line:variable-name
  private _state: State = {
    page: 1,
    pageSize: 5,
    searchTerm: '',
    sortColumn: '',
    sortDirection: ''
  };

  constructor(private pipe: DecimalPipe) {
    this._search$.pipe(
      tap(() => this._loading$.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading$.next(false))
    ).subscribe(result => {
      this._tasks$.next(result.tasks);
      this._total$.next(result.total);
    });

    this._search$.next();
  }

  get tasks$() { return this._tasks$.asObservable(); }
  get Alltasks$() { return this._Alltasks$.asObservable();}
  get total$() { return this._total$.asObservable(); }
  get loading$() { return this._loading$.asObservable(); }
  get page() { return this._state.page; }
  get pageSize() { return this._state.pageSize; }
  get searchTerm() { return this._state.searchTerm; }

  // tslint:disable-next-line:adjacent-overload-signatures
  set page(page: number) { this._set({ page }); }
  // tslint:disable-next-line:adjacent-overload-signatures
  set pageSize(pageSize: number) { this._set({ pageSize }); }
  // tslint:disable-next-line:adjacent-overload-signatures
  set searchTerm(searchTerm: string) { this._set({ searchTerm }); }
  set sortColumn(sortColumn: string) { this._set({ sortColumn }); }
  set sortDirection(sortDirection: SortDirection) { this._set({ sortDirection }); }

  private _set(patch: Partial<State>) {
    Object.assign(this._state, patch);
    this._search$.next();
  }

  private _search(): Observable<SearchResult> {
    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

    // 1. sort
    let tasks = sort(TASKS, sortColumn, sortDirection);

    // 2. filter
    tasks = tasks.filter(country => matches(country, searchTerm));  // ,sthis.pipe
    const total = tasks.length;

    // 3. paginate
    tasks = tasks.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
    return of({ tasks, total });
  }
}
