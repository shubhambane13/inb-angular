import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../../shared/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  hidePassword = true; // For toggling password visibility

  constructor(private fb: FormBuilder, private router: Router, private _globalService: GlobalService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
      this._globalService.postToServer("auth/login-customer", this.loginForm.getRawValue()).subscribe((res:any) => {
        if(res.success) {
          GlobalService.AUTH_TOKEN = res.jwtToken;
          GlobalService.USER = res.user;
          this.router.navigate(['/portal']);
        }
      });
    }
  }
}