import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { AuthService } from 'src/app/Services/Auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  HomePageInfo: any = {};
  isLoggedIn: boolean = false;
constructor(private authService: AuthService,public admin:AdminService) { }
ngOnInit(): void {
  this.isLoggedIn = this.authService.isLoggedIn();
  this.admin.GetHomeDetails().subscribe(
    (data) => {
      this.HomePageInfo = data;
    },
    (err) => {
      console.error('Error fetching data:', err);
    }
  );
}


logout(): void {
  this.authService.Logout();
}
}
