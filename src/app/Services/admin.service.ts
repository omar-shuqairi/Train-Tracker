import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
  Station:any=[];
  Trips:any=[];
  TripsBetweenDates:any=[];
  Users:any=[];
  ApprovedTestimonialsForAdmindash:any=[];
  GetPendingTestimonials:any=[];
  GetRejectedTestimonials:any=[];
  NumberOfUsers: number = 0;
  NumberOfTrainStation: number = 0;

  ///////////////////////////////get count of users
  GetCountOfUsers() {
    this.http.get<number>("https://localhost:7140/api/Users/GetCountOfUsers").subscribe(resp=>{
     this.NumberOfUsers = resp
    },err=>{
      console.log("err")
          })
  }
///////////////////////////////////////get count of train station

GetCountOfTrainStation() {
  this.http.get<number>("https://localhost:7140/api/Stations/GetCountOfStations").subscribe(resp=>{
   this.NumberOfTrainStation = resp
  },err=>{
    console.log("err")
        })
}

/////////////////////////////////////get all users 
  GetAllUserss(){
    this.http.get("https://localhost:7140/api/Users").subscribe(resp=>{
this.Users=resp;
    },err=>{
console.log("err")
    })
  }
  //////////////////////////////////////////////////////////get all stations
  GetAllStations(){
    this.http.get("https://localhost:7140/api/Stations").subscribe(resp=>{
this.Station=resp;
    },err=>{
console.log("err")
    })
  }

/////////////////////////////////////////////////////////////////////// delete station
deletestation(id:number){
  this.http.delete("https://localhost:7140/api/Stations/DeleteStation/"+id).subscribe(resp=>{

  })
  window.location.reload();
}

////////////////////////////////// create new station

CreateNewStation(body:any){
this.http.post("https://localhost:7140/api/Stations/",body).subscribe((resp)=>{
  console.log('created')
},err=>{
  console.log('sttsus err cannot create')})
  window.location.reload();

}
///////////////////////// update station
UpdateStation(body:any){
  this.http.put("https://localhost:7140/api/Stations/",body).subscribe((resp)=>{
    console.log('Updated')
  },err=>{
    console.log('sttsus err cannot update')})
    window.location.reload();
  
  }


  ////////////////////////////////////////get all trips

  GetAllTrips(){
    this.http.get("https://localhost:7140/api/Trips").subscribe(resp=>{
this.Trips=resp;
    },err=>{
console.log("err")
    })
  }


/////////////////////////////////////////////delete trip

deletetrip(id:number){
  this.http.delete("https://localhost:7140/api/Trips/DeleteTrip/"+id).subscribe(resp=>{

  })
  window.location.reload();
}
/////////////////////////////////////////////////////create new trip

CreateNewtrip(body:any){
  this.http.post("https://localhost:7140/api/Trips/",body).subscribe((resp)=>{
    console.log('created')
  },err=>{
    console.log('sttsus err cannot create')})
    window.location.reload();
  
  }

///////////////////////////////////////////////update trip
Updatetrip(body:any){
  this.http.put("https://localhost:7140/api/Trips/",body).subscribe((resp)=>{
    console.log('Updated')
  },err=>{
    console.log('sttsus err cannot update')})
    window.location.reload();
  
  }
  /////////////////////////////////////////////////////GetTripsBetweenDates

  getTripsBetweenDates(startDate?: string, endDate?: string) {
    this.http.get(`https://localhost:7140/api/Trips/GetTripsBetweenDates?startDate=${startDate || ''}&endDate=${endDate || ''}`)
      .subscribe(resp => {
        this.TripsBetweenDates = resp;
      }, err => {
        console.log("err");
      });
  }
  
////////////////////////////////////////////////////////////////get Approved Testimonials
  
  GetAllApprovedTestimonialsAdmin(){
    this.http.get("https://localhost:7140/api/Testimonials/GetApprovedTestimonialsForAdmindash").subscribe(resp=>{
  this.ApprovedTestimonialsForAdmindash=resp;
    },err=>{
  console.log("err")
    })
  }
  /////////////////////////////////////////////////////////get pending Testimonials
  GetAllPendingTestimonials(){
    this.http.get("https://localhost:7140/api/Testimonials/GetPendingTestimonials").subscribe(resp=>{
  this.GetPendingTestimonials=resp;
    },err=>{
  console.log("err")
    })
  }

  /////////////////////////////////////////////////////////get rejected Testimonials
  GetAllRejectedTestimonials(){
    this.http.get("https://localhost:7140/api/Testimonials/GetRejectedTestimonials").subscribe(resp=>{
  this.GetRejectedTestimonials=resp;
    },err=>{
  console.log("err")
    })
  }


  ///////////////////////////////////////// approve the Testimonials

  ApproveTheTestimonials(id:number){
      this.http.post("https://localhost:7140/api/Testimonials/UpdateTestimonialToApprove/"+id,{}).subscribe(resp=>{
      })
      window.location.reload();

    }

  ///////////////////////////////////////// reject the  Testimonials

  RejectTheTestimonials(id:number){
    this.http.post("https://localhost:7140/api/Testimonials/UpdateTestimonialToReject/"+id,{}).subscribe(resp=>{
    })
    window.location.reload();

  }










}//FOR THE CLASS