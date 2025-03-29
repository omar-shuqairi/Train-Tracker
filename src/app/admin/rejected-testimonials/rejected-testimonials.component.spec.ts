import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedTestimonialsComponent } from './rejected-testimonials.component';

describe('RejectedTestimonialsComponent', () => {
  let component: RejectedTestimonialsComponent;
  let fixture: ComponentFixture<RejectedTestimonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RejectedTestimonialsComponent]
    });
    fixture = TestBed.createComponent(RejectedTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
