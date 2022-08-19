import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberGuesserComponent } from './number-guesser.component';

describe('NumberGuesserComponent', () => {
  let component: NumberGuesserComponent;
  let fixture: ComponentFixture<NumberGuesserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberGuesserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberGuesserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
