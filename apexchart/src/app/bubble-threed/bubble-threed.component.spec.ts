import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleThreedComponent } from './bubble-threed.component';

describe('BubbleThreedComponent', () => {
  let component: BubbleThreedComponent;
  let fixture: ComponentFixture<BubbleThreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleThreedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleThreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
