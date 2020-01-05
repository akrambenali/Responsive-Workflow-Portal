import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestDoneComponent } from './my-request-done.component';

describe('MyRequestDoneComponent', () => {
  let component: MyRequestDoneComponent;
  let fixture: ComponentFixture<MyRequestDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRequestDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRequestDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
