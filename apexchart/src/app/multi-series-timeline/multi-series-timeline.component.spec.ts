import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSeriesTimelineComponent } from './multi-series-timeline.component';

describe('MultiSeriesTimelineComponent', () => {
  let component: MultiSeriesTimelineComponent;
  let fixture: ComponentFixture<MultiSeriesTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSeriesTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSeriesTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
