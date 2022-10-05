import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageStackedBarChartComponent } from './percentage-stacked-bar-chart.component';

describe('PercentageStackedBarChartComponent', () => {
  let component: PercentageStackedBarChartComponent;
  let fixture: ComponentFixture<PercentageStackedBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentageStackedBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageStackedBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
