import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistInProgressComponent } from './tasklist-in-progress.component';

describe('TasklistInProgressComponent', () => {
  let component: TasklistInProgressComponent;
  let fixture: ComponentFixture<TasklistInProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasklistInProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
