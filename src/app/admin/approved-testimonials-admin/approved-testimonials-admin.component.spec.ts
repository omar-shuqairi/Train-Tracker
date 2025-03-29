import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedTestimonialsAdminComponent } from './approved-testimonials-admin.component';

describe('ApprovedTestimonialsAdminComponent', () => {
  let component: ApprovedTestimonialsAdminComponent;
  let fixture: ComponentFixture<ApprovedTestimonialsAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApprovedTestimonialsAdminComponent]
    });
    fixture = TestBed.createComponent(ApprovedTestimonialsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
