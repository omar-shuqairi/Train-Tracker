import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';


@Component({
  selector: 'app-createstation',
  templateUrl: './createstation.component.html',
  styleUrls: ['./createstation.component.css']
})
export class CreatestationComponent {
  constructor(private admin:AdminService){}
createForm:FormGroup = new FormGroup({
  stationName:new FormControl('',[Validators.required]),
  latitude:new FormControl('',[Validators.required]),
  longitude:new FormControl('',[Validators.required]),
  city:new FormControl('',[Validators.required]),
  area:new FormControl('',[Validators.required])})

  Create(){
this.admin.CreateNewStation(this.createForm.value)
  }
}
