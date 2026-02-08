import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { GlobalService } from '../../shared/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(
    private fb: FormBuilder,
    private _globalService: GlobalService,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Basic 10-digit check
        address: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator },
    );
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(
    control: AbstractControl,
  ): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      return { passwordMismatch: true };
    }
    return null;
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      // Don't send confirmPassword to backend
      const { confirmPassword, ...registerData } = this.registerForm.value;
      console.log('Register Data:', registerData);
      // TODO: Call AuthService to register

      this._globalService
        .postToServer('auth/register-admin', registerData)
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
