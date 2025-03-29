import { Component } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-search-train-stations',
  templateUrl: './search-train-stations.component.html',
  styleUrls: ['./search-train-stations.component.css']
})
export class SearchTrainStationsComponent {
 searchQuery: string = '';
  stations: any[] = []; // To store fetched stations

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.getAllStations(); // Load all stations on init
  }

  getAllStations() {
    this.homeService.GetAllStations();
    setTimeout(() => {
      this.stations = this.homeService.Station; // Assign response to local stations array
    }, 500); 
  }

  search() {
    if (this.searchQuery.trim() === '') {
      this.getAllStations(); // If no search query, load all stations
    } else {
      this.homeService.SearchStationsByName(this.searchQuery); // Fetch stations based on query
      setTimeout(() => {
        this.stations = this.homeService.Station; // Assign filtered response
      }, 500);
    }
  }
  
  // This will trigger on every keyup event, ensuring search is dynamic
  onSearchChange() {
    this.search(); // Call the search method when user types
  }
}
