import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestPendingComponent } from './my-request-pending.component';

describe('MyRequestPendingComponent', () => {
  let component: MyRequestPendingComponent;
  let fixture: ComponentFixture<MyRequestPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyRequestPendingComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRequestPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
