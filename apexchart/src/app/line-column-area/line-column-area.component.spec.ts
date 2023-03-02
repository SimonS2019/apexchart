import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineColumnAreaComponent } from './line-column-area.component';

describe('LineColumnAreaComponent', () => {
  let component: LineColumnAreaComponent;
  let fixture: ComponentFixture<LineColumnAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineColumnAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineColumnAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
