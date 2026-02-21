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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-deposit-cheque',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule, 
    MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, 
    MatDatepickerModule, MatNativeDateModule
  ],
  templateUrl: './deposit-cheque.html',
  styleUrls: ['./deposit-cheque.css']
})
export class DepositChequeComponent implements OnInit {
  chequeForm!: FormGroup;

  // Mock accounts
  accounts = [
    { accountNumber: '1930000014', accountType: 'SAVINGS' },
    { accountNumber: '1930000015', accountType: 'CURRENT' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.chequeForm = this.fb.group({
      depositAccount: ['', Validators.required],
      chequeNumber: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      chequeDate: ['', Validators.required],
      issuingBank: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.chequeForm.valid) {
      console.log('Cheque Slip Payload:', this.chequeForm.value);
      // Logic to save the slip to the backend with status 'Not Received'[cite: 66].
      // Then open a print dialog or navigate to a printable slip view.
      alert('Slip generated! In a real app, this would trigger a print dialog.');
    }
  }
}