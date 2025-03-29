import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestationComponent } from './createstation.component';

describe('CreatestationComponent', () => {
  let component: CreatestationComponent;
  let fixture: ComponentFixture<CreatestationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatestationComponent]
    });
    fixture = TestBed.createComponent(CreatestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
