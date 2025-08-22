import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
const user = JSON.parse(localStorage.getItem('user') || '{}');
const userId = user.UserId;
@Injectable({
  providedIn: 'root'
})

export class HomeService {

    constructor(private http:HttpClient) { }
    Station:any=[];
    Trips:any=[];
    UserDetails:any=[];
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

    GetAllTripsUpToDate(){
      this.http.get("https://localhost:7140/api/Trips/GetAllTripsUpToDate").subscribe(resp=>{
  this.Trips=resp;
      },err=>{
  console.log("err")
      })
    }
  

    GetUserDetailes(){
      this.http.get("https://localhost:7140/api/Users/getbyId/"+userId).subscribe(resp=>{
  this.UserDetails=resp;
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



    sumitTestimonials(body:any){//message+userid

      this.http.post("https://localhost:7140/api/Testimonials/PostTestimonialFromUsers",body).subscribe(respo=>{
        console.log("created");
 Swal.fire({
          icon: 'success',
          title: 'We Recived your Testimonial!',
          text: 'Thank you.',
          confirmButtonText: 'OK',
          allowOutsideClick: false,
        }).then(() => {
          window.location.reload();
        });
      },

      err=>{
        console.log(err.message);
        
      }
    
    )
    }
    submitContactForm(body:any){
      this.http.post("https://localhost:7140/api/ContactForm",body).subscribe(respo=>{
        console.log("created");
 Swal.fire({
          icon: 'success',
          title: 'We Recived your Message!',
          text: 'Thank you.',
          confirmButtonText: 'OK',
          allowOutsideClick: false,
        }).then(() => {
          window.location.reload();
        });
      },

      err=>{
        console.log(err.message);
        
      }
    
    )
    }
}
