import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-pending-testimonials',
  templateUrl: './pending-testimonials.component.html',
  styleUrls: ['./pending-testimonials.component.css']
})
export class PendingTestimonialsComponent implements OnInit {
  constructor(public admin:AdminService){}
  ngOnInit(): void {
    this.admin.GetAllPendingTestimonials();
}
}
