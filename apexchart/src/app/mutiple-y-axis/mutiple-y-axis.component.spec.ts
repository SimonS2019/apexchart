import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutipleYAxisComponent } from './mutiple-y-axis.component';

describe('MutipleYAxisComponent', () => {
  let component: MutipleYAxisComponent;
  let fixture: ComponentFixture<MutipleYAxisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutipleYAxisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutipleYAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
