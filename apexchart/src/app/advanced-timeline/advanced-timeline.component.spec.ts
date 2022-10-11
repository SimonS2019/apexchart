import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTimelineComponent } from './advanced-timeline.component';

describe('AdvancedTimelineComponent', () => {
  let component: AdvancedTimelineComponent;
  let fixture: ComponentFixture<AdvancedTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
