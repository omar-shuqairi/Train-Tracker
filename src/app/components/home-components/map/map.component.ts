import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  implements OnInit, AfterViewInit {
  stations: any[] = [];  // Array to hold the station data

  constructor(public admin: AdminService) {}

  ngOnInit(): void {
    // Fetch the stations when the component is initialized
    this.admin.GetAllStations(); // This will fill the `Station` array in the service
  }

  ngAfterViewInit(): void {
    // Use setTimeout to wait for the async data fetching before initializing the map
    setTimeout(() => {
      this.stations = this.admin.Station;  // Get the stations from the service
      this.initMap();  // Initialize the map after data is fetched
    }, 1000);  // Adjust timeout duration if necessary
  }

  // Function to initialize the Google Map and add markers
  initMap(): void {
    const mapOptions = {
      center: { lat: 31.963158, lng: 35.930359 }, // Default center (Jordan's center)
      zoom: 10, // Adjust zoom level as needed
      mapTypeId: 'roadmap'
    };

    // Initialize the map
    const map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);

    // Create an InfoWindow to show station name when a marker is clicked
    const infoWindow = new google.maps.InfoWindow();

    // Loop through the stations and place a marker for each one
    this.stations.forEach(station => {
      const marker = new google.maps.Marker({
        position: { lat: station.latitude, lng: station.longitude },  // Accessing latitude and longitude from API response
        map: map,
        title: station.stationName  // Accessing station name from API response
      });

      // Add click event listener to show InfoWindow with station name
      google.maps.event.addListener(marker, 'click', () => {
        const content =
         `<div>
         <h3>${station.stationName}</h3>
         <p><strong>City:</strong> ${station.city}</p>
          <p><strong>Area:</strong> ${station.area}</p>
         </div>`;  // Only show station name
        infoWindow.setContent(content);
        infoWindow.open(map, marker);
      });
    });
  }
}







