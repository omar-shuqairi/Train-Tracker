import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageConactPageComponent } from './manage-conact-page.component';

describe('ManageConactPageComponent', () => {
  let component: ManageConactPageComponent;
  let fixture: ComponentFixture<ManageConactPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageConactPageComponent]
    });
    fixture = TestBed.createComponent(ManageConactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
