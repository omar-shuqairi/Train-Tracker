import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.css']
})
export class HerosectionComponent implements OnInit {
  HomePageInfo: any = {};
  constructor(public admin:AdminService){}
  ngOnInit(): void {
    this.admin.GetHomeDetails().subscribe(
      (data) => {
        this.HomePageInfo = data;
        console.log(this.HomePageInfo.bgHero);

      },
      (err) => {
        console.error('Error fetching data:', err);
      }
    );
}}