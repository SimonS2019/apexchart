import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarWithMarkersComponent } from './bar-with-markers.component';

describe('BarWithMarkersComponent', () => {
  let component: BarWithMarkersComponent;
  let fixture: ComponentFixture<BarWithMarkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarWithMarkersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarWithMarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
