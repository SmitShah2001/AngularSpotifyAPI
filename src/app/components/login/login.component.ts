import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule , RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form = {
    email : '',
    password : ''
  }
  emailRegex = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
  passwordRegex = '^[a-zA-Z0-9!@#$%^&*]{8,}$'
  loginFuntion(){
    alert("Login Successful");
    console.log("Successful Login");
    console.log(this.form);
  }
}
