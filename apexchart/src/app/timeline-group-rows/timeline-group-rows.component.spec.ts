import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineGroupRowsComponent } from './timeline-group-rows.component';

describe('TimelineGroupRowsComponent', () => {
  let component: TimelineGroupRowsComponent;
  let fixture: ComponentFixture<TimelineGroupRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineGroupRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineGroupRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
