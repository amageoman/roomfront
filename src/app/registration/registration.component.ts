import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {



  constructor(private ds: DataService, private route: Router, private fb: FormBuilder) {

  }


  registrationForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z@.]+')]],
    username: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    psw: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  })

  register() {

    var email=this.registrationForm.value.email;
    var username=this.registrationForm.value.username;
    var password=this.registrationForm.value.psw;


    if (this.registrationForm.valid) {




      this.ds.register(email, username, password).subscribe((result: any) => {

        alert(result.message)
        this.route.navigateByUrl('login')

      }, result => {
        alert(result.error.message)
        this.route.navigateByUrl('login')
      })


    }

    else{
      alert('Invalid form')
    }
  }
}