import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakedHorizantalBarChartComponent } from './staked-horizantal-bar-chart.component';

describe('StakedHorizantalBarChartComponent', () => {
  let component: StakedHorizantalBarChartComponent;
  let fixture: ComponentFixture<StakedHorizantalBarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakedHorizantalBarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakedHorizantalBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
