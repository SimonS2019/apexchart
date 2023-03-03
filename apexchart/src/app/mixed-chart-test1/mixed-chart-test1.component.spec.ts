import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedChartTest1Component } from './mixed-chart-test1.component';

describe('MixedChartTest1Component', () => {
  let component: MixedChartTest1Component;
  let fixture: ComponentFixture<MixedChartTest1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedChartTest1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedChartTest1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
