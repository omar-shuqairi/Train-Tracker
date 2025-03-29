import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/Services/admin.service';
import { CreatestationComponent } from '../createstation/createstation.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-stations',
  templateUrl: './manage-stations.component.html',
  styleUrls: ['./manage-stations.component.css']



})
export class ManageStationsComponent implements OnInit {
  constructor(public admin:AdminService,public dialog:MatDialog){}
  @ViewChild('CallDeleteDialog') DeleteDialog!:TemplateRef<any>;
  @ViewChild('CallUpdateDialog') UpdateDialog!:TemplateRef<any>;
  UpdateForm:FormGroup = new FormGroup({
    stationId:new FormControl(),
    stationName:new FormControl(),
    latitude:new FormControl(),
    longitude:new FormControl(),
    city:new FormControl(),
    area:new FormControl(),})
   ngOnInit(): void {
  this.admin.GetAllStations();
   }

   openDialog(id:number) {
    const DialogRef=this.dialog.open(this.DeleteDialog);
    DialogRef.afterClosed().subscribe((result)=>{
      if(result!=undefined)
      {
        if(result=='yes')
          this.admin.deletestation(id)
        else if(result=='no')
          console.log('thank you!');
      }
    })
  }
  OpenCreateDialog(){
    this.dialog.open(CreatestationComponent)
  }
  PData:any={};
  openUpdateDialog(obj:any){
    this.PData=obj;
this.dialog.open(this.UpdateDialog)

this.UpdateForm.controls['stationId'].setValue(this.PData.stationId)
  }
  Update(){
this.admin.UpdateStation(this.UpdateForm.value);
  }

}
