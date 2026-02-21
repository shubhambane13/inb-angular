import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs'; // <--- Crucial for the Tabs!
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-transfer-funds',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './transfer-funds.html',
  styleUrls: ['./transfer-funds.scss']
})
export class TransferFundsComponent implements OnInit {
  
  selfTransferForm!: FormGroup;
  otherTransferForm!: FormGroup;
  
  // Example data (you will fetch this from your service)
  accounts = [
    { accountNumber: '1930000014', accountType: 'SAVINGS', balance: 50000 },
    { accountNumber: '1930000015', accountType: 'CURRENT', balance: 15000 }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.selfTransferForm = this.fb.group({
      fromAccount: ['', Validators.required],
      toAccount: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
      remarks: ['']
    });

    this.otherTransferForm = this.fb.group({
      fromAccount: ['', Validators.required],
      targetAccountNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      amount: ['', [Validators.required, Validators.min(1)]],
      remarks: ['', Validators.required]
    });
  }

  onSelfTransferSubmit() {
    if (this.selfTransferForm.valid) {
      console.log('Processing Self Transfer...', this.selfTransferForm.value);
      // Call your TransactionService here
    }
  }

  onOtherTransferSubmit() {
    if (this.otherTransferForm.valid) {
      console.log('Processing Other Transfer...', this.otherTransferForm.value);
      // Call your TransactionService here
    }
  }
}