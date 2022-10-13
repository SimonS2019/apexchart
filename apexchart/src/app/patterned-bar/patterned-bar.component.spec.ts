import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatternedBarComponent } from './patterned-bar.component';

describe('PatternedBarComponent', () => {
  let component: PatternedBarComponent;
  let fixture: ComponentFixture<PatternedBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatternedBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatternedBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
