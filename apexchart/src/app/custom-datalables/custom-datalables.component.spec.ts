import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDatalablesComponent } from './custom-datalables.component';

describe('CustomDatalablesComponent', () => {
  let component: CustomDatalablesComponent;
  let fixture: ComponentFixture<CustomDatalablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDatalablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDatalablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
