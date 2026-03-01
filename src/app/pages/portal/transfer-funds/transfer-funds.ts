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
import { GlobalService } from '../../../shared/services/global.service';

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
  accounts:any = [];

  constructor(private fb: FormBuilder, private _globalService: GlobalService) {}

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

  onSelfTransferSubmit() {
    if (this.selfTransferForm.valid) {
      console.log('Processing Self Transfer...', this.selfTransferForm.value);
      // Call your TransactionService here
    }
  }

  onOtherTransferSubmit() {
    if (this.otherTransferForm.invalid) {
      return;
    }
    let req = {
      userId: GlobalService.USER.id,
      fromAccountNumber: this.otherTransferForm.get('fromAccount')?.value,
      toAccountNumber: this.otherTransferForm.get('targetAccountNumber')?.value,
      amount: this.otherTransferForm.get('amount')?.value,
      remarks: this.otherTransferForm.get('remarks')?.value,
    }
    this._globalService.postToServer('transaction/fund-transfer',req).subscribe(res => {
      console.log(res);
    });
  }
}