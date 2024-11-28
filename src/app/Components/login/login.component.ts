import { Component } from '@angular/core';
import { FormControl,  FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form=new FormGroup({
    email:new FormControl('',{validators:[Validators.email,Validators.required]}),
    password:new FormControl('',{validators:[Validators.required,Validators.minLength(4)]}),
    role:new FormControl('',{validators:[Validators.required]}),
  })

  get invalidEmail(){
    return (this.form.controls.email.touched && this.form.controls.email.dirty && this.form.controls.email.invalid);
  }

  get invalidPassword(){
    return (this.form.controls.password.touched && this.form.controls.password.dirty && this.form.controls.password.invalid);

  }

  onSubmit(){
    if(this.form.valid){
      const userEmail = this.form.value.email;
      localStorage.setItem('loggedInUserEmail',JSON.stringify(userEmail));
    }
    else{
      console.log('Invalid form details');
    }
  }
}
