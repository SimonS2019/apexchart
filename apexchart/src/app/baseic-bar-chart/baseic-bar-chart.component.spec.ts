import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseicBarChartComponent } from './baseic-bar-chart.component';

describe('BaseicBarChartComponent', () => {
  let component: BaseicBarChartComponent;
  let fixture: ComponentFixture<BaseicBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseicBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseicBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
