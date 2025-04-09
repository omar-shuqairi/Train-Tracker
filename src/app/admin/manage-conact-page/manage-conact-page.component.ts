import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-manage-conact-page',
  templateUrl: './manage-conact-page.component.html',
  styleUrls: ['./manage-conact-page.component.css']
})
export class ManageConactPageComponent implements OnInit {
  ContactPageInfo: any = {};
  constructor(public admin:AdminService){}
  ngOnInit(): void {
    this.admin.GetContactPageDetails().subscribe(
      (data) => {
        this.ContactPageInfo = data;
      },
      (err) => {
        console.error('Error fetching data:', err);
      }
    );
}



updateContactPage() {
  this.admin.UpdateContactPageDetails(this.ContactPageInfo).subscribe(
    (resp) => {
      console.log('Home Page Content updated successfully:', resp);
      alert('Contact updated successfully');

    },
    (err) => {
      console.error('Error updating user:', err);
    }
  );}
}