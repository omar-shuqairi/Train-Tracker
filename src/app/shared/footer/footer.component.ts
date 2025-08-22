import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  FooterInfo: any = {};
  ContactPageInfo: any = {};
  constructor(public admin:AdminService){}
  ngOnInit(): void {
    this.admin.GetFooterDetails().subscribe(
      (data) => {
        this.FooterInfo = data;
      },
      (err) => {
        console.error('Error fetching data:', err);
      }
    );

    this.admin.GetContactPageDetails().subscribe(
      (data) => {
        this.ContactPageInfo = data;
      },
      (err) => {
        console.error('Error fetching data:', err);
      }
    );

}}