import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTripComponent } from './manage-trip.component';

describe('ManageTripComponent', () => {
  let component: ManageTripComponent;
  let fixture: ComponentFixture<ManageTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTripComponent]
    });
    fixture = TestBed.createComponent(ManageTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
