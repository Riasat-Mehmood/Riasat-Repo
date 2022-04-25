import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathoperatersComponent } from './mathoperaters.component';

describe('MathoperatersComponent', () => {
  let component: MathoperatersComponent;
  let fixture: ComponentFixture<MathoperatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathoperatersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathoperatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
