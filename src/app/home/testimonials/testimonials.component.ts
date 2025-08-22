import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validator } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';
import { AuthService } from 'src/app/Services/Auth.service';
import { group } from '@angular/animations';
@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent   implements OnInit {
  


  constructor(public Home:HomeService){}
  ngOnInit(): void {
    this.Home.GetAllApprovedTestimonialsForHome();

    
}

storedUserId:number = Number(localStorage.getItem('userId')) ;



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


