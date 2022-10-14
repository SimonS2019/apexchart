import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalBoxplotchartComponent } from './horizontal-boxplotchart.component';

describe('HorizontalBoxplotchartComponent', () => {
  let component: HorizontalBoxplotchartComponent;
  let fixture: ComponentFixture<HorizontalBoxplotchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontalBoxplotchartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalBoxplotchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
