import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCalcComponent } from './loan-calc.component';

describe('LoanCalcComponent', () => {
  let component: LoanCalcComponent;
  let fixture: ComponentFixture<LoanCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
