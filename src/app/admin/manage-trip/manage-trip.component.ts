import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';
import { CreatetripComponent } from '../createtrip/createtrip.component';

@Component({
  selector: 'app-manage-trip',
  templateUrl: './manage-trip.component.html',
  styleUrls: ['./manage-trip.component.css']
})
export class ManageTripComponent {
  constructor(public admin:AdminService,public dialog:MatDialog){}
  @ViewChild('CallDeleteDialog') DeleteDialog!:TemplateRef<any>;
  @ViewChild('CallUpdateDialog') UpdateDialog!:TemplateRef<any>;
  UpdateForm:FormGroup = new FormGroup({
    tripId:new FormControl(),
    departureTime:new FormControl(),
    ticketPrice:new FormControl(),
    tripDescription:new FormControl(),
    trainId:new FormControl(),
    startStationId:new FormControl(),
    endStationId:new FormControl()})
   ngOnInit(): void {
  this.admin.GetAllTrips();
  this.admin.GetAllStations();
  this.admin.GetAllTrains();
   }

   openDialog(id:number) {
    const DialogRef=this.dialog.open(this.DeleteDialog);
    DialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
          this.admin.deletetrip(id)
        else if(result=='no')
          console.log('thank you!');
      }
    })
  }

  OpenCreateDialog(){
    this.dialog.open(CreatetripComponent)
  }
  PData:any={};
  openUpdateDialog(obj:any){
    this.PData=obj;
this.dialog.open(this.UpdateDialog)

this.UpdateForm.controls['tripId'].setValue(this.PData.trip_ID)
  }
  Update(){
this.admin.Updatetrip(this.UpdateForm.value);
  }
}