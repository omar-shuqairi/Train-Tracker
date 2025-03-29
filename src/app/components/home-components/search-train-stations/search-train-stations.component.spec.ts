import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTrainStationsComponent } from './search-train-stations.component';

describe('SearchTrainStationsComponent', () => {
  let component: SearchTrainStationsComponent;
  let fixture: ComponentFixture<SearchTrainStationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTrainStationsComponent]
    });
    fixture = TestBed.createComponent(SearchTrainStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
