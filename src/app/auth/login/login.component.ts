import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
email ='omar@gmail.com';
password='123456';
save(){
  localStorage.setItem('email',this.email);
}
}