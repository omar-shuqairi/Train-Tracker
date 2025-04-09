import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-manage-home-page',
  templateUrl: './manage-home-page.component.html',
  styleUrls: ['./manage-home-page.component.css']
})
export class ManageHomePageComponent implements OnInit {
  HomePageInfo: any = {};
  constructor(public admin:AdminService){}
  ngOnInit(): void {
    this.admin.GetHomeDetails().subscribe(
      (data) => {
        this.HomePageInfo = data;
      },
      (err) => {
        console.error('Error fetching data:', err);
      }
    );
}



updateHomePage() {
  this.admin.UpdateHomePage(this.HomePageInfo).subscribe(
    (resp) => {
      console.log('Home Page Content updated successfully:', resp);
      alert('Home updated successfully');

    },
    (err) => {
      console.error('Error updating user:', err);
    }
  );}


  UploadLogo(file: any) {
    if (file.length === 0) return;
  
    const fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
  
    this.admin.uploadAttachment(formData).subscribe((res: any) => {
      console.log('Logo response:', res);
      this.HomePageInfo.logoImg = res.profileImage;  
    });
  }
  
  
  
  UploadBg(file: any) {
    if (file.length === 0) return;
  
    const fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
  
    this.admin.uploadAttachment(formData).subscribe((res: any) => {
      console.log('Background response:', res);
      this.HomePageInfo.bgHero = res.profileImage;  
    });
  }
  
  

}