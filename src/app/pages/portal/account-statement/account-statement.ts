import { CommonModule, DecimalPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.html',
  styleUrl: './account-statement.css',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    DecimalPipe,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule
  ],
})
export class AccountStatement {
  statementForm!: FormGroup;
  accounts:any = [];
  transactions: any = [
    {
      transactionDate: '12/10/2015',
      description: 'qwerty',
      type: 'CREDIT'
    }
  ];

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this.statementForm = this._fb.group({
      accountNumber: [''],
      statementType: [''],
      startDate: [''],
      endDate: [''],
    });
  }

  generateStatement() {}
}
