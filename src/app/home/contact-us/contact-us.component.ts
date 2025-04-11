import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
 constructor(public Home:HomeService){}


 ContactFormGroup: FormGroup = new FormGroup({
  Fullname: new FormControl('', [Validators.required]),
  Email: new FormControl('', [Validators.required, Validators.email]),
  Message: new FormControl('', [Validators.required]),
});
   submitContactForm(){
    this.Home.submitContactForm(this.ContactFormGroup.value);
   }
 }
 

