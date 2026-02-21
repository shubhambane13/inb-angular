import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Material Imports
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-track-cheque-status',
  standalone: true,
  imports: [
    CommonModule, RouterModule, MatCardModule, 
    MatTableModule, MatButtonModule, MatIconModule
  ],
  templateUrl: './track-cheque-status.html',
  styleUrls: ['./track-cheque-status.css']
})
export class TrackChequeStatusComponent implements OnInit {
  
  displayedColumns: string[] = ['dateSubmitted', 'chequeInfo', 'depositAccount', 'amount', 'status'];
  
  // Mock Data covering all required statuses
  cheques = [
    {
      id: 1,
      dateSubmitted: new Date(new Date().getTime() - (1 * 24 * 60 * 60 * 1000)), // 1 day ago
      chequeNumber: '458921',
      issuingBank: 'SBI',
      depositAccount: '1930000014',
      amount: 25000.00,
      status: 'NOT_RECEIVED' // By default, the status of cheques will be 'Not received'[cite: 66].
    },
    {
      id: 2,
      dateSubmitted: new Date(new Date().getTime() - (4 * 24 * 60 * 60 * 1000)), // 4 days ago
      chequeNumber: '112093',
      issuingBank: 'ICICI',
      depositAccount: '1930000015',
      amount: 12000.50,
      status: 'SENT_FOR_CLEARANCE' // Once received & sent for clearance[cite: 67].
    },
    {
      id: 3,
      dateSubmitted: new Date(new Date().getTime() - (8 * 24 * 60 * 60 * 1000)), // 8 days ago
      chequeNumber: '784432',
      issuingBank: 'HDFC',
      depositAccount: '1930000014',
      amount: 50000.00,
      status: 'CLEARED' // Cheques are usually cleared in 3 working days[cite: 68].
    },
    {
      id: 4,
      dateSubmitted: new Date(new Date().getTime() - (10 * 24 * 60 * 60 * 1000)), // 10 days ago
      chequeNumber: '990021',
      issuingBank: 'Axis Bank',
      depositAccount: '1930000015',
      amount: 8500.00,
      status: 'BOUNCED' // If a cheque bounces[cite: 70].
    }
  ];

  ngOnInit(): void {
    // Fetch cheque data from backend
  }
}