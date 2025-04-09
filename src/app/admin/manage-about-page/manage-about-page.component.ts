import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-manage-about-page',
  templateUrl: './manage-about-page.component.html',
  styleUrls: ['./manage-about-page.component.css']
})
export class ManageAboutPageComponent implements OnInit {
  AboutPageInfo: any = {};
  constructor(public admin:AdminService){}
  ngOnInit(): void {
    this.admin.GetApoutDetails().subscribe(
      (data) => {
        this.AboutPageInfo = data;
      },
      (err) => {
        console.error('Error fetching data:', err);
      }
    );
}



updateAboutPage() {
  this.admin.UpdateAboutPage(this.AboutPageInfo).subscribe(
    (resp) => {
      console.log('Home Page Content updated successfully:', resp);
      alert('About updated successfully');

    },
    (err) => {
      console.error('Error updating user:', err);
    }
  );}
}