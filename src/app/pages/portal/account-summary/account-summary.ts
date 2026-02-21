import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule, DecimalPipe, TitleCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.html',
  styleUrl: './account-summary.css',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    DecimalPipe,
    TitleCasePipe,
    MatButtonModule,
  ],
})
export class AccountSummary {
  accounts = [
    {
      accountType: 'SAVINGS',
      accountNumber: '98765678',
      balance: 23.2,
    },
  ];
}
