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
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-pay-bill',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, 
    MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, 
    MatRadioModule, MatDatepickerModule, MatNativeDateModule
  ],
  templateUrl: './pay-bill.html',
  styleUrls: ['./pay-bill.css']
})
export class PayBillComponent implements OnInit {
  payBillForm!: FormGroup;
  minDate = new Date(); // Prevents scheduling in the past

  // Mock accounts
  accounts = [
    { accountNumber: '1930000014', accountType: 'SAVINGS', balance: 50000 },
    { accountNumber: '1930000015', accountType: 'CURRENT', balance: 15000 }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.payBillForm = this.fb.group({
      fromAccount: ['', Validators.required],
      billerCategory: ['', Validators.required],
      billerName: ['', Validators.required],
      consumerNumber: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      paymentTiming: ['IMMEDIATE', Validators.required],
      scheduledDate: [''] 
    });

    // Dynamically require Date if "SCHEDULED" is selected
    this.payBillForm.get('paymentTiming')?.valueChanges.subscribe(value => {
      const dateControl = this.payBillForm.get('scheduledDate');
      if (value === 'SCHEDULED') {
        dateControl?.setValidators([Validators.required]);
      } else {
        dateControl?.clearValidators();
        dateControl?.setValue('');
      }
      dateControl?.updateValueAndValidity();
    });
  }

  onSubmit() {
    if (this.payBillForm.valid) {
      console.log('Bill Payment Payload:', this.payBillForm.value);
      // Send to Backend Service
    }
  }
}