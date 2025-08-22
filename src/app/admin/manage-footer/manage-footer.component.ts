import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-manage-footer',
  templateUrl: './manage-footer.component.html',
  styleUrls: ['./manage-footer.component.css']
})
export class ManageFooterComponent implements OnInit {
  FooterInfo: any = {};
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
}



updateFooter() {
  this.admin.UpdateFooter(this.FooterInfo).subscribe(
    (resp) => {
      console.log('Home Page Content updated successfully:', resp);
      alert('Footer updated successfully');

    },
    (err) => {
      console.error('Error updating user:', err);
    }
  );}
}