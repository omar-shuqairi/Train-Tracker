import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/Services/Auth.service';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent   implements OnInit {
  isLoggedIn: boolean = false;
  storedUserId:number = Number(localStorage.getItem('userId')) ;
  constructor(public Home:HomeService,private authService:AuthService){}
  ngOnInit(): void {
    this.Home.GetAllApprovedTestimonialsForHome();
    this.isLoggedIn = this.authService.isLoggedIn();
}

testimonailGroup: FormGroup = new FormGroup ({
  TestimonialText : new FormControl(''),
  userId:new FormControl()
  });
  submitTestimonial(){
  
    //     this.updateForm.controls['courseid'].setValue(this.pData.courseid);
  
    this.testimonailGroup.controls['userId'].setValue(this.storedUserId)
  
    this.Home.sumitTestimonials(this.testimonailGroup.value);
  
  }
}


