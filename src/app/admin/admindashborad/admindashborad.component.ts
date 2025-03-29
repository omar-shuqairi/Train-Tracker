import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admindashborad',
  templateUrl: './admindashborad.component.html',
  styleUrls: ['./admindashborad.component.css']
})
export class AdmindashboradComponent implements OnInit {
  constructor(public admin:AdminService){}
  ngOnInit(): void {
    this.admin.GetCountOfUsers();
    this.admin.GetCountOfTrainStation();
}
}

