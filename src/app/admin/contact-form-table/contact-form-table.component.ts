import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
@Component({
  selector: 'app-contact-form-table',
  templateUrl: './contact-form-table.component.html',
  styleUrls: ['./contact-form-table.component.css']
})

export class ContactFormTableComponent implements OnInit {
  constructor(public admin:AdminService){}
  ngOnInit(): void {
    this.admin.GetAllContactForm();
}
}
