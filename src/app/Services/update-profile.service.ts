import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateProfileService {

display_image:any;
  constructor(private http:HttpClient) { }
  Getuserbyid(id: number): Observable<any> {
    return this.http.get(`https://localhost:7140/api/userprofile/getbyId/${id}`);
  }
  Getuser2byid(id: number): Observable<any> {
    return this.http.get(`https://localhost:7140/api/users/getbyId/${id}`);
  }
  UpdateUser(body: any): Observable<any> {
    body.ProfileImage =this.display_image;
    return this.http.put(`https://localhost:7140/api/userprofile`, body);
    
  }
  Update2User(body: any): Observable<any> {
    return this.http.put(`https://localhost:7140/api/users`, body);
  }

  uploadAttachment(file:FormData){
    
    this.http.post("https://localhost:7140/api/UserProfile/Image",file).subscribe(
    (respo:any)=>{
        this.display_image = respo.profileImage;
        console.log(respo);
        
    },

    err=>{console.log(err.status);}
  )
}
  }


//here updateprofile service for both admin and user