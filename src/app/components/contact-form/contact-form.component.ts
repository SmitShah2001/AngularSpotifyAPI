import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule,FormsModule , RouterLink, RouterLinkActive],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  form = {
    name : '',
    email : '',
    phonenumber : '',
    message : ''
  }
  nameRegex = "^[A-Za-zÀ-ÿ][A-Za-zÀ-ÿ' -]*[A-Za-zÀ-ÿ]$"
  emailRegex = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
  phonenumberRegex = '^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$'
  messageRegex = "^.{1,500}$"
  submitContactForm(){
    alert("Your message has been sent successfully!\nName: " + this.form.name + "\nEmail: " + this.form.email + "\nPhone Number: " + this.form.phonenumber +  "\nMessage: " + this.form.message);
    console.log("Your message has been sent successfully!");
    console.log(this.form);
  }

}
