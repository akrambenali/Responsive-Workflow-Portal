import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MytodoComponent } from './mytodo.component';

describe('MytodoComponent', () => {
  let component: MytodoComponent;
  let fixture: ComponentFixture<MytodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
