import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
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
}}