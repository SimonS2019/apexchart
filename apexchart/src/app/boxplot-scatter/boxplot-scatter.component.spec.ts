import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxplotScatterComponent } from './boxplot-scatter.component';

describe('BoxplotScatterComponent', () => {
  let component: BoxplotScatterComponent;
  let fixture: ComponentFixture<BoxplotScatterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxplotScatterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxplotScatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
