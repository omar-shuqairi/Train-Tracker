import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-rejected-testimonials',
  templateUrl: './rejected-testimonials.component.html',
  styleUrls: ['./rejected-testimonials.component.css']
})
export class RejectedTestimonialsComponent  implements OnInit {
  constructor(public admin:AdminService){}
  ngOnInit(): void {
    this.admin.GetAllRejectedTestimonials();
}
}