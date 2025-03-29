import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-approved-testimonials-admin',
  templateUrl: './approved-testimonials-admin.component.html',
  styleUrls: ['./approved-testimonials-admin.component.css']
})
export class ApprovedTestimonialsAdminComponent  implements OnInit {
  constructor(public admin:AdminService){}
  ngOnInit(): void {
    this.admin.GetAllApprovedTestimonialsAdmin();
}
}
