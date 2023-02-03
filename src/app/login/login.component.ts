import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private ds: DataService, private route: Router, private fb: FormBuilder) { }


  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9@.]+')]],

    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  login() {

    if (this.loginForm.valid) {

      var email = this.loginForm.value.email;
      var password = this.loginForm.value.psw;
      this.ds.login(email, password).subscribe((result: any) => {

        alert(result.message)


        localStorage.setItem('user', JSON.stringify(result.user))
       
        localStorage.setItem('username',JSON.stringify(result.username))
        
        this.route.navigateByUrl('room')
      },
        result => {

          alert(result.error.message)
          
          


        })

        
      }

else{

  alert('invalid form')
}



  }
}