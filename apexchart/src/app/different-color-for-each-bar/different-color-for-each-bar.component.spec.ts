import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentColorForEachBarComponent } from './different-color-for-each-bar.component';

describe('DifferentColorForEachBarComponent', () => {
  let component: DifferentColorForEachBarComponent;
  let fixture: ComponentFixture<DifferentColorForEachBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentColorForEachBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentColorForEachBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
