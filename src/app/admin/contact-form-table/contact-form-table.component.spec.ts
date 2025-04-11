import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormTableComponent } from './contact-form-table.component';

describe('ContactFormTableComponent', () => {
  let component: ContactFormTableComponent;
  let fixture: ComponentFixture<ContactFormTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormTableComponent]
    });
    fixture = TestBed.createComponent(ContactFormTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
