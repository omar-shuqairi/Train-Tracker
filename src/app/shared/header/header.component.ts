import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
constructor(private authService: AuthService) { }
ngOnInit(): void {
  this.isLoggedIn = this.authService.isLoggedIn();
}


logout(): void {
  this.authService.Logout();
}
}

