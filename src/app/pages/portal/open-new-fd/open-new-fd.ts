import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GlobalService } from '../../../shared/services/global.service';

@Component({
  selector: 'app-open-new-fd',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatCardModule, 
    MatFormFieldModule, MatInputModule, MatSelectModule, 
    MatButtonModule, MatIconModule
  ],
  templateUrl: './open-new-fd.html',
  styleUrls: ['./open-new-fd.css']
})
export class OpenNewFdComponent implements OnInit {
  fdForm!: FormGroup;
  currentInterestRate: number = 0;
  estimatedMaturity: number = 0;

  accounts:any = [];

  constructor(private fb: FormBuilder, private _globalService: GlobalService) {}

  ngOnInit() {
    this.fdForm = this.fb.group({
      fromAccount: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(10000)]],
      tenureMonths: ['', Validators.required]
    });

    // Listen to changes to calculate maturity amount dynamically
    this.fdForm.valueChanges.subscribe(values => {
      this.calculateMaturity(values.amount, values.tenureMonths);
    });
    this.getAllAccounts();
  }

  getAllAccounts() {
    let req = {
      userId: GlobalService.USER.id
    }
    this._globalService.postToServer('accounts/get-by-user-id',req).subscribe(res => {
      this.accounts = res;
    });
  }

  calculateMaturity(amount: number, months: number) {
    if (!amount || !months) return;

    // Set interest rate based on requirements document
    if (months === 12) this.currentInterestRate = 4.5;
    else if (months === 24) this.currentInterestRate = 5.0;
    else if (months === 36) this.currentInterestRate = 5.5;

    // Simple Interest calculation: A = P(1 + rt) 
    // where r is decimal rate, t is time in years
    const years = months / 12;
    this.estimatedMaturity = amount + (amount * (this.currentInterestRate / 100) * years);
  }

  onSubmit() {
    if (this.fdForm.invalid) {
      return;
    }
    
    let req = {
      fromAccountNumber: this.fdForm.get('fromAccount')?.value,
      principalAmount: this.fdForm.get('amount')?.value,
      tenureMonths: this.fdForm.get('tenureMonths')?.value
    }
    this._globalService.postToServer('fd/create',req).subscribe(res => {
      console.log(res);
    });
  }
}