import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTripComponent } from './search-trip.component';

describe('SearchTripComponent', () => {
  let component: SearchTripComponent;
  let fixture: ComponentFixture<SearchTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTripComponent]
    });
    fixture = TestBed.createComponent(SearchTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
