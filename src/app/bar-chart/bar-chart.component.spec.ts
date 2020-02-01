import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBarChartComponent } from './bar-chart.component';

describe('BarChartComponent', () => {
  let component: MyBarChartComponent;
  let fixture: ComponentFixture<MyBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
