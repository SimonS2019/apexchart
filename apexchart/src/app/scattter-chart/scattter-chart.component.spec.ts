import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScattterChartComponent } from './scattter-chart.component';

describe('ScattterChartComponent', () => {
  let component: ScattterChartComponent;
  let fixture: ComponentFixture<ScattterChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScattterChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScattterChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
