import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/Auth.service';
import { HomeService } from 'src/app/Services/home.service';
@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  isLoggedIn: boolean = false;
constructor(public Home:HomeService,private router:Router,private authService: AuthService){}

ngOnInit(): void {
  this.isLoggedIn = this.authService.isLoggedIn();
  this.Home.GetAllTripsUpToDate();
   }
   saveAndNavigate(trip: any): void {
    if (this.authService.isLoggedIn()) {
      localStorage.setItem('selectedTrip', JSON.stringify(trip));
    this.router.navigate(['/home/Payment']);
    } else {
      this.router.navigate(['/sign/login']);
    }
  }
}
