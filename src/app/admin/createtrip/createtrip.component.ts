import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-createtrip',
  templateUrl: './createtrip.component.html',
  styleUrls: ['./createtrip.component.css']
})
export class CreatetripComponent {
  constructor(private admin:AdminService){}
  createForm:FormGroup = new FormGroup({
    departureTime:new FormControl('',[Validators.required]),
    ticketPrice:new FormControl('',[Validators.required]),
    tripDescription:new FormControl('',[Validators.required]),
    trainId:new FormControl('',[Validators.required]),
    startStationId:new FormControl('',[Validators.required]),
    endStationId:new FormControl('',[Validators.required])})

    Create(){
      this.admin.CreateNewtrip(this.createForm.value)
        }
}

