import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageStationsComponent } from './manage-stations.component';

describe('ManageStationsComponent', () => {
  let component: ManageStationsComponent;
  let fixture: ComponentFixture<ManageStationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageStationsComponent]
    });
    fixture = TestBed.createComponent(ManageStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
