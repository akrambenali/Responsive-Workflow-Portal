import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasklistInPendingComponent } from './tasklist-in-pending.component';

describe('TasklistInPendingComponent', () => {
  let component: TasklistInPendingComponent;
  let fixture: ComponentFixture<TasklistInPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TasklistInPendingComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasklistInPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
