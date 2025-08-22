import { Component, OnInit } from '@angular/core';
import { UpdateProfileService } from 'src/app/Services/update-profile.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  user: any = {};
  user2: any = {};
constructor(public admin:UpdateProfileService){}
ngOnInit(): void {
    const storedUserId = localStorage.getItem('userId');
  if (storedUserId) {
    this.admin.Getuserbyid(Number(storedUserId)).subscribe(
      (data) => {
        this.user = data;
        if (this.user.dateOfBirth) {
          this.user.dateOfBirth = this.user.dateOfBirth.split("T")[0];
        }
      },
      (err) => {
        console.error('Error fetching user:', err);
      }
    );
    this.admin.Getuser2byid(Number(storedUserId)).subscribe(
      (data) => {
        this.user2 = data;
      },
      (err) => {
        console.error('Error fetching user:', err);
      }
    );
  } else {
    console.error('User ID not found. Please login again.');
  }

}

updateUser() {
  this.admin.UpdateUser(this.user).subscribe(
    (resp) => {
      console.log('User updated successfully:', resp);
      alert('Profile updated successfully');

    },
    (err) => {
      console.error('Error updating user:', err);
    }
  );
  this.admin.Update2User(this.user2).subscribe(
    (resp) => {
      console.log('User updated successfully:', resp);

    },
    (err) => {
      console.error('Error updating user:', err);
    }
  );
}



UploadImage(file:any){


  if(file.length==0)
    return ; 
  let fileToUpload=<File>file[0];
  const formData=new FormData();
  formData.append('file',fileToUpload,fileToUpload.name);
  this.admin.uploadAttachment(formData);

}



}