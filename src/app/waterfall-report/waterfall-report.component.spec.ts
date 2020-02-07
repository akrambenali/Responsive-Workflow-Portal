import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfallReportComponent } from './waterfall-report.component';

describe('WaterfallReportComponent', () => {
  let component: WaterfallReportComponent;
  let fixture: ComponentFixture<WaterfallReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterfallReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterfallReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
