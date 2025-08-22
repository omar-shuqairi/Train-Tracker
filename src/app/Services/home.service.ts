import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

    constructor(private http:HttpClient) { }
    Station:any=[];
    ApprovedTestimonialsForHome:any=[];
    GetAllStations(){
      this.http.get("https://localhost:7140/api/Stations").subscribe(resp=>{
  this.Station=resp;
      },err=>{
  console.log("err")
      })
    }

    SearchStationsByName(name:any){
      this.http.get("https://localhost:7140/api/Stations/SearchStationsByName/"+name).subscribe(resp=>{
        this.Station=resp;
            },err=>{
        console.log("err")
            })
    }

    GetAllApprovedTestimonialsForHome(){
      this.http.get("https://localhost:7140/api/Testimonials/GetApprovedTestimonialsForHome").subscribe(resp=>{
    this.ApprovedTestimonialsForHome=resp;
      },err=>{
    console.log("err")
      })
    }


    sumitTestimonials(body:any){//message+userid

      // debugger
      this.http.post("https://localhost:7140/api/Testimonials/PostTestimonialFromUsers",body).subscribe(respo=>{
        console.log("created");

        window.location.reload();
        
      },

      err=>{
        console.log(err.message);
        
      }
    
    )
    }



}
