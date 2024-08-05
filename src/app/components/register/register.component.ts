import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule , RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailRegex = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$';
  passwordRegex = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])(?=\\S+$).{8,}$';
  
  registerForm = new FormGroup({
    fullName: new FormControl("", [Validators.required, Validators.minLength(2)]),
    email: new FormControl("", [Validators.required, Validators.pattern(this.emailRegex)]),
    password: new FormControl("", [Validators.required, Validators.pattern(this.passwordRegex)]),
  });
  getControl(name: any) : AbstractControl | null{
    return this.registerForm.get(name)
  }
  registerFunction() {
    if (this.registerForm.valid) {
      alert("Registration Successful");
      console.log("Successful Register");
      console.log(this.registerForm.value);
    } else {
      alert("Please fill in all required fields correctly.");
    }
  }
}
