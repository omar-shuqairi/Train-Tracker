import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/Services/home.service';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent   implements OnInit {
  constructor(public Home:HomeService){}
  ngOnInit(): void {
    this.Home.GetAllApprovedTestimonialsForHome();
}
}


