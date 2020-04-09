import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup
  route: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private auth: AuthService) {
    this.getForm()
  }

  ngOnInit() {
  }

  getForm() {
    this.LoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onlogin() {
    if (this.LoginForm.valid) {
      console.log(this.LoginForm.value);
      let token = this.LoginForm.controls['username'].value
      this.auth.sendToken(token);
      let token1 = this.LoginForm.controls['password'].value
      this.auth.sendToken1(token1);
      // this.router.navigate(['dashboard'])
      //  window.location.url('/login');
      // this.route.navigate('/login');
      this.router.navigate(['/dashbord']);
    }
    else {
      alert('Please fill all required details')
    }
  }

  onlogout() {
    this.auth.logout();

    this.router.navigate(['login'])

  }
}

