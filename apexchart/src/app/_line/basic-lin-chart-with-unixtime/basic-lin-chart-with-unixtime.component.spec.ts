import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLinChartWithUnixtimeComponent } from './basic-lin-chart-with-unixtime.component';

describe('BasicLinChartWithUnixtimeComponent', () => {
  let component: BasicLinChartWithUnixtimeComponent;
  let fixture: ComponentFixture<BasicLinChartWithUnixtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicLinChartWithUnixtimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicLinChartWithUnixtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
