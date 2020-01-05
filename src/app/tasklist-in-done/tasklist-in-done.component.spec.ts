import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistInDoneComponent } from './tasklist-in-done.component';

describe('TasklistInProgressComponent', () => {
  let component: TasklistInDoneComponent;
  let fixture: ComponentFixture<TasklistInDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TasklistInDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistInDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
