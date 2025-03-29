import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-search-trip',
  templateUrl: './search-trip.component.html',
  styleUrls: ['./search-trip.component.css']
})
export class SearchTripComponent {
  constructor(public admin: AdminService) {}

  searchTrips(startDate?: string, endDate?: string): void {
    this.admin.getTripsBetweenDates(startDate, endDate);
  }
}
