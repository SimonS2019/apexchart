import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedChartTest2Component } from './mixed-chart-test2.component';

describe('MixedChartTest2Component', () => {
  let component: MixedChartTest2Component;
  let fixture: ComponentFixture<MixedChartTest2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedChartTest2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedChartTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
