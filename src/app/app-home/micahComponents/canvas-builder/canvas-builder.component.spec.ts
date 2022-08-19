import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBuilderComponent } from './canvas-builder.component';

describe('CanvasBuilderComponent', () => {
  let component: CanvasBuilderComponent;
  let fixture: ComponentFixture<CanvasBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CanvasBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
