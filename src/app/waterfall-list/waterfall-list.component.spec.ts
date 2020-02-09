import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterfallListComponent } from './waterfall-list.component';

describe('WaterfallListComponent', () => {
  let component: WaterfallListComponent;
  let fixture: ComponentFixture<WaterfallListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaterfallListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterfallListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
