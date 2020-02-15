import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamiqueWaterfallChartComponent } from './dynamique-waterfall-chart.component';

describe('DynamiqueWaterfallChartComponent', () => {
  let component: DynamiqueWaterfallChartComponent;
  let fixture: ComponentFixture<DynamiqueWaterfallChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamiqueWaterfallChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamiqueWaterfallChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
