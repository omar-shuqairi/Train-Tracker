import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { jwtDecode } from "jwt-decode";
import { ToastrService } from 'ngx-toastr';
import {  Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Injectable({
  providedIn: 'root'
})

export class AuthService {


    constructor(private http:HttpClient,private spiner:NgxSpinnerService,private toastr:ToastrService,private router:Router) { }

    Login(email:any,password:any){
    var body={
    email:email.value.toString(),
    password:password.value.toString()
    }
    const headerDirc={
        'Content-Type':'application/json',
        'Accept':'application/json'
    }

    const requestOption={
       headers:new HttpHeaders(headerDirc) 
    }

    this.http.post("https://localhost:7140/api/JWT",body,requestOption).subscribe((resp:any)=>{
        console.log('Response:', resp);
        localStorage.setItem('token',resp.toString());
        const user:any = jwtDecode(resp.toString());
        localStorage.setItem('user',JSON.stringify(user));
        if (user && user.UserId) {
          localStorage.setItem('userId', user.UserId.toString());
          console.log("UserID Stored:", localStorage.getItem('userId'));
        }else{
          console.log("error");
        }
        if(user.RoleId=='1')
        {
          
            this.toastr.success('Welcome on Admin Dashboard');
            this.router.navigate(['admin/Dashborad']);

        }
        else if(user.RoleId=='2')
        {
            this.router.navigate(['home'])
        }

    },err=>{
        this.toastr.error('Email or password is incorrect');
    })
    }



      RegisterUsers(body:any){
          
  
    
        body.ProfileImage = this.display_image;
        this.http.post("https://localhost:7140/api/UserProfile/Register/",body).subscribe(
          (respo:any)=>{
    
            
            this.toastr.success('User Created');
    
            this.router.navigate(['sign/login']);
            
            }
          ,
            // 
          err=>{
            console.log(body);   
            
            console.log(err.status);
          }
      )
      // window.location.reload();
      }
    
      display_image:any;
      uploadAttachment(file:FormData){

        this.http.post("https://localhost:7140/api/UserProfile/Image",file).subscribe(
        (respo:any)=>{
            this.display_image = respo.profileImage;
            console.log(respo);
            
        },
    
        err=>{console.log(err.status);}
      )
      }
    



      Logout() {
        localStorage.clear();
        this.router.navigate(['/sign/login']);
      }


      isLoggedIn(): boolean {
        return !!localStorage.getItem('token');
      }

}











