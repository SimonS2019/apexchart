import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLinChartWithDatetimeComponent } from './basic-lin-chart-with-datetime.component';

describe('BasicLinChartWithDatetimeComponent', () => {
  let component: BasicLinChartWithDatetimeComponent;
  let fixture: ComponentFixture<BasicLinChartWithDatetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicLinChartWithDatetimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicLinChartWithDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
