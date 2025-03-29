import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingTestimonialsComponent } from './pending-testimonials.component';

describe('PendingTestimonialsComponent', () => {
  let component: PendingTestimonialsComponent;
  let fixture: ComponentFixture<PendingTestimonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingTestimonialsComponent]
    });
    fixture = TestBed.createComponent(PendingTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
